import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";

function Meist() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Andmete laadimine serverist
  useEffect(() => {
    const fetchContacts = async () => {
      const response = await fetch("http://localhost:5000/users");
      const data = await response.json();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  // Uue kasutaja lisamine
  const addContact = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    });

    if (response.ok) {
      const newContact = await response.json();
      setContacts((prevContacts) => [...prevContacts, newContact]);
      setName("");
      setAge("");
    }
  };

  return (
    <div>
      <h2>Meist</h2>
      <p>Tekst teie endi kohta!</p>

      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Nimi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Vanus"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <button type="submit">Lisa kasutaja</button>
      </form>

      {contacts.map((contact) => (
        <ContactCard key={contact.id} name={contact.name} age={contact.age} />
      ))}
    </div>
  );
}

export default Meist;
