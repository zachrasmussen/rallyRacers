export class Racer {

    constructor(name, img, number, distance, go) {
        this.name = name
        this.img = img
        this.number = number
        this.distance = distance
        this.go = go
    }


    get Template() {
        return `
        <div id="car-1" class="col-12 ps-2 py-3 text-light my-3 bg-dark border border-3 border-dark">
             <h1>🏎</h1>
        </div>
        <div id="car-2" class="col-12 ps-2 py-3 text-light my-3 bg-dark border border-3 border-dark">
            <h1>🚙</h1>
        </div>
        <div id="car-3" class="col-12 ps-2 py-3 text-light my-3 bg-dark border border-3 border-dark">
            <h1>🚗</h1>
        </div>
        <div id="car-4" class="col-12 ps-2 py-3 text-light my-3 bg-dark border border-3 border-dark">
            <h1>🚕</h1>
        </div>
        <div class="col-12 d-flex justify-content-center">
            <button class="col-3 py-3 btn btn-outline-dark mb-3" onclick="start">Start</button>
        </div>
    `
    }
}