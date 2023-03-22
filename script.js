const wisdom = [
    { quote: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
    { quote: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", author: "Leonardo da Vinci" },
    { quote: "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", author: "Vincent Van Gogh" },
    { quote: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" },
    { quote: "Either write something worth reading or do something worth writing.", author: "Benjamin Franklin" }
]

function newQuote() {

    const text = document.querySelector("#quote")
    const author = document.querySelector("#author")

    text.style.setProperty("opacity", "0");
    author.style.setProperty("opacity", "0");

    let color = []
    for (let i = 0; i < 3; i++) {
        color[i] = 100 + Math.floor(Math.random() * 100 + Math.random())
    }
    let r = document.querySelector(":root")
    r.style.setProperty("--main-color", "rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")")

    let x = Math.round(Math.random() * (wisdom.length - 1));
    let quoteToShow = wisdom[x];

    document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + quoteToShow.quote;


    setTimeout(function () {
        text.innerHTML = quoteToShow.quote
        author.innerHTML = "- " + quoteToShow.author
        text.style.setProperty("opacity", "1");
        author.style.setProperty("opacity", "1");
    }, 500);
}

window.onload = function () {
    newQuote();
}