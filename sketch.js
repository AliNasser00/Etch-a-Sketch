const container = document.querySelector("#container");


for(let x = 0; x < 256; x++)
{
    const board = document.createElement("div");
    board.className = "board";
    board.addEventListener("mouseover", ()=>{
        board.style.backgroundColor = "black";
    })
    container.appendChild(board); 
}




