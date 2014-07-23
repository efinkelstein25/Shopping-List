$(document).ready(function(){

/*press enter button*/
$(document).keydown(function(){
		if(event.keyCode == 13)
		{
			addToList();
			$('#listitem').val("");
		}

});

/*click to delete item*/
	$(document).on('click', '.delete', function(){
		$(this).parent().remove();
	});

	/*crosses off if not crossed off, uncrosses if crossed off*/
	$(document).on('click', '.check', function(){
		$(this).parent().toggleClass('done');

		/*var check = $(this);*/

		if ($(this).text("")){
			$(this).text("X").addClass(".checked");
			if ($(this).hasClass("checked")){
				$(this).text("");
				$(this).removeClass("checked");
			}
		}
		/*else{
			$(check).text("");
		}*/
	});

	/*click clear button*/
	$(document).on('click', '.clear', function(){
		clearDone();
	});


});
/*end of document ready*/


/*adding value to list from textbox*/
function addToList(){
	/*saving value in textbox to variable*/
	var item = $('#listitem').val();
	$('.shopping').append("<li class=need> <button class = check name = check> </button>"+item+"<button class = delete name = delete> X </button></li>");
	/*$('.shopping').append("<li class=need> <div class = check> </div>"+item+"<button class = delete name = delete> X </button></li>");*/
}

/*clears any crossed off list items*/
function clearDone(){
	$('.shopping').find('.done').remove();
}
