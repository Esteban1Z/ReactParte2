import PersonDelete from '../components/delete.jsx'

const Contacts = ({ searchName, persons, setPersons}) => {
  const personsToShow = persons.filter (person =>
    searchName === '' || person.name.toLowerCase().includes(searchName.toLowerCase())
  );


  return (
    <div>
      <ul>
        {personsToShow.map(person => (
          <li key={person.id}>
            {person.name}, {person.number}
            <PersonDelete id={person.id} persons={persons} setPersons={setPersons} />
         </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
