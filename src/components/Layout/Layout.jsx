import Footer from "../Footer/Footer";
import NavBar from "../navBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="h-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
