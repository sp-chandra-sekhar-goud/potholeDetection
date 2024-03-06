import pothole from "../assets/pothole.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="Hero">
        <h1 id="title">Pothole Detection and Data Logging System</h1>
      <div className="overlay"></div>
        <img src={pothole} alt="pothole" />
      </div>
  );
};

export default Home;
