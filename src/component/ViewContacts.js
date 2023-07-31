import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContactService } from "../services/ContactServices";
import Spinner from "./Spinner";

const ViewContacts = () => {
  let { contactId } = useParams();
  let [state, setState] = useState({
    loading: false,
    contact: {},
    errorMessage: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ ...state, loading: true });
        let response = await ContactService.getContact(contactId);
        setState({
          ...state,
          loading: false,
          contact: response.data,
          errorMessage
        });
        // console.log(response.data);
      } catch (error) {
        // Handle the error
        setState({
          ...state,
          loading: false,
          errorMessage: error.message,
        });
      }
    };

    fetchData(); // Call the asynchronous function

    // No cleanup function is returned in this example
  }, [contactId]); 

  let { loading, contact, errorMessage } = state;
  return (
    <>
    <h3>View Contact</h3>
    {/* <h2>{contactId}</h2> */}
      {loading ? (
        <Spinner />
      ) : (
        <>
          {Object.keys(contact).length > 0 && 
            <section className="view-contact">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={contact.photourl}
                      // src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
                      className="contact-img"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 ">
                    <ul className="list-group text-start">
                      <li className="list-group-item list-group-item-action">
                        <b>First Name : </b>
                        {contact.firstname}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Last Name : </b>
                        {contact.lastname}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Birth Date : </b>
                        {contact.birthdate}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Anniversary : </b>
                        {contact.anniversary}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Mobile No : </b>
                        {contact.phoneno}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Address : </b>
                        {contact.address}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Email : </b>
                        {contact.email}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Company Name : </b>
                        {contact.companyname}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Job-title : </b>
                        {contact.jobtitle}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Tag : </b>
                        {contact.tag}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Ref From : </b>
                        {contact.reffrom}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Ref To : </b>
                        {contact.refto}
                      </li>
                      <li className="list-group-item list-group-item-action">
                        <b>Relation : </b>
                        {contact.relation}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col alignitems-end">
                    <Link to="/Mycontact" className="btn btn-warning my-2">
                      Back
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          }
        </>
      )}
    </>
  );
};

export default ViewContacts;
