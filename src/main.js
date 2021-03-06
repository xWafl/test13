let hasnewgamestarted = 0;
let startnewgamenumberanimationobject = {
    bignumberdigits: 0,
    bignumbertens: 0,
    bignumberhundreds: 0,
    bignumberkilos: 0,
    bignumberkilogain: 1,
    bignumbertkilos: 0,
    bignumbertkilogain: 1,
    bignumberhkilos: 0,
    bignumberhkilogain: 1,
    bignumbermils: 0,
    bignumbertmils: 0,
    bignumberhmils: 0,
    bignumberbils: 0,
    bignumbertbils: 0,
    bignumberhbils: 0,
    bignumbertrils: 0,
    timedelay: 500,
    finished: 0,
}

var savestate = {
    hasnewgamestarted: 0,
    texttutorialfinished: 0,
}

var tutorialspeech = [
    'See that button you just clicked? That is an orange button. Orange buttons are for dialogue and communication! When you want to talk to someone, you use the orange button! How about some practice? How are you?',
    'Great! That is the power of the orange button. Now look at my text. See this font? It is my voice. Every character has a different font, or voice. It is just a heads up for when you meet someone new. Hey, how about we go into the game itself?',
    'I am sorry to hear that. Anyway, that is the power of the orange button. Now look at my text. See this font? It is my voice. Every character has a different font, or voice. It is just a heads up for when you meet someone new. Hey, how about we go into the game itself?'
];

var typewriter = {
    speed: 100,
    i: 0,
    finished: 0,
    tutorial: 0,
    tutorialstage: 0,
}

function O (i) {
    return document.getElementById(i);
}

function S (i) {
    return O(i).style;
}

$(document).ready(function() {	
    if (localStorage.getItem('hasnewgamestarted') == 1) {
        O('newgame').innerHTML = 'Resume game';
        S('newgame').right = '55px';
        if (localStorage.getItem('texttutorialfinished') == 1) {
            $("#newgame").attr("onclick", "drawthomasbedroommap()");
        } else {
            $("#newgame").attr("onclick", "startnewgameimageanimation()");	
        }
    }
});

var optionsmodal = document.getElementById('optionsmodal');
var optionsbutton = document.getElementById('optionsbutton');
optionsbutton.onclick = function () {
    optionsmodal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == optionsmodal) {
        optionsmodal.style.display = "none";
        O('optionslogtext').innerHTML = '';
    }
}

var resetgame = document.getElementById('resetgame');
resetgame.onclick = function () {
    var resetgame1 = confirm("Are you sure you want to clear all you saves?");
    if (resetgame1 == true) {
    localStorage.clear();
    O('optionslogtext').innerHTML = 'Save cleared!'
    } else { 
        O('optionslogtext').innerHTML = 'Save not cleared'}
}

function typeWriter(a, b) {
    if (undefined !== b && b.length) {
        b = b.toString();
        if (b === 'escape') {
            document.getElementById(a).innerHTML = '';
            typewriter.i = 0;
            return;
        }
        if (typewriter.i < b.length) {
            document.getElementById(a).innerHTML += b.charAt(typewriter.i);
            typewriter.i++;
            setTimeout(typeWriter, typewriter.speed, a, b);
        }
        if (typewriter.i >= b.length) {
            tutorialswitch();
        }
    }
}

function tutorialswitch () {
    typewriter.finished = 1;
    if (typewriter.tutorial === 0) {
        if (typewriter.tutorialstage >= 2) {
            answer3buttonappear();
        }
        if (typewriter.tutorialstage == 1) {
            answer1buttonappear();
        } else {
            answer0buttonappear();
        }
    }
}

function startnewgame () {
    if (hasnewgamestarted === 0) {
        hasnewgamestarted = 1;
        O('header').style.display = 'none';
        O('titlescreen').style.display = 'none';
        O('titlesetdateanimation').style.display = 'flex';
        O('titlesetdateanimationbox').style.display = 'flex';
        setTimeout(startnewgamenumberanimation, 1000);
    }
}

function startnewgamenumberanimation () {
        setTimeout(startnewgamenumberanimationloop, startnewgamenumberanimationobject.timedelay);
}

