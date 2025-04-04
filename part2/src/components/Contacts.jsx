import noteService from "../services/notes";

const Contacts = ({ searchName, persons, setPersons }) => {
  const personsToShow = persons.filter(person =>
    searchName === '' || person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const handleDelete = id => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      noteService.deletePerson(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
        })
    }
  };

  return (
    <div>
      <ul>
        {personsToShow.map(person => (
          <li key={person.id}>
            {person.name}, {person.number}
            <button onClick={() => handleDelete(person.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
