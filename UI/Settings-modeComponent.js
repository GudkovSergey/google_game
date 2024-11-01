import { startGame } from "../State/Data.js";

export function SettingsMode(){
    const element =document.createElement('div');
    const startButtonElement =document.createElement('button');
    startButtonElement.append('START 🚀')
    startButtonElement.addEventListener('click',()=>{
        startGame()
    })
const gridSizeElement =document.createElement('select');
const gridSizeOptionElement =document.createElement('option');
gridSizeOptionElement.append('4x4')
gridSizeElement.append(gridSizeOptionElement)
element.append(gridSizeElement,startButtonElement,startButtonElement)

    return element
}