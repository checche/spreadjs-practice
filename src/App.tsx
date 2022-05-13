import * as GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-resources-ja";
import { SpreadSheets } from "@grapecity/spread-sheets-react";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";

import logo from "./logo.svg";
import "./App.css";
// 日本語カルチャを設定します
GC.Spread.Common.CultureManager.culture("ja-jp");

function App() {
  const hostStyle: any = {
    width: "100%",
    height: "600px",
  };

  function initSpread(spread: any) {} // eslint-disable-line
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SpreadSheets
        hostStyle={hostStyle}
        workbookInitialized={(spread) => initSpread(spread)}
      />
    </div>
  );
}

export default App;
