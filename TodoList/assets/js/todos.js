// Check off specific To-Dos by clicking
$("li").click(function(){
	$(this).toggleClass("completed");
});

//click on "X" to delete
$("span").click(function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});