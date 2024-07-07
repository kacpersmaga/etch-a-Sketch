let container = document.querySelector(".sketch-grid");

for(let i=0;i<256;i++){
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => div.classList.add("hovered"))
    container.appendChild(div);
}