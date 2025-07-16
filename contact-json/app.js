const regForm = document.getElementById("reg_form")
// console.log(regForm);
const logForm = document.getElementById("log_form")
// console.log(logForm);
const conForm = document.getElementById("contact_form")
// console.log(conForm);


if (regForm) {
    regForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const password = document.getElementById("password").value
        const repass = document.getElementById("retype_pass").value

        if (password != repass) {
            alert("enter same password.")
        }

        const user = { name, email, password }

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        const data = await response.json();
        alert("Signup successful. Please login.");
        window.location.href = "index.html"
    })
}

if (logForm) {
    logForm.addEventListener("submit", async (e) => {
        e.preventDefault()

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
        const users = await res.json()

        if (users.length > 0) {
            sessionStorage.setItem("loggedUserId", users[0].id)
            alert("Login successful");
            window.location.href = "home.html";
        }
        else {
            alert("Invalid email or password");
        }
    }
    )
}

if (conForm) {
    conForm.addEventListener("submit", async (e) => {
        e.preventDefault()
        const name = document.getElementById("name").value
        const mobile = document.getElementById("mobile").value
        const city = document.getElementById("city").value

        const userId = sessionStorage.getItem("loggedUserId");
        const contact = { name, mobile, city }

        const resp = await fetch("http://localhost:3000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contact)
        })
        const data = await resp.json()
        alert("contact added.")
        getContacts();
    })
}

async function getContacts() {
    const userId = sessionStorage.getItem("loggedUserId");

    const response = await fetch(`http://localhost:3000/contact?userId=${userId}`);
    const contacts = await response.json();
    console.log(contacts[0]);
    const contactTable = document.getElementById("contact-table");
    // console.log(contactTable);
    if (contactTable) {

        for (let i = 0; i < contacts.length; i++) {
            //       let tr1 = document.createElement("tr")
            //       contactTable.appendChild(tr1)
            // let th1 = document.createElement("th")
            // th1.textContent = "Name"
            // tr1.appendChild(th1)
            // th1.style.border = "2px solid black"
            // let th2 = document.createElement("th")
            // th2.textContent = "Number"
            // tr1.appendChild(th2)
            // th2.style.border = "2px solid black"
            // let th3 = document.createElement("th")
            // th3.textContent = "City"
            // tr1.appendChild(th3)
            // th3.style.border = "2px solid black"
            let tr = document.createElement("tr");
            let contact = contacts[i];
            let tdname = document.createElement("td");
            tdname.textContent = contact.name;
            let tdphone = document.createElement("td");
            tdphone.textContent = contact.mobile;
            let tdemail = document.createElement("td");
            tdemail.textContent = contact.city;
            tr.appendChild(tdname);
            tr.appendChild(tdphone);
            tr.appendChild(tdemail);
            contactTable.appendChild(tr);
        }
    }
}

getContacts();

let btn = document.getElementById("logout")
// console.log(btn);
if (btn) {
    btn.addEventListener("click", () => {
        sessionStorage.removeItem("loggedUserId")
        window.location.href = "index.html"
    })
}