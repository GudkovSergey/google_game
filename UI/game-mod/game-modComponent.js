import { Grid } from "./Grid.component.js";

export function GameMode(){
    const element =document.createElement('div');
    
element.append(Grid())
    return element
}