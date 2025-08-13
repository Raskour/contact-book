import { useState } from "react";

const ContactBook = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactDetail, setContactDetail] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null)

  function handleAddContact(e) {
    e.preventDefault();
    setContactDetail([...contactDetail, { name, address }]);
    setName("");
    setAddress("");
  }

  function handleEdit(index) {
    setName(contactDetail[index].name);
    setAddress(contactDetail[index].address);
    setEdit(true);
    setEditIndex(index)
  }

  
  function handleSave(){
setContactDetail(prev => {
    const updated = [...prev]
    updated[editIndex] = {name, address};
    return updated
})
setEdit(false)
  setEditIndex(null);
  setName('')
    setAddress('')
  }

  function handleDelete(index){
const deletedContact = contactDetail.filter(contact => contact.index === index)
setContactDetail(deletedContact)
  }
  
  return (
    <div>
      
        
          <h1>Contact Book</h1>
          <form onSubmit={handleAddContact}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Address</label>
            <input
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button>Add</button>
          </form>
{edit === false ? (
    <div>
          <div>
            {contactDetail.map((contact, index) => (
              <div
                key={index}
                style={{
                  border: "2px solid black",
                  height: "200px",
                  width: "200px",
                }}
              >
                <strong>{contact.name}</strong> - {contact.address}
                <div>
                    
            <button onClick={() =>handleEdit(index)}>Edit</button>
            <button onClick={() =>handleDelete(index)}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          
          
        </div>
      ) : (
        <div style={{border: "2px solid black", width:'200px', height:'200px'}}>
          <label>Name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Address</label>
          <input
            value={address}
            address = "address"
           onChange={(e) => setAddress(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          
        </div>
      )}
    </div>
  );
};

export default ContactBook;
