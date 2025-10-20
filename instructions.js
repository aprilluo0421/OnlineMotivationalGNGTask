var p0_i0 = "<h2>Welcome to the Gem Game</h2>"+
		"<p>The game will take <strong>25-30 minutes to complete</strong> and you can earn extra money as a bonus in addition to the base payment.</p>"+
		"<p>The <strong>more points</strong> you earn during the game, the <strong>more money</strong> we will pay you <strong>as a bonus</strong>.</p>"+
		"<p><strong>Thus, read all of the instructions carefully!</strong> </p>"

var p0_i1 = "<span class='centerImage'><p>Before you start the game, we will now have a <strong>tutorial</strong> to show you how it works. </p>"+
		"<p>During the game you will be shown different gems, such as this one </p>"+
		"<p style='text-align:center;'><img src='image/Intro1.png'></p>"+
		"<p>Every time you see a <strong>gem appear on the screen</strong>, you can choose whether to <strong>collect the gem or not collect it</strong>.</p>"+
		"<p>You <strong>collect a gem</strong> by <strong>PRESSING the spacebar</strong> or <strong>don't collect</strong> the gem by <strong>WAITING</strong> until it disappears </p></span>"+
    "<p><strong>Note:</strong> Each time you decide to <strong>collect the gem</strong> by pressing the spacebar <br> the <strong>gem will light up quickly</strong></p>"

// --> redundant: combined it with slide p0_i1
// var p0_i2 = "<p>So every time a gem appears on the screen, you can decide to either</p>"+
//		"<ol><li>Press</li><li>Wait</li></ol>"+
//		"<p><strong>Note:</strong> Each time you decide to <strong>collect the gem</strong> by pressing a key <br> the <strong>gem will light up quickly</strong></p>"

//--> redundant: explained in slides p0_i5 & p0_i6 in more detail directly
//var p0_i3 = "<span class='centerImage'><p>In the real game your choice to press or wait can lead to:</p></span>"+
//		"<table class='center'><tr><td>you <b>win points</b></td><td>Zero points</td><td>you <b>lose points</b></td></tr>"+
//		"<tr><td><img src='image/rew.png'></td><td><img src='image/no_rew.png'></td><td><img src='image/pun.png'></td></tr></table>"

//--> redundant with subsequent 2 slides p0_i5 & p0_i6
//var p0_i4 = "<span class='centerImage'><p> For the gems with a <strong>green edge</strong> you can <strong>win points.</strong></p></span>"+
//		"<p style='text-align:center;'><img src='image/Intro5.png'></p>"+
//		"<span class='centerImage'><p>For gems with a red edge you can lose points.</p></span>" +
//	  "<p style='text-align:center;'><img src='image/Intro6.png'></p>"

var p0_i5 = "<p style='text-align:center;'><img src='image/Intro5.png'></p>"+
		"<span class='centerImage'><p> In the game, your choice to press or wait for a <strong>gem with a green edge</strong> <br>can lead to <strong>winning points</strong> or getting <strong>zero points<s/trong>.</p></span>"+
		"<table class='center'><tr><td><img src='image/rew.png'></td><td><img src='image/no_rew.png'></td></tr></table>"

var p0_i6 = "<p style='text-align:center;'><img src='image/Intro6.png'></p>"+
		"<span class='centerImage'><p> In the game, your choice to press or wait for a <strong>gem with a red edge</strong> <br>can result in <strong>losing points</strong> or getting <strong>zero points</strong>.</p></span>"+
		"<table class='center'><tr><td><img src='image/pun.png'></td><td><img src='image/no_rew.png'></td></tr></table>"

//var p0_i7 = "<p>Each gem has one response (press or wait) that will give you the best outcome. </p>"+
//		"<p>By choosing the best response for each gem, you receive the best outcome most frequently.</p>"

var p0_i8 = "<p> You want to <strong>win points</strong> for the gems with the <strong>green edge</strong> but you want <strong>zero points</strong> for the gems with <strong>the red edge</strong>. <strong>This maximizes wins and minimizes losses</strong>. </p>"+
		"<table class='center'>" +
		"<tr><td colspan=2><center><img src='image/Intro5.png'></center></td><td colspan=2><center><img src='image/Intro6.png'></center></td></tr>"+
		"<tr style='font-size: 500%; height: 150px'><td colspan=2><center><img src='image/smalldownleftarrow.png'></center></td><td colspan=2><center><img src='image/smalldownrightarrow.png'></center></td></tr>"+
		"<tr><td><img src='image/rew.png'></td><td><img class=strikediag src='image/no_rew.png'></td><td><img class=strikediag src='image/pun.png'></td><td><img src='image/no_pun.png'></td></tr>"+
		"</table>"

