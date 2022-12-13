import styles from '../../styles/common/list-product.module.scss'
import CardProduct from './cardProduct'

export default function ListProduct() {
  return (
    <div className={styles.wrapper}>
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </div>
  )
}