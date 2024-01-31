import React from 'react'
import './category-item.style.scss'
const CategoryItem = ({urlImage , title, id}) => {
  return (
    <div className='category-container'>
        <div className='background-image' style={{backgroundImage : `url(${urlImage})`}}/>
        <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
        </div>
    </div>
  )
}

export default CategoryItem