import React, { useState, useEffect } from 'react';

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setData(data))  
   }, []);

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-bold text-7xl'>Products</h1>
      <div className='flex flex-wrap justify-center '>
        {data.map((product) => (
          <div className='flex flex-col justify-center items-center w-[50vh] ' key={product.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
            <h2 className='text-center'>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{width: '100px'}} />
            <p>Price: ${product.price}</p>
            <p className='text-center'>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Api;
