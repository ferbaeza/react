import React from 'react'
import Note from './Note'

export default function Notes({notas, setNotas}) {
    const deleteNote = (id)=>{
        console.log(id);
        const newNotas = notas.filter(n => id != n.id)
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
        <ul>
        {
            notas.map(n=>{
                return <Note key={n.id} n={n} updateNote={updateNote} deleteNote={deleteNote}></Note>
            })
        }
        </ul>

    )
}
