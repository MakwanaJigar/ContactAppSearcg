import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
// import { toast } from 'react-toastify';

const Registration = () => {
    
// States for input validations

    const [id ,idchange] = useState ('');
    const [name ,namechange] = useState ('');
    const [password ,passwordchange] = useState ('');
    const [email ,emailchange] = useState ('');
    
//Use navigate f\to navigate after condition is true 

    const navigate=useNavigate();

//    validation for input fields 

    const IsValidate = () => {
        let isproceed=true;
        let errormessage='Please enter the value in';
        if(id === null || id ===''){
            isproceed=false;
            errormessage +='Username';
        }
        if(name === null || id ===''){
            isproceed=false;
            errormessage +='name';
        }
        if(password === null || id ===''){
            isproceed=false;
            errormessage +='Password';
        }
        if(email === null || id ===''){
            isproceed=false;
            errormessage +='Email';
        }
// Email address validations

        if(!isproceed){
            alert.warning(errormessage);
        }else{
                if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

                }else{
                    isproceed=false;
                    alert('Please Enter the valid Email');
                }
        }

            return isproceed;
        }
    

    const handlesubmit = (e) => {
        if(IsValidate()){
        e.preventDefault();
        let regobj ={id,name,password,email};
        // console.log(regobj);
        fetch(" http://localhost:5000/user",{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res) => {
            alert('Created Successfully.')
            navigate('/')
        }).catch((error) => {
            alert('Failed :'+error.message);
        }); 
    }
    }

  return (
    <>

    {/*  */}

    {/* <!-- Section: Design Block --> */}
<section className="">
  {/* <!-- Jumbotron --> */}
  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor:' hsl(0, 0%, 96%)'}}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            The best App <br />
            <span className="text-primary">for your Contacts</span>
          </h1>
        
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
                <h1 className='mb-3 fw-bold'>Create Account</h1>
              <form onSubmit={handlesubmit}>  
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input  id="form3Example1" className="form-control" required value={id} onChange={e => {idchange(e.target.value)}} type='text' name='username'/>
                      <label className="form-label" htmlFor="form3Example1">User name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" value={name} onChange={e => {namechange(e.target.value)}} name='fullname' />
                      <label className="form-label" htmlFor="form3Example2">Full name</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" required value={email} onChange={e => {emailchange(e.target.value)}}  name='email' />
                  <label className="form-label" htmlFor="form3Example3">Email </label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input id="form3Example4" className="form-control" required type='password' minLength={8} value={password} onChange={e => {passwordchange(e.target.value)}} name='password' />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>


                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-4">
                 Create
                </button>
                <Link className="btn btn-dark mx-3 btn-block mb-4" to='/'>Cancel</Link>

                {/* <!-- Register buttons --> */}
                {/* <div className="text-center">
                  <p>or sign up with:</p>
                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Jumbotron --> */}
</section>
{/* <!-- Section: Design Block --> */}

    {/*  */}
    {/* <div>
        
        <div className='offset-lg-3 col-lg-6'>
            <form className='container' onSubmit={handlesubmit}>
                <div className='card'>
                    <div className='card-header'>
                          <h2 className='fw-bold text-success text-center'>Create User</h2>              
                    </div>
                    <div className='card-body'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>USER NAME</label>
                                        <input placeholder='Enter User Name' required value={id} onChange={e => {idchange(e.target.value)}} type='text' name='username' className='form-control'/>
                                    </div>
                                </div>

                                
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>PASSWORD</label>
                                        <input placeholder='Enter Password' required type='password' minLength={8} value={password} onChange={e => {passwordchange(e.target.value)}} name='password' className='form-control'/>
                                    </div>
                                </div>

                                
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Full Name</label>
                                        <input placeholder='Enter Full Name' required type='text' value={name} onChange={e => {namechange(e.target.value)}} name='fullname' className='form-control'/>
                                    </div>
                                </div>

                                
                                <div className='col-lg-6'>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input placeholder='Enter Email' required value={email} onChange={e => {emailchange(e.target.value)}} type='email' name='email' className='form-control'/>
                                    </div>
                                </div>        
                            </div>

                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-primary m-3' type='submit'>Create</button>
                        <Link className="btn btn-dark" to='/'>Cancel</Link>
                    </div>
                </div>
            </form>

        </div>

    </div> */}
    </>
  );
}

export default Registration;
