import {useState, useEffect, React} from 'react'
import Form from './components/Form';
import Notes from './components/Notes'
import Festivales from './components/Festivales';
import axios from 'axios'


export default function Dashboard(){
    useEffect(() => {
        //axios.get('http://festivales.test/api/index')
        axios.get('http://festivales.test/notes/notes')
        .then((payload)=>{
            console.log(payload.data);
            setNotas(payload.data)
            //setFestivales(payload.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])



    const [notas, setNotas]= useState([

    ]);
    useEffect(() => {
        axios.get('http://festivales.test/api/index')
        //axios.get('http://festivales.test/notes/notes')
        .then((payload)=>{
            console.log(payload.data);
            //setNotas(payload.data)
            setFestivales(payload.data)
        }).catch((error)=>{
            console.log(error)
        })
    }, [])


    const [festivales, setFestivales]= useState([

    ]);

    
    return (
        <div className='container'>
            <h3 className='title mt-5 has-text-centered'>App Notas</h3>
            <Notes notas={notas} setNotas={setNotas}></Notes>
            <Form notas={notas} setNotas={setNotas}></Form>
            <Festivales festivales={festivales} setFestivales={setFestivales}></Festivales>
        </div>
        
    )
}