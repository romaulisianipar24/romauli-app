import logo from "./logo.svg";
import "./App.css";

import data from "./component/load";
import Button from "./component/button";
import gif from "./component/data/index";
import Input from "./component/input";
import InfoGame from "./component/infoGame/index";

function App() {
  return (
    <div className="App">
      <div>
        <Input />
        <Button />
      </div>
      <p></p>
      <InfoGame title={gif.title} url={gif.url} />
    </div>
  );
}

export default App;
