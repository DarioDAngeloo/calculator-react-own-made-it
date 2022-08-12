import "./App.css";
import logoTF2 from "./img/logo-tf2.png";
import Button from "./component/button";
import Display from "./component/display";
import Clear from "./component/clear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const addInput = (val) => {
    setInput(input + val);
  };

  const result = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please!! Insert a Valid Value!");
    }
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logoTF2} className="logo-img" alt="logo" />
      </div>

      <div className="calculator-container">
        <Display input={input} />
        <div className="row ">
          <Button addThisValue={addInput}>1</Button>
          <Button addThisValue={addInput}>2</Button>
          <Button addThisValue={addInput}>3</Button>
          <Button addThisValue={addInput}>+</Button>
        </div>
        <div className="row ">
          <Button addThisValue={addInput}>4</Button>
          <Button addThisValue={addInput}>5</Button>
          <Button addThisValue={addInput}>6</Button>
          <Button addThisValue={addInput}>-</Button>
        </div>
        <div className="row ">
          <Button addThisValue={addInput}>7</Button>
          <Button addThisValue={addInput}>8</Button>
          <Button addThisValue={addInput}>9</Button>
          <Button addThisValue={addInput}>*</Button>
        </div>
        <div className="row ">
          <Button addThisValue={addInput}>.</Button>
          <Button addThisValue={addInput}>0</Button>
          <Button addThisValue={result}>=</Button>
          <Button addThisValue={addInput}>/</Button>
        </div>
        <div className="row ">
          <Clear reset={() => setInput("")}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
