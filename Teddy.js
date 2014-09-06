(function(){
	$(document).ready(function(){
		var paper = Raphael(0,0,1200,750);
		var background = paper.rect(0,0,1200,750);
		background.attr("fill","#add8e6");
		paper.setStart();
		larm = paper.ellipse(225,375,150,75);
		larm.transform("r10");
		rarm = paper.ellipse(775,375,150,75);
		rarm.transform("r-10");
		lleg1= paper.path("M312,485L238,529L360,712L457,644z");
		rleg2=paper.path("M688,485L762,529L640,712L543,644z");
		torso = paper.ellipse(500,400,200,250);
		lear = paper.circle(325,75,60);
		rear=paper.circle(675,75,60);
		head = paper.ellipse(500,200,225,175);
		lfoot = paper.circle(300,620,110);
		rfoot= paper.circle(700,620,110);
		var body = paper.setFinish();
		body.attr({fill:"white"});
		var leye=paper.circle(450,150,10);
		leye.attr("fill","#000");
		var reye=paper.circle(550,150, 10);
		reye.attr("fill", "#000");
		var nose=paper.path("M500,220L480,240L520,240z");
		nose.attr("fill","#000");
		var mouth=paper.path("M430,290C440,330,560,330,570,290");
		mouth.attr("stroke","#000");
		mouth.attr("stroke-width","10");
		var jumper=paper.path("M318,297C340,400,660,400,682,297L695,320C700,300,745,300,750,300L750,455C745,460,700,455,695,450C700,450,700,460,695,470L305,470C300,460,300,450,305,450C300,455,255,460,250,455L250,300C255,300,300,300,305,320z");
		jumper.attr("fill","#f00");
		paper.setStart();
		game1rect0 = paper.rect(110, 310, 100,100, 15);
		game1rect0.attr("fill", "white");
		game1rect1 = paper.rect(120,330,30,30,1);
		game1rect1.attr("fill","blue");
		game1rect2 = paper.rect(145,355,50,30,1);
		game1rect2.attr("fill","red");
		game1rect3 = paper.rect(140,325,60, 30,30);
		game1rect3.attr("fill","green");
		game1rect4 = paper.rect(120, 360, 35,35,30);
		game1rect4.attr("fill", "yellow");
		var game1 = paper.setFinish();
		paper.setStart();
		game2rect0 = paper.rect(790, 310, 100,100,15);
		game2rect0.attr("fill","white");
		game2rect1 = paper.rect(795,320,20,15,5);
		game2rect1.attr("fill","red");
		game2rect2 = paper.rect(819,320,20,15,5);
		game2rect2.attr("fill", "blue");
		game2rect3=paper.rect(843,320,20,15,5);
		game2rect3.attr("fill", "yellow");
		game2rect4=paper.rect(867,320,20,15,5);
		game2rect4.attr("fill", "green");
		game2rect5=paper.rect(792, 360,10,40,5);
		game2rect5.attr("fill", "#ffc0cb");
		game2rect6 = paper.rect(804,360,10,40,5);
		game2rect6.attr("fill","#ffdb99");
		game2rect7=paper.rect(816,360,10,40,5);
		game2rect7.attr("fill","#ffff90");
		game2rect8=paper.rect(829,360,10,40,5);
		game2rect8.attr("fill", "#98fb98");
		game2rect9=paper.rect(841,360,10,40,5);
		game2rect9.attr("fill", "#add8e6");
		game2rect10=paper.rect(853,360,10,40,5);
		game2rect10.attr("fill", "#B799CD");
		game2rect11 = paper.rect(865,360,10,40,5);
		game2rect11.attr("fill", "#dda0dd");
		game2rect12 = paper.rect(877,360,10,40,5);
		game2rect12.attr("fill", "#ff0000");
		var game2 = paper.setFinish();
		paper.setStart();
		game3rect0 = paper.rect(225,545,150,150,15);
		game3rect0.attr("fill","white");
		game3rect1= paper.rect(230,555,25,60,5);
		game3rect1.attr("fill", "#add8e6");
		game3rect2=paper.rect(259,555,25,60,5);
		game3rect3=paper.rect(288,555,25,60,5);
		game3rect4=paper.rect(317,555,25,60,5);
		game3rect5=paper.rect(346,555,25,60,5);
		game3rect6=paper.rect(230,625,25,60,5);
		game3rect7=paper.rect(259,625,25,60,5);
		game3rect8=paper.rect(288,625,25,60,5);
		game3rect9=paper.rect(317,625,25,60,5);
		game3rect10=paper.rect(346,625,25,60,5);
		game3rect2.attr("fill","#98fb98");
		game3rect3.attr("fill","red");
		game3rect4.attr("fill","#98fb98");
		game3rect5.attr("fill","#ffff90");
		game3rect6.attr("fill","#add8e6");
		game3rect7.attr("fill","#dda0dd");
		game3rect8.attr("fill","red");
		game3rect9.attr("fill","#ffff90");
		game3rect10.attr("fill","#dda0dd");
		game3rect11=paper.rect(235,562,15,45,5);
		game3rect12=paper.rect(264,562,15,45,5);
		game3rect13=paper.rect(293,562,15,45,5);
		game3rect14=paper.rect(322,562,15,45,5);
		game3rect15=paper.rect(351,562,15,45,5);
		game3rect16=paper.rect(235,631,15,45,5);
		game3rect17=paper.rect(264,631,15,45,5);
		game3rect18=paper.rect(293,631,15,45,5);
		game3rect19=paper.rect(322,631,15,45,5);
		game3rect20=paper.rect(351,631,15,45,5);
		game3rect11.attr("fill","white");
		game3rect12.attr("fill","white");
		game3rect13.attr("fill","white");
		game3rect14.attr("fill","white");
		game3rect15.attr("fill","white");
		game3rect16.attr("fill","white");
		game3rect17.attr("fill","white");
		game3rect18.attr("fill","white");
		game3rect19.attr("fill","white");
		game3rect20.attr("fill","white");
		var game3 = paper.setFinish();
		paper.setStart();
		game4rect0 = paper.rect(625,545,150,150,15);
		game4rect0.attr("fill","white");
		game4rect1= paper.rect(630,555,25,50,5);
		game4rect1.attr("fill", "blue");
		game4rect2=paper.rect(659,555,25,50,5);
		game4rect3=paper.rect(688,555,25,50,5);
		game4rect4=paper.rect(717,555,25,50,5);
		game4rect5=paper.rect(746,555,25,50,5);
		game4rect6=paper.rect(630,615,25,50,5);
		game4rect7=paper.rect(659,615,25,50,5);
		game4rect8=paper.rect(688,615,25,50,5);
		game4rect9=paper.rect(717,615,25,50,5);
		game4rect10=paper.rect(746,615,25,50,5);
		game4rect2.attr("fill","green");
		game4rect3.attr("fill","red");
		game4rect4.attr("fill","green");
		game4rect5.attr("fill","yellow");
		game4rect6.attr("fill","blue");
		game4rect7.attr("fill","purple");
		game4rect8.attr("fill","red");
		game4rect9.attr("fill","yellow");
		game4rect10.attr("fill","purple");
		game4rect11=paper.rect(635,562,15,35,5);
		game4rect12=paper.rect(664,562,15,35,5);
		game4rect13=paper.rect(693,562,15,35,5);
		game4rect14=paper.rect(722,562,15,35,5);
		game4rect15=paper.rect(751,562,15,35,5);
		game4rect16=paper.rect(635,621,15,35,5);
		game4rect17=paper.rect(664,621,15,35,5);
		game4rect18=paper.rect(693,621,15,35,5);
		game4rect19=paper.rect(722,621,15,35,5);
		game4rect20=paper.rect(751,621,15,35,5);
		game4rect11.attr("fill","white");
		game4rect12.attr("fill","white");
		game4rect13.attr("fill","white");
		game4rect14.attr("fill","white");
		game4rect15.attr("fill","white");
		game4rect16.attr("fill","white");
		game4rect17.attr("fill","white");
		game4rect18.attr("fill","white");
		game4rect19.attr("fill","white");
		game4rect20.attr("fill","white");
		game4rect21=paper.rect(678,672,50,10,5);
		game4rect21.attr("fill","grey");
		var game4 = paper.setFinish();
		
		var movingtofinal= function(set)
		{
			set.toFront();
			var final = {x:0-set[0].attrs.x, y:0-set[0].attrs.y, width:1200/set[0].attrs.width, height:750/set[0].attrs.height}
			set.forEach(function(that)
			{
				that.animate(
				{
				 x:((that.attrs.x+final.x)*final.width), 
				 y:((that.attrs.y+final.y)*final.height), 
				 width:(that.attrs.width*final.width), 
				 height:(that.attrs.height*final.height),
			 	r:(that.attrs.r*final.width)
				}, 1000, "linear", function(){setTimeout(function()
					{
					if(that!=set[0])
						{						
							that.remove()
						}
					},1000);});
			});
		}
		var minimiseteddy = function()
		{
			var final = {cx:50,cy:50, rx:0.1,ry:0.1,r:0.1}
			body.forEach(function(that)
			{
				if(that.attrs.rx)
				{
					if(that==rarm||that == larm)
					{
						that.transform("");
					}
					that.animate(
					{
						cx:(that.attrs.cx+final.cx)*final.rx,
						cy:(that.attrs.cy+final.cy)*final.ry,
						rx:that.attrs.rx*final.rx,
						ry:that.attrs.ry*final.ry
					},1000,"linear");
				}
				else if(that.attrs.r)
				{
					that.animate(
					{
						cx:(that.attrs.cx+final.cx)*final.r,
						cy:(that.attrs.cy+final.cy)*final.r,
						r:that.attrs.r*final.r
					},1000,"linear");
				}
				else if (that==lleg1)
				{
					that.animate(
					{
						path: Raphael.transformPath("M312,485L238,529L360,712L457,644z", "t-305,-535s0.1")
					},1000,"linear");
				}
				else
				{
					that.animate(
					{
						path:Raphael.transformPath("M688,485L762,529L640,712L543,644z", "t-585,-535s0.1")
					},1000,"linear");
				}
			});
			jumper.animate(
			{
				path:Raphael.transformPath("M318,297C340,400,660,400,682,297L695,320C700,300,745,300,750,300L750,455C745,460,700,455,695,450C700,450,700,460,695,470L305,470C300,460,300,450,305,450C300,455,255,460,250,455L250,300C255,300,300,300,305,320z", "t-445,-340s0.1")
			},1000,"linear");
			body.toFront();
			jumper.toFront();
		}	
		var startgame1 = function(temp)
		{
			var Gap = [];
			var GapCoords= {};
			
			var pointermovefunction = function(e)
			{
				this.attr("x", (e.pageX-50));
				this.attr("y", (e.pageY-50));	
				for(var i=0; i<Gap.length; i++)
					{
				   		if((Number(this.attrs.x)>=Gap[i].xtop)
							&& (Number(this.attrs.x)<=Gap[i].xbottom) 
							&& (Number(this.attrs.y)>=Gap[i].ytop)
							&& (Number(this.attrs.y)<=Gap[i].ybottom)
							//&& ((this.attrs.height-10)===Gap[i].height)
							//&& ((this.attrs.width-10)===Gap[i].width)
							)
						{
							audiofile.play();
							this.attr("x", (Gap[i].xtop+15));
							this.attr("y", (Gap[i].ytop+15));
							this.unmousemove(pointermovefunction);
							this.animate(
							{
								"opacity":0	
							}, 1000, "linear");
						}
					}
			}
			paper.setStart();
			tempgap1 = paper.rect(820,20,170,170,20);
			tempgap2 = paper.rect(820,220,250,150,20);
			tempgap3 = paper.rect(820, 400, 150, 150, 80);
			tempgap4 = paper.rect(820, 580,200,100, 100);
			var gaps = paper.setFinish();
			gaps.attr({stroke:'black', fill:'white'});
			gaps.attr("stroke-width", "5");
			paper.setStart();
			tempdrag1 = paper.rect(100,20,160,160,20);
			tempdrag2 = paper.rect(320,220, 240,140,20);
			tempdrag3 = paper.rect(130,570, 190,90,100);
			var reds = paper.setFinish();
			reds.attr({stroke:"red", fill:"red"});
			reds.mousemove(pointermovefunction);
			paper.setStart();
			tempdrag4 = paper.rect(320, 40, 160, 160, 20);
			tempdrag5 = paper.rect(110, 450, 140, 140, 80);
			tempdrag6 = paper.rect(550,580, 190,90,100);
			var blues = paper.setFinish();
			blues.attr({stroke:"blue", fill:"blue"});
			paper.setStart();
			tempdrag7 = paper.rect(520,20, 160,160,20);
			tempdrag8 = paper.rect(300,400,140,140,80);
			tempdrag9 = paper.rect(310, 620, 190,90,100);
			var yellows = paper.setFinish();
			yellows.attr({stroke:"yellow", fill:"yellow"});
			paper.setStart();
			tempdrag10 = paper.rect(20, 250, 240, 140, 20);
			tempdrag11 = paper.rect(600, 200, 240, 140, 20);
			tempdrag12 = paper.rect(510, 450, 140, 140, 80);
			var greens = paper.setFinish();
			greens.attr({stroke:"green", fill:"green"});
			gaps.forEach(function(that)
			{
				GapCoords.height = Number(that.attrs.height);
				GapCoords.width = Number(that.attrs.width);
				GapCoords.xtop = Number(that.attrs.x - 10);
				GapCoords.ytop = Number(that.attrs.y-10);
				GapCoords.xbottom = GapCoords.xtop+GapCoords.width+20;
				GapCoords.ybottom = GapCoords.ytop+GapCoords.height+20;
				Gap.push(GapCoords);
			});
		}	
	game1.click(function()
		{
			var temp1 = game1.clone();
			movingtofinal(temp1);
			minimiseteddy();
			window.setTimeout(function(){startgame1(temp1)}, 2000);
		});	
		game4.click(function(){
			var temp4=game4.clone();
			movingtofinal(temp4);
			minimiseteddy();
		});
		game3.click(function(){
			var temp3 = game3.clone();
			movingtofinal(temp3);
			minimiseteddy();
		});
		game2.click(function(){
			var temp2 = game2.clone();
			movingtofinal(temp2);
			minimiseteddy();
		});
})
})();
