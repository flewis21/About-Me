// Compiled using dontime 1.0.0 (TypeScript 4.7.4)
function apiCall(url, xpath) {
  var jsonInit = jsonINIT(url, xpath);
  return jsonInit;
}
function apiSetup() {
  return boilerplate.apiSetupSheet();
}
function apiSetupSheet() {
  return boilerplate.apiSetupSheet();
}
function calAgenda() {
  return boilerplate.calAgenda(SpreadsheetApp);
}
function callRunIt() {
  return boilerplate.callRunIt();
}
function createNewRecord() {
  return boilerplate.createNewRecord();
}

function datasetFormatting() {
  return MacrosandCustomFunctions.formatDataset();
}
function dateAgenda() {
  console.log(boilerplate.busyDates());
}
var tempCode = function (e) {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path("default", boilerplate.youTube);
  return Route["default"](e);
};

var doGet = function (e) {
  var libName = "boilerplate";
  // Early return for getData action
  if (e && e.parameter && e.parameter.action === "getData") {
    return this[libName].handleRequest(e);
  }

  // Determine funcTres
  var funcTres = e && e.parameter["file"] ? e.parameter["file"] : "uiAccess";

  // Logging
  if (e && e.parameter["func"]) {
    console.log(JSON.stringify(e));
  } else {
    var argsEd = this[libName].testlt();
    if (typeof this[libName].mis === "function") {
      var misArgs;
      if (typeof argsEd === "string") {
        misArgs = [argsEd];
      } else if (typeof argsEd === "object" && argsEd !== null && argsEd.name) {
        misArgs =
          argsEd.parameters && argsEd.parameters.length > 0
            ? [argsEd.name, ...argsEd.parameters]
            : [argsEd.name];
      } else {
        console.log("Unexpected argsEd type: ", argsEd);
        misArgs = ["Invalid Entry"];
      }

      e = this[libName].objectOfS(
        ["parameter"],
        [
          [
            ["func", "mis"],
            ["args", misArgs],
            ["action", "getData"],
          ],
        ],
        functionRegistry.time,
      );
      console.log(JSON.stringify(e));
    }
  }

  // Logging
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\ne is !" +
      !e +
      ", = " +
      JSON.stringify(e),
  );
  var funcUno = e.parameter["func"];
  console.log("e.parameter['args'] before funcDos:", e.parameter["args"]);
  var funcDos = e.parameter["args"];
  console.log("e.parameter['args'] after funcDos:", e.parameter["args"]);
  console.log("funcDos:", funcDos);
  var foobarr = funcUno || "renderFile";
  var libFunc = foobarr;
  var htmlArray = [
    `untitled proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess cGWI`,
  ]
    .toString()
    .split(" ");
  var rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));
  console.log("rndHtmlIndex = " + htmlArray[rndHtmlIndex]);
  var rndPage = htmlArray.toString().split(" ")[rndHtmlIndex];
  var index = htmlArray.findIndex(function (element) {
    return element === e.parameter["args"] || "untitled";
  });
  var tres = htmlArray.findIndex(function (element) {
    return element === funcTres;
  });
  console.log("index:", index + "\ntres", tres);
  var args;
  index !== -1 ? (args = htmlArray[index]) : (args = htmlArray[rndHtmlIndex]);
  console.log("e {parameter: {func: " + e.parameter["func"] + "}}");
  return renderTemplate(
    `<html id="indexDoGet">
                <head>
                  <base target="_self">
                  <meta charset="utf-8">
                  <meta name="Subscribe" content="Homepage">
                  <meta name=viewport content="width=device-width, initial-scale=1">
                  <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
                  <style>

                      body {

                        flex-grow: 1;
                        color:blue;
                        text-decoration:bold;
                        flex-flow: row wrap;
                        grid-column: 1;
                        grid-row: 1;
                        text-align: center;
                        align-content: flex-start;
                        overflow: auto;
                      }
                      .app-container {
                        background-color: white;
                        padding: 30px;
                        border-radius: 10px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                        width: 90%;
                        max-width: 800px;
                        margin-top: 20px;
                        margin-bottom: 20px;
                        position: relative;
                      }
                      nav {
                        width: 100%;
                        background-color: #4CAF50;
                        padding: 15px 0;
                        text-align: center;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        position: sticky;
                        top: 0;
                        z-index: 1000;
                      }
                      nav a {
                        color: white !important;
                        font-size: 1.2em;
                        text-decoration: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        transition: background-color 0.3s ease;
                      }
                      nav a:hover {
                        background-color: #45a049;
                      }
                      @media (max-width: 600px) {
                        .app-container {
                          width: 95%;
                          padding: 15px;
                        }
                      }
                      h1 {
                        font-size: 2.5em;
                        color: #333;
                        margin-bottom: 20px;
                        text-align: center;
                      }
                      form label {
                        font-size: 1em;
                        color: #555;
                        margin-bottom: 5px;
                        display: block;
                      }
                      form input[type="text"],
                      form input[type="date"],
                      form input[type="number"] {
                        width: 100%;
                        padding: 10px;
                        margin-bottom: 15px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 1em;
                      }
                      form button[type="submit"] {
                        background-color: #007bff;
                        color: white;
                        padding: 12px 25px;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        font-size: 1.1em;
                        transition: background-color 0.3s ease;
                        display: block;
                        margin-top: 20px;
                      }
                      form button[type="submit"]:hover {
                        background-color: #0056b3;
                      }
                      @media (max-width: 600px) {
                        h1 {
                          font-size: 2em;
                        }
                        form label, form input, form button {
                          font-size: 0.9em;
                        }
                      }
                      .autocomplete-suggestions {
                          border: 1px solid #ccc;
                          max-height: 200px;
                          overflow-y: auto;
                          background-color: white;
                          z-index: 100;
                          position: absolute;
                          width: 100%;
                          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                          margin-top: -15px;
                          left: 0;
                      }
                      .autocomplete-suggestions div {
                          padding: 8px 12px;
                          cursor: pointer;
                          border-bottom: 1px solid #eee;
                      }
                      .autocomplete-suggestions div:hover {
                          background-color: #f0f0f0;
                      }
                      .autocomplete-suggestions div:last-child {
                          border-bottom: none;
                      }
                    </style>
                </head>
                <body>
                  <div id="eObject"><input type="text" id="pageObj" value=""></div>
                  <div class="row"><div class="center app-container col s12 l12 m12 z-depth-5 card-panel push-m2 push-s2 push-l2"></div>
                    <?!= renBlob ?>
                  </div>
                </body>
                <script>
                  function serverSide(func, args) {
                    return new Promise((resolve, reject) => {
                      google.script.run
                        .withSuccessHandler((result) => {
                          resolve(result); // result will be { type: "...", data: "..." }
                          // You would then process 'result' here to update specific parts of your current page
                          // For example, update a div with result.data if result.type is "text" or "html"
                        })
                        .withFailureHandler((error) => {
                          reject(error);
                          console.error("Server-side call error:", error);
                          alert("Error during server call: " + error.message);
                        })
                        .runBoilerplate(func, args);
                    });
                  }
                  const currentE = JSON.parse(<?= e ?>);
                  const homePageUrl = <?= homePage ?>;

                  console.log("Client-side: Initial doGet event object:", currentE);
                  console.log("Client-side: Home Page URL:", homePageUrl);

                  console.log("line 261");
                  document.addEventListener("DOMContentLoaded", eRun);
                  function eRun() {
                    console.log("line 258");
                    var objUrl = document.getElementById("pageObj");
                    console.log("line 259");
                    var objDiv = document.getElementById("eObject");
                    console.log("line 260");
                    let initialArgs = currentE.parameter["args"];
                    if (initialArgs !== undefined && initialArgs !== null) {
                      if (typeof initialArgs === 'object') {
                        objUrl.value = JSON.stringify(initialArgs, null, 2);
                      } else {
                        objUrl.value = initialArgs; // If it's a string directly
                      }
                    } else {
                      objUrl.value = '[""]'; // Default if args is missing
                    }
                    objUrl.addEventListener("change", function () {
                      try {
                        // Parse the user's input as the new 'args' value
                        // Allow direct strings or JSON arrays/objects
                        let parsedE;
                        try {
                          parsedE = JSON.parse(this.value);
                        } catch (jsonError) {
                          // If it's not valid JSON, treat it as a plain string
                          parsedE = this.value;
                        }

                        // --- MODIFICATION STARTS HERE ---
                        // Create a *new*, reduced e object containing only func and args
                        const updatedClientE = {
                          parameter: {
                            func: currentE.parameter.func, // Keep the original func
                            args: parsedE                 // Use the new parsed args
                          }
                        };
                        // --- MODIFICATION ENDS HERE ---

                        alert("e.parameter['args'] updated. Sending back to server for re-render.");
                        console.log("Client-side: Updated e object to send:", updatedClientE);
                        async function handlePageUpdate() {
                          try {
                            const newHtmlContent = await serverSide(updatedClientE.parameter["func"], updatedClientE.parameter["args"]);
                            if (newHtmlContent && newHtmlContent.type === "html" && newHtmlContent.data) {
                              document.open();
                              document.write(newHtmlContent.data); // Use the data property
                              document.close();
                              console.log("Client-side: Page re-rendered with new content from server.");
                            } 
                            else if (newHtmlContent && newHtmlContent.type === "object" && newHtmlContent.data) {
                              document.open();
                              document.write(newHtmlContent.data.app); // Use the data property
                              document.close();
                              console.log("Client-side: Page re-rendered with new content from server.");
                            } 
                            else {
                              document.open();
                              document.write(newHtmlContent.data.dataStr);
                              document.close();
                              console.log("Client-side: Page re-rendered with new content from server.");
                            }
                          } catch (error) {
                            console.error("Client-side Error during full re-render:", error);
                            alert("Error re-rendering: " + error.message);
                          }
                        }
                        handlePageUpdate();
                      } catch (error) {
                        alert("Error processing input. Please ensure it's valid JSON or a plain string.");
                        console.error("Input processing error:", error);
                      }
                    });
                  }
                </script>
              </html>`,
    {
      renBlob: this[libName].contentApp(
        `
            <html id="index">
              <head>
                <base target="_self">
                <meta charset="utf-8">
                <meta name="doGet" content="Homepage">
                <meta name=viewport content="width=device-width, initial-scale=1">
                <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
                <style>

                    a:link, a:visited {color:metallic grey !important;
                                      font-size: 4.5em;}
                    a:hover, a:active{ 
                      color:white  !important;
                      text-decoration:none  !important;}
                    html, body {
                      height: 100%;
                    }
                    body: {
                      flex-grow: 1;
                      color:blue;
                      text-decoration:bold;
                      flex-flow: row wrap;
                      grid-column: 1;
                      grid-row: 1;
                      text-align: center;
                      align-content: flex-start;
                      overflow: auto;
                      color:metallic grey !important;
                  
                      font-size: 4.5em;
                      margin-top: 10px;
                      flex: 0 0 60px;
                      justify-content: space-around;
                      align-items: center;
                      border: solid .5px;
                      border-radius: 10px;
                      margin: 0px 15px 5px 15px;
                      background-color: #ffc107;
                      display: flex;
                      flex-direction: column;
                      min-height: 100vh;
                      padding: 20px;}
                  </style
              </head>
              <body class="z-depth-5 content-section responsive-section black center">
                <div id="coApp" class="container">
                  <?!= appL["index"]? appL["index"]["dataStr"]:appL ?>
                </div>
                <div class="row">
                  <div class="col s10 l10 m10 z-depth-5 push-m2 push-s2 push-l2">
                    <div class="app-container"> 
                        <iframe 
                          src=""
                          id="indexBeta"
                          width='100%'
                          height='100%'
                          allow="autoplay"
                          allow="encrypted-media"
                          title="Dontime Life Website"
                          frameborder="0"
                          allowfullscreen
                          ></iframe>
                    </div>
                  </div>
                </div>
                <script>
                  console.log(<?!= appL["index"]? appL["index"]["url"].length:appL.length ?>)
                  if (<?!= appL["index"]? appL["index"]["url"].length === 99:appL.length === 99 ?>) {
                    document.getElementById("coApp").innerHTML = ""
                    document.getElementById("indexBeta").src = <?= appL["index"]? appL["index"]["url"]:appL ?>}
                  else {document.getElementById("indexBeta").src = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"}
                </script>
              </body>
            </html>`,
        {
          appL: this[libName][
            foobarr ||
              HtmlService.createHtmlOutput(
                `
            <html id="foobarr">
              <head>
                <base target="_self">
                <meta charset="utf-8">
                <meta name="doGet" content="Company get Function">
                <meta name=viewport content="width=device-width, initial-scale=1">
                <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
              </head>
              <body>
                <script>
                      document.getElementById("appList").value
                </script>
              </body>
            </html>
              `,
              ).getContent()
          ].apply(this, [
            args ||
              HtmlService.createHtmlOutput(
                `
              
            <html id="args">
              <head>
                <base target="_self">
                <meta charset="utf-8">
                <meta name="doGet" content="Company get Function">
                <meta name=viewport content="width=device-width, initial-scale=1">
                <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
              </head>
              <body>
                <script>
                      document.getElementById("username").value
                </script>
              </body>
            </html>
              `,
              ).getContent(),
          ]),
        },
      ),
      e: JSON.stringify(e),
      homePage: this[libName].getScriptUrl(),
    },
  );
};
// ? console.log(e.parameter["func"] + " funcUno  = " + typeof funcUno)
// : console.error(e.parameter["func"] + " funcUno  = " + typeof funcUno);
// ? console.log(e.parameter["args"] + " funcDos  = " + typeof funcDos)
// : console.error(e.parameter["args"] + " funcDos  = " + typeof funcDos);

