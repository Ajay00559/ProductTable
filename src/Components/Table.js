import React from 'react'

const Table = ({ item }) => {
    console.log(item)
    return (
        <tr key={item.id}>
        <td className='id'>{item.id}</td>
        <td className='title'>{item.title}</td>
        <td className='photo'><img src={item.images[0]} alt={item.title} /></td>
        <td className='des'>{item.description}</td>
        <td className='price'>{item.price}</td>
        <td className='discountPercentage'>{item.discountPercentage}</td>
        <td className='brand'>{item.brand}</td>
        <td className='stock'>{item.stock}</td>
        <td className='rating'>{item.rating}</td>
        <td className='category'>{item.category}</td>
        
    </tr>
    )
}

export default Table