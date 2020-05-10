// Check off specific To-Dos by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

//click on "X" to delete
$("ul").on("click","span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(){
	//Enter key == 13 (key code)
	if(event.which === 13){
		//add new todo element
		var todo_element = $(this).val();
		$(this).val("");
		//create a new entry into list
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" +todo_element +"</li>");
	}
});

$(".fa-pen-square").click(function(){
	$("input[type='text']").fadeToggle()
});