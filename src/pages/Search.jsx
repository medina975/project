import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import { rareContext } from '../context/DataContext';
import Card from '../components/Card';
import Loader from '../components/Loader';

function Search() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    const {data, loader} = useContext(rareContext)
    const navigate = useNavigate()
    const [value, setValue] = useState(query)
    const searchProducts = data
                            .flatMap(item=> item.products)
                            .filter(item=> item.name.toLowerCase().includes(query.toLowerCase()))
    useEffect(() => {
        setValue(query);
    }, [query]);   
    
    if(loader){
        return <Loader/>
      }
  return (
    <>
    <div className="searchPage">
        <div className="aa"></div>
        <div className="container">
            <div className="searchPage-container">
                <h1>Explore Rare. <br />
                    What are you looking for?</h1>

                <div className="search-input">
                    <input  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                    navigate(`/products/search?q=${encodeURIComponent(value)}`);
                     }
                    }}  onChange={(e)=> setValue(e.target.value)} type="text" value={value} placeholder='Search' />
                    <MdOutlineCancel   onClick={()=> setValue("")} className='ss' />
                </div>

                <div className="searchProducts">
                    { searchProducts.length >0 ?
                       ( searchProducts.map(item=>(
                            <Card  key={item.name} id={item.id} name={item.name} shades={item.shades} price={item.price} img={item.shades[0].productImages[0]}/>
                        ))):(
                            <h1>No products</h1>
                        )
                    }

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Search