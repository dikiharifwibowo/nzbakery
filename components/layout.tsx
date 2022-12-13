import Footer from "./footer";
import Nav from "./nav";

export default function Layout({children}) {
  return (
    <>
      <Nav />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}