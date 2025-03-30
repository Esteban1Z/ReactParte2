import { useState } from 'react'
const AddNew = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
  
    const addName = (event) => {
        event.preventDefault()
        console.log('button clicked', event.target)
        const nameObject = {
          id: persons.length + 1,
          name: newName,  
          number: newNumber, 
         }
         persons.map(person => person.name)
    
         if (persons.map(person => person.name).includes(newName)) {
          alert(`${newName} is already added to phonebook`)
          return
        }
        setPersons(persons.concat(nameObject))
        setNewNumber('')
        setNewName('')
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