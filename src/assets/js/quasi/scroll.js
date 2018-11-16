export function run_scroll(elem_id="#inner-content",content_id="#content"){
	var _pScroll = new PerfectScrollbar(elem_id);
	console.log("123123123123123r");
	if($('.ps__rail-y').height() > 10){
		console.log("add scroler");
		$(content_id).addClass('scroller');
	}
}
