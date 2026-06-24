import { useState, useEffect } from "react";

const API_BASE = "https://tapered-frisbee-dice.ngrok-free.dev";

export const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/properties`, {
  headers: {
    "ngrok-skip-browser-warning": "true",
  },
});

console.log("Status:", res.status);

const data = await res.json();
console.log(data);
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
      const res = await fetch(`${API_BASE}/api/property/${ref}`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });

      console.log("Status:", res.status);

      const data = await res.json();
      console.log("Property Data:", data);

      setProperty(data?.Property?.[0] || null);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchProperty();
}, [ref]);

  return { property, loading, error };
};