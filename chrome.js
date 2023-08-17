let myleads = []
let inputel = document.getElementById("inp")
const inputb = document.getElementById("inputbtn")
const unord = document.getElementById("ulel")

inputb.addEventListener("click", function() {
    myleads.push(inputel.value)
    inputel.value = "" 
    //onfocus="this.value=''"
    render()
})

function render() {
    let listitems = "" 
    for(let i = 0; i<myleads.length; i++) {
        listitems += `
        <li>
        <a target='_blank' href ='${myleads[i]}'>
            ${myleads[i]}
            </a>
            </li>
            `
    }
    unord.innerHTML = listitems
}
