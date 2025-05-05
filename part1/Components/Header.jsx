import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";


const Header = () => {
    
    const [email,setEmail] = useState("");
    


    const onSubmitHandler = async (e) => {
             e.preventDefault();
             const formData = new FormData();
             formData.append("email" , email);
             const response = await axios.post('/api/email',formData);
             if(response.data.success){
                toast.success(response.data.msg);
                setEmail("");
             }
             else{
                toast.error("Қате")
             }
    }
    return (
            <div className =  'py-5 px-5 md:px-12 lg:px-28'>
                <div className  = 'flex justify-between items-center'>
                    <Image src={assets.logo} width={180} alt='' className ='w-[130px] sm:w-auto' />
                    <button className = 'flex items-center gap-2 font-medoum py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#0080FE]'>Кеттік!<Image src={assets.arrow}/></button> {/*Это у нас отвечает за кнопку кеттик*/ }
                </div>
                <div className = 'text-center my-8'>
                    <h1 className = 'text-3xl sm:text-5xl font-medium'>Соңғы жаңалықтар</h1>
                    <p className = 'mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Ne habar мен бірге Қазақстанда болып жатқан соңғы жаңалықтардан қалмаңыз,бізбен бірге болыңыз</p>{/*just phrase*/}
                    <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#0080FE]' action = "">
                        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder = 'Email-теріңіз' className = 'pl-4 outline-none'/>
                        <button  type  = 'submit' className = 'border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Жазылу </button>
                    </form> 
                </div>
            </div>
    )
}

export default Header