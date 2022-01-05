import {useState, React} from 'react'

export default function Dashboard(){
    //const [state, setstate]= useState(); Asi podemos usar los hooks de react
    const [nota, setNota]= useState([
        {id:1, title:'nota 1', body:'Hola'},
        {id:2, title:'nota 2', body:'Hi'},
        {id:3, title:'nota 3', body:'Bonjour'},
        {id:4, title:'nota 4', body:'Haa'},
        {id:5, title:'nota 5', body:'Ey'},

    ]);
    //Si quisiera modificar un hook, tengo que usar el setName para asi poder
    //hacer las modificaciones del mismo
    const changeState=()=>{
        const n1 = {id:6, title:'nota 6', body:'New change'};
        setNota(nota.concat(n1));
    }
    
    return (
        <div>
            <h1>Hola</h1>
            <pre>{JSON.stringify(nota)}</pre>
            <h3>Listar un objeto</h3>
            <ul>
            {
                nota.map(n=>{
                    return <li>{n.id} -Titulo: {n.title} : {n.body}</li>;
                })
            }
            </ul>
            <button onClick={()=>changeState()}>Cambiar estado</button>


        </div>
        
    )
}