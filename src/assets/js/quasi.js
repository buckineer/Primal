/*!
 * quasiMockup
 * :)
 * https://quasiDigi.net
 * @author quasiDigi
 */

(function ($, window, document, undefined) {

	'use strict';


		$(document).ready(function() {
		    var _pScroll = new PerfectScrollbar('#inner-content');
		    if($('.ps__rail-y').height() > 10){
				$('#content').addClass('scroller');
		    }

		});

})(jQuery, window, document);


/* Hi Muramoto
 	Some notes on how to use the costum scroll (if you will use that one, of course)


	If the size of your container or content changes, call update.

		_pScroll.update();

	If you want to destroy the scrollbar, use destroy.

		_pScroll.destroy();
		_pScroll = null; // to make sure garbages are collected


	more info at:
		https://github.com/utatti/perfect-scrollbar

	have a nice day

	quasi

*/