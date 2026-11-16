var STORAGE_KEY = "todos";

// Read and write the list in localStorage. Storage can be unavailable
// (private windows, blocked cookies), so the page still works without it.
function loadTodos(){
	try {
		var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
		return Array.isArray(saved) ? saved : null;
	} catch {
		return null;
	}
}

function saveTodos(){
	var todos = $("ul li").map(function(){
		return { text: $(this).text().trim(), done: $(this).hasClass("completed") };
	}).get();
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
	} catch {
		// Ignore: the list just won't survive a reload.
	}
}

function addTodo(text, done){
	// Build the item with a text node so typed HTML is shown as text, not rendered
	var trash = $("<span>").append($("<i>").addClass("fas fa-trash-alt"));
	$("<li>")
		.append(trash)
		.append(document.createTextNode(" " + text))
		.toggleClass("completed", !!done)
		.appendTo("ul");
}

// On first visit keep the sample items from the HTML; afterwards show the saved list.
var saved = loadTodos();
if(saved){
	$("ul").empty();
	saved.forEach(function(todo){
		addTodo(todo.text, todo.done);
	});
}

// Check off specific To-Dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
	saveTodos();
});

// Click on the trash icon to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
		saveTodos();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keydown", function(event){
	if(event.key !== "Enter"){
		return;
	}
	var todoText = $(this).val().trim();
	$(this).val("");
	if(todoText === ""){
		return;
	}
	addTodo(todoText, false);
	saveTodos();
});

$(".fa-pen-square").click(function(){
	$("input[type='text']").fadeToggle();
});