function endPoint(end, return_type) {
  var pathEnd = boilerplate.seoPastTime(
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    end,
    return_type,
  );
  return pathEnd;
}
function formattingMenu() {
  return MacrosandCustomFunctions.onOpen();
}
var jsonINIT = function (url, params, xpath) {
  return boilerplate.jsonINIT(url, params, xpath);
};
function jsonXpath(url, params, xpath) {
  return boilerplate.jsonXpath(url, params, xpath);
}
function kiloPoint(start, end) {
  var path = boilerplate.seoPastTime(start, end, "kilometers");
  return path;
}
function lockR(row, col) {
  var ws = boilerplate.ssSheet();
  var range = ws.getDataRange().getValues();
  var lock = range.map(openR(row, col));
  return lock;
}
function milePoint(start, end) {
  var path = boilerplate.seoPastTime(start, end, "miles");
  return path;
}
var minutePoint = function (start, end) {
  return boilerplate.minutePoint(start, end);
};
var mDial = function (e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  return boilerplate.stampRow(row, col, "E:E");
};
function onEdit(e) {
  searchEdit(e);
  mDial(e);
  // stampRowSchedule(e);
  // stampRowItems(e);
  // stampRowRecieve(e);
  // stampRowInventoryCheck(e);
  // stampRowSales(e);
}

