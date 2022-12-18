import styles from '../../styles/common/product.module.scss'
import Image from 'next/image'
import iconWa from '../../public/icons-whatsapp.gif'

export default function CardProduct(props: string) {

  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={`/products/${props.img}`}
        width={400}
        height={400}
        alt='product 1 NZ Bakery'
      />
      <button className={styles.button}>
        Order Now
        <Image className={styles.icon} src={iconWa} alt="icon Whatsapp order" />
      </button>
    </div>
  )
}