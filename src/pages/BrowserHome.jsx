import Window from "../components/Windows";
import "../styles/BrowserHome.css";

function BrowserHome({ onStart }) {
  return (
    <Window title="LockDown Browser">

      <div className="browser-home">

        <h1>LockDown Browser Ready</h1>

        <p>
          Click the button below to begin your exam.
        </p>

        <button
  className="start-btn"
  onClick={onStart}
>
  Start Exam
</button>

      </div>

    </Window>
  );
}

export default BrowserHome;
