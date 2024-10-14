  const quotes = [
        { quote: "Tu kara hai fikr kyu, fikr se hota hai kya,Karle aaj khud pe bharosa, fir dekh hota hai kya", author: "Nikhil Verma" },
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
        { quote: "The mind is everything. What you think you become.", author: "Buddha" },
        { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
        { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" }
    ];

    const colors = [
        "#ff6347", "#ff6b6b", "#4caf50", "#1e90ff", "#f39c12", "#9b59b6", "#3498db", "#2ecc71"
    ];

    let currentQuote = 0;

    function getNewQuote() {
        currentQuote = Math.floor(Math.random() * quotes.length);
        document.getElementById("quote").textContent = quotes[currentQuote].quote;
        document.getElementById("author").textContent = "- " + quotes[currentQuote].author;

        // Change container background color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById("quote-container").style.backgroundColor = randomColor;

    }

    // Load the first quote on page load
    getNewQuote();