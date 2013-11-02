var getCeva = function() {
	var max = 0;
	var my_img;
	$('img').each(function(index, element) { 
    		if(element.width * element.height > max)
        	my_img = element;
    	});
	var data = new Object();
	data.title = $('body').find('h1:first');
	data.imgSrc = $(my_img).attr("src");
	data.url = window.location.href;
	return data;
}

$.ajax({
	method: 'get',
	url: "http://webdev-2013.heroku.com/bucket/WS-18/add",
	dataType: 'jsonp',
	data: { 
	   data: getCeva()
	   }

});


//+++++++++++++++++++++++++++++++++++++++++++++++
var getCeva = function() {
	var max = 0;
	var my_img;
	$('img').each(function(index, element) { 
    		if(element.width * element.height > max)
        	my_img = element;
    	});
	var obj = {
	"title":$('body').find('h1:first'),
	"imgSrc":$(my_img).attr("src"),
	"loc":window.location.href
	};
	return obj;
}
$.ajax({
	method: 'get',
	url: "http://webdev-2013.heroku.com/bucket/:18/add",
	dataType: 'jsonp',
	data: {data: getCeva()}

});

