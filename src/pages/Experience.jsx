import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaComputer } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<FaComputer />}
          >
            <h3 className="vertical-timeline-element-title">Computer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Medan, Sumatera Utara
            </h4>
            <p>
              Operating System Installation, Driver Installation &
              Configuration, Software/Application Installation, PC & Laptop
              Maintenance, Technical Support for End Users
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
