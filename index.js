$( document ).ready(function() {
	
	
	setInterval(function() {
		 var curSrc= $("#profilePic").attr("src");
		 if(curSrc === "http://www.liliwish.com/image/profilePic1.JPG"){
			 
			$("#profilePic").fadeOut(400, function() {
				$("#profilePic").attr('src',"http://www.liliwish.com/image/profilePic2.JPG");
			}).fadeIn(400);
		 }else if(curSrc === "http://www.liliwish.com/image/profilePic2.JPG"){
			$("#profilePic").fadeOut(400, function() {
				$("#profilePic").attr('src',"http://www.liliwish.com/image/profilePic1.JPG");
			}).fadeIn(400);
		 }else{
			 $("#profilePic").attr("src", "http://www.liliwish.com/image/profilePic1.JPG");
		 }
		 
		  
	}, 5000);
	
	
	
	setInterval(function() {
		 var curSrc= $("#profilePic-ch").attr("src");
		 if(curSrc === "image/profilePic1.JPG"){
			 
			$("#profilePic-ch").fadeOut(400, function() {
				$("#profilePic-ch").attr('src',"image/profilePic2.JPG");
			}).fadeIn(400);
		 }else if(curSrc === "image/profilePic2.JPG"){
			$("#profilePic-ch").fadeOut(400, function() {
				$("#profilePic-ch").attr('src',"image/profilePic1.JPG");
			}).fadeIn(400);
		 }else{
			 $("#profilePic-ch").attr("src", "image/profilePic1.JPG");
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
			
			var youtube = document.querySelectorAll( ".youtube" );
			for (var i = 0; i < youtube.length; i++) {
				if(youtube[i].firstChild.localName === "iframe"){
					$( "#" + youtube[i].id+"-iframe" )[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
				}
			}
			
			
			
		}else{
			$( "#nav-music" ).html("Music");
			$( "#nav-acting" ).html("Acting");
			$( "#nav-modeling" ).html("Modeling");
			$( "#nav-language" ).html("中文");
			
			$("#nav-music").attr("href", "#musicSection");
			$("#nav-acting").attr("href", "#actingSection");
			
			
			
			
		/*	
		
		
						$("#video-panda-ch-youku").attr('src',''); 
			$('#video-panda-ch-playbutton').show();
		    $('#video-panda-ch-thumbnail').show();
		    $('#video-panda-ch').show();
            $("#video-panda-ch-youku").hide();
			
			
						$("#video-xiangqin-ch-youku").attr('src',''); 
			$('#video-xiangqin-ch-playbutton').show();
		    $('#video-xiangqin-ch-thumbnail').show();
		    $('#video-xiangqin-ch').show();
            $("#video-xiangqin-ch-youku").hide();


			
*/


		
			var youku = document.querySelectorAll( ".youku" );
	
			for (var i = 0; i < youku.length; i++) {
					
				console.log("youku[i].id = " + youku[i].id);
					
				$('#' + youku[i].id + '-youku').attr('src',''); 
				$('#' + youku[i].id + '-playbutton').show();
				$('#' + youku[i].id + '-thumbnail').show();
				$('#' + youku[i].id ).show();
				$('#' + youku[i].id + '-youku').hide();

			}
			

			
	
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
	/*
	var videoRow1Col1DivW = $('#videoRow1Col1').outerWidth(true);
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
	*/
	
	
	


	
	//$('#video-panda-ch-thumbnail').width(gridWidth);
	//$('#video-panda-ch-thumbnail').height(gridWidth/1.77);
	//$('#video-panda-ch-thumbnail').css({'width' : videoRow1Col1DivW.toString() + 'px' , 'height' : (videoRow1Col1DivW/1.77).toString() + 'px'});
	//$('#video-xiangqin-ch-thumbnail').css({'width' : videoRow1Col1DivW.toString() + 'px' , 'height' : (videoRow1Col1DivW/1.77).toString() + 'px'});
	
	
	var gridWidth = $('#gridWidth').outerWidth(true);
	
	console.log("gridWidth = " + gridWidth);
	
	var gridWidthChNew = gridWidth * 0.9;
	
	var youku = document.querySelectorAll( ".youku" );
	
	for (var i = 0; i < youku.length; i++) {	
		document.getElementById(youku[i].id).style.setProperty('--iframe-width', ((gridWidthChNew).toString() + "px"));
		document.getElementById(youku[i].id).style.setProperty('--iframe-height', ((gridWidthChNew / 1.77).toString() + "px"));

		document.getElementById(youku[i].id + "-youku").style.setProperty('--iframe-width', ((gridWidthChNew).toString() + "px"));
		document.getElementById(youku[i].id + "-youku").style.setProperty('--iframe-height', ((gridWidthChNew / 1.77).toString() + "px"));
	}
			
			



	
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
	
	
	
	
	var youtube = document.querySelectorAll( ".youtube" );
	for (var i = 0; i < youtube.length; i++) {
 
		// thumbnail image source.
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg"; 
 
 
        var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        }( i ) );
		
		
		 youtube[i].addEventListener( "click", function() {
 
        var iframe = document.createElement( "iframe" );
 
            var a = youtube[i];
            iframe.setAttribute( "id", this.id + "-iframe" );
            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
			iframe.setAttribute( "allowscriptaccess", "always" );
           // iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
		   iframe.setAttribute( "src", "http://www.youtube.com/embed/"+ this.dataset.embed +"?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1" );
			

            this.innerHTML = "";
            this.appendChild(iframe);
		} );
	
	}
	
	
	
	

	
	
	
	for (var i = 0; i < youku.length; i++) {

		youku[i].addEventListener( "click", function() {
			$('#' + this.id + '-playbutton').hide();
			$('#' + this.id + '-thumbnail').hide();
		    $('#' + this.id).hide();
		   
		    $('#' + this.id + '-youku').attr('src',$('#' + this.id + '-thumbnail').attr('data-video'));  
		    $('#' + this.id + '-youku').show();
       
		} );
	
	}
	
	/*
	 $('#video-panda-ch-playbutton').click(function(){
		   $('#video-panda-ch-playbutton').hide();
		   $('#video-panda-ch-thumbnail').hide();
		   $('#video-panda-ch').hide();
		   
		   $("#video-panda-ch-youku").attr('src',$('#video-panda-ch-thumbnail').attr('data-video'));  
		   $("#video-panda-ch-youku").show();
		  
	 });
	 
	 
	 			setInterval(function() {
					  
					 $('#video-panda-youku-ch').click(); 
					 var position = $('#video-panda-youku-ch').offset();
					 document.elementFromPoint((position.left + 50).toString() + "px", (position.top + 50).toString() + "px").click();
					  
				}, 5000);

 */

	
	
	/*	
	var youku = document.querySelectorAll( ".youku" );
	for (var i = 0; i < youku.length; i++) {
 
		// thumbnail image source.http://events.youku.com/global/api/video-thumb.php?vid=XNDk5OTE4MTAw
		var source = "http://events.youku.com/global/api/video-thumb.php?vid="+ youku[i].dataset.embed; 
 
 
        var image = new Image();
        image.src = source;
        image.addEventListener( "load", function() {
            youku[ i ].appendChild( image );
        }( i ) );
		
		
		 youku[i].addEventListener( "click", function() {
 
        var iframe = document.createElement( "iframe" );
 
            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", "http://player.youku.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
 
            this.innerHTML = "";
            this.appendChild( iframe );
		} );
	
	}

	
	*/
	
	
	
	
	
	

	
});

