import {useState, React} from 'react'


export default function Form({notas, setNotas}) {

    //const [state, setstate]= useState(); Asi podemos usar los hooks de react
    const initialNote ={
        id:"",
        title:"",
        body:""
    }
    

    const [note, setNote] = useState(initialNote);

    const addNote=(ev)=>{  
        ev.preventDefault();
        console.log("submit");
        //diferentes formas de mostrar las iteraciones de notas 
        console.log(notas.map(note => note.id));
        console.log(...notas.map(note => note.id));
        //calcular el max del arrary para sacar el valor id del siguiente input
        console.log(Math.max(...notas.map(note => note.id)));
        console.log(Math.max(...notas.map(note => note.id))+1);


        if(note.title.trim() === ""  || note.body.trim() ==="") {return} // con trim quitamos cualquier espacio antes del input
        setNotas([
            ...notas,
            {
                ...note,
                id: notas.length>0? Math.max(...notas.map(note => note.id))+1 :1 
                //id:  Math.max(...notas.map(note => note.id))+1 // Le he anadimos que si length del id es cero sea 1
            }
        ])
        setNote(initialNote);

    }
    //Si quisiera modificar un hook, tengo que usar el setName para asi poder
    //hacer las modificaciones del mismo
    // const changeState=()=>{
    //     const n1 = {id:6, title:'nota 6', body:'New change'};
    //     setNotas(notas.concat(n1));
    // }
    //   <button onClick={()=>changeState()}>Cambiar estado</button><br/>


    return (
            <form onSubmit={(ev)=>addNote(ev)}>
                <label htmlFor=''>Titulo
                    <input id='title' value={note.title} type="text" onChange={ (ev)=>setNote({...note, title: ev.target.value})} />
                </label><br/>
                <label htmlFor=''>Accion
                    <input id='body'  value={note.body} type="text" onChange={ (ev)=>setNote({...note, body: ev.target.value})}/>
                </label>
                <button >Save</button>


            </form>

    )
}
