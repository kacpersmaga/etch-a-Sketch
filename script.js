
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
        div.addEventListener("mouseover", () => {
            let red = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);

            let opacity = parseFloat(div.style.backgroundColor.slice(-4,-1))
            if(isNaN(opacity)) opacity = 1;
            opacity-= 0.1;
            div.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        })
        container.appendChild(div);
    }
}
createGrid(16)