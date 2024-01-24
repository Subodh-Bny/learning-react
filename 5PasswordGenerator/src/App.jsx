import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const mouseOver = (e) => {
    e.target.style.background = "black";
  };

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-+=<>?/";

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const passwordRef = useRef(null);
  const copyToClip = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="h-screen w-full bg-gray-800 flex-col items-center flex justify-center">
        <h1 className="text-white text-3xl">Password Generator</h1>
        <div className="flex bg-white-500 mt-4">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="outline-none rounded-l-lg text-orange-800 border-hidden p-1 w-96"
            readOnly
            ref={passwordRef}
          />

          <button
            className="bg-blue-500 text-white p-1 rounded-r-lg text-xs"
            onClick={copyToClip}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""
            />
            <label htmlFor="length" className="text-white">
              {length}
            </label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="length" className="text-white">
              Numbers
            </label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              name=""
              id=""
              defaultChecked={numberAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="length" className="text-white">
              Symbols
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
