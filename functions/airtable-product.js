require('dotenv').config();

const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_KEY)
  .table(process.env.AIRTABLE_PRODUCTS_TABLE);

exports.handler = async (req) => {
  const { id } = req.queryStringParameters;

  if (id) {
    try {
      const product = await airtable.retrieve(id);

      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        }
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Server Error',
      }
    }
  }

  return {
    statusCode: 400,
    body: 'Please provide a product id',
  }
}
