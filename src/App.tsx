import { useState } from "react";
import "virtual:windi.css";
import { info } from "./info";

function App() {
  const [ui, setUi] = useState("Projects");

  return (
    <div className="App w-screen h-screen bg-dark-900 text-light-900 p-8">
      <div className="grid md:(grid-cols-2) border-1 border-light-900 w-1/1 h-1/1 py-4 px-6">
        {/* Left */}
        <div>
          <h1 className="text-6xl font-light">Ahmad K. A.</h1>
          <p className="mb-12">An aspiring web developer</p>
          {/* List */}
          <ul>
            {/* Projects */}
            <li
              onClick={() => setUi(() => "Projects")}
              className="font-semibold py-1 my-1 hover:(cursor-pointer text-light-50)"
            >
              {ui == "Projects" ? "+" : "Projects"}
            </li>
            {/* Experience */}
            <li
              onClick={() => setUi(() => "Experience")}
              className="font-semibold py-1 my-1 hover:(cursor-pointer text-light-50)"
            >
              {ui == "Experience" ? "+" : "Experience"}
            </li>
            {/* Skills */}
            <li
              onClick={() => setUi(() => "Skills")}
              className="font-semibold py-1 my-1 hover:(cursor-pointer text-light-50)"
            >
              {ui == "Skills" ? "+" : "Skills"}
            </li>
          </ul>
        </div>
        {/* Right */}
        <div className="self-end justify-self-end">
          {/* Projects */}
          {ui == "Projects" && <h1>Projects</h1>}
          {/* Experience */}
          {ui == "Experience" && <h1>Experience</h1>}
          {/* Skills */}
          {ui == "Skills" && <h1>Skills</h1>}
        </div>
      </div>
    </div>
  );
}

export default App;
