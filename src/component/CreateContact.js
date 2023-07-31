import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { ContactService } from '../services/ContactServices';

const CreateContact = () => {

let navigate=useNavigate();
  let [state, setState]=useState({

    loading:false,
    contact :{

      firstname:'',
      lastname:'',
      birthdate:'',
      anniversary:'',
      photourl:'',
      phoneno:'',
      address:'',
      email:'',
      companyname:'',
      jobtitle:'',
      tag:'',
      reffrom:'',
      refto:'',
      relation:''
    },
    errorMessage:''

  });

  let updateInput = (event) => {
    setState({
      ...state,
      contact:{
        ...state.contact,
        [event.target.name] : event.target.value
      }
    })

  };
  
  let submitForm =async (event) => {
        event.preventDefault();
        try {
          let response = await ContactService.createContact(state.contact)
          if (response){
             navigate('/mycontact',{replace: true});
          }
        } catch (error) {
          setState({...state ,errorMessage:errorMessage});
          navigate('/createcontacts',{replace: false});
        }
        // console.log(submitForm);
  };

let { contact , errorMessage}=state;
  return (
    <div>
        {/* <pre>{JSON.stringify(state.contact)}</pre> */}
        <h1 className='text-dark'>Create Contact</h1>

        <section className='add-contact'>
          <div className='container'>
            <div className='row g-3'>
              <div className='col-md-4'>
                <form className='' onSubmit={submitForm}>
                  
                  <h4>Personal</h4>
                  <div className=''>
                    <input className='form-control mb-2' type='text' placeholder='First Name' value={contact.firstname} onChange={updateInput} name='firstname' required/>
                    <input className='form-control mb-2' type='text' placeholder='Last Name' value={contact.lastname} onChange={updateInput} name='lastname'required/>
                    <label>Birth Date</label>
                    <input className='form-control mb-2' name='birthdate' value={contact.birthdate} onChange={updateInput} type='date'/>  
                    <label>Anniversary</label>
                    <input className='form-control mb-2' type='date' name='anniversary' value={contact.anniversary} onChange={updateInput}/>
                    <input className='form-control mb-2' placeholder='Photo URL' type='text' value={contact.photourl} onChange={updateInput} name='photourl'/>
                    </div>
                  
                    <h4>Contact</h4>
                    <div> 
                    <input type='tel:' className='form-control mb-2' placeholder='Mobile No' name='phoneno' value={contact.phoneno} onChange={updateInput} required/>
                    <input type='text' className='form-control mb-2' placeholder='Email' name='email' value={contact.email} onChange={updateInput}/>
                    <input type='text' className='form-control mb-2' placeholder='Address' name='address' value={contact.address} onChange={updateInput}/>
                   </div>

                  <h4>Company</h4>

                  <div>

                    <input className='form-control mb-2' placeholder='Company Name' type='text' name='companyname' value={contact.companyname} onChange={updateInput}/>
                    <input className='form-control mb-2' placeholder='Job-title' value={contact.jobtitle} onChange={updateInput} type='text' name='jobtitle'/>
                    <input className='form-control mb-2' value={contact.tag} onChange={updateInput} placeholder='Tag' type='text' name='tag'/>
                 </div>  

                 <h4>Reference</h4>
                  <div>
                 
                 <input className='form-control mb-2' type='text' placeholder='Ref From' value={contact.reffrom} onChange={updateInput} name='reffrom' required/>
                 <input className='form-control mb-2' type='text' placeholder='Ref To' value={contact.refto} onChange={updateInput} name='refto'/>
                 <input className='form-control mb-2' type='text' placeholder='Relation' value={contact.relation} onChange={updateInput} name='relation'/>
                 </div>

                  <button className='btn btn-primary my-2 me-2'>Add</button>
                  <Link className='btn btn-dark my-2' to="/Mycontact">Cancel</Link>

                </form>

              </div>
            </div>
          </div>
           
        </section>


    </div>
  );
}

export default CreateContact;

<h1>Create Contact</h1>

