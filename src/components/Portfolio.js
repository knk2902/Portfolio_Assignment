import Isotope from "isotope-layout";
import { Fragment, useEffect, useState } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Portfolio = ({ data , subTitle}) => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);
  // Isotope
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, [data]);
  return (
    <Fragment>
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
      />
      <div className="tonni_tm_section" id="portfolio">
        <div className="tonni_tm_portfolio">
          <div className="container">
            <div className="tonni_tm_main_title" data-type="centered">
              <div className="title">
                <h3>Latest Projects</h3>
              </div>
              <div className="subtitle">
                <p>
                  {subTitle}
                </p>
              </div>
            </div>
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
              <li className="grid-sizer" />
                {data?.toReversed().map((project, index) => (
                  <li key={index} className="grid-item">
                    <div className="list_inner">
                      <div className="image">
                        <img src={project?.image?.url} alt="" />
                        <div
                          className="main"
                          data-img-url={project?.image?.url}
                        />
                      </div>
                      <div className="details">
                        <span className="category">GitHub</span>
                        <h3 className="title">{project.title}</h3>
                        <img className="svg" src="img/svg/vector5.svg" alt="" />
                      </div>
                      <a
                        className="tonni_tm_full_link popup-youtube"
                        href={data.liveurl }
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
