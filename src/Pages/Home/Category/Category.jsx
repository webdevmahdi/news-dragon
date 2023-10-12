import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    let categoryNews = useLoaderData();
  return (
    <div>Category: {categoryNews.length}
    {
      categoryNews.map(news => <NewsCard
      key={news._id}
      news={news}
      ></NewsCard>)
    }

    </div>
  )
}

export default Category