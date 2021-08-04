function generateDataTable() {
  //Build an array containing Customer records.
  var customers = new Array();
  customers.push(["Title", "Version", "Author", "Comments"]);
  customers.push(["Airport Project", "1.0", "Alan Murray", "Nearly complete"]);
  customers.push(["New Build, Dublin", "2.1", "Tom Dunne", "Starting next week"]);
  customers.push(["Housing Estate, Cork", "2.0", "Anne Doorley", "Building paused"]);
  customers.push(["Railway Line Extension", "4.1", "Bill Nelson", "Overrun original estimate"]);

  //Create a HTML Table element.
  var table = document.createElement("TABLE");
  table.border = "1";

  //Get the count of columns.
  var columnCount = customers[0].length;

  //Add the header row.
  var row = table.insertRow(-1);
  for (var i = 0; i < columnCount; i++) {
      var headerCell = document.createElement("TH");
      headerCell.innerHTML = customers[0][i];
      row.appendChild(headerCell);
  }

  //Add the data rows.
  for (var i = 1; i < customers.length; i++) {
      row = table.insertRow(-1);
      for (var j = 0; j < columnCount; j++) {
          var cell = row.insertCell(-1);
          cell.innerHTML = customers[i][j];
      }
  }

  var dvTable = document.getElementById("dvTable");
  dvTable.innerHTML = "";
  dvTable.appendChild(table);
}