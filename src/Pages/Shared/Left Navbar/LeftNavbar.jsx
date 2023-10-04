import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const LeftNavbar = () => {
  let [catagories, setCatagories] = useState([])
  
  useEffect( ()=>{
    fetch('http://localhost:5000/catagories')
    .then(res => res.json())
    .then(data => setCatagories(data))
    .catch(err => console.log(err));
  } ,[])
  return (
    <div>
      <h3>All catagories</h3>
      <div className='p-4'>
        {
          catagories.map(category => <p key={category.id}>
            <Link className='d-flex align-items-start text-decoration-none text-black fs-5 p-3 border-rounded bg-secondary' to={`/category/${category.id}`}>{category.name}</Link>
          </p>)
        }
      </div>
    </div>
  )
}

export default LeftNavbar