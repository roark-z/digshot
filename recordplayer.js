/*	
	Animate the opening and closing of the book.
    Adapted from ASCII Animations are fun by Alan Thompson https://codepen.io/alan8r/pen/VjRrZj
*/

function openAnimation(animArray, speed, DOMtarget) {
	var curFrame = 0;

	// Add frames
	
	for(var i = 0; i < animArray.length; i++) {
		animArray[i] = animArray[i].replace(/ /g,"&nbsp;");
		animArray[i] = "<pre class='a'>" + animArray[i] + "</pre>";
	}

	DOMtarget.innerHTML = animArray[0];
    curFrame++;

	this.animation = setInterval(function() {
		DOMtarget.innerHTML = animArray[curFrame];
		if(curFrame < animArray.length-1) {
            curFrame++;
        } else {
            curFrame = 0;
        }
		// console.log(curFrame)
	}, speed);
}

// Function to create divisions and add elements
function makeDiv() { let div = document.createElement("div"); div.classList.add('center'); return div }
function bodyAppend(element) { document.body.appendChild(element); }

// Create open and close buttons


var record_player = makeDiv();
bodyAppend(record_player);
var frame1 = "                             _.--=.._\n\
                         _.-`_.-` __ \\\n\
                     _.-`_.-` _.-`\\ \\ \\\n\
                 _.-`_.-` _.-`     \\ \\ \\\n\
             _.-`_.-` _.-`          \\ \\ \\\n\
         _.-`_.-` _.-`               \\ \\ \\\n\
     _.-`_.-` _.-`                    \\ \\ \\\n\
 _.-`_.-` _.-`                         \\ \\ \\\n\
/__/  _.-`               . /\\.          \\ \\ \\\n\
\\  \\ |      \\           / \\ + _`         \\ \\ \\\n\
 \\  \\ \\   \\  x     ,.`-|  /--_`      \\    \\ \\ \\\n\
  \\  \\ \\   \\      `` -  x   __>       +    \\_\\ \\\n\
   \\  \\ \\   +        /  .  `.           _.-`_' .\n\
    \\  \\ \\           | / `---`      _.-`_.-` _.-```-._\n\
     \\  \\ \\                     _.-`_.-` _.-`[#]      `-._\n\
      \\  \\ \\                _.-`_.-` _.-`     | \"#        `-._\n\
       \\  \\ \\           _.-`_.-` _.-`              \"#         `-._\n\
        \\  \\ \\      _.-`_.-`   _.-- ''_``````` '' -- _\"#          `-._\n\
         \\  \\ \\ _.-`_.-`  . ' _  - `  _ ,               '\"# _   (``)  `-._\n\
          \\  \\ '..-`    `        - `                       [#] (:__:)     >\n\
           '- _' _.- /              .- ' ``` ' -.           V \\       _.-`|\n\
                <   |              |      '      |             |  _.-`    |\n\
                |`-. \\               `   ---   `     ,    .   / -`     .-`|\n\
                |      .                       _ . '   -    ,   |     _|-`\n\
                |`-.     `-._                 _  -  `  _.-`   _.' _.-`\n\
                 `-|_         `_--...._______....-- `    _.-`_.-`\n\
                     `-._        `-._         _.-`   |_.-`_.-`\n\
                         `-._        `-._ _.-`        _.-`\n\
                             `-._        |        _.-`\n\
                                 `-._|-._|_.-|_.-`\n\
                                     `-._|_.-`\n"

var frame2 = "                             _.--=.._\n\
                         _.-`_.-` __ \\\n\
                     _.-`_.-` _.-`\\ \\ \\\n\
                 _.-`_.-` _.-`     \\ \\ \\\n\
             _.-`_.-` _.-`          \\ \\ \\\n\
         _.-`_.-` _.-`               \\ \\ \\\n\
     _.-`_.-` _.-`                    \\ \\ \\\n\
 _.-`_.-` _.-`                         \\ \\ \\\n\
/__/  _.-`               . /\\.          \\ \\ \\\n\
\\  \\ |      \\           / \\ + _`         \\ \\ \\\n\
 \\  \\ \\   \\  +     ,.`-|  /--_`      \\    \\ \\ \\\n\
  \\  \\ \\   \\      `` -  x   __>       x    \\_\\ \\\n\
   \\  \\ \\   x        /  .  `.           _.-`_' .\n\
    \\  \\ \\           | / `---`      _.-`_.-` _.-```-._\n\
     \\  \\ \\                     _.-`_.-` _.-`[#]      `-._\n\
      \\  \\ \\                _.-`_.-` _.-`     | \"#        `-._\n\
       \\  \\ \\           _.-`_.-` _.-`              \"#         `-._\n\
        \\  \\ \\      _.-`_.-`   _.-- '' ``````` '' -- _\"#          `-._\n\
         \\  \\ \\ _.-`_.-`  . ' _  - `  _ .               '\"# _   (``)  `-._\n\
          \\  \\ '..-`    `   `   .- `                       [#] (:__:)     >\n\
           '- _' _.- /              .- ' ``` ' -.           v \\       _.-`|\n\
                <   |              |      '      |             |  _.-`    |\n\
                |`-. \\               `   ---   `     .    -   / -`     .-`|\n\
                |      .                       _ . '   -    ,   |     _|-`\n\
                |`-.     `-._                __  -  `  _.-`   _.' _.-`\n\
                 `-|_         `_--...._______....-- `    _.-`_.-`\n\
                     `-._        `-._         _.-`   |_.-`_.-`\n\
                         `-._        `-._ _.-`        _.-`\n\
                             `-._        |        _.-`\n\
                                 `-._|-._|_.-|_.-`\n\
                                     `-._|_.-`"

var open = [
	frame1,
	frame2
];

var anim1 = new openAnimation(open, 100, record_player);

var playing = false;
function playMusic() {
	if (playing == false) {
		new Audio('vinyl_tune.mp3').play();
		playing = true;
	}
}
// const playMusic = async () => {
// 	setAudioError(undefined);
// 	new Audio('vinyl_tune.mp3')
// 	  .play()
// 	  .catch((e) => {
// 		setAudioError(e);
// 	  });
//   };




// var tracklist = makeDiv();
// tracklist.innerHTML = "01:06 ━━━━⬤─────── 04:05"
// bodyAppend(tracklist)


