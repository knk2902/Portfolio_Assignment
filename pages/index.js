import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import News from "../src/components/News";
import Priceing from "../src/components/Priceing";
import Service from "../src/components/Service";
import Testimonials from "../src/components/Testimonials";
import TimeLine from "../src/components/TimeLine";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import MobileMenu from "../src/layout/MobileMenu";
import Mouse from "../src/layout/Mouse";
import PogressBar from "../src/layout/PogressBar";
import { activeSkillProgress } from "../src/utilits";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = ({ data }) => {
  
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  }, []);

  return (
    <Layout>
      <MobileMenu />
      <Header data={data?.user?.social_handles} />
      <Home data={data?.user?.about} />
      {/* /HERO */}
      {/* ABOUT */}
      <About data={data?.user?.about} skills={data?.user?.skills} />
      {/* /ABOUT */}
      {/* SERVICE */}
      <Service
        data={data?.user?.services}
        subTitle={data?.user?.about?.subTitle}
      />
      {/* /SERVICE */}
      {/* PORTFOLIO */}
      <Portfolio
        data={data?.user?.projects}
        subTitle={data?.user?.about?.subTitle}
      />
      {/* /PORTFOLIO */}
      {/* TIMELINE */}
      <TimeLine
        data={data?.user?.timeline}
        subTitle={data?.user?.about?.subTitle}
      />
      {/* /TIMELINE */}
      {/* PRICING */}
      <Priceing data={data?.user?.timeline} />
      {/* /PRICING */}
      {/* TESTIMONIALS */}
      <Testimonials data={data?.user?.testimonials} />

      {/* /TESTIMONIALS */}
      {/* NEWS */}
      <News />
      {/* /NEWS */}
      {/* CONTACT */}
      <Contact data={data?.user?.social_handles} email={data?.user} />
      <Mouse />
      <PogressBar />
    </Layout>
  );
};
export default Index;
