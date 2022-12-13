import Image from "next/image"

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container flex f-justify-space-between f-align-center">
        <div className="nav__logo">
          <Image
            src="https://a.m.dana.id/danaweb/merchant/merchant-1562149275Hoka-Hoka-Bento-min.png"
            width={50}
            height={50}
            alt="NZ Bakery Logo"
          />
        </div>
        <ul className="nav__menu">
          <li>Product</li>
          <li>Promo</li>
          <li>About Us</li>
        </ul>
      </div>
    </nav>
  )
}