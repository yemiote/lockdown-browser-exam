import Window from "../components/Windows";
import { useEffect, useState } from "react";
import "../styles/SecurityCheck.css";

function SecurityCheck() {

  const steps = [
  "Closing background applications",
  "Verifying browser settings",
  "Disabling screen capture",
  "Preparing exam session",
];
console.log(steps);

  const [completed, setCompleted] = useState([]);

  useEffect(() => {

  let index = 0;

  const timer = setInterval(() => {

    if (index < steps.length) {
      setCompleted((prev) => {
  console.log("Adding:", steps[index]);
  return [...prev, steps[index]];
});
      index++;
    } else {
      clearInterval(timer);
    }

  }, 1000);
console.log(completed);
  return () => clearInterval(timer);

}, []);

  return (

    <Window title="LockDown Browser">


      <div className="status">

  {steps.map((step, index) => (

    <p key={step}>

      <span className={index < completed.length ? "done" : "pending"}>
        {index < completed.length ? "✓" : "○"}
      </span>{" "}
      {step}

    </p>

  ))}

</div>

      <div className="loader"></div>

    </Window>

  );

}

export default SecurityCheck;