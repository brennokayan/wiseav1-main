import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})


export async function pegarPessoas(){
    const response = await api.get('http://127.0.0.1:8000/pessoas/')

    return response
}

export async function pegarProdutos(){
    const response = await api.get('http://127.0.0.1:8000/produtos/')

    return response
}