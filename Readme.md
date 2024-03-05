## Tutorial

In this tutorial you will get to know, how to make a random
joks making for unlimited fun.

### Demo

click [here](https://fiftekhar3163.github.io/WannaLaugh/) to test my website.

## API Host

API host link `https://official-joke-api.appspot.com/jokes/random`

## Fetch API in Action

using `fetch()` to connect the API with the code. This initiates a fetch request to the URL stored in API_HOST. It then processes the response as JSON and continues to the next `then` block.

````javascript
const API_HOST=`https://official-joke-api.appspot.com/jokes/random`

let spinner = document.querySelector(".loader-container")
let jokeQ= document.querySelector(".joke-question");
let jokeA=document.querySelector(".joke-answer")
let getButton = document.getElementById("btn-get-jokes")

//When page is fully loaded.
document.addEventListener("DOMContentLoaded",function(){

    getButton.addEventListener("click",function(){
        spinner.classList.add("show-spinner");
        jokeQ.textContent="";
        jokeA.textContent="";
        fetch(API_HOST).then(res =>  res.json()).then(data => {
            jokeQ.textContent=data.setup;
            jokeA.textContent=data.punchline;
            spinner.classList.remove("show-spinner");

        })
    })

})```

````
