import { Gadget } from "./gadget.js"

export class Smartphone extends Gadget {
    constructor(brand, model, year, operatingSystem) {
        super(brand, model, year)
        this._operatingSystem = operatingSystem
    }
    getInfo() {
        console.log(this.brand + " " + this.model + " " + this.year + " " + this._operatingSystem)
    }
    get operatingSystem() {
        return this._operatingSystem
    }

    set operatingSystem(system) {
        switch (system) {
            case "iOS":
                this._operatingSystem = system
                break;
            case "Android":
                this._operatingSystem = system
                break;
            case "HarmonyOS":
                this._operatingSystem = system
                break;
            default:
                console.log("Error: Incorrect OS")
        }

    }
}