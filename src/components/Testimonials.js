import { useEffect, useRef, useState } from "react";


const Testimonials = ({ data }) => {
  const [active, setActive] = useState(
    data && data.length > 0 ? data[0] : {}
  );

  const reviewData = useRef(data);

  useEffect(() => {
    reviewData.current = data;
    setActive(data?.length > 0 ? data[0] : {});
  }, [data]);


  const activeDotFun = (value) => {
    setActive(value);
  };

  const activeImg = (value, key) => (active[key] == value ? "active" : "");

  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_testimonials">
        <div className="container">
          <div
            className="testimonials_inner wow fadeInUp"
            data-wow-duration="1s"
          >
            <span className="shape">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon12.svg" alt="" />
            </span>
            <div className="leftpart">
              <ul>
                {data?.map((testimonial, index) => (
                  <li
                    className={activeImg(testimonial.image.url, "img")}
                    data-index={index + 1}
                    key={index}
                  >
                    <div className="image">
                      <img src={testimonial.image.url} alt="" />
                      <div
                        className="main"
                        data-img-url={testimonial.image.url}
                        style={{
                          backgroundImage: `url(${testimonial.image.url})`,
                        }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rightpart">
              <div className="rightpart_in">
                <div className="main_title">
                  <h3>
                    <span className="big">
                      Testimonials
                      <span className="small">
                        Testimonials
                        <img className="svg" src="img/svg/quote.svg" alt="" />
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="quotes">
                  <ul>
                    {data?.map((testimonial, index) => (
                      <li
                        className={activeImg(testimonial.review, "review")}
                        data-index={index + 1}
                        key={index}
                      >
                        <p>{testimonial.review}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="details">
                  <div className="infos">
                    <div className="avatars" s>
                      <ul className="grid-sort">
                        {reviewData?.current?.map((review, i) => (
                          <li className={` grid-item ${i}`} key={i}>
                            <span onClick={() => activeDotFun(review, i)}>
                              <div
                                data-img-url={review && review.image.url}
                                style={{
                                  backgroundImage: `url(${
                                    review && review.image.url
                                  })`,
                                }}
                              />
                            </span>
                            <span className="hidden">1</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="short">
                      <ul className="name">
                        {data?.map((testimonial, index) => (
                          <li
                            className={activeImg(testimonial.name, "name")}
                            data-index={index + 1}
                          >
                            <h3>{testimonial.name}</h3>
                          </li>
                        ))}
                      </ul>
                        {data?.map((testimonial, index) => (
                      <ul className="job">
                          <li
                            className={activeImg(testimonial.position, "job")}
                            data-index={index + 1}
                          >
                            <span>{testimonial.position}</span>
                          </li>
                      </ul>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
