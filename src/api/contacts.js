import axios from "axios";
const API_URL = "http://localhost:8000/api/contacts/";

//Liste des contacts
export const getContacts = async () => await axios.get(API_URL);
//Ajout des contact
export const addContact = async (contact) =>
  await axios.post(`${API_URL}add`, contact);
//Mise à jour contact
export const updateContact = async (contact, id) =>
  await axios.put(`${API_URL}update/${id}`, contact);
//Suppression
export const deleteContactById = async (id) =>
  await axios.delete(`${API_URL}delete/${id}`);
//Recupération d'un contact par id
export const getContactById = async (id) =>
  await axios.get(`${API_URL}${id}/detail`);
