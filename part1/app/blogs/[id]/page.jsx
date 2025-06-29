'use client'

import { blog_data } from "@/Assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import Link from "next/link";

export default function BlogPage({ params }) {
    const [data, setData] = useState(null);
    
    const fetchBlogData = () => {

        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
            }
        }

    }

    useEffect(() => {
        fetchBlogData();
    }, [params.id])

    return (data?<>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href ={'/'}>
                <Image 
                    src={assets.logo} 
                    width={180} 
                    alt='' 
                    className='w-[130px] sm:w-auto'
                />
                </Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#0080FE]'>
                    Кеттік <Image src={assets.arrow} alt='' />  
                </button>
            </div>
            <div className='text-center my-24'>
                <h1 className ='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>
                    {data.title}
                </h1>
                <Image className = 'mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={60} height = {60} alt = ''/>
                <p className = 'mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>

            </div>
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image className = 'border-4 border-white' src={data.image} width = {1280} height = {720} alt=''/>
            <h1 className = 'my-8 text-[26px] font-semibold'>Кіріспе:</h1>
            <p>{data.description}</p>
            <h3 className = 'my-5 text-[18px] font-semibold '>Өмірлік режимді реттеу үшін келесі қадамдарды орындауға болады:</h3>
            <p className = 'my-3 '>Жұмыс кестесін анықтау. Жұмыстың басталуы, оның соңы, сондай-ақ егер қажет болса, тоқсатылған ұйқы режимін да анықтаңыз. 1
Тұру және тұрғылық уақытын анықтайтындығын ескере отырып, қол жеткізіңіз. Қол жеткенде, егер сіз бірдей тәртіпті сақтасаңыз, бұл үшін жаңа тәртіб қалыптасуға көмектеседі. Егер сіз қазір бірдеңе жасауды ойласаңыз — бұл тізімнен бір деңе жасап жатқанын түсіну керек. 13
Өздеріңізге қажет емес заттардан арылу. Сізде бар нәрсенің бәрі қажет сияқты көрінгенімен, ұйымдастырылмаған үйде шын мәнінде қажет емес нәрселердің үйіндісі болуы мүмкін</p>
            <div className='my-24'>
               <p className = 'text-black font font-semibold my-4'>Жаңалықты әлуметтік желіде бөлісіңіз</p>
               <div className ='flex'> 
                 <Image src={assets.facebook_icon} width={50} alt =''/>
                 <Image src={assets.twitter_icon} width={50} alt =''/>
                 <Image src={assets.googleplus_icon} width={50} alt =''/>
               </div>
            </div>
        </div>
        <Footer/>
        </>:<></>
    )
}