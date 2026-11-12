// Check off specific To-Dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on the trash icon to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
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
	// Build the item with .text() so typed HTML is shown as text, not rendered
	var trash = $("<span>").append($("<i>").addClass("fas fa-trash-alt"));
	$("<li>").append(trash).append(document.createTextNode(" " + todoText)).appendTo("ul");
});

$(".fa-pen-square").click(function(){
	$("input[type='text']").fadeToggle();
});
