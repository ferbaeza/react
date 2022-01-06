import {useState, React} from 'react'
import Notes from './Notes'

export default function Note({n, deleteNote, updateNote}) {
    const [modeEdit, setmodeEdit]= useState(false)
    const [item, setItem]= useState(n)

    const toogle = () =>{
        setmodeEdit(!modeEdit);
        setItem(n);
    }
    const edit=()=>{
        updateNote(item)
        setmodeEdit(false)

    }
    return (
        <li>
            <div>{n.id} </div> 
            {
                modeEdit ?
                <label>Titulo
                    <input type="text" value={item.title} onChange={(ev)=>setItem({...item, title:ev.target.value})}></input><br></br> 
                </label>
                :<div>Titulo: {n.title} </div>
            }
            {
                modeEdit ?
                <label>Body
                    <input type="text" value={item.body} onChange={(ev)=>setItem({...item, body:ev.target.value})}></input><br></br> 
                </label>
                :<div>Body: {n.body}  </div>
            }

            <button onClick={()=>toogle()}>{modeEdit ? 'Cerrar' : "Editar"}</button>
            {
                !modeEdit &&
                <button onClick={()=>deleteNote(n.id)}>Delete</button>
            }
            {
                modeEdit &&
                <button onClick={()=> edit()}>Save</button>
            }
            
        </li>
    )
}
