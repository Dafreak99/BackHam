import React, { Component } from "react";
import AboutProfile from "./AboutProfile";
import PeriodOfTime from "./PeriodOfTime";
import TimeLine from "./TimeLine";
import About from "./About";
import Header from "./Header";
import Skills from "./Skills";
import Footer from "./Footer";
import Mainnav from "./Mainnav";
import Page from "./Page";

export default class ResumePage extends Component {
  state = {
    experience: [
      {
        occupation: "UX and Interaction Designer",
        company: "Google Company",
        period: "2007-2010",
        place: "Germany - Berlin"
      },
      {
        occupation: "UX and UI Designer",
        company: "QBootstrap.com",
        period: "2010-2013",
        place: "Germany - Berlin"
      },
      {
        occupation: "UX and Interaction Designer",
        company: "Google Company",
        period: "2007-2010",
        place: "Germany - Berlin"
      },
      {
        occupation: "UX and Interaction Designer",
        company: "Google Company",
        period: "2007-2010",
        place: "Germany - Berlin"
      }
    ],
    education: [
      {
        occupation: "UX and Interaction Designer",
        company: "Google Company",
        period: "2007-2010",
        place: "Germany - Berlin"
      },
      {
        occupation: "UX and UI Designer",
        company: "QBootstrap.com",
        period: "2010-2013",
        place: "Germany - Berlin"
      },
      {
        occupation: "UX and Interaction Designer",
        company: "Google Company",
        period: "2007-2010",
        place: "Germany - Berlin"
      },
      {
        occupation: "UX and Interaction Designer",
        company: "Google Company",
        period: "2007-2010",
        place: "Germany - Berlin"
      }
    ]
  };
  render() {
    const { isMainNavShow, onExitMainNav, onMainNavShow } = this.props;
    return (
      <React.Fragment>
        <Mainnav isMainNavShow={isMainNavShow} onExitMainNav={onExitMainNav} />
        <Header onMainNavShow={onMainNavShow} />
        <About />
        <AboutProfile />
        <TimeLine title="Experience">
          {this.state.experience.map((each, index) => (
            <PeriodOfTime
              occupation={each.occupation}
              company={each.company}
              period={each.period}
              place={each.place}
            />
          ))}
        </TimeLine>
        <TimeLine title="Education">
          {this.state.education.map((each, index) => (
            <PeriodOfTime
              occupation={each.occupation}
              company={each.company}
              period={each.period}
              place={each.place}
            />
          ))}
        </TimeLine>
        <Skills />
        <Footer />
      </React.Fragment>
    );
  }
}
