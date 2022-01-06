import {useState, React} from 'react'
import Form from './components/Form';
import Notes from './components/Notes'


// index.js
//   Home.jsx
//      --Dashboard
//      --Form
//      --Notes
//          --Note





export default function Dashboard(){

    const [notas, setNotas]= useState([
        {id:1, title:'nota 1', body:'Hola'},
        {id:2, title:'nota 2', body:'Hi'},
        {id:3, title:'nota 3', body:'Bonjour'},
        {id:4, title:'nota 4', body:'Haa'},
        {id:5, title:'nota 5', body:'Ey'},

    ]);

    
    return (
        <div className='container'>
            <h3 className='title mt-5 has-text-centered'>App Notas</h3>
            <Form notas={notas} setNotas={setNotas}></Form>

            <Notes notas={notas} setNotas={setNotas}></Notes>



        </div>
        
    )
}