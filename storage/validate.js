function validate(){
    let mail="aaa@gmail.com";
let passwrd="123";
    let uemail=document.getElementById("email").value;
    let upwd=document.getElementById("pwd").value;
  
            if (uemail === mail && upwd === passwrd) {
                document.getElementById("result").textContent = "Login successful!";
                localStorage.setItem("islogin",true)
                var localdata=localStorage.getItem("islogin")
                console.log(localdata,"User logined")
                window.location.assign("http://127.0.0.1:5500/home.html");
            } else {
                document.getElementById("result").textContent = "Invalid email or password";
        }
}
// localStorage.setItem("uname","Sangeetha")
// console.log(localStorage.getItem("uname"));
// sessionStorage.setItem("age",30)
// console.log(sessionStorage.getItem("age"));


var arr = [{ first: 'Karn', last: 'Yong',username:'karn.yong@mecallapi.com' },
    {  first: 'Ivy', last: 'Cal',username:'ivy.cal@mecallapi.com' },
    {  first: 'Walter', last: 'Beau',username:'walter.beau@mecallapi.com' }];

  let tableBody = document.querySelector('#data-table tbody');
  
  arr.forEach(item => {
    let row = document.createElement('tr'); 
    let firstCell = document.createElement('td');
    firstCell.textContent = item.first;
    let lastCell = document.createElement('td');
    lastCell.textContent = item.last;
    let usernameCell = document.createElement('td');
    usernameCell.textContent = item.username;
  
    // Append the cells to the row
    row.appendChild(firstCell);
    row.appendChild(lastCell);
    row.appendChild(usernameCell);
    
    // Append the row to the table body
    tableBody.appendChild(row);
  });
  function save(){
    var firstName = document.getElementById("first").value
    var lastName = document.getElementById("last").value
    var userName = document.getElementById("username").value
    
    var userObj = {
      first: firstName,
      last: lastName,
      username: userName
    }

  arr.push(userObj)


    // Using a custom format: "first,last,username;first,last,username"
    var userDetailsString = arr.map(user => `${user.first},${user.last},${user.username}`).join(';');
    localStorage.setItem("userDetails", userDetailsString);

    // Add the new row to the table
    addRowToTable(userObj);
}

function addRowToTable(user) {
   
    let newRow = document.createElement('tr');
    let firstCell = document.createElement('td');
    firstCell.textContent = user.first;
    let lastCell = document.createElement('td');
    lastCell.textContent = user.last;
    let usernameCell = document.createElement('td');
    usernameCell.textContent = user.username;
    
    newRow.appendChild(firstCell);
    newRow.appendChild(lastCell);
    newRow.appendChild(usernameCell);

    let tableBody = document.querySelector('#data-table tbody');
    tableBody.appendChild(newRow);
}


