import styles from '../../styles/common/list-product.module.scss'
import CardProduct from './cardProduct'

export default function ListProduct() {
  const products = [
    'product-1.png',
    'product-2.png',
    'product-3.png',
    'product-4.png',
    'product-5.png',
    'product-6.png',
  ]

  const ListProducts = products.map((product, index) => {
    return <CardProduct key={index} img={product} />
  })

  return (
    <>
      <div className={styles.title}>Produk Kami</div>
      <div className={styles.wrapper}>
        {ListProducts}
      </div>
    </>
  )
}