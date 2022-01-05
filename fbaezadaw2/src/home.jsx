import {useState, React} from 'react'

export default function Dashboard(){
    //const [state, setstate]= useState(); Asi podemos usar los hooks de react
    const initialNote ={
        id:"",
        title:"",
        body:""
    }

    const [notas, setNotas]= useState([
        {id:1, title:'nota 1', body:'Hola'},
        {id:2, title:'nota 2', body:'Hi'},
        {id:3, title:'nota 3', body:'Bonjour'},
        {id:4, title:'nota 4', body:'Haa'},
        {id:5, title:'nota 5', body:'Ey'},

    ]);
    const [note, setNote] = useState(initialNote);

    //Si quisiera modificar un hook, tengo que usar el setName para asi poder
    //hacer las modificaciones del mismo
    // const changeState=()=>{
    //     const n1 = {id:6, title:'nota 6', body:'New change'};
    //     setNotas(notas.concat(n1));
    // }
    //   <button onClick={()=>changeState()}>Cambiar estado</button><br/>
    const addNote=(ev)=>{  
        ev.preventDefault();
        console.log("submit");
        //diferentes formas de mostrar las iteraciones de notas 
        console.log(notas.map(note => note.id));
        console.log(...notas.map(note => note.id));
        //calcular el max del arrary para sacar el valor id del siguiente input
        console.log(Math.max(...notas.map(note => note.id)));
        console.log(Math.max(...notas.map(note => note.id))+1);


        if(note.title == ""  || note.body=="") {return}
        setNotas([
            ...notas,
            {
                ...note,
                id:Math.max(...notas.map(note => note.id))+1
            }
        ])

    }
    
    return (
        <div>
            <h1>Hola</h1>
            <pre>{JSON.stringify(notas)}</pre>
            <h3>Listar un objeto</h3>
            <ul>
            {
                notas.map(n=>{
                    return <li key={n.id}>{n.id} -Titulo: {n.title} : {n.body}</li>;
                })
            }
            </ul>
            

            <form onSubmit={(ev)=>addNote(ev)}>
                <label htmlFor=''>Titulo
                    <input id='title' type="text" onChange={ (ev)=>setNote({...note, title: ev.target.value})} />
                </label><br/>
                <label htmlFor=''>Accion
                    <input id='body' type="text" onChange={ (ev)=>setNote({...note, body: ev.target.value})}/>
                </label>
                <button >Save</button>


            </form>


        </div>
        
    )
}