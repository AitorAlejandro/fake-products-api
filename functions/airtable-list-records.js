const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base(process.env.AIRTABLE_PRODUCTS_TABLE);

exports.handler = async () => {
  try {
    const records = await table.select().firstPage();

    return {
      statusCode: 200,
      body: JSON.stringify(records),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
