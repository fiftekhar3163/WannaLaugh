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

})