// JavaScript Document

function getNews1() {

		document.getElementById("heading1").innerHTML = news.title1;
		document.getElementById("news1-image").setAttribute("src",news.photo1[0].src);
		document.getElementById("news1-image").setAttribute("alt",news.photo1[1].alt);
		document.getElementById("p1-1").innerHTML = news.texts1[0].P1;
		document.getElementById("p1-2").innerHTML = news.texts1[1].P2;
	
		document.getElementById("heading2").innerHTML = news.title2;
		document.getElementById("news2-image").setAttribute("src",news.photo2[0].src);
		document.getElementById("news2-image").setAttribute("alt",news.photo2[1].alt);
		document.getElementById("p2-1").innerHTML = news.texts2[0].P1;
		document.getElementById("p2-2").innerHTML = news.texts2[1].P2;		
	
		document.getElementById("heading3").innerHTML = news.title3;
		document.getElementById("news3-image").setAttribute("src",news.photo3[0].src);
		document.getElementById("news3-image").setAttribute("alt",news.photo3[1].alt);
		document.getElementById("p3-1").innerHTML = news.texts3[0].P1;
		document.getElementById("p3-2").innerHTML = news.texts3[1].P2;
	}

function getArticle1() {
		
		document.getElementById("heading3").innerHTML = story.title3;
		document.getElementById("news3-image").setAttribute("src",story.photo3[0].src);
		document.getElementById("news3-image").setAttribute("alt",story.photo3[1].alt);
		document.getElementById("p3-1").innerHTML = story.texts3[0].P1;
		document.getElementById("p3-2").innerHTML = story.texts3[1].P2;
		document.getElementById("p3-3").innerHTML = story.texts3[2].P3;
		document.getElementById("p3-4").innerHTML = story.texts3[3].P4;
		document.getElementById("p3-5").innerHTML = story.texts3[4].P5;
		document.getElementById("p3-6").innerHTML = story.texts3[5].P6;
		document.getElementById("p3-7").innerHTML = story.texts3[6].P7;
		document.getElementById("p3-8").innerHTML = story.texts3[7].P8;
		document.getElementById("p3-9").innerHTML = story.texts3[8].P9;
		document.getElementById("p3-10").innerHTML = story.texts3[9].P10;
		document.getElementById("p3-11").innerHTML = story.texts3[10].P11;
		document.getElementById("p3-12").innerHTML = story.texts3[11].P12;
		document.getElementById("p3-13").innerHTML = story.texts3[12].P13;
		document.getElementById("p3-14").innerHTML = story.texts3[13].P14;
	}