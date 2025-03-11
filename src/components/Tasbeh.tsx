"use client"
import React, { useState } from 'react'

function Tasbeeh() {
    let [Tasbeeh,setTasbeeh] = useState("")
    let [counter,setcounter] = useState(0)
    

    const hanlcounter=()=>{
         setcounter(counter++)
    }
    const handlereset=()=>{
        setcounter(0)
        hanlde_Tasbeeh_reset()
    }


   
    const hanlde_Tasbeeh_1st=()=>{
        setTasbeeh("Alhamdulillah")
    }
    // 2nd
      
    const hanlde_Tasbeeh_2nd=()=>{
        setTasbeeh("Allahuakbar")
    }
    // 3rd 
    const hanlde_Tasbeeh_3rd=()=>{
        setTasbeeh("Subhan Allah")
    }
    // 4th 
    const hanlde_Tasbeeh_4th=()=>{
        setTasbeeh("Astaghfirullah")
    }
    // 5th 
    const hanlde_Tasbeeh_5th =()=>{
        setTasbeeh("Darood Sharif")
    }
    // 6th 
    const hanlde_Tasbeeh_6th =()=>{
        setTasbeeh("Other")
    }
    // reset 
    const hanlde_Tasbeeh_reset =()=>{
        setTasbeeh("")
    }
  return (
    <div className="bg-[url('/ramadan.jpeg')] bg-contain bg-repeat h-screen w-full flex flex-col justify-start items-center">
            <h1 className='text-lime-400 text-xl font-bold mt-10 mb-4'>Tasbeeh Counter</h1>
               {/*  box */}
               <div className='md:w-[400px] font-bold h-[200px] rounded-md border border-yellow-300 flex justify-around flex-wrap items-center '>
                   <div onClick={()=>hanlde_Tasbeeh_1st()} className='bg-yellow-400 cursor-pointer text-black px-6  w-[120px] h-[50px] flex flex-col justify-center items-center'>
                    Alhamdulillah
                    </div>
                   <div onClick={()=>hanlde_Tasbeeh_2nd()} className='bg-yellow-400 cursor-pointer text-black px-6  w-[120px] h-[50px] flex flex-col justify-center items-center'>
                    Allahuakbar
                    </div>
                   <div onClick={()=>hanlde_Tasbeeh_3rd()} className='bg-yellow-400 cursor-pointer text-black px-6  w-[120px] h-[50px] flex flex-col justify-center items-center'>
                    Subhan Allah
                    </div>
                   <div onClick={()=>hanlde_Tasbeeh_4th()} className='bg-yellow-400 cursor-pointer text-black px-6  w-[120px] h-[50px] flex flex-col justify-center items-center'>
                    Astaghfirullah
                    </div>
                   <div onClick={()=>hanlde_Tasbeeh_5th()} className='bg-yellow-400 cursor-pointer text-black px-6  w-[120px] h-[50px] flex flex-col justify-center items-center'>
                    Darood Sharif
                    </div>
                   <div onClick={()=>hanlde_Tasbeeh_6th()} className='bg-yellow-400 cursor-pointer text-black px-6  w-[120px] h-[50px] flex flex-col justify-center items-center'>
                    Other
                    </div>
               </div>





               {/* Display */}
            <div className='flex space-x-5 justify-center items-center mt-5'>
            <button className='w-[150px] h-[150px] bg-lime-400 cursor-pointer  rounded-[100%] 
              flex flex-col justify-start items-center' onClick={()=>hanlcounter()}>
                <span className='text-lg mt-10 font-bold'>{Tasbeeh}</span> 


               <span className='mt-5 font-bold text-xl'>{counter}</span> 
            </button>
                <button className='bg-lime-400 w-[150px] h-[150px] rounded-[100%] font-bold' onClick={()=>handlereset()}>Reset</button>
            </div>
    </div>
  )
}

export default Tasbeeh