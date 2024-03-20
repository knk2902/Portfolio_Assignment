const TimeLine = ({ data, subTitle }) => {
  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_timeline">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Experience</span>
                  <h3>Creative Timeline</h3>
                </div>
                <div className="subtitle">
                  <p>{subTitle}</p>
                </div>
              </div>
              <div className="timeline_list">
                <span className="line" />
                <ul>
                  {data?.filter(item=>item.forEducation==false).map((timeline, index) => {
                    const start_date = new Date(timeline.startDate);
                    const end_date = new Date(timeline.endDate);
                    const start_year = start_date.getFullYear();
                    const end_year = end_date.getFullYear();

                    if (index % 2 == 0) {
                      return (
                        <li className="wow fadeInUp" data-wow-duration="1s">
                          <ul className="items">
                            <li>
                              <div className="list_inner">
                                <div className="details">
                                  <img
                                    className="svg"
                                    src={timeline?.icon?.url}
                                    alt=""
                                  />
                                  <div className="title">
                                    <h3>{timeline.company_name}</h3>
                                    <span>{timeline.jobTitle}</span>
                                  </div>
                                  <div className="text">
                                    <p>{timeline.summary}</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="year">
                                  <span>
                                    {start_year} - {end_year}
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="image">
                                  <img src="img/thumbs/37-25.jpg" alt="" />
                                  <div
                                    className="main"
                                    data-img-url="img/timeline/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      );
                    } else {
                      return (
                        <li className="wow fadeInUp" data-wow-duration="1s">
                          <ul className="items">
                            <li>
                              <div className="list_inner">
                                <div className="details">
                                  <img
                                    className="svg"
                                    src={timeline?.icon?.url}
                                    alt=""
                                  />
                                  <div className="title">
                                    <h3>{timeline.company_name}</h3>
                                    <span>{timeline.jobTitle}</span>
                                  </div>
                                  <div className="text">
                                    <p>{timeline.summary}</p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="year">
                                  <span>
                                    {start_year} - {end_year}
                                  </span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="image">
                                  <img src="img/thumbs/37-25.jpg" alt="" />
                                  <div
                                    className="main"
                                    data-img-url="img/timeline/1.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector6.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon8.svg" alt="" />
            </span>
            <span className="shape3">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape4">
              <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
            </span>
            <span className="shape5">
              <img className="svg" src="img/svg/icon10.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeLine;