function startnewgamenumberanimationloop () {
    if (startnewgamenumberanimationobject.bignumberdigits != 9 && startnewgamenumberanimationobject.timedelay > 1) {
        startnewgamenumberanimationobject.bignumberdigits++;
        O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
    } else if (startnewgamenumberanimationobject.timedelay != 1) {
        if (startnewgamenumberanimationobject.bignumbertens != 9) {
            startnewgamenumberanimationobject.bignumberdigits = 0;
            startnewgamenumberanimationobject.bignumbertens++;
            O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
            O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
        } else {
            if (startnewgamenumberanimationobject.bignumberhundreds != 9) {
                startnewgamenumberanimationobject.bignumberdigits = 0;
                startnewgamenumberanimationobject.bignumbertens = 0;
                startnewgamenumberanimationobject.bignumberhundreds++;
                O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
                O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
                O('titlesetdateanimationminute2').innerHTML = startnewgamenumberanimationobject.bignumberhundreds;
            } else {
                O('titlesetdateanimationheader').innerHTML = 'Initializing other techy stuff';
                if (startnewgamenumberanimationobject.bignumberkilos != 9) {
                    startnewgamenumberanimationobject.bignumberdigits = 0;
                    startnewgamenumberanimationobject.bignumbertens = 0;
                    startnewgamenumberanimationobject.bignumberhundreds = 0;
                    startnewgamenumberanimationobject.bignumberkilos += startnewgamenumberanimationobject.bignumberkilogain;
                    O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
                    O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
                    O('titlesetdateanimationminute2').innerHTML = startnewgamenumberanimationobject.bignumberhundreds;
                    O('titlesetdateanimationminute1').innerHTML = startnewgamenumberanimationobject.bignumberkilos;
                } else {
                    if (startnewgamenumberanimationobject.bignumbertrils < 9) {
                        startnewgameanimationloopspeedup2();
                    }
                }
            }
        }
    } else {
        startnewgameanimationloopspeedup();
    }
    if (startnewgamenumberanimationobject.timedelay > 1) {
        startnewgamenumberanimationobject.timedelay -= 10;
    }
    if (startnewgamenumberanimationobject.finished != 1) {
        startnewgamenumberanimation();
    }
    
}

function startnewgameanimationloopspeedup () {
    startnewgamenumberanimationobject.bignumberdigits++;
    startnewgamenumberanimationobject.bignumbertens++;
    startnewgamenumberanimationobject.bignumberhundreds++;
    O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
    O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
    O('titlesetdateanimationminute2').innerHTML = startnewgamenumberanimationobject.bignumberhundreds;
    O('titlesetdateanimationminute1').innerHTML = startnewgamenumberanimationobject.bignumberkilos;
    O('titlesetdateanimationhour1').innerHTML = startnewgamenumberanimationobject.bignumbertkilos;
    O('titlesetdateanimationyear4').innerHTML = startnewgamenumberanimationobject.bignumberhkilos;
    if (startnewgamenumberanimationobject.finished != 1) {
        setTimeout(startnewgameanimationloopspeedup, 1);
    }
    setTimeout(startnewgameanimationloopspeedup3, 100);
}

function startnewgameanimationloopspeedup2 () {
    O('titlesetdateanimationheader').innerHTML = 'Finishing game initialization'
    if (startnewgamenumberanimationobject.bignumbertrils < 9) {
        startnewgamenumberanimationobject.bignumberkilos++;
        startnewgamenumberanimationobject.bignumbertkilos++;
        O('titlesetdateanimationminute1').innerHTML = startnewgamenumberanimationobject.bignumberkilos;
        O('titlesetdateanimationhour1').innerHTML = startnewgamenumberanimationobject.bignumbertkilos;
        setTimeout(startnewgameanimationloopspeedup, 1);
        setTimeout(startnewgameanimationloopspeedup3, 10);
    }
}

function startnewgameanimationloopspeedup3 () {
    if (startnewgamenumberanimationobject.bignumbertrils < 9) {
        startnewgamenumberanimationobject.bignumberhkilos++;
        startnewgamenumberanimationobject.bignumbermils++;
        O('titlesetdateanimationyear4').innerHTML = startnewgamenumberanimationobject.bignumberhkilos;
        O('titlesetdateanimationyear3').innerHTML = startnewgamenumberanimationobject.bignumbermils;
        setTimeout(startnewgameanimationloopspeedup4, 10);
    }
}