function onOpen() {
  formattingMenu();
  datasetFormatting();
  sidebarMenu();
}

function openR(row, stampRow) {
  var ws = boilerplate.ssSheet();
  var range = ws.getRange(row, stampRow).setValue(new Date());
  return range;
}

function postFromSpreadsheet() {
  return boilerplate.postFromSpreadsheet(
    10,
    0,
    0,
    "https://discord.com/api/webhooks/866899396082532352/BsC_e7SnvWvCiEfwUMrkKtmifwmMxskS1noSPTkw77bKpK3p7j8VXbNcwyDdU3Ji6p9A",
  );
}

var runThis = function (uri) {
  console.log("calling RunIT");
  var mx = uri;
  var url = urlDataSource(mx);
  var data = boilerplate.testData(url);
  return data;
  console.log(data);
};

var runAll = function (func, args) {
  var arr = func.split(".");

  var libName = arr[0];
  var libFunc = arr[1];

  args = args || [];

  return this[libName][libFunc].apply(this, args);
};

// var runBoilerplate = function (func, args) {
//   var libName = "boilerplate";
//   var libFunc = func || "doGet";
//   args = args || [];
//   return this[libName][libFunc].apply(this, args);
// };

function runBoilerplate(func, args) {
  console.log("B Roll BRoll: line 578");
  var libName = "boilerplate";
  // Check if maxTime exists as a global variable
  const timeRemaining =
    typeof functionRegistry.maxTime !== "undefined" &&
    functionRegistry.maxTime instanceof Date
      ? Math.floor(
          (functionRegistry.maxTime.getTime() -
            (new Date().getTime() % (1000 * 60))) /
            1000,
        ) // Use .getTime() for Date objects
      : "N/A"; // Provide a fallback if maxTime is not defined or not a Date

  console.log(
    `Time remaining: ${timeRemaining}` +
      `\nFunction: ${arguments.callee.name}` +
      `\nfunc: ${func}, args: ${JSON.stringify(args)}`,
  );
  try {
    // If 'foo' is still where your functions like 'mis' are, keep this line.
    // However, if your functions like 'mis' are also global (e.g., globalThis.mis),
    // then you might just call them directly or use `this[func]` if `this` refers to the global scope.
    // Based on the logs, 'mis' and 'yahooSort' seem to be global functions.
    let rawResult;
    if (typeof this[libName][func] === "function") {
      rawResult = this[libName][func].apply(this, args); // Call the global function
    } else {
      // Fallback or error if func is not found in globalThis
      throw new Error(
        `Function '${this[libName][func]}' not found in global scope.`,
      );
    }

    // ... (rest of your processing logic for rawResult)
    if (
      rawResult &&
      typeof rawResult.getContent === "function" &&
      typeof rawResult.setXFrameOptionsMode === "function"
    ) {
      return { type: "html", data: rawResult.getContent() };
    } else if (
      rawResult &&
      typeof rawResult.getResponseCode === "function" &&
      typeof rawResult.getContentText === "function"
    ) {
      const contentType = rawResult.getHeaders()["Content-Type"] || "";
      const responseText = rawResult.getContentText();
      if (contentType.includes("application/json")) {
        try {
          return { type: "jsonData", data: JSON.parse(responseText) };
        } catch (e) {
          return {
            type: "text",
            data: `Error parsing JSON from URL fetch: ${responseText}`,
          };
        }
      } else if (contentType.includes("text/html")) {
        return { type: "html", data: responseText };
      } else {
        return { type: "text", data: responseText };
      }
    } else if (typeof rawResult === "string") {
      try {
        const parsedJson = JSON.parse(rawResult);
        return { type: "jsonData", data: parsedJson };
      } catch (jsonError) {
        if (
          rawResult.trim().startsWith("<") &&
          rawResult.trim().endsWith(">")
        ) {
          return { type: "html", data: rawResult };
        } else {
          return { type: "text", data: rawResult };
        }
      }
    } else if (typeof rawResult === "object" && rawResult !== null) {
      if (rawResult.html) {
        return { type: "html", data: rawResult.html };
      }
      if (rawResult.url) {
        return { type: "url", data: rawResult.url };
      }
      return { type: "object", data: rawResult };
    } else {
      return { type: "unknown", data: rawResult };
    }
  } catch (error) {
    Logger.log("Error in " + func + ": " + error.message);
    throw new Error(`Server error in ${func}: ${error.message}`);
  }
}

