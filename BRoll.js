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
var doGet = function (e) {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path("default", boilerplate.youTube);
  return Route["default"](e);
};

function endPoint(end, return_type) {
  var pathEnd = DistanceProject.GOOGLEMAPS(
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    end,
    return_type
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
  var path = DistanceProject.GOOGLEMAPS(start, end, "kilometers");
  return path;
}
function lockR(row, col) {
  var ws = boilerplate.ssSheet();
  var range = ws.getDataRange().getValues();
  var lock = range.map(openR(row, col));
  return lock;
}
function milePoint(start, end) {
  var path = DistanceProject.GOOGLEMAPS(start, end, "miles");
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
    "https://discord.com/api/webhooks/866899396082532352/BsC_e7SnvWvCiEfwUMrkKtmifwmMxskS1noSPTkw77bKpK3p7j8VXbNcwyDdU3Ji6p9A"
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
  var pathStart = DistanceProject.GOOGLEMAPS(
    start,
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    return_type
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
