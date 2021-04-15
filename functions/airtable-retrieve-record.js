const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base(process.env.AIRTABLE_PRODUCTS_TABLE);

exports.handler = async (req) => {
  const { id } = req.queryStringParameters;

  if (id) {
    try {
      const record = await table.find(id);

      return {
        statusCode: 200,
        body: JSON.stringify(record),
      };
    } catch (error) {
      if (error.statusCode === 404) {
        return {
          statusCode: error.statusCode,
          body: `No product with id: ${id}`,
        };
      }
      return {
        statusCode: 500,
        body: "Server Error",
      };
    }
  }

  return {
    statusCode: 400,
    body: "Please provide a product id",
  };
};