function startnewgameanimationloopspeedup4 () {
    if (startnewgamenumberanimationobject.bignumbertrils < 9) {
        startnewgamenumberanimationobject.bignumbertmils++;
        startnewgamenumberanimationobject.bignumberhmils++;
        O('titlesetdateanimationyear2').innerHTML = startnewgamenumberanimationobject.bignumbertmils;
        O('titlesetdateanimationyear1').innerHTML = startnewgamenumberanimationobject.bignumberhmils;
        setTimeout(startnewgameanimationloopspeedup5, 10);
    }
}

function startnewgameanimationloopspeedup5 () {
    if (startnewgamenumberanimationobject.bignumbertrils < 9) {
        startnewgamenumberanimationobject.bignumberbils++;
        startnewgamenumberanimationobject.bignumbertbils++;
        O('titlesetdateanimationmonth2').innerHTML = startnewgamenumberanimationobject.bignumberbils;
        O('titlesetdateanimationmonth1').innerHTML = startnewgamenumberanimationobject.bignumbertbils;
        setTimeout(startnewgameanimationloopspeedup6, 10);
    }
}

function startnewgameanimationloopspeedup6 () {
    if (startnewgamenumberanimationobject.bignumbertrils < 9) {
        startnewgamenumberanimationobject.bignumberhbils++;
        startnewgamenumberanimationobject.bignumbertrils++;
        O('titlesetdateanimationday2').innerHTML = startnewgamenumberanimationobject.bignumberhbils;
        O('titlesetdateanimationday1').innerHTML = startnewgamenumberanimationobject.bignumbertrils;
    }
    if (startnewgamenumberanimationobject.bignumbertrils >= 9) {
        startnewgamenumberanimationobject.bignumberdigits = 9;
        startnewgamenumberanimationobject.bignumbertens = 9;
        startnewgamenumberanimationobject.bignumberhundreds = 9;
        startnewgamenumberanimationobject.bignumberkilos = 9;
        startnewgamenumberanimationobject.bignumbertkilos = 9;
        startnewgamenumberanimationobject.bignumberhkilos = 9;
        startnewgamenumberanimationobject.bignumbermils = 9;
        startnewgamenumberanimationobject.bignumbertmils = 9;
        startnewgamenumberanimationobject.bignumberhmils = 9;
        startnewgamenumberanimationobject.bignumberbils = 9;
        startnewgamenumberanimationobject.bignumbertbils = 9;
        startnewgamenumberanimationobject.bignumberhbils = 9;
        startnewgamenumberanimationobject.bignumbertrils = 9;
        O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
        O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
        O('titlesetdateanimationminute2').innerHTML = startnewgamenumberanimationobject.bignumberhundreds;
        O('titlesetdateanimationminute1').innerHTML = startnewgamenumberanimationobject.bignumberkilos;
        O('titlesetdateanimationhour1').innerHTML = startnewgamenumberanimationobject.bignumbertkilos;
        O('titlesetdateanimationyear4').innerHTML = startnewgamenumberanimationobject.bignumberhkilos;
        O('titlesetdateanimationyear3').innerHTML = startnewgamenumberanimationobject.bignumbermils;
        O('titlesetdateanimationyear2').innerHTML = startnewgamenumberanimationobject.bignumbertmils;
        O('titlesetdateanimationyear1').innerHTML = startnewgamenumberanimationobject.bignumberhmils;
        O('titlesetdateanimationmonth2').innerHTML = startnewgamenumberanimationobject.bignumberbils;
        O('titlesetdateanimationmonth1').innerHTML = startnewgamenumberanimationobject.bignumbertbils;
        O('titlesetdateanimationday2').innerHTML = startnewgamenumberanimationobject.bignumberhbils;
        O('titlesetdateanimationday1').innerHTML = startnewgamenumberanimationobject.bignumbertrils;
        startnewgamenumberanimationobject.finished = 1; 
        setTimeout(startnewgamenumberanimationdecrement, 1000);
        O('titlesetdateanimationheader').innerHTML = 'Setting date and time';
    }
}

