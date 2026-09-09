import { useState } from 'react';

const About = () => {
  const [toggleList, setToggleList] = useState('tab1');
  const activeList = (value) => (value === toggleList ? 'active' : '');
  return (
    <section id='about'>
      <div className='container'>
        <div className='roww'>
          {/* Main Title */}
          <div className='resumo_fn_main_title'>
            <h3 className='subtitle'>About Me</h3>
            <h3 className='title'>Biography</h3>
            <p className='desc'>
              {`I'm a Full Stack Software Engineer who enjoys building software from the ground up and solving problems that require both technical depth and product thinking.`}
            </p>
            <p className='desc'>
              {`Over the course of my career, I've worked across the full development lifecycle—from understanding requirements and designing solutions to implementing features, writing unit and end-to-end tests, reviewing code, and deploying applications through CI/CD pipelines. My experience spans modern frontend development with Angular and React, backend development with .NET Core and Node.js, and data platforms including SQL, MongoDB, and Cosmos DB.`}
            </p>
            <p className='desc'>
              {`In my current work, I'm part of a CORE engineering team where I collaborate closely with product managers, designers, and other engineering teams. I take ownership of features beyond implementation, contributing to technical decisions, UI/UX discussions, architecture, quality, and delivery.`}
            </p>
            <p className='desc'>
              {`More recently, I've been exploring a different way of building software through AI-assisted and agentic development. I use tools such as Claude Code to experiment with workflows where AI can participate in research, planning, implementation, testing, and iterative problem-solving. This has shifted my interest from simply using AI to write code toward understanding how AI can become part of the engineering process itself.`}
            </p>
            <p className='desc'>
              {`I'm particularly interested in building SaaS products, developer tools, and AI-powered applications—and in finding better ways to combine strong engineering practices with the capabilities of modern AI.`}
            </p>
          </div>
          {/* /Main Title */}
          {/* About Information */}
          <div className='resumo_fn_about_info'>
            <div className='about_left'>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Salman Danish</th>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <th>18th February 1996</th>
                  </tr> 
                  {/* <tr>
                    <th>Age</th>
                    <th>31 years</th>
                  </tr> */}
                  <tr>
                    <th>Address</th>
                    <th>Lahore, Pakistan</th>
                  </tr>
                  {/* <tr>
                    <th>Phone</th>
                    <th>
                      <a href="tel:+3846923442364">(+38) 469 2344 2364</a>
                    </th>
                  </tr> */}
                  <tr>
                    <th>Email</th>
                    <th>
                      <a href='mailto:salmandanishmirza@hotmail.com'>
                        salmandanishmirza@hotmail.com
                      </a>
                    </th>
                  </tr>
                  {/* <tr>
                    <th>Skype</th>
                    <th>
                      <a href="skype:sadanish">sadanish</a>
                    </th>
                  </tr> */}
                </tbody>
              </table>
            </div>
            <div className='about_right'>
              {/* Download CV Button */}
              <div className='resumo_fn_cv_btn'>
                <a
                  href='img/SalmanResume.pdf'
                  download='Salman Danish Resume'
                >
                  <span className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      version='1.1'
                      x='0px'
                      y='0px'
                      viewBox='0 0 449.306 449.306'
                      style={{ enableBackground: 'new 0 0 449.306 449.306' }}
                      xmlSpace='preserve'
                      className='fn__svg replaced-svg'
                    >
                      <path d='M447.739,251.298l-59.037-126.433c-1.731-3.54-5.484-5.625-9.404-5.224h-50.155c-5.771,0-10.449,4.678-10.449,10.449     c0,5.771,4.678,10.449,10.449,10.449h43.363l48.588,104.49h-59.559c-27.004-0.133-51.563,15.625-62.694,40.229     c-8.062,16.923-25.141,27.698-43.886,27.69h-60.604c-18.745,0.008-35.823-10.767-43.886-27.69     c-11.131-24.604-35.69-40.362-62.694-40.229H29.257l57.469-104.49h33.437c5.771,0,10.449-4.678,10.449-10.449     c0-5.771-4.678-10.449-10.449-10.449H80.457c-3.776-0.358-7.425,1.467-9.404,4.702L2.09,250.776     c-1.209,1.072-1.958,2.569-2.09,4.18v130.09c0.832,29.282,24.524,52.744,53.812,53.29h341.682     c29.289-0.546,52.98-24.008,53.812-53.29v-130.09C449.107,253.622,448.567,252.362,447.739,251.298z M428.408,385.045     c-0.812,17.743-15.16,31.864-32.914,32.392H53.812c-17.754-0.528-32.102-14.648-32.914-32.392V265.927h66.873     c18.745-0.008,35.823,10.767,43.886,27.69c11.131,24.604,35.69,40.362,62.694,40.229h60.604     c27.004,0.133,51.563-15.625,62.694-40.229c8.062-16.923,25.141-27.698,43.886-27.69h66.873V385.045z' />
                    </svg>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      xmlnsXlink='http://www.w3.org/1999/xlink'
                      version='1.1'
                      x='0px'
                      y='0px'
                      viewBox='0 0 449.306 449.306'
                      style={{ enableBackground: 'new 0 0 449.306 449.306' }}
                      xmlSpace='preserve'
                      className='fn__svg arrow replaced-svg'
                    >
                      <path d='M217.339,252.865c3.706,4.04,9.986,4.31,14.025,0.603c0.21-0.192,0.411-0.394,0.603-0.603l71.053-71.576   c3.462-4.617,2.527-11.166-2.09-14.629c-3.715-2.786-8.824-2.786-12.539,0l-53.29,53.29V21.42   c0-5.771-4.678-10.449-10.449-10.449s-10.449,4.678-10.449,10.449v198.531l-53.29-53.29c-4.617-3.462-11.166-2.527-14.629,2.09   c-2.786,3.715-2.786,8.824,0,12.539L217.339,252.865z' />
                    </svg>
                  </span>
                  <span>Download CV</span>
                </a>
              </div>
              {/* /Download CV Button */}
            </div>
          </div>
          {/* /About Information */}
          {/* Tabs Shortcode */}
          <div className='resumo_fn_tabs'>
            {/* Tab: Header */}
            <div className='tab_header'>
              <ul>
                <li className={activeList('tab1')}>
                  <a href='#' onClick={() => setToggleList('tab1')}>
                    Experience
                  </a>
                </li>
                <li className={activeList('tab2')}>
                  <a href='#' onClick={() => setToggleList('tab2')}>
                    Education
                  </a>
                </li>
                <li className={activeList('tab3')}>
                  <a href='#' onClick={() => setToggleList('tab3')}>
                    Skills
                  </a>
                </li>
              </ul>
            </div>
            {/* /Tab: Header */}
            {/* Tab: Content */}
            <div className='tab_content'>
              {/* #1 tab content */}
              <div id='tab1' className={`tab_item ${activeList('tab1')}`}>
                {/* Boxed List */}
                <div className='resumo_fn_boxed_list'>
                  <ul>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Facelift</h5>
                          <span>( Present )</span>
                        </div>
                        <h3>Software Engineer</h3>
                        <p>
                          <ul className='experience-list'>
                            <li>
                              Serve as the sole frontend engineer within a 4-person Core Team, owning frontend architecture, implementation, testing and production delivery for platform features used across approximately 60 organizations.
                            </li>
                            <li>
                              Architected and delivered a new Angular-based real-time chat system, replacing the legacy JavaScript implementation and supporting internal and external participants through email-based access. Designed the solution across ~10 Angular components and integrated it across 3 dependent teams.
                            </li>
                            <li>
                              Engineered chat workflows supporting approximately 15-20 participants per conversation, ~30-40 messages per day per active chat, and image attachments of up to 10 images per message.
                            </li>
                            <li>
                              Led the migration of 3 legacy AngularJS modules covering ~10 screens and ~30 components to Angular 19, while introducing 3 new application routes and modernizing the frontend architecture.
                            </li>
                            <li>
                              Reduced application page load time by ~70%, from approximately 10 seconds to 3 seconds, through OnPush change detection, lazy loading, AOT compilation, pure pipes, and Angular Signals.
                            </li>
                            <li>
                              Designed and integrated OneSignal push notifications supporting approximately 1,500 notifications per day across multiple organizations and 4 notification types.
                            </li>
                            <li>
                              Implemented application state management using NgRx and Signal Store across complex workflows, applying reusable architectural patterns to maintain scalable and testable code.
                            </li>
                            <li>
                              Implemented internationalization across 4 languages and integrated REST and GraphQL APIs to support multi-language product releases and platform functionality.
                            </li>
                            <li>
                              Maintained ~85% automated test coverage using Jest and end-to-end testing, supported by 5 CI/CD pipelines and biweekly production deployments.
                            </li>
                            <li>
                              Collaborated with cross-functional teams to take features from technical design, documentation, and Figma implementation through code review, testing, CI/CD, and production release.
                            </li>
                            <li>
                              Designed and deployed scalable AI agentic systems using Claude Code, reducing time-to-market for production features by 70% while ensuring code quality.
                            </li>
                            <li>
                              Implemented web accessibility best practices during the migration of legacy modules to ensure inclusivity and compliance with modern interface standards.
                            </li>
                          </ul>{' '}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Aquila 360</h5>
                          {/* <span>( 02/2021 — 03/2023 )</span> */}
                        </div>
                        <h3>Software Engineer</h3>
                        <p>
                          <ul className='experience-list'>
                            <li>
                              Delivered full-stack solutions across three concurrent engagements Social27, ALEC, and an internal platform—owning features from technical design through production deployment. 
                            </li>
                            <li>
                              Developed and maintained a platform serving 50,000+ active users, including real-time communication and high-volume data processing capabilities.
                            </li>
                            <li>
                              Built a bulk-upload pipeline capable of processing up to 100,000 records per execution.
                            </li>
                            <li>
                              Led system design and database design for .NET Core microservices backed by MongoDB, using gRPC for internal service communication and integrating Salesforce for enterprise data exchange.
                            </li>
                            <li>
                              Improved Angular application performance through NgRx state management, OnPush change detection, lazy loading and AOT compilation.
                            </li>
                            <li >    
							                Owned end-to-end development of the ALEC E-Forms platform as the sole full-stack engineer, delivering dynamic form creation, PDF generation, role-based access control, and automated workflows through Power Automate.
                            </li>
                            <li>
                              CLed a two-developer backend team on an internal product, coordinating technical delivery across frontend and backend workstreams.
                            </li>
                            <li>
                              Managed Azure DevOps CI/CD pipelines and partnered with QA to resolve defects and maintain stable production releases.
                            </li>
                            <li>
                              Developed an ecommerce and POS application using Node.js and PostgreSQL, owning full-stack delivery from database schema design through API implementation and frontend integration.
                            </li>
                          </ul>{' '}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>TechnoCares</h5>
                          {/* <span>( 11/2019 — 02/2021 )</span> */}
                        </div>
                        <h3>Software Engineer</h3>
                        <p>
                          <ul className='experience-list'>
                            <li>
                              Progressed into a full-stack delivery and leadership role, taking ownership of project execution, team coordination, and developer mentorship.
                            </li>
                            <li>
                              Led three frontend developers in redesigning a 20+ screen application within one week despite having no prior knowledge of the existing codebase.
                            </li>
                            <li>
                              Developed a role-based Workshop Maintenance System for the automotive industry, supporting ticket management, technician assignment, inspections, billing, and vehicle delivery workflows for 50+ internal users.
                            </li>
                            <li>
                              Contributed to a car marketplace platform serving 5,000+ users and redesigned the corporate website to modernize its UI/UX, ensuring a fully responsive design across all devices.
                            </li>
                            <li>
                              Built Angular applications using Angular 7, Bootstrap, and Now UI Kit, with real-time notifications implemented through SignalR.
                            </li>
                            <li>
                              Integrated REST APIs with ASP.NET and developed SQL stored procedures supporting application functionality.
                            </li>
                            <li>
                              Mentored and guided 4-5 interns, coordinated development and QA workflows, and drove resolution of production issues to support stable and timely releases.
                            </li>
                            <li>
                              Conducted rigorous cross-browser compatibility testing during the development of web applications to ensure consistent performance and UI rendering across Chrome, Firefox, Safari, and Edge.
                            </li> 
                          </ul>{' '}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Softbeats</h5>
                          {/* <span>( 04/2019 — 11/2019 )</span> */}
                        </div>
                        <h3>Technical Support Executive</h3>
                        <p>
                          <ul className='experience-list'>
                            <li>
                              Developed and optimized SQL stored procedures for application data retrieval and reporting.
                            </li>
                            <li>
                              Created and customized Crystal Reports based on client business requirements.
                            </li>
                            <li>
                              Coordinated deployment of 15 servers and configuration of 40 client machines with a team of three interns.
                            </li>
                            <li>
                              Resolved approximately 75 customer support tickets per month while maintaining a 95% customer satisfaction rate.
                            </li>
                            <li>
                              Gathered client requirements and coordinated with development teams to resolve technical issues and support successful deployments.
                            </li>
                          </ul>{' '}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>Anvil Vision</h5>
                          {/* <span>( 02/2019 — 03/2019 )</span> */}
                        </div>
                        <h3>Software Engineer Intern</h3>
                        <p>
                          <ul className='experience-list'>
                            <li>
                              Learned React and ES6. 
                            </li>
                            <li>
                              Worked in core PHP.
                            </li>
                          </ul>{' '}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#1 tab content */}
              {/* #2 tab content */}
              <div id='tab2' className={`tab_item ${activeList('tab2')}`}>
                {/* Boxed List */}
                <div className='resumo_fn_boxed_list'>
                  <ul>
                    {/* <li>
                      <div className="item">
                        <div className="item_top">
                          <h5>Frenify University</h5>
                          <span>( 2014 — 2017 )</span>
                        </div>
                        <h3>Computer Science</h3>
                        <p>
                          Adipisicing Lorem ipsum dolor sit amet, consectetur
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.{" "}
                        </p>
                      </div>
                    </li> */}
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>COMSATS University Lahore</h5>
                          <span>( 07/2014 — 09/2018 )</span>
                        </div>
                        <h3>Bachelor of Science in Software Engineering</h3>
                        {/* <p> </p> */}
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>PakTurk College</h5>
                          <span>( 06/2012 — 06/2014 )</span>
                        </div>
                        <h3>Intermediate Pre Engineering</h3>
                        {/* <p> </p> */}
                      </div>
                    </li>
                    <li>
                      <div className='item'>
                        <div className='item_top'>
                          <h5>The Punjab School</h5>
                          <span>( 03/2010 — 05/2012 )</span>
                        </div>
                        <h3>Matriculation</h3>
                        {/* <p> </p> */}
                      </div>
                    </li>
                  </ul>
                </div>
                {/* /Boxed List */}
              </div>
              {/* /#2 tab content */}
              {/* #3 tab content */}
              <div id='tab3' className={`tab_item ${activeList('tab3')}`}>
                {/* Progress Bar */}
                <div className='resumo_fn_progress_bar'>
                  <div className='progress_item open' data-value={90}>
                    <div className='item_in'>
                      <h3 className='progress_title'>Angular 2+</h3>
                      <span
                        className='progress_percent'
                        style={{ right: '10%' }}
                      >
                        90%
                      </span>
                      <div className='bg_wrap'>
                        <div className='progress_bg' style={{ width: '90%' }} />
                      </div>
                    </div>
                  </div>
                  <div className='progress_item open' data-value={80}>
                    <div className='item_in'>
                      <h3 className='progress_title'>.Net Core</h3>
                      <span
                        className='progress_percent'
                        style={{ right: '20%' }}
                      >
                        80%
                      </span>
                      <div className='bg_wrap'>
                        <div className='progress_bg' style={{ width: '80%' }} />
                      </div>
                    </div>
                  </div>                  
                  <div className='progress_item open' data-value={90}>
                    <div className='item_in'>
                      <h3 className='progress_title'>HTML5 &amp; CSS3</h3>
                      <span
                        className='progress_percent'
                        style={{ right: '10%' }}
                      >
                        90%
                      </span>
                      <div className='bg_wrap'>
                        <div className='progress_bg' style={{ width: '90%' }} />
                      </div>
                    </div>
                  </div>
                  <div className='progress_item open' data-value={85}>
                    <div className='item_in'>
                      <h3 className='progress_title'>SQL</h3>
                      <span
                        className='progress_percent'
                        style={{ right: '15%' }}
                      >
                        85%
                      </span>
                      <div className='bg_wrap'>
                        <div className='progress_bg' style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                  <div className='progress_item open' data-value={85}>
                    <div className='item_in'>
                      <h3 className='progress_title'>Cosmos DB</h3>
                      <span
                        className='progress_percent'
                        style={{ right: '15%' }}
                      >
                        85%
                      </span>
                      <div className='bg_wrap'>
                        <div className='progress_bg' style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                  <div className='progress_item open' data-value={80}>
                    <div className='item_in'>
                      <h3 className='progress_title'>Mongo DB</h3>
                      <span
                        className='progress_percent'
                        style={{ right: '20%' }}
                      >
                        80%
                      </span>
                      <div className='bg_wrap'>
                        <div className='progress_bg' style={{ width: '80%' }} />
                      </div>
                    </div>
                  </div>
                  <div className='progress_item open' data-value={85}>
                    <div className='item_in'>
                      <h3 className='progress_title'>Git</h3>
                      <span
                        className='progress_percent'
                        style={{ right: '15%' }}
                      >
                        85%
                      </span>
                      <div className='bg_wrap'>
                        <div className='progress_bg' style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>
                  
                </div>

                {/* /Progress Bar */}
                {/* Description */}
                {/* <div className="resumo_fn_desc">
                  <p>
                    A freelance creative designer with a love for minimal
                    design, clean typography and well-written code, located in
                    San Francisco. Provide high quality and cost effective
                    offshore web and software development services. Wide range
                    of web and software development services across the world.
                  </p>
                </div> */}
              </div>
              {/* /#2 tab content */}
            </div>
            {/* /Tab: Content */}
          </div>
          {/* /Tabs Shortcode */}
        </div>
      </div>
    </section>
  );
};

export default About;
