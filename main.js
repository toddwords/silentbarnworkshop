
Mousetrap.bind('q', function() {
	speakNspell('yo', "blue");
})

Mousetrap.bind('w', function() {
	speakNspell('what up', "green");
})

Mousetrap.bind('e', function() {
	speakNspell('my raps will blow your mind');
	showGif("blowmind.gif");
})

Mousetrap.bind('r', function() {
	speakNspell("come over here and spend some time");
	showGif("couch.gif");
})

Mousetrap.bind('t', function() {
	speakNspell("show me your moves while I continue to rhyme");
	showGif("shaqdance.gif");
})

Mousetrap.bind('y', function() {
	speakNspell("I make so much money it should be a crime");
	showGif("money.gif");
})

Mousetrap.bind('u', function() {
	speakNspell("i'll make you smile");
	showGif("smile.gif");
})
Mousetrap.bind('i', function() {
	speakNspell("i'll make you scream");
	showGif("scream.gif");
})
Mousetrap.bind('o', function() {
	speakNspell("i'll make you eat popcorn");
	showGif("popcorn.gif");
})
Mousetrap.bind('p', function() {
	speakNspell("til you burst at the seems");
	showGif("crushSelf.gif");
})


Mousetrap.bind('[', function() {
	speakNspell("SFPC", "green");
	setBGColor("blue");

})
Mousetrap.bind(']', function() {
	
})
Mousetrap.bind('\\', function() {

})
Mousetrap.bind('a', function() {

})
Mousetrap.bind('s', function() {

})
Mousetrap.bind('d', function() {

})
Mousetrap.bind('f', function() {

})

Mousetrap.bind('g', function() {

})

Mousetrap.bind('h', function() {

})
Mousetrap.bind('j', function() {
	
})

Mousetrap.bind('k', function() {

})
Mousetrap.bind('l', function() {
	
})

Mousetrap.bind(';', function() {

})
Mousetrap.bind('z', function() {
	
})

Mousetrap.bind('x', function() {

})
Mousetrap.bind('c', function() {
	playSound("clap")
	
})

Mousetrap.bind('v', function() {
	playSound("scratch")

})
Mousetrap.bind('b', function() {
	playSound("bassDrum")
})

Mousetrap.bind('n', function() {

})
Mousetrap.bind('m', function() {
	
})

Mousetrap.bind(',', function() {

})
Mousetrap.bind('.', function() {
	
})

Mousetrap.bind('/', function() {
	setBGColor("white");
	spell("REMIX!", "blue")
	playSound("remix");
})

//This is where you play your beats

Mousetrap.bind('1', function() {
	pauseAll();
	var beat = $('#beat1')[0];
	beat.volume = 0.8;
	beat.play();
}) 
Mousetrap.bind('2', function() {
	pauseAll();
	var beat = $('#beat2')[0];
	beat.volume = 0.8;
	beat.play();
}) 
Mousetrap.bind('3', function() {
	pauseAll();
	var beat = $('#beat3')[0];
	beat.volume = 0.8;
	beat.play();
}) 
Mousetrap.bind('4', function() {
	pauseAll();
	var beat = $('#beat4')[0];
	beat.volume = 0.8;
	beat.play();
}) 
Mousetrap.bind('5', function() {
	pauseAll();
	var beat = $('#beat5')[0];
	beat.volume = 0.8;
	beat.play();
}) 
Mousetrap.bind('6', function() {
	pauseAll();
	var beat = $('#beat6')[0];
	beat.volume = 0.8;
	beat.play();
}) 
Mousetrap.bind('7', function() {
	pauseAll();
	var beat = $('#beat7')[0];
	beat.volume = 0.8;
	beat.play();
}) 
Mousetrap.bind('8', function() {
	pauseAll();
	var beat = $('#beat8')[0];
	beat.volume = 0.8;
	beat.play();
}) 
Mousetrap.bind('9', function() {
	pauseAll();
	var beat = $('#beat9')[0];
	beat.volume = 0.8;
	beat.play();
}) 

Mousetrap.bind('0', function() {
	pauseAll();
})

Mousetrap.bind('=', function() {
	speakNspell("THANK YOU VERY MUCH");
	showGif("wave.gif");
	pauseAll();
	playSound("applause")
}) 


//The functions we'll be using

function speakNspell(str, color) {
	color = typeof color !== 'undefined' ?  color : "white"
	meSpeak.speak(str, {speed:175, amplitude:600});
	$('h1').text(str);
	$('h1').css("color", color)
}
function speak(str){
	meSpeak.speak(str, {speed:175, amplitude:600});
}
function spell(str, color){
	color = typeof color !== 'undefined' ?  color : "white"
	$('h1').text(str);
	$('h1').css("color", color);
}
function showGif(fileName){
	$("html").css('background-image', 'url(gifs/'+fileName+')'); 
}

function setBGColor(color){
	$("html").css('background-color', color); 
	$("html").css('background-image', 'url()'); 

}

function pauseAll(){
	$("audio").each(function(){
	this.pause();
	this.currentTime = 0
}); 
}

var playSound = function(id) {
    sound = $("#" + id)[0]
    if (sound.ended){sound.currentTime = 0};
    if (sound.currentTime > 0){
        sound.currentTime = 0
    } else {
        sound.play()
    }
}

//Initalize Voice
meSpeak.loadConfig("lib/mespeak_config.json");
//choose a voice from the voice folder here
meSpeak.loadVoice('voices/en/en-us.json');
