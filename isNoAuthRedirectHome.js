const isNoAuthRedirectHome = () =>{
    if (localStorage.getItem("email")) {
        return;
    }
    else{
        location.href="./index.html";
    }
};  
