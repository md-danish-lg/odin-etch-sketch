function createGrid(rows){
    let mainContainer = document.querySelector(".main-container");
    let boxSize = (1200 / rows) - 2; 


    let boxNumber = 0;
    for(let i = 0; i < rows; i++){
        let row = document.createElement("div");

        for (let j = 0; j < rows; j++){
            boxNumber++;
            let box = document.createElement("div");
            box.classList.add("grid-box")
            box.id = "box" + boxNumber;
            box.style.border = "1px solid black";
            box.style.backgroundColor = "white";
            box.style.width = boxSize + "px";
            box.style.height = boxSize + "px";

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


function removeGrid(){
    let mainContainer = document.querySelector(".main-container");
    mainContainer.replaceChildren();

}

function startGame(){
    let number = 16;
    createGrid(number)   


    let changeButton = document.querySelector(".change-grid")
    changeButton.addEventListener("click", ()=>{

        number = prompt("Enter the number of Rows X Columns in the grid (1-100): ");
        while (!(number > 0 && number <= 100)){
            number = prompt("Enter the number of Rows X Columns in the grid (1-100): ");
        }
        removeGrid();
        createGrid(number);


    })
}


startGame();





