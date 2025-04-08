import { useState, useEffect } from 'react'
import AddNew from './components/AddNew'
import Contacts from './components/Contacts.jsx'
import Filter from './components/Filter'
import noteService from './services/notes'
import Notification from './components/Notification'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [searchName, setSearchName] = useState('')
  const [message, setMessage] = useState('')
  const [sign, setSign] = useState('')
  const [context, setContext] = useState('')


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

  const contextNotification = (sign, context) => {
    setContext(context)
    setSign(sign)

    setTimeout(() => {
      setContext(null)
      setSign(null)
    }, 5000)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      <Filter searchName={searchName} setSearchName={setSearchName}/>
      </div>
      <Notification sign={sign} context={context}/>
      <AddNew persons={persons} setPersons={setPersons} contextNotification={contextNotification}/>
      <h2>Contacts</h2>
      <Contacts searchName={searchName} persons={persons} setPersons={setPersons} setSign={setSign}
                setContext={setContext} contextNotification={contextNotification}
      />
    </div>
  )
}

export default App