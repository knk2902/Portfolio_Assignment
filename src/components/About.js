const About = ({data, skills}) => {

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3>{data?.exp_year}</h3>
                  <span className="rounded">
                    <img src="img/about/flower.png" alt="" />
                  </span>
                </div>
                <div className="experience">
                  <h3>+</h3>
                  <p>years experience</p>
                  <span className="shape">
                    <img src="img/about/dots.png" alt="" />
                  </span>
                  <span className="circle_shape">
                    <img className="svg" src="img/svg/icon1.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>{data?.quote}!</span>
                <h3>{data?.title}</h3>
              </div>
              <div className="text">
                <p>{data?.description}</p>
              </div>
              <div className="dodo_progress">
                <ul>
                  {skills?.toReversed().map((skill, index) => (
                    <li>
                      <div className="list_inner">
                        <div
                          className="progress_inner skillsInner___"
                          data-value={skill.percentage}
                          data-color={getRandomColor()}
                        >
                          <div className="background">
                            <div className="bar">
                              <div className="bar_in" />
                            </div>
                          </div>
                          <div className="percent">
                            <img className="svg" src={skill.image.url} alt="" />
                            <span className="number">{skill.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
