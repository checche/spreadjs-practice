import * as GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-resources-ja";
import { SpreadSheets } from "@grapecity/spread-sheets-react";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";
import { useState, MouseEvent } from "react";
import "App.css";

// 日本語カルチャを設定します
GC.Spread.Common.CultureManager.culture("ja-jp");

function App() {
  const [workbook, setWorkbook] = useState<GC.Spread.Sheets.Workbook>(
    new GC.Spread.Sheets.Workbook(),
  );
  const hostStyle: any = {
    width: "100%",
    height: "600px",
  };

  function initSpread(wb: GC.Spread.Sheets.Workbook) {
    setWorkbook(wb);
    const wbb = wb;
    wbb.options.tabStripVisible = false;
    const person = {
      name: "Peter Winston",
      age: 25,
      gender: "Male",
      address: { postcode: "10001" },
    };
    const source = new GC.Spread.Sheets.Bindings.CellBindingSource(person);
    const sheet = wb.getActiveSheet();
    sheet.setBindingPath(2, 2, "name");
    sheet.setBindingPath(3, 2, "age");
    sheet.setBindingPath(4, 2, "gender");
    sheet.setBindingPath(5, 2, "address.postcode");
    sheet.setDataSource(source);
  }

  function addSheet(e: MouseEvent<HTMLInputElement>) {
    const activeIndex = workbook.getActiveSheetIndex();
    if (activeIndex >= 0) {
      workbook.addSheet(activeIndex + 1);
      workbook.setActiveSheetIndex(activeIndex + 1);
    } else {
      workbook.addSheet(0);
      workbook.setActiveSheetIndex(0);
    }
  }
  return (
    <div className="App">
      <SpreadSheets
        hostStyle={hostStyle}
        workbookInitialized={(spread) => initSpread(spread)}
      />
      <div className="option-row">
        <input
          type="button"
          value="シートを追加"
          id="btnAddSheet"
          onClick={addSheet}
        />
      </div>
    </div>
  );
}

export default App;
