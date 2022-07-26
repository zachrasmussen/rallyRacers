import { racer } from "./controller.js"


export const AppState = {

    racers: [
        new racer('racer-1', '🚗', 1, 0,),
        new racer('racer-2', '🚙', 2, 0,),
        new racer('racer-3', '🏎', 3, 0,),
        new racer('racer-4', '🚕', 4, 0,)
    ]
}

let controller = new Controller()