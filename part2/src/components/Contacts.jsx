const Contacts = ({searchName, persons}) => {
  const personsToShow = persons.filter(person => 
    searchName === '' || person.name.toLowerCase().includes(searchName.toLowerCase())
  )

  return (
    <div>
        <ul>
        {personsToShow.map(persons => <li key={persons.id}>{persons.name}, {persons.number}</li>)}
      </ul>
    </div>
  );
};
export default Contacts;