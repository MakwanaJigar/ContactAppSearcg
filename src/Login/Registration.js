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
    <div>
        
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

    </div>
  );
}

export default Registration;
