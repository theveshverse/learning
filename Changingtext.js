import React from 'react'
import Typewriter from "typewriter-effect";
import "../../assets/styles/mobile/Changingtext.css";
function Changingtext() {
  return (
    <div className='wrapper' >
       <div className='text' >
             <Typewriter
                options ={
                    {
                        autoStart:true,
                        loop:true,
                        delay:200,
                        strings:[
                            "Can't Wait",
                            "Unexpected Date?",
                            "Avoid Waiting in queues!",
                            "Use Makemenext!"
                        ]
                    }
                }
             />
       </div>
    </div>
  )
}

export default Changingtext
