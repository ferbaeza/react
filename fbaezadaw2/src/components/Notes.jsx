import React from 'react'
import Note from './Note'

export default function Notes({notas, setNotas}) {
    const deleteNote = (id, e)=>{
        e.preventDefault();
        console.log(id);
        const newNotas = notas.filter(n => id !== n.id)
        console.log(newNotas)
        setNotas(newNotas)

    }
    const updateNote= (newNote)=>{
        setNotas(
            notas.map(n=>n.id === newNote.id?newNote : n)
        );
        console.log(newNote)
    }
    return (
        <div className='columns is-multiline'>
        {
            notas.map(n=>{
                return <Note key={n.id} n={n} updateNote={updateNote} deleteNote={deleteNote}></Note>
            })
        }
        </div>

    )
}
