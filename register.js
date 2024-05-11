// function register(){
//     const details={
//         usename:USERNAME.value,
//         accountnumber:ACCOUNTNUMBER.value,
//         password:Password.value

//     }
//     if(details.usename==""||details.accountnumber==""||details.password==""){
//         alert("please fill the details")
//     }else{
//         if(details.accountnumber in localStorage){
//             alert("alredy registered")
//         }else{
//             localStorage.setItem(details.usename,JSON.stringify(details))
//             localStorage.setItem(details.password,JSON.stringify(details))
//             localStorage.setItem(details.accountnumber,JSON.stringify(details))


//             var loca= "http://127.0.0.1:5500/loginpage.html"
//         window.location.href=loca;
            
//             alert("registered sucessfully")
//         }
//     }

// }

function register(){
    let signup={
        name:USERNAME.value,
        acc:ACCOUNTNUMBER.value,
        pass:Password1.value,
        balance:0

    }
if(signup.name=="" || signup.acc=="" || signup.pass==""){
    alert("Please enter complete details")
}else{
    if(localStorage.getItem(signup.acc)){
        alert("Already added")
    }else{
        localStorage.setItem(signup.acc,JSON.stringify(signup))
        alert("Account details added")
        window.location="http://127.0.0.1:5500/loginpage.html"
    }
}

}
