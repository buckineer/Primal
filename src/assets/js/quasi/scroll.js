export function run_scroll(){
	var _pScroll = new PerfectScrollbar('#inner-content');
	if($('.ps__rail-y').height() > 10){
		$('#content').addClass('scroller');
	}
}
