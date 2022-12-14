import Image from "next/image"
import IconFb from '../public/facebook.png'
import IconWa from '../public/whatsapp.png'

export default function Footer() {
  return (
    <footer className="footer pt-32 mt-32">
      <div className="container">
        <div className="footer__row">
          <div className="flex gap-16">
            <Image
              className="footer__logo"
              width={50}
              height={50}
              src="https://a.m.dana.id/danaweb/merchant/merchant-1562149275Hoka-Hoka-Bento-min.png"
              alt="logo NZ Bakery"
            />
            <ul className="footer__list">
              <li>Product</li>
              <li>Promo</li>
              <li>About Us</li>
            </ul>
          </div>
          <ul className="footer__social-media my-0">
            <li>
              <Image src={IconFb} alt="icon fb"/>
            </li>
            <li>
              <Image src={IconWa} alt="icon fb"/>
            </li>
          </ul>
        </div>
        <div className="footer__row">
          <div>
            Copyright &copy; 2022 NZBakery. All rights reserved.
          </div>
          <div>
            <address>
              Jln. K.H. Nawawi No. 28, Benda Asri,
              Padangsari, Majenang, Cilacap.
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}