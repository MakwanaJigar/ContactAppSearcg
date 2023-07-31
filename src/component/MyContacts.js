import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContactService } from '../services/ContactServices';
import Spinner from './Spinner';
import { BeatLoader } from 'react-spinner';




const MyContacts = () => {
  const [search,setSearch]=useState('');

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to demonstrate the loading state
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);



  let [state,setState] = useState({

    loading : false,
    contacts:[],
    filterContacts: [],
    errorMessage:''
  });
 
  

useEffect(() => {
    const fetchData = async () => {
      try {
        setState({...state,loading:true});
        let response = await ContactService.getAllContacts();
        setState({
          ...state,
          loading:false,
          contacts: response.data,
          filterContacts:response.data
        })
        // console.log(response.data);
      } catch (error) {
        // Handle the error
        setState({
          ...state,
          loading:false,
          errorMessage:error.message
        });
      }
    };

    fetchData(); // Call the asynchronous function

    // No cleanup function is returned in this example
  },[]);

// detele contact

let clickDelete = async(contactId) =>{
    try {
      let response = await ContactService.deleteContact(contactId);
      if(response){
        setState({...state,loading:true});
        let response = await ContactService.getAllContacts();
        setState({
          ...state,
          loading:false,
          contacts: response.data,
          filterContacts:response.data,
          errorMessage
        })
      }
    } catch (error) {
      // Handle the error
      setState({
        ...state,
        loading:false,
        errorMessage:error.message
      });
    }
};


  let {loading,contacts,errorMessage,filterContacts}=state;
  return (
    <>

      {
        loading ? <Spinner /> : <>

<section className='contact-list'>
        <div className='container'>
        <h1 className='text-dark'>MY CONTACT</h1>

          <div>
            <form className='d-flex col-md-6' action="" role='search'>

              <input type="search" placeholder='Search' aria-label='Search' onChange={(e) => setSearch(e.target.value)} className='form-control me-3'  />

            </form>
          </div>

        <Link className='btn btn-primary float-center mt-3' to="/createcontacts" >Add<i className='fa fa-user-plus ms-2'></i></Link>
        <Link className='btn btn-danger float-end' to="/" ><i className="fa-solid fa-right-from-bracket ms-2  text-light"></i></Link>
          <div className='row'>
            
                 {
              filterContacts.length > 0 && 
              filterContacts.filter((contact) =>{
                return search.toLowerCase() === '' ? contact : contact.firstname.toLowerCase().includes(search);
              }).map(contact => {
                return (

                  <div className='col-md-6' key={contact.id}>
                  <div className='card my-2'>
                    <div className='card-body'>
                     <div className='row aline-items-center d-flex justify-content-around' id='ABC'>
                     <div className='col-md-4'>
                          <img src={contact.photourl} className='image-fluid contact-img' alt=''/>
                      </div>
                      <div className='col-md-5'>
    
                        <ul className='list-group text-start'>
                          <li className='list-group-item list-group-item-action'>
                            <b>First Name : </b>{contact.firstname}
                          </li>
                          <li className='list-group-item list-group-item-action'>
                            <b>Last Name : </b>{contact.lastname}
                          </li>
                          <li className='list-group-item list-group-item-action'>
                            <b>Mobile : </b>{contact.phoneno}
                          </li>
                          <li className='list-group-item list-group-item-action'>
                            <b>Company : </b>{contact.companyname}
                          </li>
                          {/* <li className='list-group-item list-group-item-action'>
                            <b>Email : </b>{contact.email}
                          </li> */}
                        </ul>
    
                      </div>
                      <div className='col-md-1 align-items-center d-flex flex-column'>
    
                          <Link className="btn btn-outline-warning my-1" to={`/ViewContacts/${contact.id}`}><i className='fa fa-eye'></i></Link>
                          <Link className="btn btn-outline-success my-1" to={`/EditContact/${contact.id}`}><i className='fa fa-pen'></i></Link>
                          <button className="btn btn-outline-danger my-1" onClick={() =>clickDelete (contact.id)}><i className='fa fa-trash'></i></button>
    
                      </div>
                     </div>
                    </div>
                  </div>
              </div>

                )
              })
            }
            
        </div>
        </div>
      </section>  
        
        </>
      }

    </>
  );
}

export default MyContacts;


