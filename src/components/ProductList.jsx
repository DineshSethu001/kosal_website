import react from 'react'
import {ProductContext} from '../context/ProductContext.jsx'
import {useContext} from 'react'
import Title from './Title.jsx'

const ProductList = ()=>{
    const {value} = useContext(ProductContext)
    const {products, currency} = value || {}
    
    // Safety check to prevent map error
    if (!products || products.length === 0) {
        return (
            <div className='my-10'>
                <Title text1='Our' text2='Products'/>
                <p>Loading products...</p>
            </div>
        )
    }
    
    return(
        <div className='my-10'>
            <Title text1='Our' text2='Products'/>
            <ul>
                {products.map((product)=>(
                    <li key={product.id}>
                        <img src={product.image} alt={product.name}/>
                        <h3>{product.name}</h3>
                        <p>{currency}{product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;