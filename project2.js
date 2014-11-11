function playSound1(soundfile) {
  document.getElementById("cell1").innerHTML=
    "<embed src=http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/poutine.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound2(soundfile) {
  document.getElementById("cell2").innerHTML=
    "<embed src=http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/pullover.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound3(soundfile) {
  document.getElementById("cell3").innerHTML=
    "<embed src=http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/ballsbandsaw.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound4(soundfile) {
  document.getElementById("cell4").innerHTML=
    "<embed src=http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/likemexico.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound5(soundfile) {
  document.getElementById("cell5").innerHTML=
    "<embed src=http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/pulloutmynine.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound6(soundfile) {
  document.getElementById("cell6").innerHTML=
    "<embed src=http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/yeahsure.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound7(soundfile) {
  document.getElementById("cell7").innerHTML=
    "<embed src=http://www.moviewavs.com/php/sounds/?id=gog&media=MP3S&type=Movies&movie=Super_Troopers&quote=speedlimit.txt&file=speedlimit.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound8(soundfile) {
  document.getElementById("cell8").innerHTML=
    "<embed src=http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/candybars.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playSound9(soundfile) {
  document.getElementById("cell9").innerHTML=
    "<embed src=http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/smotheredyou.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}







// function playSound(soundfile) {
//   document.getElementById("cell2").innerHTML=
//     "<embed src=http://http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/poutine.mp3\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
// }


// var collection=[];// final collection of sounds to play
// var loadedIndex=0;// horrible way of forcing a load of audio sounds

// // remap audios to a buffered collection
// function init(audios) {
//   for(var i=0;i<audios.length;i++) {
//     var audio = new Audio(audios[i]);
//     collection.push(audio);
//     buffer(audio);
//   }
// }

// // readyState == 4 is a property that means enough data is available—and the download rate is high enough—that the media can be played through to the end without interruption.

// // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

// function buffer(audio) {
//   if(audio.readyState==4)return loaded();
//   setTimeout(function(){buffer(audio)},100);
// }


// // check if we're ready to go
// function loaded() {
//   loadedIndex++;
//   if(collection.length==loadedIndex)playLooped();
// }

// // play and loop after finished
// // math.floor returns the largest integer less than or equal to a number
// // math.random function returns a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive) 


// function playLooped() {
//   var audio=Math.floor(Math.random() * (collection.length));
//   audio=collection[audio];
//   audio.play();
//   setTimeout(playLooped,audio.duration*1500);

// }

// // the songs to be played
// init([
// 	'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/delousing.mp3',
// 	'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/punchisize.mp3',
// 	'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/burntdown.mp3',
// 	'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/ballsbandsaw.mp3',
// 	'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/afganistanimation.mp3',
// 	'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/drugschool.mp3',
// 	'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/likemexico.mp3',
// 	'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/candybars.mp3',
//   'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/pulloutmynine.mp3',
//   'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/speedlimit.mp3',
//   'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/poutine.mp3',
//   'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/yeahsure.mp3',
//   'http://www.moviewavs.com/0053148414/MP3S/Movies/Super_Troopers/smellsomething.mp3' 

// ]);