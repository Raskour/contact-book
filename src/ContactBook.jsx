import { useState } from "react";

const ContactBook = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contactDetail, setContactDetail] = useState([]);
    const [edit, setEdit] = useState()

    function handleAddContact(e) {
        e.preventDefault();
setContactDetail([...contactDetail, {name, address}])
setName('')
    setAddress('')

    }

    function handleEdit(){

    }
  return (
    <div>
      <h1>Contact Book</h1>
      <form onSubmit={handleAddContact}>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <label>Address</label>
        <input name="address" value={address} onChange={(e) => setAddress(e.target.value) }/>
        <button>Add</button>
        
      </form>
      <div>
        {contactDetail.map((contact, index) => (
            <div key={index} style={{border:'2px solid black', height:'200px', width:'200px'}}>
<strong>{contact.name}</strong> - {contact.address}
<div>
<button onEdit={handleEdit}>Edit</button>
</div>
<label >Name</label>
<input value={name} onChange={(e) => setName(e.target.value)}/>
<label >Address</label>
<input value={address} onChange={(e) => setName(e.target.value)}/>
<button>Save</button>
            </div>
        ))}
      </div>
    </div>
  );
}

export default ContactBook;