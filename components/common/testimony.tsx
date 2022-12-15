import styles from '../../styles/common/testimony.module.scss';
import Image from 'next/image';
import BannerImg from '../../public/banner.png'

export default function Testimony() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image
          src={BannerImg}
          alt="Banner"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Testimoni Kami</div>
        <figure className={styles.testimony}>
          <figcaption className={styles.header}>
            <Image
              alt='IMG Avatar'
              width={56}
              height={56}
              src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'
            />
            <div>
              <div className={styles.name}>Debbie O`brien</div>
              <div className={styles.role}>Senior Software Engineer at Google</div>
            </div>
          </figcaption>
          <blockquote className={styles.caption}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam earum tempore esse minus at cumque fugiat, et pariatur beatae modi, nesciunt ut ex facilis fuga? Architecto iusto nemo dolores.
          </blockquote>
        </figure>

        <figure className={styles.testimony}>
          <figcaption className={styles.header}>
            <Image
              alt='IMG Avatar'
              width={56}
              height={56}
              src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'
            />
            <div>
              <div className={styles.name}>Debbie O`brien</div>
              <div className={styles.role}>Senior Software Engineer at Google</div>
            </div>
          </figcaption>
          <blockquote className={styles.caption}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam earum tempore esse minus at cumque fugiat, et pariatur beatae modi, nesciunt ut ex facilis fuga? Architecto iusto nemo dolores.
          </blockquote>
        </figure>

        <figure className={styles.testimony}>
          <figcaption className={styles.header}>
            <Image
              alt='IMG Avatar'
              width={56}
              height={56}
              src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg'
            />
            <div>
              <div className={styles.name}>Debbie O`brien</div>
              <div className={styles.role}>Senior Software Engineer at Google</div>
            </div>
          </figcaption>
          <blockquote className={styles.caption}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, totam earum tempore esse minus at cumque fugiat, et pariatur beatae modi, nesciunt ut ex facilis fuga? Architecto iusto nemo dolores.
          </blockquote>
        </figure>
      </div>
    </div>
  )
}