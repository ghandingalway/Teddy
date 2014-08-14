(function(){
	$(document).ready(function(){
		var paper = Raphael(0,0,1200,750);
		var larm = paper.ellipse(225,375,150,75);
		larm.transform("r5");
		var rarm = paper.ellipse(775,375,150,75);
		rarm.transform("r355");
		var torso = paper.ellipse(500,400,200,250);
		torso.attr("fill", "#fff");
		var lear = paper.circle(325,75,60);
		var rear=paper.circle(675,75,60);
		var head = paper.ellipse(500,200,225,175);
		head.attr("fill", "#fff");
		var lfoot = paper.circle(300,620,110);
		lfoot.attr("fill", "#fff");
		var rfoot= paper.circle(700,620,110);
		rfoot.attr("fill","#fff");
		var lleg1= paper.path("M312,485L238,529");
		var lleg2=paper.path("M457,644L360,712");
		var rleg2=paper.path("M688,485L762,529");
		var rleg1=paper.path("M543,644L640,712");
		var leye=paper.circle(450,150,10);
		leye.attr("fill","#000");
		var reye=paper.circle(550,150, 10);
		reye.attr("fill", "#000");
		var nose=paper.path("M500,220L480,240L520,240z");
		nose.attr("fill","#000");
		var mouth=paper.path("M430,290C440,330,560,330,570,290");
		mouth.attr("stroke","10");
		var jumper=paper.path("M318,297C340,400,660,400,682,297L695,320C700,300,745,300,750,300L750,455C745,460,700,455,695,450C700,450,700,460,695,470L305,470C300,460,300,450,305,450C300,455,255,460,250,455L250,300C255,300,300,300,305,320z");
		jumper.attr("fill","#f00");
	})	
})
();
