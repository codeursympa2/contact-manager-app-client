import { useState, useEffect } from "react";
import { getContacts } from "../api/contacts";

export const useContacts = () => {
  const [contacts, setContacts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getContacts();
        setContacts(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return [contacts, loading, error];
};
