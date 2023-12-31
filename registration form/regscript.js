var selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("Name").value;
    formData["city"] = document.getElementById("city").value;
    formData["mobile"] = document.getElementById("mobile").value;
    formData["email"] = document.getElementById("email").value;
    formData["website"] = document.getElementById("website").value;
    formData["gender"] = document.getElementById("gender").value;
    formData["skills"] = document.getElementById("skills").value;
  return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.city;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mobile;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.website;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.gender;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.skills;
    cell4 = newRow.insertCell(7);
    cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("city").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mobile").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("website").value = selectedRow.cells[4].innerHTML;
    document.getElementById("gender").value = selectedRow.cells[5].innerHTML;
    document.getElementById("skills").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.city;
    selectedRow.cells[2].innerHTML = formData.mobile;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.website;
    selectedRow.cells[5].innerHTML = formData.gender;
    selectedRow.cells[6].innerHTML = formData.skills;
}

function onDelete(td) {
  if (confirm("Do you want to delete this record?")) {
    row = td.parentElement.parentElement;
    document.getElementById("studentList").deleteRow(row.rowIndex);
    resetForm();
  }
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("city").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("website").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("skills").value = "";
    selectedRow = null;
}