import { useState } from "react";
import ContactCard from "../components/ContactCard";

function Meist() {
  const [contacts, setContacts] = useState([
    { name: "Mathias", age: 21 },
    { name: "Martin", age: 20 },
  ]);

  return (
    <div>
      <h2>Meist</h2>
      <p>Tekst teie endi kohta!</p>
      {contacts.map((contact) => (
        <ContactCard name={contact.name} age={contact.age} />
      ))}
    </div>
  );
}

export default Meist;
