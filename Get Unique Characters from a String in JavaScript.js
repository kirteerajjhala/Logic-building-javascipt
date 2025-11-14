let str = "kirteerajjhala"
let uniquChar =[]
for (const element of str) {
    if (!uniquChar.includes(element)) {
        uniquChar.push(element)
    }
}
console.log(uniquChar.join(""))