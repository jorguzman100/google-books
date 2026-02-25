const axios = require("axios");
require("dotenv").config();

const BASEURL = 'https://www.googleapis.com/books/v1/volumes?q=';
const APIKEY = process.env.GOOGLE_BOOKS_API_KEY;

module.exports = {
  search: function(req, res) {
      if (!APIKEY) {
        return res.status(500).json({ message: "Missing GOOGLE_BOOKS_API_KEY" });
      }

      const query = encodeURIComponent(req.params.query);

      axios.get(BASEURL + query + '&key=' + APIKEY)
        .then((response) => {
          res.json(response.data);
        })
        .catch((error) => {
          const status = error.response ? error.response.status : 500;
          const payload = error.response
            ? error.response.data
            : { message: "Google Books request failed" };

          res.status(status).json(payload);
        });
  }
};
