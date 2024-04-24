import "./MyEvents.css";
import myEventImg from "../../assets/images/myEventImg.png";
import EditIcon from "../../assets/images/edit.png";
import CheckInIcon from "../../assets/images/checkIn.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import Insta from "../../assets/images/insta.png";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.png";
import copy from "../../assets/images/copy.png";
import arrowRight from "../../assets/images/arrow-right.png";
import arrowDown from "../../assets/images/arrow-down.png";
import arrowLeft from "../../assets/images/arrow-left.png";
const MyEvents = () => {
  const subTitles = [
    {
      id: 1,
      title: "Overview",
    },
    {
      id: 2,
      title: "Registration",
    },
    {
      id: 3,
      title: "Ticket",
    },
    {
      id: 4,
      title: "Guest list",
    },
    {
      id: 5,
      title: "Emails",
    },
    {
      id: 0,
      title: "Analytics",
    },
  ];
  return (
    <div className="myEvent">
      <div className="wrapper">
        <div className="myEvent-top top">
          <h1>
            Tech festival 2024 <img src={arrowDown} alt="arrow down" />{" "}
          </h1>
        </div>
      </div>
      <div className="subtitles-wrapper">
        <ul className="subtitles">
          {subTitles.map((subtitle) => (
            <li className="subtitle" key={subtitle.id}>
              {subtitle.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="myEvent-bottom-wrapper bottom-wrapper">
        <div className="myEvent-bottom row">
          <div className="myEvent-bottom-left">
            <img src={myEventImg} alt="event image here" />
            <p>
              This session is centered around guiding young professionals in
              strategic planning and intentional decision-making to shape their
              professional journey.
            </p>
          </div>
          <div className="myEvent-bottom-right">
            <div className="myEvent-bottom-right-content">
              <div className="buttons">
                <button>
                  <img src={CheckInIcon} alt="CheckInIcon" />
                  Check in
                </button>
                <button>
                  <img src={EditIcon} alt="EditIcon" />
                  Edit event
                </button>
              </div>
              <div className="spread-the-word">
                <p>Spread the word</p>
                <div className="social-icons">
                  <img src={Whatsapp} alt="whatsapp icon" />
                  <img src={Insta} alt="instagram icon" />
                  <img src={facebook} alt="facebook icon" />
                  <img src={twitter} alt="twitter icon" />
                </div>
                <div className="copy-paste">
                  <input
                    type="text"
                    disabled
                    value="https://eventflow.africa/tech-festival-2024"
                  />
                  <img src={copy} alt="copy icon" />
                </div>
                <div className="tips-for-success">
                  <div className="tips-for-success-header">
                    <p>#Tips for success</p>
                    <div className="arrow">
                      <img src={arrowLeft} alt="arrow left" />
                      <img src={arrowRight} alt="arrow right" />
                    </div>
                  </div>
                  <div className="down-content">
                    <h3>How to prepare for your group session?</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Consectetur eu
                      enim integer odio. Nulla porta vitae fames ut ultricies.
                      <br />
                      <br />
                      ipsum dolor sit amet consectetur. Consectetur eu enim
                      integer odio. Nulla porta vitae fames ut ultricies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEvents;