// combined instruction text from var p0_i7 with p0_i9
var p0_i9 = "<p><strong>Each gem</strong> has <strong>one response</strong> (press or wait) that will give you the <strong>best outcome</strong>. </p>"+
    //"<p>By choosing the best response for each gem, you receive the best outcome most frequently.</p>"+
    "<p> The best response (press or wait) for each gem stays the same during the game. </p>"+
		"<p> Your task is to learn by trial and error what the best response is for each gem. </p>"


var p0_i10 = "<p style='text-align:center;'><img src='image/Practice0_rew.png'></p>"+
    "<span class='centerImage'><p>For this gem you can win points or get zero points, as you can tell from the green edge. </p></span>"+
		"<table class='center'><tr><td><img src='image/rew.png'></td><td><img src='image/no_rew.png'></td></tr></table>"+
	  "<p>Here, <strong>PRESSING the spacebar</strong> when you see this gem will make you win points. </p>"+
		"<p>But to make the game a little harder, sometimes you won’t get points even if you PRESS</p>"+
 	  "<p><strong>Let's try it!</strong></p>"

// Practice trials 1 deterministic
var p1_i0 = {
	type: "text",
	text:
		"<p>As you probably noticed, you won points by <strong>PRESSING for this gem</strong> . </p>"+
		"<p>If you <strong>WAITED</strong>, you got <strong>ZERO points</strong>.</p>"+
		"<p>When you're ready to continue, press a key</p>",
}

var p1_i1 = {
	type: "text",
	text:
	  "<p style='text-align:center;'><img src='image/Practice1_rew.png'></p>"+
		"<p>For this new gem you can win points or get zero points, as you can tell from the green edge.</p>"+
		"<table class='center'><tr><td><img src='image/rew.png'></td><td><img src='image/no_rew.png'></td></tr></table>"+
		"<p>Again, try to find out if PRESSING or WAITING makes you win points.</p>"+
		"<p>When you're ready to continue, press a key</p>",
}
// Pratcice trials 2 deterministic

var p2_i0 = {
	type: "text",
	text:
		"<p>As you probably noticed, you won points by <strong>WAITING for this gem</strong>.</p>" +
		"<p>If you PRESSED, you got zero points.</p>" +
		"<p>When you're ready to continue, press a key</p>",
}

var p2_i1 = {
	type: "text",
	text:
		"<p style='text-align:center;'><img src='image/Practice2_pun.png'></p>"+
		"<p>For this new gem you can loose points or get zero points, as you can tell from the red edge. </p>"+
		"<table class='center'><tr><td><img src='image/pun.png'></td><td><img src='image/no_rew.png'></td></tr></table>"+
		"<p>Again, try to find out if PRESSING or WAITING makes you avoid money loss</p>"+

		"<p>When you're ready to continue, press a key</p>",
}

// Pratcice trials 3 deterministic
var p3_i0 = {
	type: "text",
	text:
		"<p> As you probably noticed, you avoided losing points by <strong>PRESSING for this gem</strong>. </p>" +
		"<p> If you WAITED, you lost points. </p>" +
		"<p>When you're ready to continue, press a key</p>",
}

var p3_i1 = {
	type: "text",
	text:
	  "<p style='text-align:center;'><img src='image/Practice3_pun.png'></p>"+
		"<p>For this new gem you can lose points or get zero points, as you can tell from the red edge</p>"+
		"<table class='center'><tr><td><img src='image/pun.png'></td><td><img src='image/no_rew.png'></td></tr></table>"+
		"<p>Again, try to find out if PRESSING or WAITING makes you avoid money loss.</p>"+
		"<p>When you're ready to continue, press a key</p>",
}

