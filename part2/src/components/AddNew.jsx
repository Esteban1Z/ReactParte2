import { useState } from 'react'
import axios from 'axios'
import noteService from "../services/notes";

const AddNew = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const addName = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const nameObject = {
          name: newName,  
          number: newNumber, 
         }
         persons.map(person => person.name)
        
         if (persons.map(person => person.name).includes(newName)) {
          window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
          const person = persons.find(p => p.name === newName);
          axios
          .put(`http://localhost:3001/persons/${person.id}`, nameObject)
          .then((response) => {
          setPersons(persons.map(p => p.id !== person.id ? p : response.data))
          return response.data
          })}

          else {
          
        noteService
        .create(nameObject)
        .then(response => {
        setPersons(persons.concat(response.data))

      })}


      }
    
      const handleNameChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
      }
    
      const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
      }
  
    return (
    <div>
      <h2>Add New</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default AddNew;