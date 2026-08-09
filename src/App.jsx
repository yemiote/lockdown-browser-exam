import { useEffect, useState } from "react";

import SplashScreen from "./pages/SplashScreen";
import SecurityCheck from "./pages/SecurityCheck";
import BrowserHome from "./pages/BrowserHome";
import ExamPage from "./pages/ExamPage";

function App() {

  const [screen, setScreen] = useState("splash");

  useEffect(() => {

  if (screen === "splash") {

    const timer = setTimeout(() => {
      setScreen("security");
    }, 3000);

    return () => clearTimeout(timer);

  }

  if (screen === "security") {

    const timer = setTimeout(() => {
      setScreen("home");
    }, 5000);

    return () => clearTimeout(timer);

  }

}, [screen]);

  return (
    <>
  {screen === "splash" && <SplashScreen />}

  {screen === "security" && <SecurityCheck />}

  {screen === "home" && (
  <BrowserHome
    onStart={() => setScreen("exam")}
  />
)}

  {screen === "exam" && <ExamPage />}
</>
  );
}

export default App;