//initial inputs (colors, size, rows columns, etc)
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const rows = document.getElementById('inputHeight');
const columns = document.getElementById('inputWidth');

// making the Grid
$('#sizePicker').submit(function(e) {
  e.preventDefault();
  makeGrid(rows, columns);
})


function makeGrid(rows, columns) {
  $('tr').remove();
  for(let x = 0; x < rows.value; x++){
  const row = table.insertRow(x);
    for(let y = 0; y < columns.value; y++ ){
      let cell = row.insertCell(y);
      cell.addEventListener("click", function(e){
        cell.style.backgroundColor = color.value;
      });
    }
  }
}


//selecting colors
function addColor() {
  table.innerhtml = '';
  let coloredInCell = document.querySelector('td')
  for (let z = 0; z < coloredInCell.length; z++) {
    const color = document.getElementById('colorPicker');
    addColor().addEventListener("click", function(e){
      event.target.style.backgroundColor = color.value;
    })
  }

}
