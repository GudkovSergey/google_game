import { GAME_STATUSES } from "./GAME_STATUSES.js"
let observer = null
export function subscribe(callback){
    observer = callback
}
const _state = {
    status: GAME_STATUSES.SETTINGS,
    settings: {
        gridSize:{
            row:4,
            column:4
        }
    },
    positions:{
        google:{x:0,y:0} ,
        player1: {x:3,y:3},
        player2:{x:2,y:2}
    }
}
export function getPositionGoogle(){
    return _state.positions.google
}

export function getGridSize(){
    return _state.settings.gridSize
}
export function getStatus(){
    return _state.status
}
export const startGame= ()=>{
    _state.status= GAME_STATUSES.IN_PROGRESS
    _teleportGoogle()
    setInterval(escapeGoogle,1000)
    observer()
}
function escapeGoogle(){
    _teleportGoogle()
}
function getRandomInt(max){
    return Math.floor(Math.random()*max)

}
function _teleportGoogle(){
    let newX = getRandomInt(getGridSize().column)
    let newY = getRandomInt(getGridSize().row)
    if(newX===getPositionGoogle().x && newY === getPositionGoogle().y){
        _teleportGoogle()
        return
    }
    _state.positions.google.x=newX;
        _state.positions.google.y=newY;
        observer()
}


