
let submit = document.getElementById('submit');
let tableContainer = document.getElementById('table-container');



const handleSubmit = (e)=>{
    e.preventDefault(); 

    tableContainer.innerHTML = '';
    let row = document.getElementById('row');
    let col = document.getElementById('column');
    const numRows = parseInt(row.value);
    const numCols = parseInt(col.value);

    const table = document.createElement('table');
    // table.setAttribute("border","1px");
    // table.setAttribute("cell")
    for(let i=0; i<numRows; i++){
        const tr = document.createElement('tr')
        for(let j = 0; j<numCols; j++){
            const td = document.createElement('td');
            // td.textContent = "Explorin";
            tr.appendChild(td);
        }
        table.appendChild(tr);

    }
    tableContainer.appendChild(table);
    


}
submit.addEventListener('click', handleSubmit);


