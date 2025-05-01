let imgg = document.images[0]; 
let nxtB = document.getElementById("nxt");
let prvB = document.getElementById("prv");
let slid = document.getElementById("slid");
let stp = document.getElementById("stp");

let count = 1;

let slideInterval = null; 
 


nxtB.onclick = () => {
    nextSlider();
};

prvB.onclick = () => {
    prevSlider();
};

slid.onclick = () => {
 
  if (!slideInterval) {
    slideInterval = setInterval(nextSlider, 1000);
  }
};

stp.onclick = () => {
  clearInterval(slideInterval);
  slideInterval = null; }

function nextSlider() {
    count++;
    if (count > 3) {
        count = 1;
    }
    imgg.src = `imgs/${count}.jpg`;
}

function prevSlider() {
    count--;
    if (count < 1) {
        count = 3;
    }
    imgg.src = `imgs/${count}.jpg`;
}
//////////////////////////////////////q 2
let students = [];

function handleSubmit(e) {
  e.preventDefault();

  let nameInput = document.getElementById("stuName");
  let gradeInput = document.getElementById("stuGrade");
  let dep = document.querySelector('input[name="dep"]:checked').value;
  let error = document.getElementById("error");

  let name = nameInput.value.trim();
  let grade = parseFloat(gradeInput.value);

  // [pSCal]
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  
  if (!/^[A-Za-z]+$/.test(name)) {
    error.textContent = "Name must contain only letters.";
    return;
  }

  if (!name) {
    error.textContent = "Student name cannot be empty.";
    return;
  }

  if (students.some(s => s.name === name)) {
    error.textContent = "Student already exists.";
    return;
  }

  if (isNaN(grade) || grade < 0 || grade > 100) {
    error.textContent = "Grade must be between 0 and 100.";
    return;
  }

  // Add 
  let student = { name, grade, dep };
  students.push(student);
  addToTable(student);

//clear inputsss
  nameInput.value = "";
  gradeInput.value = "";
  error.textContent = "";
}

function addToTable(student) {
  let tbody = document.querySelector("#studentTable tbody");
  let tr = document.createElement("tr");
  // tr.style.backgroundColor = student.grade < 60 ? "pink" : "lightblue";
  
  if(student.grade>=85){
    tr.style.backgroundColor ="Green";
  }
  else if(student.grade > 60 && student.grade <85){
    tr.style.backgroundColor ="lightblue";
  }
  else if (student.grade < 60){
    tr.style.backgroundColor ="pink";
  }

  ["name", "grade", "dep"].forEach(key => {
    let td = document.createElement("td");
    td.textContent = student[key];
    tr.appendChild(td);
  });

  let tdDelete = document.createElement("td");
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => {
    tr.remove();
    students = students.filter(s => s.name !== student.name);
  };

  tdDelete.appendChild(delBtn);
  tr.appendChild(tdDelete);
  tbody.appendChild(tr);
}
///////////filter 
function applyFilter() {
  let rows = document.querySelectorAll("#studentTable tbody tr");
  let filter = document.getElementById("frt").value;

  for (let row of rows) {
    let grade = parseFloat(row.children[1].innerText); 
    if (filter === "greater") {
      row.style.display = grade > 60 ? "" : "none";
    } else if (filter === "less") {
      row.style.display = grade < 60 ? "" : "none";
    } else {
      row.style.display = "";
    }
  }
}

//////////////sorting 

function applySort() {
  const sortBy = document.getElementById("srt").value;

  if (sortBy === "nammee") {
    students.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "graddee") {
    students.sort((a, b) => a.grade - b.grade);
  }

  rebuildTable();
}

function rebuildTable() {
  const tbody = document.querySelector("#studentTable tbody");
  tbody.innerHTML = "";

  students.forEach(student => {
    const tr = document.createElement("tr");
    tr.style.backgroundColor = student.grade < 60 ? "pink" : "lightblue";

    ["name", "grade", "dep"].forEach(key => {
      const td = document.createElement("td");
      td.textContent = student[key];
      tr.appendChild(td);
    });

    const tdDelete = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      tr.remove();
      students = students.filter(s => s.name !== student.name);
    };

    tdDelete.appendChild(delBtn);
    tr.appendChild(tdDelete);
    tbody.appendChild(tr);
  });
}

