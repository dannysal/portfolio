const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Services</h3>
            <h3 className="title">What I Do</h3>
            <p className="desc">
              I empower ambitious businesses like yours to achieve greater success by developing cutting-edge software solutions that boost brand visibility, drive user engagement, enhance customer experiences, and ultimately lead to substantial revenue growth.
            </p>
          </div>
          {/* /Main Title */}
          {/* Services List */}
          <div className="resumo_fn_service_list">
            <ul>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Front-end Development</h3>
                    <p>
                      Develop the best UI/UX web application solution for your business
                    </p>
                  </div>
                  {/* <div className="item_right">
                    <p>Starts from</p>
                    <h3>$599</h3>
                  </div> */}
                </div>
              </li>
              <li>
                <div className="item">
                  <div className="item_left">
                    <h3>Full-Stack Development</h3>
                    <p>
                      Proficient in end-to-end web application development, from designing intuitive user interfaces to implementing robust backend systems.
                    </p>
                  </div>
                  {/* <div className="item_right">
                    <p>Starts from</p>
                    <h3>$399</h3>
                  </div> */}
                </div>
              </li>
            </ul>
          </div>
          {/* /Services List */}
        </div>
      </div>
    </section>
  );
};

export default Services;
