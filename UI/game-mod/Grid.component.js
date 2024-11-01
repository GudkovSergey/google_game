import { getGridSize, getPositionGoogle } from "../../State/Data.js";

export const Grid = ()=>{
    const gridSize = getGridSize()
    const positionGoogle = getPositionGoogle()
    const element = document.createElement('table')
    for (let y = 0; y <gridSize.row ; y++) {
        const row = document.createElement('tr');
        
        for (let x = 0; x < gridSize.column; x++) {
            const cell = document.createElement('td');
            cell.classList.add('rowStyle')
            if(x===positionGoogle.x && y===positionGoogle.y){
                cell.append("G")
            }
            row.append(cell)

            
        }
        element.append(row)
        
        
    }
    return element
}