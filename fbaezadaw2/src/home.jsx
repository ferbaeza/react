import {useState, useEffect, React} from 'react'
import Form from './components/Form';
import Notes from './components/Notes'
import axios from 'axios'


// index.js
//   Home.jsx
//      --Dashboard
//      --Form
//      --Notes
//          --Note





export default function Dashboard(){
    useEffect(() => {
        axios.get('http://festivales.test/notes/notes')
        .then((payload)=>{
            console.log(payload);
            setNotas(payload.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])

    const [notas, setNotas]= useState([
        {id:1, title:'nota 1', body:'Hola'},

    ]);

    
    return (
        <div className='container'>
            <h3 className='title mt-5 has-text-centered'>App Notas</h3>
            <Form notas={notas} setNotas={setNotas}></Form>

            <Notes notas={notas} setNotas={setNotas}></Notes>



        </div>
        
    )
}