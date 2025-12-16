import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding: 20,paddingTop:'12vh'}}>{children}</main>
      <Footer />
    </>
  );
}
