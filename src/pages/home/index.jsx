//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'


// React Hooks
import { useEffect, useState, useRef } from 'react'; //executa assim q a pagina abrir

import './style.css'
import Trash from "../../assets/img_lixeira.svg"  //importar imagen, sempre com letra maiuscula

import api from "../../services/api"
import { use } from 'react';

function Home() {
  //const [count, setCount] = useState(0)

  const [users, setUsers] = useState([]);

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  //let users = [];

  async function getUsers() {
    const usersFromAPI = await api.get("/usuarios");

    setUsers(usersFromAPI.data);
    //console.log("Dados chegaram......")
    //console.log(users)

  }

  async function createUsers() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    });
    console.log(inputName);

    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (  // dentro do return codigo HTML + um ou outro JS

    <div className='container'>
      <form>

        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name="name" type="text" ref={inputName} />
        <input placeholder='Idade' name='age' type="number" ref={inputAge} />
        <input placeholder='E-mail' name='email' type="email" ref={inputEmail} />

        <button type='button' onClick={createUsers}>Cadastrar</button>

      </form>

      {users.map(user => (


        <div key={user.id} className='card'>
          <div>
            <p>Nome:  <span>{user.name}</span></p>
            <p>Idade:  <span>{user.age}</span></p>
            <p>E-mail:  <span>{user.email}</span></p>
          </div>

          <button>
            <img src={Trash} alt="Imagem_lixeira" />
          </button>
        </div>


      ))}



    </div>

  )
}

export default Home
