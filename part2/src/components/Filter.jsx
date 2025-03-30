const Filter = ({ searchName, setSearchName }) => {

  
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setSearchName(event.target.value)
  }
  

  return (
    <div>
      search: <input value={searchName} onChange={handleFilterChange}/>
    </div>
  )
}  

export default Filter;