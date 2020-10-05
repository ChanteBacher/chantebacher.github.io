
const loader = document.querySelector('.loader');
var box = document.querySelector('#box-area');
let currentJoke = {};
let jokeCounter = 0;
let availableJokes = [];
let jokes = [];

let currentQuote = {};
let quoteCounter = 0;
let availableQuotes = [];
let texts = [];

/*Get Quotes from API*/

fetch(
    'https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10'
)
    .then((res) => {
        return res.json();
    })

    .then((loadedQuotes) => {
        console.log(loadedQuotes);
        texts = loadedQuotes.quotes.map((loadedQuote) => {
            const formattedQuote = {
                text: loadedQuote.quoteText,
            };

            return formattedQuote;
            
        });

        loadMyQuote();
                      
    })
    .catch((err) => {
        console.error(err);
    });

    loadMyQuote = () => {
        quoteCounter = 0;
        availableQuotes = [...texts];
        getNewQuote();
        loader.hidden = true;
        box.hidden = false;
    };

    const MAX_QUOTES = 9;
    getNewQuote = () => {
        if (availableQuotes.length === 0 || quoteCounter >= MAX_QUOTES) {
            quoteCounter = 0;
        }
        quoteCounter++;
            
        const quoteIndex = Math.floor(Math.random() * availableQuotes.length);
        currentQuote = availableQuotes[quoteIndex];
        text.innerText = currentQuote.text;
    
        availableQuotes.splice(quoteIndex, 1);
        
    };


/*Get Jokes from API*/

fetch(
    'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single&amount=10'
)
    .then((res) => {
        return res.json();
    })

    .then((loadedJokes) => {
        console.log(loadedJokes);
        jokes = loadedJokes.jokes.map((loadedJoke) => {
            const formattedJoke = {
                joke: loadedJoke.joke,
            };

            return formattedJoke;
            
        });

        loadMyJokes();
                      
    })
    .catch((err) => {
        console.error(err);
    });

    loadMyJokes = () => {
        jokeCounter = 0;
        availableJokes = [...jokes];
        getNewJoke();
        loader.hidden = true;
        box.hidden = false;
    };

    const MAX_JOKES = 9;
    getNewJoke = () => {
        if (availableJokes.length === 0 || jokeCounter >= MAX_JOKES) {
            jokeCounter = 0;
        }
        jokeCounter++;
            
        const jokeIndex = Math.floor(Math.random() * availableJokes.length);
        currentJoke = availableJokes[jokeIndex];
        joke.innerText = currentJoke.joke;
    
        availableJokes.splice(jokeIndex, 1);
        
    };

    //Get Request from GitHub
          
    axios.get('https://api.github.com/users/ChanteBacher/repos', {
        headers:  {
            
        },
 
    })
    .then((response) => {
        console.log(response);

            var formatName =  response.data[0].name;
            console.log(formatName);
            var name = document.querySelector("#name");
            full_name.innerText = formatName;

            var formatDesc =  response.data[0].description;
            console.log(formatDesc);
            var url = document.querySelector("#desc");
            url.innerText = formatDesc;
                                           
    })
    .catch((err) => {
        console.error(err);
    });


   