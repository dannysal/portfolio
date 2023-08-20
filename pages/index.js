import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Customers from "../src/components/Customers";
import Layout from "../src/layouts/Layout";

const Index = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Portfolio />
      <Services />
      <Customers />
      <Contact />
    </Layout>
  );
};

export default Index;
