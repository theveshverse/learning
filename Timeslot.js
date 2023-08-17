import React from 'react'
import "../../assets/styles/mobile/Timeslot.css";

function Timeslot() {
    return (
        <div className='book-slot'>
            <div className='time-row'>
                <button className='btn-slot' >10:00-10:30</button>
                <button className='btn-slot' >10:00-10:30</button>
                <button className='btn-slot' >10:00-10:30</button>
                <button className='btn-slot' >10:00-10:30</button>
            </div>
            <div className='time-row'>
                <button className='btn-slot' >10:00-10:30</button>
                <button className='btn-slot' >10:00-10:30</button>
                <button className='btn-slot' >10:00-10:30</button>
                <button className='btn-slot' >10:00-10:30</button>
            </div>
            <div className='time-row'>
                <button className='btn-slot' >10:00-10:30</button>
                <button className='btn-slot' >10:00-10:30</button>
                <button className='btn-slot' >10:00-10:30</button>
                <button className='btn-slot' >10:00-10:30</button>
            </div>
        </div>
    )
}

export default Timeslot
