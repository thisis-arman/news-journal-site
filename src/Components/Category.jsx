import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './Layouts/NewsCard';

const Category = () => {
    const {id} =useParams()
    const categoryNews = useLoaderData()
    const categories = useLoaderData()
    console.log(categoryNews)
    return (
        <div>
           {/* {id && <h2><span>{categories.name}</span>({id})</h2>} */}
            {
                categoryNews.map(news => <NewsCard 
                key={news._id}
                news={news}
                />)
            }
        </div>
    );
};

export default Category;