function startnewgamenumberanimationdecrement () {
    if (startnewgamenumberanimationobject.bignumbertrils != 2) {
        startnewgamenumberanimationobject.bignumbertrils--;
        O('titlesetdateanimationday1').innerHTML = startnewgamenumberanimationobject.bignumbertrils;
    }
    if (startnewgamenumberanimationobject.bignumberhbils != 1) {
        startnewgamenumberanimationobject.bignumberhbils--;
        O('titlesetdateanimationday2').innerHTML = startnewgamenumberanimationobject.bignumberhbils;
    }
    if (startnewgamenumberanimationobject.bignumbertrils != 2 || startnewgamenumberanimationobject.bignumberhbils != 1) {
        setTimeout(startnewgamenumberanimationdecrement, 100);
    }
    if (startnewgamenumberanimationobject.bignumbertrils === 2 && startnewgamenumberanimationobject.bignumberhbils === 1) {
        startnewgamenumberanimationdecrement2();
    }
}

function startnewgamenumberanimationdecrement2 () {
    if (startnewgamenumberanimationobject.bignumbertbils != 0) {
        startnewgamenumberanimationobject.bignumbertbils--;
        O('titlesetdateanimationmonth1').innerHTML = startnewgamenumberanimationobject.bignumbertbils;
    }
    if (startnewgamenumberanimationobject.bignumberbils != 4) {
        startnewgamenumberanimationobject.bignumberbils--;
        O('titlesetdateanimationmonth2').innerHTML = startnewgamenumberanimationobject.bignumberbils;
    }
    if (startnewgamenumberanimationobject.bignumbertbils != 0 || startnewgamenumberanimationobject.bignumberbils != 4) {
        setTimeout(startnewgamenumberanimationdecrement2, 100);
    }
    if (startnewgamenumberanimationobject.bignumbertbils === 0 && startnewgamenumberanimationobject.bignumberbils === 4) {
        startnewgamenumberanimationdecrement3();
    }
}

function startnewgamenumberanimationdecrement3 () {
    if (startnewgamenumberanimationobject.bignumberhmils != 2) {
        startnewgamenumberanimationobject.bignumberhmils--;
        O('titlesetdateanimationyear1').innerHTML = startnewgamenumberanimationobject.bignumberhmils;
    }
    if (startnewgamenumberanimationobject.bignumbertmils != 1) {
        startnewgamenumberanimationobject.bignumbertmils--;
        O('titlesetdateanimationyear2').innerHTML = startnewgamenumberanimationobject.bignumbertmils;
    }
    if (startnewgamenumberanimationobject.bignumberhmils != 2 || startnewgamenumberanimationobject.bignumbertmils != 1) {
        setTimeout(startnewgamenumberanimationdecrement3, 100);
    }
    if (startnewgamenumberanimationobject.bignumberhmils === 2 && startnewgamenumberanimationobject.bignumbertmils === 1) {
        startnewgamenumberanimationdecrement4();
    }
}

function startnewgamenumberanimationdecrement4 () {
    if (startnewgamenumberanimationobject.bignumbermils != 0) {
        startnewgamenumberanimationobject.bignumbermils--;
        O('titlesetdateanimationyear3').innerHTML = startnewgamenumberanimationobject.bignumbermils;
    }
    if (startnewgamenumberanimationobject.bignumberhkilos != 3) {
        startnewgamenumberanimationobject.bignumberhkilos--;
        O('titlesetdateanimationyear4').innerHTML = startnewgamenumberanimationobject.bignumberhkilos;
    }
    if (startnewgamenumberanimationobject.bignumbermils != 0 || startnewgamenumberanimationobject.bignumberhkilos != 3) {
        setTimeout(startnewgamenumberanimationdecrement4, 100);
    }
    if (startnewgamenumberanimationobject.bignumbermils === 0 && startnewgamenumberanimationobject.bignumberhkilos === 3) {
        startnewgamenumberanimationdecrement5();
    }
}

function startnewgamenumberanimationdecrement5 () {
    if (startnewgamenumberanimationobject.bignumbertkilos != 5) {
        startnewgamenumberanimationobject.bignumbertkilos--;
        O('titlesetdateanimationhour1').innerHTML = startnewgamenumberanimationobject.bignumbertkilos;
        if (startnewgamenumberanimationobject.bignumbertkilos != 5) {
            setTimeout(startnewgamenumberanimationdecrement5, 100);
        }
    }
    if (startnewgamenumberanimationobject.bignumbertkilos === 5) {
        startnewgamenumberanimationdecrement6();
    }
}

