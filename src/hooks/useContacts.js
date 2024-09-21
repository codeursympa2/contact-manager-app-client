import { useState, useEffect, useCallback } from "react";
import { getContacts } from "../api/contacts";

export const useContacts = (props) => {
  const [contacts, setContacts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const loadWithTimer = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      fetchContacts();
    }, 1000);
  }, []);

  useEffect(() => {
    loadWithTimer();
  }, [loadWithTimer]);

  return [contacts, loading, error, loadWithTimer];
};
