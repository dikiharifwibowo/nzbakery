import Image from "next/image"
import IconFb from '../public/icons8-facebook.svg'
import IconWa from '../public/icons8-whatsapp.svg'

export default function Footer() {
  return (
    <footer className="footer mt-32">
      <div className="container">
        <div className="flex f-justify-space-between mb-16">
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
        <div>
          Copyright &copy; NZBakery 2022
        </div>
      </div>
    </footer>
  )
}