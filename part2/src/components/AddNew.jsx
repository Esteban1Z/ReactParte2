import { useState } from 'react'
import axios from 'axios'
import noteService from "../services/notes";

const AddNew = ({persons, setPersons, contextNotification}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      name: newName,  
      number: newNumber, 
    }

    const existingPerson = Array.isArray(persons)
      ? persons.find(person => person.name === newName)
      : null;

    if (existingPerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        axios
          .put(`http://localhost:3001/persons/${existingPerson.id}`, nameObject)
          .then((response) => {
            setPersons(persons.map(p => p.id !== existingPerson.id ? p : response.data))
            contextNotification("success", `Updated ${newName}`)
          })
          .catch(() => {
            contextNotification("error", `Error updating ${newName}`)
          });
      }
    } else {
      noteService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          contextNotification("success", `Added ${newName}`)
        })
        .catch(() => {
          contextNotification("error", `Error adding ${newName}`)
        });
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Add New</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddNew;
