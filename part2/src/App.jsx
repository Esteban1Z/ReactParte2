import { useState, useEffect } from 'react'
import axios from 'axios'
import AddNew from './components/AddNew'
import Contacts from './components/Contacts.jsx'
import Filter from './components/Filter'
import noteService from './services/notes'
import PersonDelete from './components/delete.jsx'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [searchName, setSearchName] = useState('')


  useEffect(() => {
    console.log('effect')
    noteService
      .getAll()
      .then(response => {
        console.log("data personas es",response)
        setPersons(response.data)
        console.log('render', persons.length, 'notes')
      })
  }, [])
  
  
  const handleDelete = id => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      noteService
      .deletePerson(id)
        .then(() => {
          setPersons(persons.map(persons.filter(p => p.id !== id)));
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      <Filter searchName={searchName} setSearchName={setSearchName}/>
      </div>
      <AddNew persons={persons} setPersons={setPersons}/>
      <h2>Contacts</h2>
      <Contacts searchName={searchName} persons={persons} setPersons={setPersons} 
      />
    </div>
  )
}

export default App