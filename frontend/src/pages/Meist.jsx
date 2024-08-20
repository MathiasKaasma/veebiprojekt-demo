import ContactCard from "../components/ContactCard";

function Meist() {
  return (
    <div>
      <h2>Meist</h2>
      <p>Tekst teie endi kohta!</p>
      <ContactCard name={"Mathias"} age={21} />
      <ContactCard name={"Martin"} age={20} />
    </div>
  );
}

export default Meist;
