function createTable() {
    let rows = prompt("Input number of rows");  // Removed `:` to match Cypress test case
    let cols = prompt("Input number of columns"); 

    rows = parseInt(rows);
    cols = parseInt(cols);

    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid numbers for rows and columns!");
        return;
    }

    let container = document.getElementById("table-container");
    container.innerHTML = ""; 

    let table = document.createElement("table");
    table.border = "1"; 
    table.id = "myTable";

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            td.innerText = `Row-${i} Column-${j}`;  // Fixed formatting
            td.style.padding = "10px"; 
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    container.appendChild(table); 
}
