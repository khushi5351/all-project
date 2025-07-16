import { useEffect, useState } from "react";
import { getUserbyuserId, deleteContact, updateContact } from "../apis/handle_apis";

function Showcontact() {
    const [contact, setContact] = useState([]);

    async function handleContacts() {
        const userId = sessionStorage.getItem("userId");
        const res = await getUserbyuserId(userId);
        setContact(res.data)
    }

    async function handleDelete(id) {
        await deleteContact(id);
        handleContacts();
    }
    async function handleupdate(id) {
        await updateContact(id);
        handleContacts();
    }

    useEffect(() => {
        handleContacts();
    }, []); 

    return (
        <>
            <h2>All Contacts</h2>
            <table border="2">
                <thead>
                    <tr>
                        <th>Contact Name</th>
                        <th>Contact Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map((c) => (
                            <tr key={c.id}>
                                <td>{c.name}</td>
                                <td>{c.number}</td>
                                <td>
                                    <button onClick={() => handleDelete(c.id)}>Delete</button>
                                    <button onClick={() => handleupdate(c.id)}>Update</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Showcontact;
