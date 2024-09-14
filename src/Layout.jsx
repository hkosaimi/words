import Header from "./components/Header";
import Footer from "./components/Footer";
import clsx from "clsx";

function Layout({ children, className }) {
  return (
    <div className={clsx("font-[Manrope] ", className && className)}>
      <Header />
      {children}
      {/*  <Footer /> */}
    </div>
  );
}

export default Layout;
