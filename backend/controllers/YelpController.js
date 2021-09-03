import axios from "axios";
import asyncHandler from "express-async-handler";

export const getYelpData = asyncHandler(async (req, res) => {
  const yelpApiToken =
    "kr-b-3Odz5ArIaRFySdwZkt9sbkxoYUlPFv8fyJQDa_CVCN7nQuNxgkXTES8E9mH6ActxRv2ZbQz9U95ficSZbNf-XwQ3Vs9wpYNdiLYMxfk3uB4X7AScjQf0m0xYXYx";
  try {
    const term = req.query.term;
    const location = req.query.location;
    const sortBy = req.query.sort_by;
    const config = {
      headers: {
        Authorization: `Bearer ${yelpApiToken}`,
      },
    };

    const {
      data: { businesses },
    } = await axios.get(
      `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      config
    );

    res.json(businesses);
  } catch (error) {
    res.status(404);
    console.log(error);
    throw new Error(error);
  }
});
