import data from '../data/db.json'
import Card from './card'
import React, { useState } from 'react';



function Main() {
  const [users,setUsers] = useState(data)

  function AddNewObj() {
    setUsers([...users,{
      "title": "AAAAAAAAAAAA",
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/954.jpg",
        "despretion": "AAAAAAAAAAAAAAA",
        "name": "AAAAAAAAAAAAAAAAA",
        "rate": 58,
        "id": "1"
    },])
  }
  return (
    <section className='main'>
   
      {
        users.map((item) =>
          <Card
          
            title={item.title}
            avatar={item.avatar}
            despretion={item.despretion}
            name={item.name}
          />)
      }
      <button onClick={AddNewObj}>add</button>
    </section>
  )
}
export default Main;