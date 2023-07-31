import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ContactService } from "../services/ContactServices";
import Spinner from "./Spinner";

const EditContact = () => {
  let navigate = useNavigate();
  let { contactId } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: {
      firstname: "",
      lastname: "",
      birthdate: "",
      anniversary: "",
      photourl: "",
      phoneno: "",
      address: "",
      email: "",
      companyname: "",
      jobtitle: "",
      tag: "",
      reffrom: "",
      refto: "",
      relation: "",
    },
    errorMessage: "",
  });

 // CHATGPT-2 SAMPLE CODE START HERE
 
 useEffect(() => {
  const fetchData = async () => {
    try {
      setState({ ...state, loading: true });
      let response = await ContactService.getContact(contactId);
      setState({
        ...state,
        loading: false,
        contact: response.data,
      });
    } catch (error) {
      setState({
        ...state,
        loading: false,
        errorMessage: error.message,
      });
    }
  };

  const defaultContactId = 'defaultId';
  fetchData(defaultContactId);
}, [contactId]);

let updateInput = (event) => {
  setState({
    ...state,
    contact: {
      ...state.contact,
      [event.target.name]: event.target.value,
    },
  });
};

let submitForm = async (event) => {
  event.preventDefault();
  try {
    let response = await ContactService.updateContact(state.contact, contactId);
    if (response) {
      navigate("/MyContact", { replace: true });
    }
  } catch (error) {
    setState({ ...state, errorMessage: error.message });
    navigate(`/EditContact/${contactId}`, { replace: false });
  }
};
 // CHATGPT-2 SAMPLE CODE END HERE
  
  let { loading, contact, errorMessage} = state;
  return (
    <>
      <h1>Edit Contact</h1>
      {loading ? (
        <Spinner />
      ) : 
        <>
          <section className="add-contact">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <form className="" onSubmit={submitForm}>
                    <h4>Personal</h4>
                    <div className="">
                      <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="First Name"
                        value={contact.firstname}
                        onChange={updateInput}
                        name="firstname"
                        required
                      />
                      <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Last Name"
                        value={contact.lastname}
                        onChange={updateInput}
                        name="lastname"
                        required
                      />
                      <label>Birth Date</label>
                      <input
                        className="form-control mb-2"
                        value={contact.birthdate}
                        onChange={updateInput}
                        name="birthdate"
                        type="date"
                      />
                      <label>Anniversary</label>
                      <input
                        className="form-control mb-2"
                        type="date"
                        value={contact.anniversary}
                        onChange={updateInput}
                        name="anniversary"
                      />
                      <input
                        className="form-control mb-2"
                        placeholder="Photo URL"
                        value={contact.photourl}
                        onChange={updateInput}
                        type="text"
                        name="photourl"
                      />
                    </div>

                    <h4>Contact</h4>
                    <div>
                      <input
                        type="tel:"
                        className="form-control mb-2"
                        placeholder="Mobile No"
                        value={contact.phoneno}
                        onChange={updateInput}
                        name="phoneno"
                        required
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Email"
                        value={contact.email}
                        onChange={updateInput}
                        name="email"
                      />
                      <input
                        type="text"
                        className="form-control mb-2"
                        placeholder="Address"
                        value={contact.address}
                        onChange={updateInput}
                        name="address"
                      />
                    </div>

                    <h4>Company</h4>

                    <div>
                      <input
                        className="form-control mb-2"
                        placeholder="Company Name"
                        type="text"
                        value={contact.companyname}
                        onChange={updateInput}
                        name="companyname"
                      />
                      <input
                        className="form-control mb-2"
                        placeholder="Job-title"
                        type="text"
                        value={contact.jobtitle}
                        onChange={updateInput}
                        name="jobtitle"
                      />
                      <input
                        className="form-control mb-2"
                        placeholder="Tag"
                        type="text"
                        value={contact.tag}
                        onChange={updateInput}
                        name="tag"
                      />
                    </div>

                    <h4>Reference</h4>
                    <div>
                      <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Ref From"
                        value={contact.reffrom}
                        onChange={updateInput}
                        name="reffrom"
                        required
                      />
                      <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Ref To"
                        value={contact.refto}
                        onChange={updateInput}
                        name="refto"
                      />
                      <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Relation"
                        value={contact.relation}
                        onChange={updateInput}
                        name="relation"
                      />
                    </div>

                    <button className="btn btn-primary my-2 me-2">
                      Update
                    </button>
                    <Link className="btn btn-dark my-2" to="/Mycontact">
                      Cancel
                    </Link>
                  </form>
                </div>
                <div className="col-md-6">
                  {/* <img src={contact.photourl} className="contact-img" alt="" /> */}
                  <img
                      src={contact.photourl}
                      className="contact-img"
                      alt=""
                    />
                </div>
              </div>
            </div>
          </section>
        </>
      }

      {/* {JSON.stringify(state.contact)} */}
    </>
  );
};

export default EditContact;
