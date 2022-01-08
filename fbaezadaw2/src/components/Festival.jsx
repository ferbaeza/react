import {useState, React} from 'react'

export default function Festival({n, deleteFestival, updateFestival}) {
    const [item, setItem]= useState(n)

    
    return (
        <div className='column is-two-quarter'>
            <div class="row ">
                <div id="colFestival" class="festivalGrid shadow p-3 mb-5 bg-body rounded ms-1">
                    <div class="image">
                        <img width="300px" height="250px" id="festi" src={n.image_url}/>
                    </div>
                    <div class="cardTittle">Name: {n.name}</div>
                    <div class="card">
                        <p>Price: {n.price}</p>
                        <p>Email: {n.email}</p>
                        <p>Address: {n.address}</p>
                        <p>Price: {n.price}</p>
                        <p>Date :{n.date}</p>
                        <div class="btn-group mb-3" role="group" aria-label="Basic example">
                            <button className='button is-primary m-4' type="button" class="btn btn-primary">Go </button>
                        </div>

                    </div>
                </div>
                </div> 
           
        </div>
                
    
    )
}
