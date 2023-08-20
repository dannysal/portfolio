import { Swiper, SwiperSlide } from "swiper/react";
import { customersSliderProps } from "../sliderProps";
const Customers = () => {
  return (
    <section id="customers">
      <div className="container">
        <div className="roww">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Customers</h3>
            <h3 className="title">Happy People</h3>
          </div>
          {/* /Main Title */}
          {/* Partners */}
          <div className="resumo_fn_partners">
            <ul>
              <li>
                <a href="https://settings.facelift-cloud.com/" target="_blank" rel="noreferrer">
                  <img src="img/partners/facelift.svg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://alec.ae/"  rel="noreferrer" target="_blank">
                  <img src="img/partners/ALEC.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.social27.com/"  rel="noreferrer" target="_blank">
                  <img src="img/partners/s27.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://dawalo.pk/" target="_blank" rel="noreferrer">
                  <img src="img/partners/dawalo.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://wmap.autoscore.com/" rel="noreferrer" target="_blank">
                  <img src="img/partners/autohub.png" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://dooz.com/" rel="noreferrer" target="_blank">
                  <img src="img/partners/dooz.svg" alt="image" />
                </a>
              </li>
            </ul>
          </div>
          {/* /Partners */}
          {/* Testimonials */}
          {/* <div className="resumo_fn_testimonials">
            <div className="my__nav">
              <a href="#" className="prev">
                <span />
              </a>
              <a href="#" className="next">
                <span />
              </a>
            </div>
            <Swiper {...customersSliderProps} className="owl-carousel">
              <SwiperSlide className="item" key='1'>
                <div className="title_holder">
                  <p className="desc">
                    “ They really nailed it. This is one of the best themes I
                    have seen in a long time. Very nice design with lots of
                    customization available. Many of my clients have chosen this
                    theme for their portfolio sites. ”
                  </p>
                  <h3 className="title">Albert Walker</h3>
                  <h3 className="subtitle">Freelancer &amp; Designer</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key='2'>
                <div className="title_holder">
                  <p className="desc">
                    {`“ This was exactly what I needed for my portfolio,
                              and it looks great. I had a couple issues that
                              support helped troubleshoot both via email and on
                              the comments, which definitely made it worth the
                              price. I'm very pleased with this purchase. ”`}
                  </p>
                  <h3 className="title">Anna Barbera</h3>
                  <h3 className="subtitle">Photographer</h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item" key='3'>
                <div className="title_holder">
                  <p className="desc">
                    “ Had a problem with the layout after Installation- found no
                    approach. The support reacted quickly and competently. And
                    solved the problem between Elementor and a WordPress update.
                    Great! ”
                  </p>
                  <h3 className="title">Dana Atkins</h3>
                  <h3 className="subtitle">Customer</h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </div> */}
          {/* /Testimonials */}
        </div>
      </div>
    </section>
  );
};

export default Customers;
