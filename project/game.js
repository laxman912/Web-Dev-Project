const questionData = [
    { q: "Which team won the first FIFA World Cup in 1930?", a: "Uruguay", o: ["Argentina", "Brazil", "Uruguay", "France"] },
    { q: "Who scored the famous 'Hand of God' goal in 1986?", a: "Diego Maradona", o: ["Pele", "Diego Maradona", "Lionel Messi", "Johan Cruyff"] },
    { q: "Which nation has won the most FIFA World Cups?", a: "Brazil", o: ["Germany", "Italy", "Brazil", "Argentina"] },
    { q: "How often is the FIFA World Cup held?", a: "Every 4 years", o: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"] },
    { q: "Which country hosted the 1950 World Cup?", a: "Brazil", o: ["Uruguay", "Brazil", "Sweden", "Switzerland"] },
    { q: "Which country hosted the 1966 World Cup?", a: "England", o: ["England", "Germany", "Mexico", "Argentina"] },
    { q: "Who won the 1966 FIFA World Cup?", a: "England", o: ["Brazil", "England", "Germany", "Argentina"] },
    { q: "Which team won back‑to‑back World Cups in 1934 and 1938?", a: "Italy", o: ["Brazil", "Italy", "Germany", "Spain"] },
    { q: "Who won the 1970 World Cup, known for Pelé’s performance?", a: "Brazil", o: ["Argentina", "Brazil", "Italy", "Germany"] },
    { q: "Which country won the 1982 World Cup?", a: "Italy", o: ["Brazil", "Italy", "Argentina", "France"] },
    { q: "Who holds the record for most goals in World Cup history?", a: "Miroslav Klose", o: ["Ronaldo", "Pele", "Miroslav Klose", "Just Fontaine"] },
    { q: "Which country won the 1994 World Cup?", a: "Brazil", o: ["Italy", "Brazil", "Germany", "Argentina"] },
    { q: "Who won the World Cup in France 1998?", a: "France", o: ["Brazil", "France", "Italy", "Argentina"] },
    { q: "Which country hosted the 2002 World Cup?", a: "South Korea & Japan", o: ["Japan", "South Korea", "South Korea & Japan", "China"] },
    { q: "Who won the 2002 FIFA World Cup?", a: "Brazil", o: ["Germany", "Brazil", "Argentina", "France"] },
    { q: "Who won the 2006 FIFA World Cup?", a: "Italy", o: ["Italy", "France", "Germany", "Brazil"] },
    { q: "Which player scored the winning goal for Spain in the 2010 final?", a: "Andres Iniesta", o: ["David Villa", "Andres Iniesta", "Xavi", "Fernando Torres"] },
    { q: "Which country hosted the 2010 World Cup?", a: "South Africa", o: ["South Africa", "Brazil", "Germany", "Russia"] },
    { q: "Who won the 2010 FIFA World Cup?", a: "Spain", o: ["Spain", "Netherlands", "Germany", "Brazil"] },
    { q: "Which country hosted the 2014 World Cup?", a: "Brazil", o: ["Brazil", "South Africa", "Russia", "Germany"] },
    { q: "Who won the 2014 FIFA World Cup?", a: "Germany", o: ["Brazil", "Germany", "Argentina", "France"] },
    { q: "Which country hosted the 2018 World Cup?", a: "Russia", o: ["Russia", "France", "Germany", "England"] },
    { q: "Who won the 2018 FIFA World Cup?", a: "France", o: ["France", "Croatia", "Belgium", "Brazil"] },
    { q: "Which country hosted the 2022 World Cup?", a: "Qatar", o: ["Qatar", "UAE", "Canada", "Germany"] },
    { q: "Who won the 2022 FIFA World Cup?", a: "Argentina", o: ["France", "Argentina", "Brazil", "Germany"] },
    { q: "Who is the all‑time leading goalscorer in World Cup history?", a: "Miroslav Klose", o: ["Ronaldo", "Pele", "Miroslav Klose", "Just Fontaine"] },
    { q: "Which team finished runner‑up in the 2014 final?", a: "Argentina", o: ["Brazil", "Germany", "Argentina", "Netherlands"] },
    { q: "Which team finished runner‑up in the 2018 final?", a: "Croatia", o: ["France", "Croatia", "Belgium", "England"] },
    { q: "Which team finished runner‑up in the 2022 final?", a: "France", o: ["Argentina", "France", "Croatia", "Brazil"] },
    { q: "Who won the Golden Boot in the 2010 World Cup?", a: "Thomas Muller", o: ["Thomas Muller", "Lionel Messi", "Cristiano Ronaldo", "David Villa"] },
    { q: "Who won the Golden Boot in the 2014 World Cup?", a: "James Rodriguez", o: ["James Rodriguez", "Neymar", "Lionel Messi", "Thomas Muller"] },
    { q: "Who won the Golden Boot in the 2018 World Cup?", a: "Harry Kane", o: ["Harry Kane", "Kylian Mbappe", "Lionel Messi", "Eden Hazard"] },
    { q: "Who won the Golden Boot in the 2022 World Cup?", a: "Kylian Mbappe", o: ["Kylian Mbappe", "Lionel Messi", "Harry Kane", "Neymar"] },
    { q: "Who won the Golden Ball in the 2010 World Cup?", a: "Diego Forlan", o: ["Diego Forlan", "Wesley Sneijder", "David Villa", "Xavi"] },
    { q: "Who won the Golden Ball in the 2014 World Cup?", a: "Lionel Messi", o: ["Lionel Messi", "Thomas Muller", "Arjen Robben", "Neymar"] },
    { q: "Who won the Golden Ball in the 2018 World Cup?", a: "Luka Modric", o: ["Luka Modric", "Lionel Messi", "Cristiano Ronaldo", "Antoine Griezmann"] },
    { q: "Who won the Golden Ball in the 2022 World Cup?", a: "Lionel Messi", o: ["Lionel Messi", "Kylian Mbappe", "Luka Modric", "Neymar"] },
    { q: "Which team beat Brazil 7‑1 in the 2014 semi‑final?", a: "Germany", o: ["Argentina", "Germany", "France", "Spain"] },
    { q: "Which country has played in every FIFA World Cup?", a: "Brazil", o: ["Germany", "Brazil", "Argentina", "Italy"] },
    { q: "Which team is known as 'Les Bleus'?", a: "France", o: ["France", "Germany", "Italy", "Spain"] },
    { q: "Which team is known as 'La Albiceleste'?", a: "Argentina", o: ["Brazil", "Argentina", "Spain", "Italy"] },
    { q: "Which World Cup final was decided by a penalty shootout in 1994?", a: "Brazil vs Italy", o: ["Brazil vs Italy", "Germany vs Argentina", "France vs Croatia", "Spain vs Netherlands"] },
    { q: "Which World Cup final was decided by penalties in 2006?", a: "Italy vs France", o: ["Brazil vs Italy", "Italy vs France", "England vs Germany", "Spain vs Netherlands"] },
    { q: "Who scored the infamous 'Hand of God' goal?", a: "Diego Maradona", o: ["Diego Maradona", "Lionel Messi", "Pele", "Zinedine Zidane"] },
    { q: "Which player scored the 'Goal of the Century' in 1986?", a: "Diego Maradona", o: ["Diego Maradona", "Gary Lineker", "Michel Platini", "Rudi Voller"] },
    { q: "Which nation hosted the first World Cup?", a: "Uruguay", o: ["Brazil", "Uruguay", "Argentina", "France"] },
    { q: "Which nation did Uruguay beat in the 1930 final?", a: "Argentina", o: ["Brazil", "Argentina", "France", "Italy"] },
];

let index = 0;
let score = 0;
let gameQuestions = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame() {
    index = 0;
    score = 0;
    const shuffledPool = shuffle([...questionData]);
    gameQuestions = shuffledPool.slice(0, 10);
    renderQuestion();
}

function renderQuestion() {
    const current = gameQuestions[index];
    document.getElementById("q-idx").innerText = index + 1;
    document.getElementById("q-content").innerText = current.q;
    
    const box = document.getElementById("options-box");
    box.innerHTML = "";

    const shuffledOptions = shuffle([...current.o]);

    shuffledOptions.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("opt-button");
        btn.innerText = choice;
        btn.onclick = () => verify(btn, choice, current.a);
        box.appendChild(btn);
    });
}

