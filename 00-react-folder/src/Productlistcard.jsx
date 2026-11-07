import React from 'react'
import Productcard from './components/productcard.jsx'

const Productlistcard = () => {

  const products = [
  {
    productImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
    productTitle: "Whole Wheat Loaf",
    productDescription: "Nutrition, fiber-rich and wholesome loaves",
    productPrice: 4.50,
    productStock: 40
  },
  {
    productImage: "https://images.unsplash.com/photo-1586765501019-cbe3973ef8fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    productTitle: "Sourdough Bread",
    productDescription: "Tangy, artisan-crafted with a crispy crust",
    productPrice: 5.25,
    productStock: 25
  },
  {
    productImage: "https://images.unsplash.com/photo-1609090821634-70bb9048a04f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    productTitle: "Multigrain Baguette",
    productDescription: "Hearty blend of grains in a classic  French style",
    productPrice: 3.75,
    productStock: 30
  },
  {
    productImage: "https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=600",
    productTitle: "Rye Bread",
    productDescription: "Dense, earthy flavor perfect for sandwiches",
    productPrice: 4.00,
    productStock: 18
  },
  {
    productImage: "https://images.unsplash.com/photo-1760136874870-701b323169ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    productTitle: "Ciabatta Roll",
    productDescription: "Light, airy texture with a rustic Italian taste",
    productPrice: 2.50,
    productStock: 55
  },
  {
    productImage: "https://images.unsplash.com/photo-1681218424681-b4f8228ecea9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    productTitle: "Brioche Bun",
    productDescription: "Buttery, soft and slightly sweet pastry bread",
    productPrice: 3.00,
    productStock: 42
  },
  {
    productImage: "https://images.unsplash.com/photo-1767065886275-2a8ff2eaa13a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    productTitle: "Focaccia",
    productDescription: "Olive-oil rich flatbread with herbs and sea salt",
    productPrice: 6.50,
    productStock: 15
  },
  {
    productImage: "https://media.istockphoto.com/id/1197901220/photo/artisan-loaf-of-traditional-homemade-pumpernickel-sourdough-boule-bread-with-crust-on-a.webp?a=1&b=1&s=612x612&w=0&k=20&c=44r9rMmpKjFPfcu4LGthDOVXh8xL7AoMSMldU1t6cUE=",
    productTitle: "Pumpernickel Loaf",
    productDescription: "Dark, dense rye bread with a deep  molasses flavor",
    productPrice: 5.00,
    productStock: 12
  },
  {
    productImage: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600",
    productTitle: "Bagel Pack (6 pcs)",
    productDescription: "Chewy, golden-crusted bagels, freshly baked",
    productPrice: 4.75,
    productStock: 38
  },
  {
    productImage: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600",
    productTitle: "Butter Croissant",
    productDescription: "Flaky, golden layers made with real butter",
    productPrice: 2.25,
    productStock: 60
  }
];

  return (
    <div className='product-card-container'>
     {products.map((elem,idx)=>{
        return <div key={idx}>
                 <Productcard productImage={elem.productImage} productTitle={elem.productTitle} productDescription={elem.productDescription} productPrice={elem.productPrice} productStock={elem.productStock} />
      </div>
     })}
    </div>
  )
}

export default Productlistcard
