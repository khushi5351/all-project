let contacts=[]

export function addcontact(contact){
getallcontact()
contact['uemail']=getuseremail()
contacts.push(contact)
localStorage.setItem("my_contact",JSON.stringify(contacts))

}

export function getallcontact(){
    contacts=JSON.parse(localStorage.getItem("my_contact")) || []
    return contacts;
}
export function getuseremail(){
    return sessionStorage.getItem("user_email")
}
export function getmycontacts(){
    let mycontacts=[]
    let currentemail=getuseremail()
    contacts=getallcontact()
    for(let i=0;i<contacts.length;i++){
        if(contacts[i].uemail==currentemail){
            let contact=contacts[i]
            let contact1={name:contact.name,phone:contact.phone,city:contact.city}
            mycontacts.push(contact1)
        }
    }
    return mycontacts;
}