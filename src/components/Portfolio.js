import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { portfolioSliderProps } from '../sliderProps';
import Modalbox from './Modalbox';

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [modalValue, setModalValue] = useState(null);

  return (
    <section id='portfolio'>
      {modal && <Modalbox close={setModal} value={modalValue} />}
      <div className='container'>
        <div className='roww'>
          {/* Main Title */}
          <div className='resumo_fn_main_title'>
            <div className='my__nav'>
              <a href='#' className='prev'>
                <span />
              </a>
              <a href='#' className='next'>
                <span />
              </a>
            </div>
            <h3 className='subtitle'>Portfolio</h3>
            <h3 className='title'>Featured Projects</h3>
          </div>
          {/* /Main Title */}
        </div>
      </div>
      <div className='container noright'>
        <div className='roww'>
          <Swiper
            {...portfolioSliderProps}
            className='owl-carousel modal_items'
            data-from='portfolio'
          >
            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(1);
              }}
              data-index={1}
            >
              <div className='img_holder'>
                <img src='img/portfolio/facelift01.png' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/facelift01.png'
                />
              </div>
              <div className='title_holder'>
                <p>Frontend Developer</p>
                <h3>
                  <a href='#'>Facelift</a>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(2);
              }}
              data-index={2}
            >
              <div className='img_holder'>
                <img src='img/portfolio/eforms.png' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/eforms.png'
                />
              </div>
              <div className='title_holder'>
                <p>Full Stack Developer</p>
                <h3>
                  <a href='#'>E-Forms</a>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(3);
              }}
              data-index={3}
            >
              <div className='img_holder'>
                <img src='img/portfolio/ENT2.png' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/ENT2.png'
                />
              </div>
              <div className='title_holder'>
                <p>Full Stack Developer</p>
                <h3>
                  <a href='#'>Social 27 (Admin Panel)</a>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(4);
              }}
              data-index={4}
            >
              <div className='img_holder'>
                <img src='img/portfolio/ENTevent.png' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/ENTevent.png'
                />
              </div>
              <div className='title_holder'>
                <p>Full Stack Developer</p>
                <h3>
                  <a href='#'>Social 27 (Attendees Panel)</a>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(5);
              }}
              data-index={5}
            >
              <div className='img_holder'>
                <img src='img/portfolio/lite5.png' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/lite5.png'
                />
              </div>
              <div className='title_holder'>
                <p>Full Stack Developer</p>
                <h3>
                  <a href='#'>Tracks creator (Admin Panel)</a>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(6);
              }}
              data-index={6}
            >
              <div className='img_holder'>
                <img src='img/portfolio/Liteevent.png' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/Liteevent.png'
                />
              </div>
              <div className='title_holder'>
                <p>Full Stack Developer</p>
                <h3>
                  <a href='#'>Tracks creator (Attendees Panel)</a>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(7);
              }}
              data-index={7}
            >
              <div className='img_holder'>
                <img src='img/portfolio/dawaloo.png' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/dawaloo.png'
                />
              </div>
              <div className='title_holder'>
                <p>Backend Developer</p>
                <h3>
                  <a href='#'>Dawalo</a>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(8);
              }}
              data-index={8}
            >
              <div className='img_holder'>
                <img src='img/portfolio/ah.png' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/ah.png'
                />
              </div>
              <div className='title_holder'>
                <p>Full Stack Developer</p>
                <h3>
                  <a href='#'>Autohub</a>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(9);
              }}
              data-index={9}
            >
              <div className='img_holder'>
                <img src='img/portfolio/dooz.jpeg' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/dooz.jpeg'
                />
              </div>
              <div className='title_holder'>
                <p>Full Stack Developer</p>
                <h3>
                  <a href='#'>Dooz</a>
                </h3>
              </div>
            </SwiperSlide>

            <SwiperSlide
              className='item modal_item'
              onClick={() => {
                setModal(true);
                setModalValue(10);
              }}
              data-index={10}
            >
              <div className='img_holder'>
                <img src='img/portfolio/technocares.png' alt='image' />
                <div
                  className='abs_img'
                  data-bg-img='img/portfolio/technocares.png'
                />
              </div>
              <div className='title_holder'>
                <p>Frontend Developer</p>
                <h3>
                  <a href='#'>TechnoCares</a>
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
