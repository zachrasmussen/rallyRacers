import { AppState } from "./appState.js";

function _drawRacers() {
    let racers = AppState.racers
    let template = ''
    racers.forEach(racer => template += racer.Template)
    document.getElementById('racers').innerHTML = template
}

function _moveRacers() {

}

class Controller {
    constructor() {
        _drawRacers()
        setInterval(this._drawRacers, 100)
    }
}