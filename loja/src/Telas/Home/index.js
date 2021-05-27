import React, { useEffect, useState } from "react";
import './style.css'

import {pegarPessoas} from '../../services/api'

export default function App() {
  const [usuarios, setUsuarios] = useState([])

  async function Usuario(){
    await pegarPessoas()
    .then(res => {
      console.log(res.data)
      setUsuarios(res.data)})
    .catch(err => console.log(err))
  }

  useEffect(() => {
    Usuario()
  }, [])


  return (
    <div style={{width: '100%'}}>
      <h1>Se a terra é redonda pq se chama planeta e não redondeta?</h1>
      <img src = "https://cdn.dicionariopopular.com/imagens/meme-dorime-og.jpg" style={{width: '300px', height: '300px'}}/>
      {usuarios.map(element => 
        <div id="div">
          <text>nome: {element.nome}</text>
          <br />
          <text>rg: {element.rg}</text>
          <br />
          <text>cpf: {element.cpf}</text>
          <br />
          <br />
        </div>
        )}
        <iframe src="https://www.youtube.com/watch?v=3FF3R5pw4Rom" title="W3Schools Free Online Web Tutorials" width="100%" height="300"/>
    </div>
  )
}