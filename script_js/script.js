/* window.addEventListener("load", () => {
    const prenom = window.prompt("Comment vous appelez-vous ?");
   
        window.alert(`Bienvenue sur mon site, ${prenom} !`);
    }
); */
/* let button = document.createElement('button');

button.innerHTML = "button";

document.body.appendChild(button);

//code
button.addEventListener("click",() => {
window.open("https://www.google.com/","google", "width=500", "height=500")
})
let close = document.createElement('button');

close.innerHTML = "close";

document.body.appendChild(close);


button.addEventListener("click", ()=> {
     window. close()  
})*/
let open = document.createElement('button');

open.innerHTML = "open";

document.body.appendChild(open);

let url = prompt("Entrez l’URL :");

open.addEventListener('click', () => {
  window.open(url);
});