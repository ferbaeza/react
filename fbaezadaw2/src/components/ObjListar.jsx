import React from 'react'

export default function ObjListar() {
    return (
        <div>
            <h1 className='text-center'>Lista un objeto</h1>
            <pre>{JSON.stringify(notas)}</pre>

        </div>
    )
}
