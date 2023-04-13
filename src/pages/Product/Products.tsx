import './product.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../store/actions/productsSlice'
import { addToCart } from '../../store/actions/cartSlice'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { RootState } from '../../store/reducers/storeReducers'

export const Products = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error, products, status } = useSelector((state: RootState) => state.products)

  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product))
    navigate('/Shopping')
  }

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>{error}</div>
  }

  return (
    <div className="product_card">
      {products.map((product) => (
        <div key={product.id} className="individual_product">
          <h5>{product.name}</h5>
          <p>{product.description}</p>
          <ul>
            {product.variants.map((variant) => (
              <li key={variant.color}>
                <input type="checkbox" /> Price: {variant.price}
                <img src={variant.image} />
              </li>
            ))}
          </ul>
          <div className="addto_cart_button">
            <button className="addto_cart_button" onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
