// ======================= STUDENT PAGE =======================
if (document.title.includes("Student")) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
  
    function showStudents() {
      const table = document.getElementById("studentTable");
      table.innerHTML = "";
      students.forEach((s, i) => {
        table.innerHTML += `
          <tr>
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td>${s.course}</td>
            <td>
              <button onclick="editStudent(${i})">Edit</button>
              <button onclick="deleteStudent(${i})">Delete</button>
            </td>
          </tr>`;
      });
    }
  
    function addStudent() {
      const name = document.getElementById("stuName").value;
      const roll = document.getElementById("stuRoll").value;
      const course = document.getElementById("stuCourse").value;
      if (name && roll && course) {
        students.push({ name, roll, course });
        localStorage.setItem("students", JSON.stringify(students));
        showStudents();
        document.getElementById("stuName").value = "";
        document.getElementById("stuRoll").value = "";
        document.getElementById("stuCourse").value = "";
      }
    }
  
    function editStudent(i) {
      const s = students[i];
      const n = prompt("Edit Name:", s.name);
      const r = prompt("Edit Roll:", s.roll);
      const c = prompt("Edit Course:", s.course);
      if (n && r && c) {
        students[i] = { name: n, roll: r, course: c };
        localStorage.setItem("students", JSON.stringify(students));
        showStudents();
      }
    }
  
    function deleteStudent(i) {
      students.splice(i, 1);
      localStorage.setItem("students", JSON.stringify(students));
      showStudents();
    }
  
    showStudents();
  }
  
  // ======================= EMPLOYEE PAGE =======================
  if (document.title.includes("Employee")) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
  
    function showEmployees() {
      const table = document.getElementById("empTable");
      table.innerHTML = "";
      employees.forEach((e, i) => {
        table.innerHTML += `
          <tr>
            <td>${e.name}</td>
            <td>${e.role}</td>
            <td>${e.salary}</td>
            <td>
              <button onclick="editEmployee(${i})">Edit</button>
              <button onclick="deleteEmployee(${i})">Delete</button>
            </td>
          </tr>`;
      });
    }
  
    function addEmployee() {
      const name = document.getElementById("empName").value;
      const role = document.getElementById("empRole").value;
      const salary = document.getElementById("empSalary").value;
      if (name && role && salary) {
        employees.push({ name, role, salary });
        localStorage.setItem("employees", JSON.stringify(employees));
        showEmployees();
        document.getElementById("empName").value = "";
        document.getElementById("empRole").value = "";
        document.getElementById("empSalary").value = "";
      }
    }
  
    function editEmployee(i) {
      const e = employees[i];
      const n = prompt("Edit Name:", e.name);
      const r = prompt("Edit Role:", e.role);
      const s = prompt("Edit Salary:", e.salary);
      if (n && r && s) {
        employees[i] = { name: n, role: r, salary: s };
        localStorage.setItem("employees", JSON.stringify(employees));
        showEmployees();
      }
    }
  
    function deleteEmployee(i) {
      employees.splice(i, 1);
      localStorage.setItem("employees", JSON.stringify(employees));
      showEmployees();
    }
  
    showEmployees();
  }
  
  // ======================= TO-DO PAGE =======================
  if (document.title.includes("To-Do")) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    function showTasks() {
      const list = document.getElementById("taskList");
      list.innerHTML = "";
      tasks.forEach((t, i) => {
        list.innerHTML += `
          <li>${t}
            <button onclick="editTask(${i})">Edit</button>
            <button onclick="deleteTask(${i})">Delete</button>
          </li>`;
      });
    }
  
    function addTask() {
      const task = document.getElementById("taskInput").value;
      if (task) {
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        document.getElementById("taskInput").value = "";
        showTasks();
      }
    }
  
    function editTask(i) {
      const newTask = prompt("Edit Task:", tasks[i]);
      if (newTask) {
        tasks[i] = newTask;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        showTasks();
      }
    }
  
    function deleteTask(i) {
      tasks.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      showTasks();
    }
  
    showTasks();
  }
  
  // ======================= LIBRARY PAGE =======================
  if (document.title.includes("Library")) {
    let books = JSON.parse(localStorage.getItem("books")) || [];
  
    function showBooks() {
      const table = document.getElementById("bookTable");
      table.innerHTML = "";
      books.forEach((b, i) => {
        table.innerHTML += `
          <tr>
            <td>${b.title}</td>
            <td>${b.author}</td>
            <td>${b.year}</td>
            <td>
              <button onclick="editBook(${i})">Edit</button>
              <button onclick="deleteBook(${i})">Delete</button>
            </td>
          </tr>`;
      });
    }
  
    function addBook() {
      const title = document.getElementById("bookTitle").value;
      const author = document.getElementById("bookAuthor").value;
      const year = document.getElementById("bookYear").value;
      if (title && author && year) {
        books.push({ title, author, year });
        localStorage.setItem("books", JSON.stringify(books));
        showBooks();
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
        document.getElementById("bookYear").value = "";
      }
    }
  
    function editBook(i) {
      const b = books[i];
      const t = prompt("Edit Title:", b.title);
      const a = prompt("Edit Author:", b.author);
      const y = prompt("Edit Year:", b.year);
      if (t && a && y) {
        books[i] = { title: t, author: a, year: y };
        localStorage.setItem("books", JSON.stringify(books));
        showBooks();
      }
    }
  
    function deleteBook(i) {
      books.splice(i, 1);
      localStorage.setItem("books", JSON.stringify(books));
      showBooks();
    }
  
    showBooks();
  }