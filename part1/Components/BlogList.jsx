import React, { useEffect } from "react";
import BlogItem from "./BlogItem";
import { blog_data } from "@/Assets/assets";
import { useState } from "react";
import axios from "axios";


const   BlogList = () =>{ 

  const [menu, setMenu] = useState("All"); // эта функция для того чтобы когда мы хотим помомтреть именно какой-то раздел например: EDU ,  tech , lifestyle и так далее
  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async () =>{
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  }


  useEffect(()=>{
    fetchBlogs();
  },[])
    return (
        <div>
          <div className='flex justify-center gap-6 my-10'>
          <button onClick={()=>setMenu('All')} className={menu === "All"?'bg-black text-white py-1 px4 rounded-sm':""}>Барлығы</button>
            <button onClick={()=>setMenu('Technology')} className={menu === "Technology"?'bg-black text-white py-1 px4 rounded-sm':""}>Tech</button>
            <button onClick={()=>setMenu('Startup')} className={menu === "Startup"?'bg-black text-white py-1 px4 rounded-sm':""}>Start-up</button>
            <button onClick={()=>setMenu('Lifestyle')} className={menu === "Lifestyle"?'bg-black text-white py-1 px4 rounded-sm':""}>Lifestyle</button>
            <button onClick={()=>setMenu('EDU')} className={menu === "EDU"?'bg-black text-white py-1 px4 rounded-sm':""}>EDU</button>
            <button onClick={()=>setMenu('Sport')} className={menu === "Sport"?'bg-black text-white py-1 px4 rounded-sm':""}>Sport</button>
          </div>
          <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=>menu==="All"?true: item.category===menu).map((item,index)=>{
                 return <BlogItem key = {index} id= {item.id} image = {item.image} title = {item.title} description = {item.description}  category = {item.category}/>
            })}

          </div>
        </div>
    )
}

export default BlogList