function verify(el, selected, correct) {
    const all = document.querySelectorAll(".opt-button");
    all.forEach(b => b.disabled = true);

    if (selected === correct) {
        el.style.backgroundColor = "#28a745";
        el.style.borderColor = "#28a745";
        score++;
    } else {
        el.style.backgroundColor = "#dc3545";
        el.style.borderColor = "#dc3545";
        all.forEach(b => { 
            if(b.innerText === correct) b.style.borderColor = "#28a745"; 
        });
    }

    document.getElementById("current-score").innerText = `Score: ${score}/10`;
    document.getElementById("next-btn").classList.remove("hidden-btn");
}

function showResults() {
    const quizBox = document.getElementById("quiz-container");
    const resultBox = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");
    const resultQuote = document.getElementById("result-quote");
    const resultImg = document.getElementById("result-img");

    quizBox.classList.add("hidden-btn");
    resultBox.classList.remove("hidden-btn");

    resultText.innerText = `YOU SCORED ${score} OUT OF 10`;

    if (score > 6) {
        // High Score: Xavi
        resultImg.src = "image result 1.jpeg"; 
        resultQuote.innerHTML = `"You control the midfield of knowledge, simply brilliant. True understanding of the game." <br> — Xavi`;
        resultQuote.style.color = "#ffffff"; // Success White
    } else {
        // Low Score: Zlatan
        resultImg.src = "image result 2.jpeg";
        resultQuote.innerHTML = `"Lions don't compare themselves to humans, but even a human knows more than you about the World Cup. Do better." <br> — Zlatan`;
        resultQuote.style.color = "#ff4d4d"; // Warning Red
    }
}

document.getElementById("next-btn").onclick = () => {
    index++;
    if (index < gameQuestions.length) {
        renderQuestion();
        document.getElementById("next-btn").classList.add("hidden-btn");
    } else {
        showResults();
    }
};

document.getElementById("play-again-btn").onclick = () => {
    location.reload();
};

startGame();