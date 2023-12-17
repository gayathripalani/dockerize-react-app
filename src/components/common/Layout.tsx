import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
        <Navbar />
        <main>
          {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
