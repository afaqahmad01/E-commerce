import Footer from "../Footer/Footer";
import NavBar from "../navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="h-auto border border-black">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
