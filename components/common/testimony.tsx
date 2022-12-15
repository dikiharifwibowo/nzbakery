import Image from 'next/image';
import BannerImg from '../../public/banner.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../styles/common/testimony.module.scss';

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

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
        <Slider {...settings} className="custom-slick">
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
        </Slider>
      </div>
    </div>
  )
}