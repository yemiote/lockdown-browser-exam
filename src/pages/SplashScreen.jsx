import hero from "../assets/lock.jpg";
import "../styles/SplashScreen.css";

function SplashScreen() {
  return (
  <div className="splash-container">

    <div className="splash-panel">

      <div className="splash-card">

        <div className="logo-area">

          <img
            src={hero}
            alt="Lock"
            className="logo"
          />

        </div>

        <h1>LockDown Browser</h1>

        <p className="loading-text">
          Loading...
        </p>

        <p className="wait-text">
          Please Wait.
        </p>

        <div className="loader"></div>

      </div>

    </div>

  </div>
);
}

export default SplashScreen;
