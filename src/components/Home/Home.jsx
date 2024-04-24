import "./Home.css";
import AddImg from "../../assets/images/addImg.png";
import InputIcon from "../../assets/images/inputIcon.png";
const Home = () => {
  return (
    <div className="home">
      <div className="home-top-wrapper">
        <div className="home-top">
          <h1>Create Event</h1>
          <p>
            Let’s make your event successful and profitable! with eventflow 😎
          </p>
        </div>
      </div>

      <div className="home-bottom-wrapper">
        <div className="home-bottom">
          <div className="home-bottom-left">
            <div className="home-bottom-left-header">
              <div className="line-group">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
              <div className="header-title">
                <h2>Name your event and make it unique</h2>
              </div>
            </div>
            <div className="form-group">
              <form action="#">
                <div className="form-field">
                  <label htmlFor="#">Event Name</label>
                  <div className="form-field-group">
                    <img src={InputIcon} alt="input icon" />
                    <input type="text" placeholder="Event name" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="#">Event Description (Optional)</label>
                  <div className="form-field-group">
                    <textarea name="" id="" placeholder="Description" />
                  </div>
                </div>
                <button type="submit">Next</button>
              </form>
            </div>
          </div>
          <div className="home-bottom-right">
            <img src={AddImg} alt="drag image here" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
