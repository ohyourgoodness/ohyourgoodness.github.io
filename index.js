$( document ).ready(function() {
	
	
	setInterval(function() {
		 var curSrc= $("#profilePic").attr("src");
		 if(curSrc === "image/profilePic1.jpg"){
			 
			$("#profilePic").fadeOut(400, function() {
				$("#profilePic").attr('src',"image/profilePic2.jpg");
			}).fadeIn(400);
		 }else if(curSrc === "image/profilePic2.jpg"){
			$("#profilePic").fadeOut(400, function() {
				$("#profilePic").attr('src',"image/profilePic1.jpg");
			}).fadeIn(400);
		 }else{
			 $("#profilePic").attr("src", "image/profilePic1.jpg");
		 }
		 
		  
	}, 5000);
	
	
	
	setInterval(function() {
		 var curSrc= $("#profilePic-ch").attr("src");
		 if(curSrc === "image/profilePic1.jpg"){
			 
			$("#profilePic-ch").fadeOut(400, function() {
				$("#profilePic-ch").attr('src',"image/profilePic2.jpg");
			}).fadeIn(400);
		 }else if(curSrc === "image/profilePic2.jpg"){
			$("#profilePic-ch").fadeOut(400, function() {
				$("#profilePic-ch").attr('src',"image/profilePic1.jpg");
			}).fadeIn(400);
		 }else{
			 $("#profilePic-ch").attr("src", "image/profilePic1.jpg");
		 }
		 
		  
	}, 5000);
	
	
	
	
	$( "#nav-language" ).click(function() {
		
		$( "#chinese-container" ).toggle();
		$( "#english-container" ).toggle();
		
		if($('#chinese-container').is(':visible')) {
			$( "#nav-music" ).html("音乐");
			$( "#nav-acting" ).html("演戏");
			$( "#nav-modeling" ).html("模特");
			$( "#nav-language" ).html("English");
			
			$("#nav-music").attr("href", "#musicSection-ch");
			$("#nav-acting").attr("href", "#actingSection-ch");
		}else{
			$( "#nav-music" ).html("Music");
			$( "#nav-acting" ).html("Acting");
			$( "#nav-modeling" ).html("Modeling");
			$( "#nav-language" ).html("中文");
			
			$("#nav-music").attr("href", "#musicSection");
			$("#nav-acting").attr("href", "#actingSection");
		}
		 
	});


	//resize the logo size to fit the navibar, the original logo size must be set smaller than the default navibar size.
	var navbar = document.getElementById('container-fluid');
	var navibarH = $('#container-fluid').outerHeight(true);
	
	var a4 = document.getElementById("logo").style.width;
	
    document.getElementById("logo").style.height = (navibarH).toString() + "px";
	document.getElementById("logo").style.width = (navibarH).toString() + "px";
	document.getElementById("logo").style.left = (0).toString() + "px";
	
	//reposition the "name and introduction" section.
	//var profilePic1Div = document.getElementById('profilePic1Div');
	//var profilePic1DivH = $('#profilePic1Div').outerHeight(true);
	//var profilePic1DivW = $('#profilePic1Div').outerWidth(true);
	//document.getElementById("nameDiv").style.left = (profilePic1DivW * 0.25).toString() + "px";
	//document.getElementById("nameDiv").style.top = (profilePic1DivH * 0.3 ).toString() + "px";
	
	//change the video size
	var videoRow1Col1DivW = $('#videoRow1Col1').outerWidth(true);
	//document.getElementById("video-panda").style.height = (videoRow1Col1DivW * 0.6 * 0.8).toString() + "px";
	document.getElementById("video-panda").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	document.getElementById("video-xiangqin").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	document.getElementById("video-lilian").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	document.getElementById("video-royal").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	document.getElementById("video-tremble").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	document.getElementById("video-playlist").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));	
	
	document.getElementById("video-mv").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	document.getElementById("video-zuichibi").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	

	document.getElementById("video-panda-ch").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	document.getElementById("video-xiangqin-ch").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));

	
	document.getElementById("video-mv-ch").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	document.getElementById("video-zuichibi-ch").style.setProperty('--video-screen-height', ((videoRow1Col1DivW * 0.6 * 0.8).toString() + "px"));
	

	
	$("#ins").click(function(){
		console.log("Open ins");
		var win = window.open('https://www.instagram.com/liliwish/', '_blank');
		win.focus();
	});
	
	$("#ins").mouseover(function(){
		this.style.cursor = 'pointer'
	});
	
	$("#weibo").click(function(){
		console.log("Open weibo");
		var win = window.open('https://www.instagram.com/liliwish/', '_blank');
		win.focus();
	});
	
	$("#weibo").mouseover(function(){
		this.style.cursor = 'pointer'
	});
	
	
	
	
	
	
	

	
});

