import Image from 'next/image'
import styles from '../../styles/common/banner.module.scss'
import HeroImage from '../../public/hero-banner.png'

export default function Banner() {
  return (
    <Image
      className={styles.banner}
      src={HeroImage}
      alt='Hero image NZ Bakery'
      priority
    />
  )
}