import axios from "axios"

export class ContactService{
    static serverURL ='http://localhost:5000';

    // GET All CONTACTS
    static getAllContacts(){
        let dataURL = `${this.serverURL}/MyContact`;
        return axios.get(dataURL)
    }
    //VIEW CONTACT FROM ID
    static getContact(contactId){
        let dataURL = `${this.serverURL}/Mycontact/${contactId}`;
        return axios.get(dataURL);
    }

    // CREATE CONTACT
    static createContact(contact){
        let dataURL = `${this.serverURL}/Mycontact`;
        return axios.post(dataURL,contact);
    }

    // UPDATE CONTACT
    // static updateContact(contact ,contactId){
    //     let dataURL = `${this.serverURL}/<yContact/${contactId}`;
    //     return axios.put(dataURL,contact);
    // }

    static async updateContact(contact, contactId) {
        try {
          let dataURL = `${this.serverURL}/MyContact/${contactId}`;
          let response = await axios.put(dataURL, contact);
          return response.data;
        } catch (error) {
          throw new Error('An error occurred while updating contact');
        }
      }

 
    // DELETE CONTACT
    static deleteContact(contactId){
        let dataURL = `${this.serverURL}/MyContact/${contactId}`;
        return axios.delete(dataURL);
    }
    
}
