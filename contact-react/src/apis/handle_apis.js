import axios from "axios";
import { CONTACT_URL, USER_URL } from "./api";


export async function addUser(user) {
  try {
    const res = await axios.post(`${USER_URL}`);
    console.log(res);
    alert("Register successfully");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function getUser(email, password) {
  try {
    const res = await axios.get(`${USER_URL}?email=${email}&password=${password}`);
    
    if (res.data.length === 1) {
      alert("Login successful");
      sessionStorage.setItem("userId", res.data[0].id);
      return res.data[0];
    } else {
      alert("Invalid email or password");
      return null;
    }
  } catch (error) {
    console.log("Login Error:", error);
    alert("Server error");
    return null;
  }
}

export async function addContact(contact) {
  try {
    const res = await axios.post(`${CONTACT_URL}`, contact);  // ✅ Pass contact
    console.log(res);
    alert("Contact added");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getUserbyuserId(userId) {
   try {
      const res = await axios.get(`${CONTACT_URL}?userId=${userId}`)
      return res;
   } catch (error) {
      console.log("error : ", error);
   }
}

export async function deleteContact(id){
  await axios.delete(`${CONTACT_URL}/${id}`)
}
export async function updateContact(id){
  await axios.patch(`${CONTACT_URL}/${id}`)
}
