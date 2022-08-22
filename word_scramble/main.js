let random_word = document.getElementById("random-word")
let hint = document.getElementById("word-hint")
let timer = document.getElementById("timer")
let check_word = document.getElementById("check-word")
let word = document.getElementById("word")
let orginal_word = ''



fetch('https://random-words-api.vercel.app/word').then(response => {
    return response.json().then(data => {
        orginal_word = data[0].word.toLowerCase(orginal_word)
        random_word.innerHTML = shuffle(orginal_word)
        hint.innerHTML = 'Hint: ' + data[0].definition

    })
});


let timeleft = 1;
let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
    }
    timer.innerHTML = `Time left: ${60 - timeleft}`;
    timeleft += 1;
}, 1000);


function shuffle(string) {
    var parts = string.split('');
    for (var i = parts.length; i > 0;) {
        var random = parseInt(Math.random() * i);
        var temp = parts[--i];
        parts[i] = parts[random];
        parts[random] = temp;
    }
    return parts.join('');
}

function equal() {
    console.log(orginal_word)
    if (word.value === orginal_word) {
        console.log('Equal')
    }
}

check_word.addEventListener('click', equal)
