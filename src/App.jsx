import axios from 'axios';
import { useEffect, useState } from 'react'
import swal from 'sweetalert';
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {


  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then((res) => setUsersList(res.data));
  }, [])

  console.log(usersList)

  const getUsers = () => {
    axios.get(`https://users-crud.academlo.tech/users/`)
      .then((res) => setUsersList(res.data));
  }

  const userSelect = (user) => {
    setUserSelected(user)
    swal({
      title: "User selected",
      icon: "success",
      timer: "1500",
    })
  }
  return (
    <div className="App">
      < UsersForm getUsers={getUsers} userSelected={userSelected} userSelect={userSelect} />
      < UsersList getUsers={getUsers} usersList={usersList} userSelect={userSelect} />
    </div>
  )
}

export default App
