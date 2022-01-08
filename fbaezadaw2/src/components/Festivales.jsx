import { React} from 'react'
import Festival from './Festival';


export default function Festivales({festivales, setFestivales}) {
    const deleteFestival = (id, e)=>{
        e.preventDefault();
        console.log(id);
        const newFestivales = festivales.filter(n => id !== n.id)
        console.log(newFestivales)
        setFestivales(newFestivales)

    }
    const updateFestival= (newFestivales)=>{
        setFestivales(
            festivales.map(n=>n.id === newFestivales.id?newFestivales : n)
        );
        console.log(newFestivales)
    }
    return (
        <div className='columns is-multiline'>
        {
            festivales.map(n=>{
                return <Festival key={n.name} n={n} updateFestival={updateFestival} deleteFestival={deleteFestival}></Festival>
            })
        }
        </div>

    )
}