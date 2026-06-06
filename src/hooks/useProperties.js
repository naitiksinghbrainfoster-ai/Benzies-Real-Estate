import { useState, useEffect } from "react";

const API_BASE = "http://localhost:5000";

export const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/properties`);  // ← plural ✅
        const data = await res.json();
        setProperties(data?.Property || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  return { properties, loading, error };
};

export const useProperty = (ref) => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!ref) return;
    const fetchProperty = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/property/${ref}`);  // ← singular ✅
        const data = await res.json();
        setProperty(data?.Property?.[0] || null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [ref]);

  return { property, loading, error };
};