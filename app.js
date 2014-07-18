$(document).ready(function(){

/*press enter button*/
$(document).keydown(function(){
		if(event.keyCode == 13)
		{
			addToList();
		}

});

/*click to delete item*/
$('.delete').click(function(){
	$(this).parent().remove();
});

/*crosses off if not crossed off, uncrosses if crossed off*/
$('.check').click(function(){
	$(this).parent().toggleClass("done");

});

/*click clear button*/
$('.clear').click(function(){
	clearDone();
});

});

/*adding value to list from textbox*/
function addToList(){
	/*saving value in textbox to variable*/
	var item = $('#listitem').val();
	$('.shopping').append("<li class=need> <button class = check name = check> Y </button>"+item+"<button class = delete name = delete> X </button></li>");
}

/*clears any crossed off list items*/
function clearDone(){
	$('.shopping').find('.done').remove();
}
