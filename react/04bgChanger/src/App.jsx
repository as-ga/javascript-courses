import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const bgColor = ["red", "green", "blue", "yellow", "purple", "olive"];
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {bgColor.map((bg) => (
            <button
              key={bg}
              onClick={() => setColor(bg)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: bg }}
            >
              {bg.charAt(0).toUpperCase() + bg.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
