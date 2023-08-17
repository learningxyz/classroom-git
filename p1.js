let s = document.getElementById("saveEl")
let countel = document.getElementById("count")

let count = 0

function inc() {
    count += 1
    countel.textContent = count
}
function save() {
    let counts = count + " -  "
    s.textContent += counts
    countel.textContent = 0
    count = 0
}
