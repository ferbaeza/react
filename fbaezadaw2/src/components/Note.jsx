import {useState, React} from 'react'

export default function Note({n, deleteNote, updateNote}) {
    const [modeEdit, setmodeEdit]= useState(false)
    const [item, setItem]= useState(n)

    const toogle = (e) =>{
        e.preventDefault();
        setmodeEdit(!modeEdit);
        setItem(n);
    }
    const edit=(e)=>{
        e.preventDefault();
        updateNote(item)
        setmodeEdit(false)

    }
    return (
        <div className='column is-one-quarter'>
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">
                    Id: {n.id}
                    </p>
                    <button class="card-header-icon" aria-label="more options">
                    <span class="icon">
                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </button>
                </header>
                <div class="card-content">
                    <div class="content">
                        {
                            modeEdit ?
                            <div className="field">
                                <label>Titulo</label>
                                <div className="control">
                                    <input className='input' type="text" value={item.title} onChange={(ev)=>setItem({...item, title:ev.target.value})}></input><br></br> 
                                </div>
                            </div>
                            :<div>Titulo: {n.title} </div>
                        }
                        {
                            modeEdit ?
                            <div className="field">
                            <label>Body</label>
                            <div className="control">
                                <textarea className='textarea' type="text" value={item.body} onChange={(ev)=>setItem({...item, body:ev.target.value})}></textarea><br></br> 
                            </div>
                            </div>
                            :<div>Body: {n.body}  </div>
                        }
                        <footer class="card-footer">
                            <a href={'/'}  class="card-footer-item" onClick={(e)=>toogle(e)}>{modeEdit ? 'Cerrar' : "Editar"}</a>
                            {
                                modeEdit ?
                                <a  href={'/'} class="card-footer-item"  onClick={(e)=> edit(e)}>Save</a>
                                :
                                <a href={'/'} class="card-footer-item"  onClick={(e)=>deleteNote(n.id, e)}>Delete</a>
                            }
                        </footer>


                    </div>
                </div>
            </div>




            
        </div>
    )
}
