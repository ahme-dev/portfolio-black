import { useState } from "react";
import "virtual:windi.css";

function App() {
  return (
    <div className="App w-screen h-screen bg-dark-900 text-light-900 p-8">
      <div className="grid grid-cols-2 border-1 border-light-900 w-1/1 h-1/1 py-4 px-6">
        {/* Left */}
        <div></div>
        {/* Right */}
        <div className="self-end justify-self-end"></div>
      </div>
    </div>
  );
}

export default App;