// Pratcice trials 4 deterministic
var p4_i0 = {
	type: "text",
	timeline: [{text:
		"<p style='text-align:center;'><img src='image/Practice0_rew.png'></p>"+
				"<span class='centerImage'><p>For this gem you can <strong>win points or get zero points</strong>, as you can tell from the <strong>green edge</strong>. </p></span>"+
				"<table class='center'><tr><td><img src='image/rew.png'></td><td><img src='image/no_rew.png'></td></tr></table>"+
				"<p>Here, <strong>PRESSING the spacebar</strong> when you see this gem will make you <strong>win points</strong>. </p>"+
				"<p>But to make the game a little harder, sometimes you won’t get points even if you PRESS.</p>"+
				"<p><strong>Let's try it!</strong></p>"+
				"<p>Press a key to continue</p>",}],
	conditional_function: function(){ return p4_repeat == 0 } // only first time
}

// [here probabilistic practice trials will take place: Go2Win cue/ purple gem with green frame]≥6 practice trials, probabilistic feedbackcontinue until subject makes ≥5 correct responses in last 6 trialsrepeat instructions if subject doesn’t make threshold after 12 trials
// checking function whether subjects fulfills criterion to continue// Round 1

var p5_i0 = {
	// instructions PP slide 44-45
	type: "text",
	timeline: [{text:"<img src='image/Practice0_rew.png'>"+
	  "<p> Well done!</p>" +
		"<p> You probably noticed, you won points most of the time by PRESSING. </p>" +
		"<p> But sometimes even when you PRESSED, you got zero points. </p>" +
		"<p> However, if you WAITED, you got zero points more often. </p>" +
		"<p> So <strong>PRESSING was better</strong> for this gem. </p>" +
		"<p>Press a key to continue</p>",}],
	conditional_function: function(){ return p5_repeat == 0 } // only first time
}

var p5_i1 = {
	type: "text",
	text:
		"<p style='text-align:center;'><img src='image/Practice1_rew.png'></p>"+
		"<p>For this gem you can again <strong>win points or get zero points</strong>, as you can tell from the <strong>green edge</strong>.</p>"+
		"<table class='center'><tr><td><img src='image/rew.png'></td><td><img src='image/no_rew.png'></td></tr></table>"+
		"<p>Here, <strong>WAITING for the gem</strong> makes you <strong>win points</strong>. But as before, sometimes you don’t get points even if you WAIT.</p>"+
    "<p><strong>Give it a try!</strong></p>"+
		"<p>Press a key to continue</p>",
	}

// [here practice trials will take place: NoGo2Win cue/ pink gem with green frame ]≥6 practice trials, probabilistic feedback continues until subject makes ≥5 correct responses in last 6 trials, repeat instructions if subject doesn’t make threshold after 12 trials
// checking function whether subjects fulfills criterion to continue // Round 2

var p6_i0 = {
	type: "text",
	timeline: [{text: "<img src='image/Practice1_rew.png'>"+
	"<p> Well done!</p>" +
	"<p> You probably noticed, you won points most of the time by WAITING. </p>" +
	"<p> But sometimes when you WAITED, you still got zero points. </p>" +
	"<p> However, if you PRESSED, you got zero points more often. </p>" +
	"<p> So <strong>WAITING was better</strong> for this gem. </p>" +
	"<p>When you're ready to continue, press a key</p>",}],
	conditional_function: function(){ return p6_repeat == 0 } // only first time
}

var p6_i1 = {
	type: "text",
	text:
		"<p style='text-align:center;'><img src='image/Practice2_pun.png'></p>"+
		"<p>For this gem you can <strong>lose points or get zero points</strong>, as you can tell from the <strong>red edge</strong>.</p>"+
		"<table class='center'><tr><td><img src='image/pun.png'></td><td><img src='image/no_rew.png'></td></tr></table>"+
		"<p>Here, <strong>PRESSING for the gem</strong> lets you <strong>avoid losing points</strong>. As before, sometimes you still lose points even if you PRESS.</p>"+
    "<p><strong>Give it a try!</strong></p>"+
		"<p>When you're ready to continue, press a key</p>",
	}
// [here practice trials will take place: Go2Avoid cue/ blue gem with red frame]≥6 practice trials, probabilistic feedbackcontinue until subject makes ≥5 correct responses in last 6 trials, repeat instructions if subject doesn’t make threshold after 12 trials
// checking function whether subjects fulfills criterion to continue // Round 3

var p7_i0 = {
	type: "text",
	timeline: [{text: "<img src='image/Practice2_pun.png'>"+
	"<p> Well done!</p>" +
	"<p> You probably noticed, you avoided losing points most of the time by PRESSING. </p>" +
	"<p> But sometimes when you PRESSED, you still got zero points. </p>" +
	"<p> However, if you WAITED, you got zero points more often. </p>" +
	"<p> So <strong>PRESSING was better</strong> for this gem. </p>" +
	"<p>When you're ready to continue, press a key</p>",}],
	conditional_function: function(){ return p7_repeat == 0 } // only first time
}