function startnewgamenumberanimationdecrement6 () {
    if (startnewgamenumberanimationobject.bignumberkilos != 3) {
        startnewgamenumberanimationobject.bignumberkilos--;
        O('titlesetdateanimationminute1').innerHTML = startnewgamenumberanimationobject.bignumberkilos;
    }
    if (startnewgamenumberanimationobject.bignumberhundreds != 5) {
        startnewgamenumberanimationobject.bignumberhundreds--;
        O('titlesetdateanimationminute2').innerHTML = startnewgamenumberanimationobject.bignumberhundreds;
    }
    if (startnewgamenumberanimationobject.bignumberkilos != 3 || startnewgamenumberanimationobject.bignumberhundreds != 5) {
        setTimeout(startnewgamenumberanimationdecrement6, 100);
    }
    if (startnewgamenumberanimationobject.bignumberkilos === 3 && startnewgamenumberanimationobject.bignumberhundreds === 5) {
        startnewgamenumberanimationdecrement7();
    }
}

function startnewgamenumberanimationdecrement7 () {
    if (startnewgamenumberanimationobject.bignumbertens != 1) {
        startnewgamenumberanimationobject.bignumbertens--;
        O('titlesetdateanimationsecond1').innerHTML = startnewgamenumberanimationobject.bignumbertens;
    }
    if (startnewgamenumberanimationobject.bignumberdigits != 3) {
        startnewgamenumberanimationobject.bignumberdigits--;
        O('titlesetdateanimationsecond2').innerHTML = startnewgamenumberanimationobject.bignumberdigits;
    }
    if (startnewgamenumberanimationobject.bignumbertens != 1 || startnewgamenumberanimationobject.bignumberdigits != 3) {
        setTimeout(startnewgamenumberanimationdecrement7, 100);
    }
    if (startnewgamenumberanimationobject.bignumbertens === 1 && startnewgamenumberanimationobject.bignumberdigits === 3) {
        setTimeout(startnewgameimageanimation, 2000);
    }
}

function startnewgameimageanimation () {
    O('titlescreen').style.display = 'none';
    O('header').style.display = 'none';
    O('titlesetdateanimationbox').style.display = 'none';
    O('startnewgameimagebox').style.display = 'flex';
    setTimeout(startTutorial, 5000);
}

function startTutorial () {
    hasnewgamestarted = 1;	
    localStorage.setItem('hasnewgamestarted', 1);
    O('titlescreen').display = 'none';
    O('startnewgameimagebox').style.display = 'none';
    O('tutorialbox').style.display = 'inline-block';
    O('tutorialboxwords').style.display = 'inline-block';
    typeWriter('tutorialboxwords', 'Hello! I am Mown. I am your guide to this game! I will show the way around and help you throughout the game. Do you understand?')
}

function answer0buttonappear () {
    S('answer0').display = 'inline-block';
}

function answer0tutorial () {
    if (typewriter.finished = 1) {
        typeWriter('tutorialboxwords', 'escape');
        typeWriter('tutorialboxwords', tutorialspeech[0]);
        S('answer0').display = 'none';
        typewriter.finished = 0;
        typewriter.tutorialstage = 1;
        typewriter.speed = 50;
    }
}

function answer1buttonappear () {
    S('answer1').display = 'inline-block';
    S('answer2').display = 'inline-block';
}

function answer1tutorial () {
    if (typewriter.finished = 1) {
        typeWriter('tutorialboxwords', 'escape');
        typeWriter('tutorialboxwords', tutorialspeech[1]);
        S('answer1').display = 'none';
        S('answer2').display = 'none';
        typewriter.finished = 0;
        typewriter.tutorialstage = 2;
    }
}

function answer2tutorial () {
    if (typewriter.finished = 1) {
        typeWriter('tutorialboxwords', 'escape');
        typeWriter('tutorialboxwords', tutorialspeech[2]);
        S('answer1').display = 'none';
        S('answer2').display = 'none';
        typewriter.finished = 0;
        typewriter.tutorialstage = 2;
    }
}

function answer3buttonappear () {
    S('answer3').display = 'inline-block';
}

function answer3tutorial () {
    if (typewriter.finished = 1) {
        typeWriter('tutorialboxwords', 'escape');
        S('tutorialbox').display = 'none';
        S('maparea').display = 'inline-block';
        S('status').display = 'inline-block';
        drawthomasbedroommap();
    }
}
