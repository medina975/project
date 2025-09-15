import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Head from "../components/Head"
import { rareContext } from "../context/DataContext"
import Card from "../components/Card"
import { IoIosArrowDown } from "react-icons/io"
import Loader from "../components/Loader"

function Category() {
  const { category, type } = useParams() 
  const { data, loader } = useContext(rareContext) 
  const allProducts = data.flatMap(cat => cat.products)
  const[isActive, setIsActive] = useState(false)
  const sortCategories = ["highestPrice", "lowestPrice", "topRated", "newest", "bestsellers"];
  console.log(allProducts);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  const navigate = useNavigate()
  const all = ["all", "fragrance", "face", "lip", "eye", "body", "tools"]

//   const changeCategory = (cat) => {
//     setSelectedCategory(cat)
//     navigate(`/products/category/${cat}`)
//   }

  let filtered = []
  if(loader){
    return <Loader/>
  }

  if (category.toLowerCase() === "all") {
    filtered = allProducts
  } else {
    const catData = data.find(cat => cat.category.toLowerCase() == category.toLowerCase())
    filtered = catData ? catData.products : []
  }

   if (type) {
    const t = type.toLowerCase();
    if (t === "bestsellers") filtered = filtered.filter(p => p.bestSellers);
    else if (t === "newest") filtered = filtered.filter(p => p.newest);
    else if (t === "toprated") filtered = filtered.filter(p => p.topRated);
    else if (t === "highestprice") filtered = filtered.filter(p => p.highestPrice);
    else if (t === "lowestprice") filtered = filtered.filter(p => p.lowestPrice);
  }
  console.log(filtered)
  function changeCategory(cat){
    // if (a == 'all'){
    //     navigate(`/products/category/shopall`)

    // }else{

    //     navigate(`/products/category/${a}`)

    // }
    navigate(`/products/category/${cat}`)
  }
  function showSort(a){
    setIsActive(false); 
    navigate(`/products/category/${category}/${a}`)
  }

  function dropDown(){
    setIsActive(!isActive)
  }
  return (
    <>
       <div className="category">
        <div className="container-cat">
            <div className="category-container">
                <h1 className="big">{category == 'all' || category == 'topRated' || category == 'highestPrice' || category == 'lowestPrice' || category == 'newest' ? 'Browse All Beauty Products': category == 'bestsellers' ? 'Our Best Selling Makeup Products' : `Shop Our ${capitalize(category)} Products` }</h1>
                <div className="category-part">
                    <div className="category-partt">
                        <div className="categories">
                            <h3>Categories</h3>
                            <div>
                                {/* <button onClick={()=>changeCategory("all")}>All</button>
                                <button onClick={()=>changeCategory("fragrance")}>Fragrance</button>
                                <button onClick={()=>changeCategory("face")}>Face</button>
                                <button onClick={()=>changeCategory("lip")}>Lip</button>
                                <button onClick={()=>changeCategory("eye")}>Eye</button>
                                <button onClick={()=>changeCategory("body")}>Body</button>
                                <button onClick={()=>changeCategory("tools")}>Tools</button> */}

                                {all.map(cat => (
                                                <button
                                                    key={cat}
                                                    className={category == cat || (cat === "all" && sortCategories.includes(category))  ? "active": ""}
                                                    onClick={() => changeCategory(cat)}
                                                    >
                                                    {capitalize(cat)}
                                                </button>
                                ))}
                            </div>
                        </div>
                        <div onClick={()=>dropDown() } className={`sort ${isActive ? "active" : ""}`}>
                            <h3>Sort</h3>
                            <IoIosArrowDown className="ikon"/>
                            { isActive && (<div className={`sort-list ${isActive ? "drop" : ""}`}>
                                <a onClick={()=>showSort('bestsellers')} href="">BESTSELLERS</a>
                                <a onClick={()=>showSort('lowestPrice')} href="">LOWEST PRICE </a>
                                <a onClick={()=>showSort('highestPrice')} href="">HIGHEST PRICE </a>
                                <a onClick={()=>showSort('newest')} href="">NEWEST </a>
                                <a onClick={()=>showSort('topRated')} href="">TOP RATED </a>
                            </div>)}

                        </div>
                    </div>
                    {
                        // filtered.length == 0 ? (
                        //     <p> no data</p>
                        // ): (
                            <div className="products">
                                {
                                    filtered.map(product => <Card key={product.name} id={product.id} name={product.name} shades={product.shades} price={product.price} img={product.shades[0].productImages[0]}/>)
                                }
                            </div>
                        // )
                    }
                </div>
            </div>
        </div>



        {/* <h1>{category === "shopall" ? "Все товары" : category === "bestsellers" ? "Бестселлеры" : `Категория: ${category}`}</h1>

        {filtered.length === 0 ? (
          <p>Товары не найдены</p>
        ) : (
          <div className="products">
            {filtered.map(product => (
              <div key={product.name} className="product-card">
                <img src={product.detailsImage} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price} ₼</p>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </>
  )
}

export default Category
