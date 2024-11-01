import { GAME_STATUSES } from "../State/GAME_STATUSES.js";
import { GameMode } from "./game-mod/game-modComponent.js";
import { LoseMode } from "./lose-modeComponent.js";
import { SettingsMode } from "./Settings-modeComponent.js";

export const Game =(status)=>{
    const element = document.createElement('div')
    switch (status) {
        case GAME_STATUSES.SETTINGS:
            const settingsModeElement = SettingsMode()
            element.append(settingsModeElement)
            break;
        case GAME_STATUSES.IN_PROGRESS:
            const gameModeElement = GameMode()
            element.append(gameModeElement)
            break;
        case GAME_STATUSES.LOSE:
            const loseModeElement = LoseMode()
            element.append(loseModeElement)
            break;
        case GAME_STATUSES.WIN:
            const winModeElement = 'WIN!'
            element.append(winModeElement)
            break;
        default:
            element.append('State is Invalid!')
    }
    
    return element
}