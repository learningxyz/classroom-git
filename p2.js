/*function linda() {
    let f = "nitya "
    let l = "pal"
    let n = f + l
    console.log(n)
}

linda()
let points = 3
function add() {
    points += 3
}
function minus() {
    points -= 1
}
add()
add()
add()
minus()
minus()
console.log(points)*/
/*
let err = document.getElementById("error")
function purchase() {
    err.innerHTML = "Something went wrong please try again"
}*/

let card = [6,8]
card.push(4)
card.pop(4)
console.log(card)

let l = ["tuvalu", "india", "usa", "indonesia", "monaco"]
l.pop()
l.push("pakistan")
l.shift()
l.unshift("china")
console.log(l)

const cont = document.getElementById("container")

function buy() {
    cont.innerHTML = "<p>tahnks for buying.</p>"
}

