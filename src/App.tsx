import * as GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-resources-ja";
import { SpreadSheets } from "@grapecity/spread-sheets-react";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";

import "./App.css";
// 日本語カルチャを設定します
GC.Spread.Common.CultureManager.culture("ja-jp");

function App() {
  const hostStyle: any = {
    width: "100%",
    height: "600px",
  };

  function initSpread(spread: GC.Spread.Sheets.Workbook) {
    const sheet = spread.getSheet(0);
    // テキストを設定します。
    sheet.setText(0, 0, "This is a text");
    // 数値を設定します。
    sheet.setValue(1, 0, 2245);
    sheet.setValue(2, 0, 2245);
    // 日付型の値を設定します。
    sheet.setValue(3, 0, new Date(2020, 10, 7));
    sheet.getRange(3, 0, 1, 1).formatter("mm-dd-yyyy");

    // 数式を設定します。（A2とA3セルの合計を計算します。）
    sheet.setFormula(3, 3, "=SUM(A2:A3)");
  }
  return (
    <div className="App">
      <SpreadSheets
        hostStyle={hostStyle}
        workbookInitialized={(spread) => initSpread(spread)}
      />
    </div>
  );
}

export default App;
