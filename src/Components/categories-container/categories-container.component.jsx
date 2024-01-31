import React from 'react'
import CategoryItem from '../category-item/category-item.component'
import './categories-container.style.scss'
const CategoriesContainer = ({categories}) => {
    
      
      return (
        <div className="categories-container">
          {categories.map(({id , title, imageUrl}) => {
            return (<CategoryItem urlImage={imageUrl} id={id} title={title}/>)
          })}
        </div>
      )
}

export default CategoriesContainer