//when clicked on todo
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


//click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
	});
	event.stopPropagation();	
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//new todo text from input
		var newText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newText + "</li>")
	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});