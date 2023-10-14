import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
  let { id } = useParams();
  let categoryNews = useLoaderData();
  return (
    <div>
      <h3>
        {id && <p>There is {categoryNews.length} news in this category </p>}
      </h3>
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