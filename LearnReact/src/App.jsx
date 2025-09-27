import React from "react";
import HelloWorld from "./helloworld"; // import your component
import Hero from "./hero";

function App() {
  return (
    <div>
      <HelloWorld /> {/* this will display your message */}
      <Hero />
    </div>
  );
}

export default App;
