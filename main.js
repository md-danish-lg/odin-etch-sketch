function createGrid(rows){
    let mainContainer = document.querySelector(".main-container");


    boxNumber = 0;
    for(let i = 0; i < rows; i++){
        let row = document.createElement("div");

        for (let j = 0; j < rows; j++){
            boxNumber++;
            let box = document.createElement("div");
            box.classList.add("grid-box")
            box.id = "box" + boxNumber;
            box.style.border = "1px solid black";
            box.style.backgroundColor = "white";
            box.style.width = "5vw";
            box.style.height = "12vh";

            box.addEventListener("mouseenter", () => {

                if (box.style.backgroundColor === "white" || box.style.backgroundColor === "") {
                    box.style.backgroundColor = `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, 0.5)`;
                }
            });

            
            box.addEventListener("mouseleave", () => {
                setTimeout(() => {
                    box.style.backgroundColor = "white";
                }, 5000);
            });
            row.appendChild(box);
        }


        mainContainer.appendChild(row)
        

    }
    
}


function getRandomColor(){
    return Math.floor(Math.random() * 256);

}
function startGame(){
    createGrid(10)   
}


startGame();





