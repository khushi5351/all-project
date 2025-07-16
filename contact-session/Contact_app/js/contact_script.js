import { addcontact, getmycontacts, getuseremail } from "../database/contact_db.js"

let formEle = document.getElementById("contact_form")
let tableEle = document.getElementById("contact-table")
console.log(tableEle);

// console.log(formEle);
if(formEle){
formEle.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("hii");
    let name = document.getElementById("name").value
    let phone = document.getElementById("mobile").value
    let city = document.getElementById("city").value
    let contact = { 'name': name, 'phone': phone, 'city': city }
    // console.log(contact);
    addcontact(contact)
    alert("data added successfully")
    formEle.reset()
    // rendercontacts()
})
}
function isloggedin() {
    let user = getuseremail()
    if (!user) {
        alert("you have to login first")
        window.location.href = 'index.html'
    }
}
isloggedin()

function rendercontacts() {
    let contacts = getmycontacts()
    let tr1 = document.createElement("tr")
    let th1 = document.createElement("th")
    th1.textContent = "Name"
    tr1.appendChild(th1)
    th1.style.border = "2px solid black"
    let th2 = document.createElement("th")
    th2.textContent = "Number"
    tr1.appendChild(th2)
    th2.style.border = "2px solid black"
    let th3 = document.createElement("th")
    th3.textContent = "City"
    tr1.appendChild(th3)
    th3.style.border = "2px solid black"
    tableEle.appendChild(tr1)
    for (let i = 0; i < contacts.length; i++) {
        let tr = document.createElement("tr")
        let values = Object.values(contacts[i])
        for (let j = 0; j < values.length; j++) {
            let td = document.createElement("td")
                td.textContent = values[j]
            // console.log(td);
            tr.appendChild(td)
            td.style.border = "2px solid black"
        }
        tableEle.appendChild(tr)
    }
}
rendercontacts()
// let a_show=document.getElementById("show")
// // console.log(a_show);
// a_show.addEventListener("click",()=>{
//     rendercontacts
// })
