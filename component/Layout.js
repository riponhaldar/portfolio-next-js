import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout
