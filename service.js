



//setting balence as 0 in local storage initially
// localStorage.setItem('bal','0')

// function  depo(){
//     //fixing string value of amt to float by parseFloat function
//    var depo=parseFloat(amt.value)
//    var paswrd=pass1.value
   

//    var balence=parseFloat(localStorage.getItem("bal"))
//    console.log(balence);
//     if(paswrd in localStorage  ){
//         localStorage.removeItem("bal")
//         balence+=depo ;
//         localStorage.setItem("bal",balence)
//         var ttlamt=parseFloat( localStorage.getItem("bal"))
//         depodiv.innerHTML=
//         `<p >Balence amount is ${ttlamt}</p>`
        
//     }else{
//         alert("password incorrect")
//     }
//     }


// function witd(){
//     var depo=parseFloat(amt2.value)
//    var paswrd=pass2.value

//    var balence=parseFloat(localStorage.getItem("bal"))
//    console.log(balence);
//    if(depo<balence){
//     if(paswrd in localStorage){
//         localStorage.removeItem("bal")
//         balence-=depo ;
//         localStorage.setItem("bal",balence)
//         var ttlamt=parseFloat( localStorage.getItem("bal"))
//         depodiv.innerHTML=
//         `<p>Balence amount is ${ttlamt}</p>`
        
//     }else{
//         alert("password incorrect")
//     }
// }else{
//     alert("INSUFFITIENT BALENCE")
// }

// }

const username = localStorage.getItem("name");
let balance = localStorage.getItem("balance");
document.getElementById("disp").innerHTML = `Welcome ${username}`

function depo() {
  const inp1 = document.getElementById("deposit").value;
  const inp2 = document.getElementById("pswd3").value;
  if (inp1 === "" || inp2 === "") {
    alert("Please fill in all details");
  } else {
    const upwd = localStorage.getItem("pass");
    if (upwd !== inp2) {
      alert("Incorrect Password.Please try again");
    } else {
      if (inp1 <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
      }
      balance = parseInt(balance || 0);
      balance += parseInt(inp1);
      alert(`₹${inp1} has been added to your account`);

      localStorage.setItem("dbalance", balance);
      document.getElementById("balance").innerHTML = `<h5>
      Your current balance : &#8377;${balance}</h5>`;
    }
  }
}

function witd() {
  const inp3 = parseInt(document.getElementById("deposit1").value); // Parse inp3 to integer
  const inp4 = document.getElementById("pswd4").value;
  if (inp3 === "" || inp4 === "") {
    alert("Please fill in all details");
  } else {
    const upwd = localStorage.getItem("pass");
    if (upwd !== inp4) {
      alert("Incorrect Password.Please try again");
    } else {
      let ubal = parseInt(localStorage.getItem("dbalance"))  // Parse ubal to integer
      // console.log(ubal);
      // console.log(inp3);
      if (inp3 > ubal) {
        alert("Insufficient Funds.");
        return;
      }
      ubal -= inp3;
      alert(`₹${inp3} has been withdrawn from your account`);
      localStorage.setItem("wbalance", ubal);
      document.getElementById("balanace1").innerHTML = `<h5>
        Your current balance : &#8377;${ubal}</h5>`;
    }
  }
}