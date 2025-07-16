import { loginuser, logout, registeruser } from "../database/user_db.js"

let loginform = document.getElementById("log_form")
// console.log(loginform);
if (loginform) {
    loginform.addEventListener("submit", (e) => {
        e.preventDefault()
        // console.log("clicked..");
        let uemail = document.getElementById("email").value
        let upass = document.getElementById("password").value

        let res=loginuser(uemail,upass)
        if(res==true){
            sessionStorage.setItem("user_email",uemail)
            window.location.href="home.html"
        }
        else if(res==false){
            alert("email and password does not match")
        }
        else{
            alert("email does not exist")
        }

    })
}

let regform = document.getElementById("reg_form")
// console.log(regform);

if (regform) {
    regform.addEventListener("submit", (e) => {
        e.preventDefault()
        // console.log("clicked..");
        let uname = document.getElementById("name").value
        let uemail = document.getElementById("email").value
        let upass = document.getElementById("password").value
        let repass = document.getElementById("retype_pass").value

        if(upass!=repass){
            alert("enter same password")
            return
        }
        let regusers = { 'uname':uname,'uemail': uemail, 'upass': upass }
        // console.log(regusers)
        let res=registeruser(regusers)
        // console.log(res);
        
        if(res==true){
            alert("email already exists......")
            return
        }
        else{
            alert("registered successfully")
            window.location.href="index.html"
        }
    })
}
let a_logout=document.getElementById("logout")
// console.log("hii");
if(a_logout){
a_logout.addEventListener("click",()=>{
    // console.log("click");
    logout()
    window.location.href="index.html"
})
}
