import { useEffect, useState } from 'react';
import { dataImage } from '../utilits';

const Modalbox = ({ close, value }) => {
  const data = [
    {
      name: 'Facelift',
      tag: 'Angular 15, jira, Docker, Miro',
      desc: [
        {
          p: 'User registers with phone number, allows user to be as anonymous as possible. Logged in user is able to submit a list of things needed as well as a location of where the trusted admin is to drop off the requested items. Admin is able to see a list of orders with the items requested from all users.',
        },
      ],
      img: 'img/portfolio/facelift01.png'
    },
    {
      name: 'E-Forms',
      tag: 'Angular 12, .Net core, Cosmos DB, Power Automate, git, Azure, HTML, CSS, Tailwind CSS, Kendo, Form.io',
      desc: [
        {
          p: 'An website to create dynamic forms for the client. These forms has specific workflow through which the form has to go in order to get approved from different roles included in that workflow.',
        },
      ],
      img: 'img/portfolio/eforms.png'
    },
    {
      name: 'Social 27 (Admin Panel)',
      tag: 'ASP .Net core, SQL, Angular 9, HTML, CSS, Material UI, Kendo, SASS, Azure, Firebase, git, sourceTree, Jira',
      desc: [
        {
          p: "Social 27 is a virtual event platform designed and customized specifically according to the client’s requirements to arrange an event of thousands of users simultaneously, where users can do interactions with speakers, other attendants and can create rooms for separate meeting.",
        },
      ],
      img: 'img/portfolio/ENT2.png'
    },
    {
      name: 'Social 27 (Attendees Panel)',
      tag: 'ASP .Net core, SQL, Angular 9, HTML, CSS, Material UI, Kendo, SASS, Azure, Firebase, git, sourceTree, Jira',
      desc: [
        {
          p: 'Social 27 is a virtual event platform designed and customized specifically according to the client’s requirements to arrange an event of thousands of users simultaneously, where users can do interactions with speakers, other attendants and can create rooms for separate meeting.',
        },
      ],
      img: 'img/portfolio/ENTevent.png'
    },
    {
      name: 'Tracks creator (Admin Panel)',
      tag: 'ASP .Net core, Micro services, Angular 9, HTML, CSS, Material UI, Kendo, SASS, Azure, git, sourceTree, MongoDB, Jira',
      desc: [
        {
          p: "A virtual event platform that allow clients to held an event and get reports afterwards.",
        },
      ],
      img: 'img/portfolio/lite5.png'
    },
    {
      name: 'Tracks creator (Attendees Panel)',
      tag: 'ASP .Net core, Micro services, Angular 9, HTML, CSS, Material UI, Kendo, SASS, Azure, git, sourceTree, MongoDB, Jira',
      desc: [
        {
          p: 'A virtual event platform that allow clients to held an event and get reports afterwards.',
        },
      ],
      img: 'img/portfolio/Liteevent.png'
    },
    {
      name: 'Dawalo',
      tag: '.Net Core, Cosmos DB, Azure, git.',
      desc: [
        {
          p: "An e commerce website for the purchase of medicines.",
        },
      ],
      img: 'img/portfolio/dawaloo.png'
    },
    {
      name: 'Autohub',
      tag: 'ASP .Net, Angular 8, SQL, HTML, CSS, Bootstrap, SASS ',
      desc: [
        {
          p: 'A workshop management system for the client where the user can come for the regular maintenance of his car. This system includes a workflow with different roles to whom the  car will be assigned for inspection, maintenance work and QA before it goes back to the user.',
        },
      ],
      img: 'img/portfolio/ah.png'
    },
    {
      name: 'Dooz',
      tag: 'JASP .Net, Angular 7, HTML, CSS, Bootstrap, SQL',
      desc: [
        {
          p: "AutoJo is a selling and purchasing platform for the cars in Jordan. Users were able to get their cars inspected and get a digital report and rating and that can be attached to the ad of the car while selling it.",
        },
      ],
      img: 'img/portfolio/dooz.jpeg'
    },
    {
      name: 'TechnoCares',
      tag: 'Angular 9, HTML, CSS, Bootstrap ',
      desc: [
        {
          p: 'A portfolio website for the company to display their work.',
        },
      ],
      img: 'img/portfolio/technocares.png'
    },
  ];

  const [index, setIndex] = useState(value);
  useEffect(() => {
    dataImage();
  }, [index]);

  return (
    <div className='resumo_fn_modalbox opened'>
      <a
        className='extra_closer'
        href='#'
        onClick={(e) => {
          e.preventDefault();
          close(false);
        }}
      />
      <div className='box_inner'>
        <a
          className='closer'
          href='#'
          onClick={(e) => {
            e.preventDefault();
            close(false);
          }}
        >
          <span />
        </a>
        <div className='modal_content'>
          <div className='modal_in'>
            {data.map(
              (d, i) =>
                i + 1 == index && (
                  <div key={i}>
                    <h3 className='fn__title'>{d.name}</h3>
                    <p className='fn__cat'>{d.tag}</p>
                    <div className='img_holder modal_img_holder'>
                      <img src='/img/portfolio/AH3.png' alt='' />
                      <div
                        className='abs_img'
                        data-bg-img={d.img}
                      />
                    </div>
                    {d.desc.map((des, i) => (
                      <p key={i} className='fn__desc'>
                        {des.p}
                      </p>
                    ))}
                  </div>
                )
            )}
          </div>

          <div className='fn__nav' data-from='portfolio' data-index='1'>
            <a
              href='#'
              className='prev'
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 1 ? 10 : index - 1);
              }}
            >
              <span className='text'>Prev</span>
              <span className='arrow_wrapper'>
                <span className='arrow'></span>
              </span>
            </a>
            <a
              href='#'
              className='next'
              onClick={(e) => {
                e.preventDefault();
                setIndex(index == 10 ? 1 : index + 1);
              }}
            >
              <span className='text'>Next</span>
              <span className='arrow_wrapper'>
                <span className='arrow'></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;
