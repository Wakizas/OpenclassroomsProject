let h1title = document.getElementById("monTitre");
let link = document.getElementById("myLink");

link.addEventListener("click", changeColor);

function changeColor(){
    h1title.style.color = "blue";
}