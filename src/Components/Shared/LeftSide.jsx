import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories,setCategories] =useState([])

    useEffect(()=>{
        fetch('https://the-dragon-news-server-swart.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2>All Category</h2>
           <div className='ps-4'>
           {
           categories.map(category => <p
           key={category.id}
           >
            <Link to={`category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>


           </p>)
           
           }
           </div>
            
        </div>
    );
};

export default LeftSide;