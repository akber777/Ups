$(document).ready(function(){



	function resize(){

		var footer_height=$('footer').height(),

		header_height=$('header').height(),
		plus_height=footer_height + header_height,
		window_height=$(window).height(),
		body_height=$('body').height(),
		new_height= window_height - plus_height;


		if($('main').height() < window_height)
		{
			$('main').css({

				'min-height':new_height

			})
		}


		// console.log(window_height)


		// console.log(body_height)








}

resize()























})