let n1 = 7
let n2 = 5
document.getElementById("num1").textContent = n1
document.getElementById("num2").textContent = n2

let a = document.getElementById("answer")

function add() {
    a.textContent = n1 + n2
} 
function subt() {
    a.textContent = n1 - n2 
}
function mult() {
    a.textContent = n1 * n2 
}
function div() {
    a.textContent = n1 / n2 
}
function reset() {
    a.textContent = ""
}