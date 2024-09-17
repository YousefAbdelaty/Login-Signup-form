const button =document.getElementById('switch-btn');
 console.log(button.innerText);

function toggle(){
    
    const content =document.getElementById('form-content');
    const button =document.getElementById('switch-btn');



    if(button.innerText == "Log in"){
        
        content.innerHTML=' <h2 class="email-wrap mb-5 " id="form-head">Log in</h2><div class="col-10 ms-5"><label for="exampleFormControlInput1" class="form-label  ">Email address</label><input type="email" class="form-control mb-3 " id="exampleFormControlInput1"><div class="col-auto"><label for="inputPassword6" class="col-form-label">Password</label></div><div class="col-auto"><input type="password" id="inputPassword6" class="form-control"aria-describedby="passwordHelpInline"></div><div class="col-auto mb-5"><span id="passwordHelpInline" class="form-text ">Must be 8-20 characters long.</span></div><div class="col-auto"><button class="btn btn-success p-2 mb-5 login-btn">Login</button></div><div class="col-auto mb-5 signup-btn-wrapper"><p id="switch-p">Dont have an account ? </p><button class="btn" id="switch-btn">Sign up</button> </div></div>';
        button.innerText="Sign up";

    }else {

        content.innerHTML= ' <h2 class="email-wrap mb-5 " id="form-head">Sign up</h2><div class="col-10 ms-5"><label for="exampleFormControlInput1" class="form-label  ">Email address</label><input type="email" class="form-control mb-3 " id="exampleFormControlInput1"><div class="col-auto"><label for="inputPassword6" class="col-form-label">Password</label></div><div class="col-auto"><input type="password" id="inputPassword6" class="form-control"aria-describedby="passwordHelpInline"></div> <div class="col-auto mt-4"> <label for="inputPassword6" class="col-form-label">Confirm Password</label></div><div class="col-auto"><input type="password" id="inputPassword6" class="form-control"aria-describedby="passwordHelpInline"></div><div class="col-auto mb-5"></div><div class="col-auto"><button class="btn btn-success p-2 mb-5 login-btn">Login</button></div><div class="col-auto mb-5 signup-btn-wrapper"><p id="switch-p">Already have an account ? </p><button class="btn" id="switch-btn">Log in</button></div></div> ';
        button.innerText="Log in";
    }
    console.log(button.innerText);
    document.getElementById('switch-btn').addEventListener('click',toggle);

}


document.getElementById('switch-btn').addEventListener('click',toggle);