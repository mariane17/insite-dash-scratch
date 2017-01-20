/*eslint-env jquery, browser*/
$(document).ready(function(){
	$("a.mobile").click(function(){
		$(".sidebar").slideToggle('fast');
	})
});