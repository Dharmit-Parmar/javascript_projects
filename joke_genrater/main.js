let btn = document.getElementById("btn");
let joke = document.getElementById("joke");
const btnquote = document.getElementById("btn-quote");
const quote = document.getElementById("quote-text");
const author = document.getElementById("author");

async function genratefunc() {
    joke.textContent = "joke is comming...."

    try{  

        let respond = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
        const data = await respond.json();
        joke.textContent = data.joke ; 
    }catch(error){
        joke.textContent = ` there is some error about ${error}`
    }
        
}

btn.onclick = function () {
    genratefunc();
}


 async function  quteGenrate(){
    
    quote.textContent = " quote genrating"

 fetch("https://api.allorigins.win/get?url=https://zenquotes.io/api/random")
  .then(res => res.json())
  .then(data => {
    const parsed = JSON.parse(data.contents)[0];
    console.log(parsed.q, parsed.a);
    author.textContent = parsed.a;
    quote.textContent = parsed.q;
  });
  

}

btnquote.onclick = function(){
    quteGenrate();
}
