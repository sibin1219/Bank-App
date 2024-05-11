// function login(){
//     var acnum=ACCOUNTNUMBER.value
//     var pswd=Password.value
//     console.log(acnum);
//     if(pswd in localStorage && acnum in localStorage){

//         var loca= "http://127.0.0.1:5500/service.html"
//         window.location.href=loca;

//     }else{
//         alert("incorrect")
//     }

    
    

// }
function login(){
   
    const key = document.getElementById("ACCOUNTNUMBER").value;
    const key1 = document.getElementById("Password").value;
    
    const userData = localStorage.getItem(key);
  
    if (userData === null) {
      alert("No account found .");
      window.location = "http://127.0.0.1:5500/register.html";
    } else {
      const user = JSON.parse(userData);
      console.log(user);
      localStorage.setItem("pass", user.pass);
      localStorage.setItem("balance", user.balance);
      if (user.pass === key1) {
        alert("Login successful!");
        var loca= "http://127.0.0.1:5500/service.html"
              window.location.href=loca;
        localStorage.setItem("name", user.name);
      } else {
        alert("Incorrect password. Please try again.");
      }
    }
  }