import Footer from "./footer";
import Nav from "./nav";

interface ILayout {
  children: JSX.Element
}

export default function Layout({children}: ILayout) {
  return (
    <>
      <Nav />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}