import { Gadget } from "./gadget.js"
import { Smartphone } from "./smartphone.js"

const pager = new Gadget("Motorola", "s600", 1998)
pager.getInfo()

const mobilePhone = new Smartphone("Google", "Pixel 8", 2024, "Android 15")
mobilePhone.getInfo()

console.log(pager.year)
pager.year = 2020
console.log(pager.year)
pager.year = 1990
console.log(pager.year)

console.log(mobilePhone.operatingSystem)
mobilePhone.operatingSystem = "iOS"
console.log(mobilePhone.operatingSystem)
mobilePhone.operatingSystem = "Windows"
console.log(mobilePhone.operatingSystem)

const mobilePhone2 = new Smartphone("Samsung", "S25 ultra", 2025, "Android 16")

console.log(Gadget.getOldestGadget([pager, mobilePhone, mobilePhone2]))