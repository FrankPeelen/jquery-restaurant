$(document).ready(function() {
	var home = "ここは超美味そうだと思わない？！\
							<br><br>\
							<img src='http://www.hlg.co.nz/bits/stock/house-home.jpg'>";

	var access = "東京都新宿区神楽坂\
								残りを忘れちゃった。。。\
								<br><br>\
								<img src='http://www.incas.rwth-aachen.de/newsite/templates/design2014/custom/images/footer/address_black.png'>";

	var english = "In a galaxy far far away...\
								 <br><br>\
								 <iframe width='560' height='315' src='https://www.youtube.com/embed/ngElkyQ6Rhs' frameborder='0' allowfullscreen></iframe>"

	var display = function(content) {
		$('#content').empty();
		$('#content').append(content);
	};

	display(home);

	$("button").on('click', function() {
		display(eval(this.name));
	});
});
