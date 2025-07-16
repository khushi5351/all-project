let users = []

export function loginuser(email, password) {
    let existinguser=userbyemail(email)
    if(existinguser){
        if(existinguser.upass==password){
            return true
        }
        else{
            return false
        }
    }
    else{
        return null
    }
}

export function registeruser(newuser) {
    let result = userbyemail(newuser.uemail)
    console.log(result);

    if (result) {
        return true
    }
    else {
        users.push(newuser)
        localStorage.setItem("my_users", JSON.stringify(users))
        return false
    }
}
export function userbyemail(useremail) {
    users = JSON.parse(localStorage.getItem("my_users")) || []
  
    for (let i = 0; i < users.length; i++) {
        if (users[i].uemail === useremail) {
            return users[i]
        }
    }
    return null
}
export function logout(){
    sessionStorage.removeItem("user_email")
}