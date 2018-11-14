export function run_scroll(elem_id="#inner-content",content_id="#content"){
	var _pScroll = new PerfectScrollbar(elem_id);
	if($('.ps__rail-y').height() > 10){
		$(content_id).addClass('scroller');
	}
}


