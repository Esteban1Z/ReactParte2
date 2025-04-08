import noteService from "../services/notes";

const PersonDelete = ({ setPersons, persons, id, contextNotification}) => {
  const handleDelete = () => {
    const person = persons.find(p => p.id === id);
    if (!person) return;

    if (window.confirm(`Delete ${person.name}?`)) {
      noteService.deletePerson(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
        })
        .catch(err => {
          alert("Error deleting person");
          contextNotification("error", `Error deleting person ${person.name}`);
        });
    }
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default PersonDelete;
