$(document).ready(function(){var m=this;function n(){$("#chinese-container").toggle();$("#english-container").toggle();if($("#chinese-container").is(":visible")){$("#nav-me").html("我");$("#nav-music").html("音乐");$("#nav-acting").html("演戏");$("#nav-modeling").html("模特");$("#nav-contact").html("联系我");$("#nav-language").html("English");$("#nav-me").attr("href","#meSection-ch");$("#nav-music").attr("href","#musicSection-ch");$("#nav-acting").attr("href","#actingSection-ch");$("#nav-contact").attr("href","#contactSection-ch");var p=document.querySelectorAll(".youtube");for(var o=0;o<p.length;o++){if(p[o].firstChild.localName==="iframe"){$("#"+p[o].id+"-iframe")[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")}}}else{$("#nav-me").html("About Me");$("#nav-music").html("Music");$("#nav-acting").html("Acting");$("#nav-modeling").html("Modeling");$("#nav-contact").html("Contact");$("#nav-language").html("中文");$("#nav-me").attr("href","#meSection");$("#nav-music").attr("href","#musicSection");$("#nav-acting").attr("href","#actingSection");$("#nav-contact").attr("href","#contactSection");var q=document.querySelectorAll(".youku");for(var o=0;o<q.length;o++){$("#"+q[o].id+"-youku").attr("src","");$("#"+q[o].id+"-playbutton").show();$("#"+q[o].id+"-thumbnail").show();$("#"+q[o].id).show();$("#"+q[o].id+"-youku").hide()}}}$(".navbar-nav li a").click(function(o){document.getElementById("wangyiMusicListDiv").innerHTML="";document.getElementById("wangyiMusicListDiv").innerHTML='<iframe id = "wangyiMusicList" frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=450 src="//music.163.com/outchain/player?type=1&id=35737218&auto=0&height=430"></iframe>';var i=$(".navbar-toggle").is(":visible");if(i){$(".navbar-collapse").collapse("hide")}});setInterval(function(){var i=$("#profilePic").attr("src");if(i==="http://www.liliwish.com/image/profilePic1.JPG"){$("#profilePic").fadeOut(400,function(){$("#profilePic").attr("src","http://www.liliwish.com/image/profilePic2.JPG")}).fadeIn(400)}else{if(i==="http://www.liliwish.com/image/profilePic2.JPG"){$("#profilePic").fadeOut(400,function(){$("#profilePic").attr("src","http://www.liliwish.com/image/profilePic3.JPG")}).fadeIn(400)}else{if(i==="http://www.liliwish.com/image/profilePic3.JPG"){$("#profilePic").fadeOut(400,function(){$("#profilePic").attr("src","http://www.liliwish.com/image/profilePic4.JPG")}).fadeIn(400)}else{if(i==="http://www.liliwish.com/image/profilePic4.JPG"){$("#profilePic").fadeOut(400,function(){$("#profilePic").attr("src","http://www.liliwish.com/image/profilePic5.JPG")}).fadeIn(400)}else{if(i==="http://www.liliwish.com/image/profilePic5.JPG"){$("#profilePic").fadeOut(400,function(){$("#profilePic").attr("src","http://www.liliwish.com/image/profilePic6.JPG")}).fadeIn(400)}else{$("#profilePic").fadeOut(400,function(){$("#profilePic").attr("src","http://www.liliwish.com/image/profilePic1.JPG")}).fadeIn(400)}}}}}},5000);setInterval(function(){var i=$("#lifePic").attr("src");if(i==="http://www.liliwish.com/image/lifePic1.JPG"){$("#lifePic").fadeOut(400,function(){$("#lifePic").attr("src","http://www.liliwish.com/image/lifePic2.JPG")}).fadeIn(400)}else{if(i==="http://www.liliwish.com/image/lifePic2.JPG"){$("#lifePic").fadeOut(400,function(){$("#lifePic").attr("src","http://www.liliwish.com/image/lifePic3.JPG")}).fadeIn(400)}else{if(i==="http://www.liliwish.com/image/lifePic3.JPG"){$("#lifePic").fadeOut(400,function(){$("#lifePic").attr("src","http://www.liliwish.com/image/lifePic4.JPG")}).fadeIn(400)}else{if(i==="http://www.liliwish.com/image/lifePic4.JPG"){$("#lifePic").fadeOut(400,function(){$("#lifePic").attr("src","http://www.liliwish.com/image/lifePic5.JPG")}).fadeIn(400)}else{$("#lifePic").fadeOut(400,function(){$("#lifePic").attr("src","http://www.liliwish.com/image/lifePic1.JPG")}).fadeIn(400)}}}}},5000);setInterval(function(){var i=$("#profilePic-ch").attr("src");if(i==="image/profilePic1.JPG"){$("#profilePic-ch").fadeOut(400,function(){$("#profilePic-ch").attr("src","image/profilePic2.JPG")}).fadeIn(400)}else{if(i==="image/profilePic2.JPG"){$("#profilePic-ch").fadeOut(400,function(){$("#profilePic-ch").attr("src","image/profilePic1.JPG")}).fadeIn(400)}else{$("#profilePic-ch").attr("src","image/profilePic1.JPG")}}},5000);$("#nav-language").click(function(){n()});var d=document.getElementById("container-fluid");var h=$("#container-fluid").outerHeight(true);document.getElementById("logo").style.height=(h).toString()+"px";document.getElementById("logo").style.width=(h).toString()+"px";document.getElementById("logo").style.left=(0).toString()+"px";$("#ins").click(function(){var i=window.open("https://www.instagram.com/liliwish/","_blank");i.focus()});$("#ins").mouseover(function(){this.style.cursor="pointer"});$("#weibo").click(function(){var i=window.open("https://weibo.com/liliwish/","_blank");i.focus()});$("#weibo").mouseover(function(){this.style.cursor="pointer"});$("#youtube").click(function(){var i=window.open("https://youtu.be/ZKt5ch6Y9gE/","_blank");i.focus()});$("#youtube").mouseover(function(){this.style.cursor="pointer"});$("#wangyi").click(function(){var i=window.open("http://music.163.com/#/album?id=35737218","_blank");i.focus()});$("#wangyi").mouseover(function(){this.style.cursor="pointer"});$("#ins-ch").click(function(){var i=window.open("https://www.instagram.com/liliwish/","_blank");i.focus()});$("#ins-ch").mouseover(function(){this.style.cursor="pointer"});$("#weibo-ch").click(function(){var i=window.open("https://weibo.com/liliwish/","_blank");i.focus()});$("#weibo-ch").mouseover(function(){this.style.cursor="pointer"});$("#youtube-ch").click(function(){var i=window.open("https://youtu.be/ZKt5ch6Y9gE/","_blank");i.focus()});$("#youtube-ch").mouseover(function(){this.style.cursor="pointer"});$("#wangyi-ch").click(function(){var i=window.open("http://music.163.com/#/album?id=35737218","_blank");i.focus()});$("#wangyi-ch").mouseover(function(){this.style.cursor="pointer"});$("#ins2").click(function(){var i=window.open("https://www.instagram.com/liliwish/","_blank");i.focus()});$("#ins2").mouseover(function(){this.style.cursor="pointer"});$("#weibo2").click(function(){var i=window.open("https://weibo.com/liliwish/","_blank");i.focus()});$("#weibo2").mouseover(function(){this.style.cursor="pointer"});$("#youtube2").click(function(){var i=window.open("https://youtu.be/ZKt5ch6Y9gE/","_blank");i.focus()});$("#youtube2").mouseover(function(){this.style.cursor="pointer"});$("#wangyi2").click(function(){var i=window.open("http://music.163.com/#/album?id=35737218","_blank");i.focus()});$("#wangyi2").mouseover(function(){this.style.cursor="pointer"});$("#ins2-ch").click(function(){var i=window.open("https://www.instagram.com/liliwish/","_blank");i.focus()});$("#ins2-ch").mouseover(function(){this.style.cursor="pointer"});$("#weibo2-ch").click(function(){var i=window.open("https://weibo.com/liliwish/","_blank");i.focus()});$("#weibo2-ch").mouseover(function(){this.style.cursor="pointer"});$("#youtube2-ch").click(function(){var i=window.open("https://youtu.be/ZKt5ch6Y9gE/","_blank");i.focus()});$("#youtube2-ch").mouseover(function(){this.style.cursor="pointer"});$("#wangyi2-ch").click(function(){var i=window.open("http://music.163.com/#/album?id=35737218","_blank");i.focus()});$("#wangyi2-ch").mouseover(function(){this.style.cursor="pointer"});var e=document.querySelectorAll(".youtube");for(var g=0;g<e.length;g++){var a="https://img.youtube.com/vi/"+e[g].dataset.embed+"/hqdefault.jpg";var f=new Image();f.src=a;f.addEventListener("load",function(){e[g].appendChild(f)}(g));e[g].addEventListener("click",function(){var o=document.createElement("iframe");var i=e[g];o.setAttribute("id",this.id+"-iframe");o.setAttribute("frameborder","0");o.setAttribute("allowfullscreen","");o.setAttribute("allowscriptaccess","always");o.setAttribute("src","http://www.youtube.com/embed/"+this.dataset.embed+"?enablejsapi=1&version=3&playerapiid=ytplayer&autoplay=1");this.innerHTML="";this.appendChild(o)})}var j=$("#gridWidth").outerWidth(true);var c=j*0.9;var k=document.querySelectorAll(".youku");for(var g=0;g<k.length;g++){document.getElementById(k[g].id).style.setProperty("--iframe-width",((c).toString()+"px"));document.getElementById(k[g].id).style.setProperty("--iframe-height",((c/1.77).toString()+"px"));document.getElementById(k[g].id+"-youku").style.setProperty("--iframe-width",((c).toString()+"px"));document.getElementById(k[g].id+"-youku").style.setProperty("--iframe-height",((c/1.77).toString()+"px"))}for(var g=0;g<k.length;g++){k[g].addEventListener("click",function(){$("#"+this.id+"-playbutton").hide();$("#"+this.id+"-thumbnail").hide();$("#"+this.id).hide();$("#"+this.id+"-youku").attr("src",$("#"+this.id+"-thumbnail").attr("data-video"));$("#"+this.id+"-youku").show()})}var l=window.navigator;var b=location.href;if((l.languages[0]=="zh"||l.languages[0]=="zh-CN"||l.languages[1]=="zh"||l.languages[1]=="zh-CN")&&b.indexOf("id=191")==-1){n()}else{}});