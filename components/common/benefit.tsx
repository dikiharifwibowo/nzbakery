import styles from '../../styles/common/benefit.module.scss'

export default function Benefit() {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <div className={styles.title}>Raja Pesanan</div>
        <div className={styles.desc}>NZ Bakery berpengalaman menangani pesanan roti dalam jumlah besar. Berapapun jumlah pesanan Anda, Kami layani.</div>
      </li>
      <li className={styles.item}>
        <div className={styles.title}>Fresh from Oven</div>
        <div className={styles.desc}>Seluruh produk pesanan selalu dibuat paling lama 24 jam sebelum waktu pengambilan pesanan. Roti kami tahan 2-3 hari dari pembelian Anda di outlet NZ Bakery.</div>
      </li>
      <li className={styles.item}>
        <div className={styles.title}>Varian Terbanyak</div>
        <div className={styles.desc}>NZ Bakery menyediakan lebih dari belasan varian produk. Kami juga secara rutin menambah varian produk baru kami tiap beberapa bulan.</div>
      </li>
      <li className={styles.item}>
        <div className={styles.title}>Gratis Ongkir</div>
        <div className={styles.desc}>NZ Bakery menyediakan layanan antar pesanan dalam kota (Majenang, Cilacap).</div>
      </li>
      <li className={styles.item}>
        <div className={styles.title}>Membership</div>
        <div className={styles.desc}>Program keanggotaan (membership) NZ Bakery gratis dan menawarkan berbagai keuntungan khusus member, seperti: Promo Khusus Member Sepanjang Tahun dan Diskon 40% untuk Pembelian Kue Tart.</div>
      </li>
      <li className={styles.item}>
        <div className={styles.title}>Jaminan Kualitas</div>
        <div className={styles.desc}>NZ Bakery senantiasa menjaga kualitas produk dan layanan untuk pelanggan setia kami.</div>
      </li>
    </ul>
  )
}