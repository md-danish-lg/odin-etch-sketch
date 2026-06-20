function createGrid(rows){
    mainContainer = document.querySelector(".main-container");


    for(let i = 0; i < rows; i++){
        row = document.createElement("div");

        for (let j = 0; j < rows; j++){
            box = document.createElement("div");
            box.classList.add("grid-box")
            box.style.border = "1px solid black";
            box.style.width = "5vw";
            box.style.height = "12vh";
            row.appendChild(box);

        }


        mainContainer.appendChild(row)
        

    }
    
}




createGrid(10)
