// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import {  useRef, useState } from "react";

function App() {
  // const [names, setNames] = useState("");
  const [countState, setCountState] = useState(1);
  const [inputValue, setInputValue] = useState("");
  // when keeping record its good initilize the value
  const countRef = useRef(0);

  const inputRef = useRef(null);

  // Dom
  const h3Ref = useRef(null);

  
  console.log(countRef);

  // let num = 1;
  //important of this it returns an object
  //{current:0 }

  // useEffect(() => {
  //   console.log("countState", countState);
  //   console.log("countRef", countRef.current);
  // }, [countState]);

  console.log('====================================');
  console.log(h3Ref);
  console.log('====================================');

  // useEffect(() => {
  //   window.addEventListener("click", () => {
  //     console.log("====================================");
  //     console.log(h3Ref.current);
  //     console.log("====================================");
  //   });

  //   return () => window.removeEventListener("click", () => {
  //     console.log("====================================");
  //     console.log(h3Ref);
  //     console.log("====================================");
  //   });
  // }, []);
  const focus = () => {
    if (inputValue.length) {
      // send info to db for the user sign
      console.log("sending info to backend");
    } else {
      inputRef.current.focus();
    }
  };
  return (
    <>
      {/* <input value={names} onChange={(e) => setNames(e.target.value)} />
      <div>my name is {names}</div>
      <div>i rendered {count.current} times</div> */}
      <input
        type="text"
        value={inputValue}
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={focus}>Sign in</button>

      <button onClick={() => setCountState((prev) => prev + 1)}>
        {countState}
      </button>
      <button onClick={() => (countRef.current = countRef.current + 1)}>
        {countRef.current}
      </button>
      <h3 ref={h3Ref}>this is h3 element tag !!!</h3>
    </>
  );
}

export default App;