var p7_i1 = {
	type: "text",
	text:
		"<p style='text-align:center;'><img src='image/Practice3_pun.png'></p>"+
		"<p>For this gem you can <strong>lose points or get zero points</strong>, as you can tell from the <strong>red edge</strong>.</p>"+
		"<table class='center'><tr><td><img src='image/pun.png'></td><td><img src='image/no_rew.png'></td></tr></table>"+
		"<p>Here, <strong>WAITING for the gem</strong> lets you <strong>avoid losing points</strong>. As before, sometimes you still lose points even if you WAIT.</p>"+
    "<p><strong>Give it a try!</strong></p>"+
		"<p>When you're ready to continue, press a key</p>",
	}

// [here practice trials will take place: NoGo2Avoid cue/ yellow gem with red frame ]≥6 practice trials, probabilistic feedbackcontinue until subject makes ≥5 correct responses in last 6 trials, repeat instructions if subject doesn’t make threshold after 12 trials

var p8_i0 = {
	type: "text",
	text: "<p style='text-align:center;'><img src='image/Practice3_pun.png'></p>"+
        "<p> Well done!</p>" +
				"<p> You probably noticed, you still avoided losing points most of the time by WAITING. </p>" +
				"<p> But sometimes when you WAITED, you still lost points. </p>" +
				"<p> However, if you PRESSED, you lost points more often. </p>" +
				"<p> So <strong>WAITING was better</strong> for this gem. </p>" +
		    "<p>Press a key to continue</p>",
}

var p8_i1 = {
	type: "text",
	text: "<h2>Welcome to the real game.</h2>"+
				"<p>Your goal is to earn as many points as you can! <br>If you play well, you can earn extra money as a bonus</p>" +
				"<p>You will get <strong>4 new gems</strong> and you have to learn again <br>which response (press or wait) is best for each. </p>" +
				"<p>A <strong>red frame</strong> means you can <strong>lose points</strong> and a <strong>green frame</strong> means that you can <strong>win points</strong>. </p>" +
        // Deleted: The only difference is that now the gems will be intermixed.
				"<p> The game is quite hard, so try to explore all options. At first you might be confused, <strong>but don’t worry</strong>, you will get plenty of practice!</p>" +
			  "<p>Press a key to continue</p>",
}

var t0_i0 = {
	// Instruction Reminder for ROUND 1:  slides 66-68 (new instructions)
	type: "text",
	text: "<p> Below are the <strong>gems for the round</strong>, which will have a green or a red edge during the game</p>" +
        "<table class='center'><tr><td><img width=150 src='image/A1.png'></td><td><img width=150 src='image/A2.png'></td><td><td><img width=150 src='image/A3.png'></td><td><img width=150 src='image/A4.png'></td></tr></table>"+
				"<p> For each gem, you need to find out by trial-and-error whether to PRESS or WAIT to win (green edge) or avoid losing (red edge) points most often</p>" +
				"<p><strong> But look out:</strong> In the real game, every now and again you will <strong>see a white cross on the screen</strong>. In this case <strong>WAIT until</strong> the <strong> cross disappears</strong> and <strong> then PRESS the spacebar as fast as possible<strong> </p> " +
        "<p> This will allow us to see whether you are still paying attention to the game.</p>" +
				"<p> <strong>GOOD LUCK and have fun!</strong></p>" +
				"<p>Press a key to start</p>",
}

var t1_i0 = {
	// instructions PP slide text from slides 63/ slightly adapted
	type: "text",
	text: "<h2> Second round</h2>" +
		"<p> The <strong>rules are the same</strong> as in round 1 but you will get <strong>4 new gems</strong>. </p>" +
		"<p>A red frame still means you can lose points and a green frame still means that you can win points.</p>" +
    "<p> If you play well, you will continue to earn extra money as a bonus. </p> "+
		"<table class='center'><tr><td><img width=150 src='image/B1.png'></td><td><img width=150 src='image/B2.png'></td><td><img width=150 src='image/B3.png'></td><td><img width=150 src='image/B4.png'></td></tr></table>"+
		"<p> <strong>GOOD LUCK! </strong></p>"+
		"<p>Press a key to start Round 2</p>",
}

