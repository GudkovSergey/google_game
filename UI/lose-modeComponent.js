export function LoseMode(){
    const element =document.createElement('div');
    const playAgainButtonElement = document.createElement('button')
    playAgainButtonElement.append('Play Again!')
    
element.append('LOSE !',playAgainButtonElement)
    return element
}