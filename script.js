const jokePara = document.getElementById("joke")
const jokeButton = document.getElementById("joke_btn")
const copyButton = document.getElementById("copy_btn")


const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";


const options = {
    method : 'GET',
    headers : {
        "X-Api-Key": apiKey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";



async function getJoke() {
    try{
        jokePara.innerText = "Get Ready to laugh...";
        jokeButton.disabled = true;
        jokeButton.innerText = "Loading";
        const response = await fetch (apiUrl, options);
        const data = await response.json();

        jokeButton.disabled =  false;
        jokeButton.innerText = "Crack the Joke";

        jokePara.innerText = data[0].joke;
    } catch(error){
        jokePara.innerText = "Failed to fetch joke. Please try again.";
        jokeButton.disabled = false;
        jokeButton.innerText = "Crack the Joke";
        console.log(error);
    }
}

jokeButton.addEventListener("click", getJoke);

function copyJoke() {
    const textArea = document.createElement('textarea');
    textArea.value = joke.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Joke copied to clipboard!');
}

copyButton.addEventListener("click", copyJoke);