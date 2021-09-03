const apiKey = 'SZICFpp5oMSwnYihQhj_IsXZ-m2Smhcz4ml2G1WIIKvoDuWEzId4YXrKqCw_PNCh8v7L92ikzgvQMMryfXpZYaRQG1CFRlylm4IrVzxnefvktqAATZyCsrXS3yALYXYx'

const Yelp = {
  search(term, location, sortBy) {
    return fetch(` https://p0tzrocct9.execute-api.us-east-1.amazonaws.com/dev/yelp-api-dev-businessSearch`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,


        'Content-Type': 'application/json',
        'Accept': 'application/json'

        
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;