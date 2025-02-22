import { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const nameObject = {
      content: newName,   
     }
    setPersons(name.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const personsToShow = persons.map (person => {
    return {
      name: person.name,
      number: person.number
    }
  }
  )
  console.log(personsToShow)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <ul>
        {personsToShow.map(persons => persons.name)}
      </ul>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App