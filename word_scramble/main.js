let random_word = document.getElementById("random-word")
let hint = document.getElementById("word-hint")


fetch('https://random-words-api.vercel.app/word').then(response => {
    return response.json().then(data => {
        random_word.innerHTML = data[0].word
        hint.innerHTML = 'Hint: ' + data[0].definition
        console.log(data[0])

    })
});
