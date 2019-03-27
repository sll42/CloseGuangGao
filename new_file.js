var imgs=document.getElementsByTagName("img");
		function fn(){
		for (var i=0;i<imgs.length;i++) {
			imgs[i].style.display="none";
		}
	}
		setInterval(fn,3000);