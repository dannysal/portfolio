import { Fragment, useEffect, useState } from "react";

const Nav = ({ close, trigger }) => {
  const [toggle_, setToggle_] = useState("");
  useEffect(() => {
    !trigger && setToggle_("");
    setTimeout(() => {
      trigger ? setToggle_("ready") : setToggle_("");
    }, 2000);
  }, [trigger]);

  return (
    <Fragment>
      <a href="#" className="resumo_fn_nav_overlay" onClick={() => close()} />
      <div className="resumo_fn_navigation">
        <a href="#" className="closer" onClick={() => close()} />
        {/* Navigation Content */}
        <div className="nav_in">
          <nav id="nav">
            <h3 className="label">Menu</h3>
            <ul>
              <li style={{ transitionDelay: !trigger ? "0ms" : "700ms" }}>
                <a href="#home" onClick={() => close()}>
                  Home
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "900ms" }}>
                <a onClick={() => close()} href="#about">
                  About
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1100ms" }}>
                <a onClick={() => close()} href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li style={{ transitionDelay: !trigger ? "0ms" : "1300ms" }}>
                <a onClick={() => close()} href="#services">
                  Services
                </a>
              </li> 
               <li style={{ transitionDelay: !trigger ? "0ms" : "1500ms" }}>
                <a onClick={() => close()} href="#customers">
                  Customers
                </a>
              </li>
              {/* <li style={{ transitionDelay: !trigger ? "0ms" : "1700ms" }}>
                <a onClick={() => close()} href="#news">
                  News &amp; Tips
                </a>
              </li> */}
              <li style={{ transitionDelay: !trigger ? "0ms" : "1900ms" }}>
                <a onClick={() => close()} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className={`nav_footer ${toggle_}`}>
            <div className="social">
              <ul>
                {/* <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="681pt"
                      viewBox="-21 -81 681.33464 681"
                      width="681pt"
                      className="fn__svg replaced-svg"
                    >
                      <path d="m200.964844 515.292969c241.050781 0 372.871094-199.703125 372.871094-372.871094 0-5.671875-.117188-11.320313-.371094-16.9375 25.585937-18.5 47.824218-41.585937 65.371094-67.863281-23.480469 10.441406-48.753907 17.460937-75.257813 20.636718 27.054687-16.230468 47.828125-41.894531 57.625-72.488281-25.320313 15.011719-53.363281 25.917969-83.214844 31.808594-23.914062-25.472656-57.964843-41.402344-95.664062-41.402344-72.367188 0-131.058594 58.6875-131.058594 131.03125 0 10.289063 1.152344 20.289063 3.398437 29.882813-108.917968-5.480469-205.503906-57.625-270.132812-136.921875-11.25 19.363281-17.742188 41.863281-17.742188 65.871093 0 45.460938 23.136719 85.605469 58.316407 109.082032-21.5-.660156-41.695313-6.5625-59.351563-16.386719-.019531.550781-.019531 1.085937-.019531 1.671875 0 63.46875 45.171875 116.460938 105.144531 128.46875-11.015625 2.996094-22.605468 4.609375-34.558594 4.609375-8.429687 0-16.648437-.828125-24.632812-2.363281 16.683594 52.070312 65.066406 89.960937 122.425781 91.023437-44.855469 35.15625-101.359375 56.097657-162.769531 56.097657-10.5625 0-21.003906-.605469-31.2617188-1.816407 57.9999998 37.175781 126.8710938 58.871094 200.8867188 58.871094" />
                    </svg>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Bold"
                      enableBackground="new 0 0 24 24"
                      height={512}
                      viewBox="0 0 24 24"
                      width={512}
                      className="fn__svg replaced-svg"
                    >
                      <path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                </li> */}

                <li>
                  <a href="https://www.instagram.com/salu.d/" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                      className="fn__svg replaced-svg"
                    >
                      <path d="M373.659,0H138.341C62.06,0,0,62.06,0,138.341v235.318C0,449.94,62.06,512,138.341,512h235.318    C449.94,512,512,449.94,512,373.659V138.341C512,62.06,449.94,0,373.659,0z M470.636,373.659    c0,53.473-43.503,96.977-96.977,96.977H138.341c-53.473,0-96.977-43.503-96.977-96.977V138.341    c0-53.473,43.503-96.977,96.977-96.977h235.318c53.473,0,96.977,43.503,96.977,96.977V373.659z" />
                      <path d="M370.586,238.141c-3.64-24.547-14.839-46.795-32.386-64.342c-17.547-17.546-39.795-28.746-64.341-32.385    c-11.176-1.657-22.507-1.657-33.682,0c-30.336,4.499-57.103,20.541-75.372,45.172c-18.269,24.631-25.854,54.903-21.355,85.237    c4.499,30.335,20.541,57.102,45.172,75.372c19.996,14.831,43.706,22.619,68.153,22.619c5.667,0,11.375-0.418,17.083-1.265    c30.336-4.499,57.103-20.541,75.372-45.172C367.5,298.747,375.085,268.476,370.586,238.141z M267.791,327.632    c-19.405,2.882-38.77-1.973-54.527-13.66c-15.757-11.687-26.019-28.811-28.896-48.216c-2.878-19.405,1.973-38.77,13.66-54.527    c11.688-15.757,28.811-26.019,48.217-28.897c3.574-0.53,7.173-0.795,10.772-0.795s7.199,0.265,10.773,0.796    c32.231,4.779,57.098,29.645,61.878,61.877C335.608,284.268,307.851,321.692,267.791,327.632z" />
                      <path d="M400.049,111.951c-3.852-3.851-9.183-6.058-14.625-6.058c-5.442,0-10.773,2.206-14.625,6.058    c-3.851,3.852-6.058,9.174-6.058,14.625c0,5.451,2.207,10.773,6.058,14.625c3.852,3.851,9.183,6.058,14.625,6.058    c5.442,0,10.773-2.206,14.625-6.058c3.851-3.852,6.058-9.183,6.058-14.625C406.107,121.133,403.9,115.802,400.049,111.951z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/salman-danish-04388175/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/dannysal" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              {" "}
              Developed by &nbsp;
              {/* <a
                href="https://themeforest.net/user/trendycoder"
                target="_blank"
                rel="noreferrer"
              >
              </a> */}
                Salman Danish
            </div>
          </div>
        </div>

        {/* /Navigation Content */}
      </div>
    </Fragment>
  );
};

export default Nav;
