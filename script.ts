class Carro{
    marca: string
    modelo: string
    categoria: string
    ano: number
    quilometragem: number
    valor: number

    constructor(marca: string, modelo: string, categoria: string, ano: number, quilometragem: number, valor: number){
        this.marca = marca
        this.modelo = modelo
        this.categoria  = categoria
        this.ano = ano
        this.quilometragem = quilometragem
        this.valor = valor
    }
}

let testPost = new Carro("Hyundai","Veloster","Carro", 2013, 32000,52076)
let testPut = new Carro("test","test","test", 1, 10,111)

4


const apiEndpoint: string = 'https://apigenerator.dronahq.com/api/tCJDDeik/data'

function Get() {
    return fetch(apiEndpoint)
    .then(response => response.json())
    .then((data) => console.log(data))
}

async function Post(data = {}){
    const response = await fetch(apiEndpoint, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
        });
        return response.json();
}

function GetById(id: string) {
    return fetch(`${apiEndpoint}/${id}`)
    .then(response => response.json())
    .then((data) => console.log(data))
}



async function Delete(id: number){
    const response = await fetch(`${apiEndpoint}/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        });
        return response.json();
}

async function Put(id: number,data = {}){
    const response = await fetch(`${apiEndpoint}/${id}`, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
        });
        return response.json();
}

