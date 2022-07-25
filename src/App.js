import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'

const App = () => {
  const usersData = [
    {id: 1, name: 'John', username: 'johndoe'},
    {id: 2, name: 'Rick', username: 'richie'},
    {id: 3, name: 'Mary', username: 'bloodymary'},
  ]

  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
