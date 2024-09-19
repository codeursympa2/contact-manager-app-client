import { useState, useEffect } from "react";
import { getContactById } from "../api/contacts";

export const useContactById = () => {
  const [contact, setContact] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getContact = async () => {
      try {
        const response = await getContactById();
        setContact(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getContact();
  }, []);

  return [contact, loading, error];
};
