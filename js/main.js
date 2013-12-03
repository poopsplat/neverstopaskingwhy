
var Main = (function ($) {
	return {
		askWhy: function () {
			function generate() {
				var numRand = Math.floor(Math.random() * 501);
				var whyWidth = $('.why').width();
				var whyHeight = $('.why').height();
        var posx = (Math.random() * ($(document).width() - whyWidth)).toFixed();
        var posy = (Math.random() * ($(document).height() - whyHeight)).toFixed();
        $why = $('<span class="why">why?</span>').css({
            'left': posx + 'px',
            'top': posy + 'px'
        });

				$('body').append($why);

			}

				$('.ask-why').on('click', function() {
					generate();
				})
		},
		initMain: function () {
			$(document).ready(function () {
				Main.askWhy();
			})
		}
	};
// Pass in jQuery.
})(jQuery);

Main.initMain();