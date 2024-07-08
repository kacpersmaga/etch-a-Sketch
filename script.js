
let btnGridGenerate = document.querySelector(".btn-gridGenerate");
btnGridGenerate.addEventListener("click", () =>{ let squarePerSide = prompt("How many squares per side do you want?")
    if(squarePerSide>0&&squarePerSide<=100)
        createGrid(squarePerSide)
    else{
        alert("Please enter a valid number")
    }
})


function createGrid(squarePerSide){
    let container = document.querySelector(".sketch-grid")
    container.innerHTML = "";
    let totalSize = 640
    let squareSize = totalSize/squarePerSide
    for(let i=0;i<squarePerSide*squarePerSide;i++){
        let div = document.createElement("div");
        div.style.width = `${squareSize}px`
        div.style.height = `${squareSize}px`
        div.addEventListener("mouseover", () => div.classList.add("hovered"))
        container.appendChild(div);
    }
}
createGrid(16)