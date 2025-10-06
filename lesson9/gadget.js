export class Gadget {
    constructor(brand, model, year) {
        this.brand = brand
        this.model = model
        this._year = year
    }
    getInfo() {
        console.log(this.brand + " " + this.model + " " + this._year)
    }
    get year() {
        return this._year
    }
    set year(value) {
        if (value <= 2025 && value > 2000) {
            this._year = value
        } else {
            console.log("Error: incorrect year input")
        }

    }
    static getOldestGadget(gadgetsArray) {
        const oldestGadget = gadgetsArray.reduce((prev, current) => {
            return (current.year < prev.year) ? current : prev;
        })
        return oldestGadget
    }
}