// services/ContactService.js

import {
  addContact,
  updateContact,
  deleteContactById,
  searchContact,
} from "../api/contacts";

// Créer un nouvel Contact avec validation
export const createNewContact = async (contactData) => {
  try {
    const response = await addContact(contactData);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du contact", error);
    throw error;
  }
};

// Mettre à jour un Contact existant avec validation
export const updateExistingContact = async (contactData, id) => {
  try {
    const response = await updateContact(contactData, id);
    return response.data; // Formater les dates après mise à jour
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'Contact", error);
    throw error;
  }
};

// Supprimer un Contact
export const deleteContact = async (id) => {
  try {
    await deleteContactById(id);
  } catch (error) {
    console.error("Erreur lors de la suppression du contact", error);
    throw error;
  }
};

export const searchContactByParam = async (param) => {
  try {
    const response = await searchContact(param);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la recherche du contact", error);
    throw error;
  }
};
