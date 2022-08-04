import Head from 'next/head'
import Contact from "../../components/Home/Contact";
import Counter from "../../components/Home/Counter";
import FeatureDown from "../../components/Home/FeatureDown";
import Features from "../../components/Home/Features";
import Hero from "../../components/Home/Hero";
import PricePlan from "../../components/Home/PricePlan";
import Services from "../../components/Home/Services";

const HomeScreen = () => {
    return (
        <div>
            <Head>
        <title>Home page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
           <Hero/>
           <Features/>
           <FeatureDown/>
           <Services/>
           <Counter/>
           <Contact/>
           <PricePlan/>
        </div>
    );
};

export default HomeScreen;