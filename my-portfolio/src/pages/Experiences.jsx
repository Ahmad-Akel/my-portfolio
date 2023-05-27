import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const Experiences = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            UPCE, Pardubice, Czech Republic
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IPB, Braganca, Portugal
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Erasmus</h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Internship Frontend - VOATT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Pardubice, CZ</h4>
          <p>
            Designing and implement components for various websites, mainly
            worked with Web Design (CSS, SASS), Html, and simple functionality
            with pure JavaScript. The backend was in Drupal (an open-source PHP
            CMS).
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Frontend - Advantech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Brno, CZ</h4>
          <p>
            Mainly working with Vue js using Vuetify as a UI library and Vuex as
            a state management pattern, pure JavaScript, Html, CSS..
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontedn Developer - mgm-tp
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Prague, CZ</h4>
          <p>
            WORK EXPERIENCE Front-End Intern VOATT [ 13/04/2020 – 05/08/2020 ]
            City: Pardubice Country: Czechia Designing and implement components
            for various websites, mainly worked with Web Design (CSS, SASS),
            Html, and simple functionality with pure JavaScript. The backend was
            in Drupal (an open-source PHP CMS) Junior Front-End developer
            Advantech [ 02/09/2021 – 18/04/2022 ] City: Brno Country: Czechia
            Mainly working with Vue js using Vuetify as a UI library and Vuex as
            a state management pattern, pure JavaScript, Html, CSS. Front end
            developer mgm technology partners gmbh [ 09/05/2022 – Current ]
            City: Prague Country: Czechia Building and customizing applications
            with A12 (Low-Code model-driven platform), mainly working on
            Typescript, React, Redux, and Redux Saga. Used technologies: •
            TypeScript • React • Redux, Redux Saga • Styled Components • Html &
            CSS
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experiences;
