const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ CHANGE 1: Split into BASE_PARAMS (no filter ID)
const BASE_PARAMS = {
  p1: "1032028",
  p2: "7b8d3d94814cee05c98cbd3f91600d6a6f806571",
  p_output: "json",
  P_Lang: 1
};

app.get("/", (req, res) => {
  res.json({ success: true, message: "Resales Online API Connected Successfully" });
});

// GET ALL PROPERTIES
app.get("/api/properties", async (req, res) => {
  try {
    const response = await axios.get(
      "https://webapi.resales-online.com/V6/SearchProperties",
      {
        params: {
          ...BASE_PARAMS,
          p_agency_filterid: 1,  // Sales filter only for search
          P_Page: 1,
          p_RTA: false           // ✅ CHANGE 2: false (was true)
        }
      }
    );
    console.log("Search Properties Response:");
    console.log(JSON.stringify(response.data, null, 2));
    res.json(response.data);
  } catch (error) {
    console.error("SearchProperties Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

// GET PROPERTY DETAILS - Use SearchProperties and filter server-side
app.get("/api/property/:ref", async (req, res) => {
  try {
    const { ref } = req.params;
    // Fetch all properties and filter by reference on the backend
    const response = await axios.get(
      "https://webapi.resales-online.com/V6/SearchProperties",
      {
        params: {
          ...BASE_PARAMS,
          p_agency_filterid: 1,
          P_Page: 1,
          p_RTA: false
        }
      }
    );
    
    console.log(`Fetching property ${ref}, response status: ${response.data.transaction?.status}`);
    
    // Filter the property from the list
    const properties = response.data.Property || [];
    const property = properties.find(p => p.Reference === ref);
    
    if (property) {
      console.log(`✅ Property ${ref} found`);
      res.json({ Property: [property], transaction: response.data.transaction });
    } else {
      console.log(`❌ Property ${ref} not found in list`);
      res.status(404).json({ error: "Property not found", Property: [] });
    }
  } catch (error) {
    console.error("PropertyDetails Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

// GET PROPERTY BY NUMERIC ID
app.get("/api/property-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      "https://webapi.resales-online.com/V6/SearchProperties",
      {
        params: {
          ...BASE_PARAMS,
          p_agency_filterid: 1,
          P_Page: 1,
          p_RTA: false
        }
      }
    );
    
    // Filter the property from the list
    const property = response.data.Property?.find(p => p.Reference === id);
    
    if (property) {
      res.json({ Property: [property], transaction: response.data.transaction });
    } else {
      res.status(404).json({ error: "Property not found", Property: [] });
    }
  } catch (error) {
    console.error("PropertyDetails Error:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});