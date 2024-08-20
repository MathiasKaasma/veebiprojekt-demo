function ContactCard({ name, age }) {
  return (
    <div className="contact-card">
      <h4>{name}</h4>
      <p>Vanus: {age}</p>
    </div>
  );
}

export default ContactCard;
