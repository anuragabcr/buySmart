import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="container mx-auto px-4"
      style={{ backgroundColor: "#a7efe4" }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