var runDistanceProject = function (func, args) {
  var libName = "DistanceProject";
  var libFunc = func || "GOOGLEMAPS";
  args = args || ["Houston, Tx", "Brooklyn, NY", "miles"];
  return this[libName][libFunc].apply(this, args);
};

var runAlleval = function (func, args) {
  // var arr = func.split(".");

  // var libName = arr[0];
  // var libFunc = arr[1];

  args = args || [];

  return this[func].apply(this, args);
};

function saveRecord() {
  return boilerplate.saveRecord();
}

var searchRecords = function () {
  return boilerplate.searchRecords();
};

var searchEdit = function (e) {
  return boilerplate.searchEdit(e);
};

function senderEmail() {
  const sheet = boilerplate.ssSheet();
  const range = boilerplate.ssActiveRange();
  console.log(range.getRow());
  const email = sheet.getRange(range.getRow(), 2, 1, 1).getValue();
  console.log(email);
}

var sidebarMenu = function onOpen() {
  const menu = boilerplate.onOpen(SpreadsheetApp);
  menu
    .createMenu("Agenda")
    .addItem("Email", "senderEmail")
    .addItem("Agenda Details", "calAgenda")
    .addToUi();
};
function stampRowSchedule(e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = 2;
  var ws = "Schedules Appts";
  if (
    col !== 9 &&
    col !== 10 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, 9).getValue() === "") {
      lockR(row, 9);
    } else {
      lockR(row, 10);
    }
  }
}
function stampRowItems(e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = 2;
  var ws = "Items";
  if (
    col !== 4 &&
    col !== 5 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, 4).getValue() === "") {
      lockR(row, 4);
    } else {
      lockR(row, 5);
    }
  }
  return;
}
function stampRowRecieve(e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = 2;
  var ws = "Recieve";
  if (
    col !== 9 &&
    col !== 10 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, 9).getValue() === "") {
      lockR(row, 9);
    } else {
      lockR(row, 10);
    }
  }
  return;
}
function stampRowSales(e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = 2;
  var ws = "Sales";
  if (
    col !== 6 &&
    col !== 7 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, 6).getValue() === "") {
      lockR(row, 6);
    } else {
      lockR(row, 7);
    }
  }
  return;
}
function stampRowInventoryCheck(e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = 2;
  var ws = "Inventory Check";
  if (
    col !== 4 &&
    col !== 5 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, 4).getValue() === "") {
      lockR(row, 4);
    } else {
      lockR(row, 5);
    }
  }
  return;
}
function startPoint(start, return_type) {
  var pathStart = boilerplate.seoPastTime(
    start,
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    return_type,
  );
  return pathStart;
}
// function getDatesFormat() {
//   return boilerplate.dateFormat();
// }
// function getDates() {
//     return boilerplate.getDates(0);
// }
// function addDays() {
//     return boilerplate.addDays();
// }
// function addDates() {
//     'use strict';
//     var eCalId = CalendarApp.getDefaultCalendar();
//     var recurrence = boilerplate.calRecurrence(new Date(boilerplate.sheetDates(0)));
//     return eCalId.createEventSeries(boilerplate.sheetDates(1), new Date(boilerplate.sheetDates(2)), new Date(boilerplate.sheetDates(3)), recurrence);
// }
// function addToCalendar(value, start, end, date) {
//     var eCalId = CalendarApp.getDefaultCalendar();
//     for (var iE = 0; iE < eCalId.length; iE++) {
//         var eJSON = eCalId[iE].getId();
//         console.log(eJSON);
//         var cal = CalendarApp.getCalendarById(eJSON);
//         var recurrence = CalendarApp.newRecurrence()
//             .addDailyRule()
//             .until(new Date(date));
//         cal.createEventSeries(value, new Date(start), new Date(end), recurrence);
//     }
// }
// function dateFormat(description, start, end, date) {
//     var cal = addToCalendar(description, start, end, date);
// }

var urlDataSource = function (url, params) {
  return boilerplate.urlDataSource(url, params);
};
