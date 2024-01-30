import React from 'react'
// props é um objeto que contém todos os atributos passados para o componente
const ShowUserName = (props) => {
  return (
    <div>
        <h2>O nome do usuário é: {props.nome}</h2>

    </div>
  )
}

export default ShowUserName