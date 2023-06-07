export const ContactList = ({ contacts, deleteContact, key }) => {
  return (
    <div>
      <p>Contacts</p>
      <ul>
        {contacts.map(contact => (
          <li key={key}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => deleteContact(contact.id)} type="button">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
