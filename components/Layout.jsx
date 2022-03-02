import Footer from "./Footer";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
const Layout = ({ children }) => {
  return (
    <>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 0.1,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}>
        <Navbar />
        {children}
        <Footer />
      </motion.div>
    </>
  );
};

export default Layout;
