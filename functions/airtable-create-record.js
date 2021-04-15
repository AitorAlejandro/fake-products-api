const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base(process.env.AIRTABLE_PRODUCTS_TABLE);

exports.handler = async (req) => {
  const data = JSON.parse(req.body);

  try {
    const records = await table.create([
      {
        fields: {
          name: data.name,
          description: data.description,
          images: [
            {
              url: data.imageUrl,
            },
          ],
          price: data.price,
        },
      },
    ]);
    return {
      statusCode: 201,
      body: JSON.stringify(records),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
