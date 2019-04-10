$(document).ready(function(){
	$("i.am-locations:contains(\"2019\")").addClass("timepiece");
});

// $("body").append("<script src='https://www.ualibrary.org/assets/communicojs/replace_icon_bookingsummary.js' type='text/javascript'><\/script>");

$(function(){("#body").append("<script>$(function(){('i.am-locations:contains('2019')').addClass('timepiece');});</script>");});