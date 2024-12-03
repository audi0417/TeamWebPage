const Airtable = require('airtable');

exports.handler = async (event, context) => {
  // 只允許 POST 請求
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // 從環境變量獲取 API 密鑰
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
      .base(process.env.AIRTABLE_BASE_ID);

    const data = JSON.parse(event.body);
    
    // 創建記錄
    const record = await base('Table 1').create([
      {
        fields: {
          Name: data.name,
          Email: data.email,
          Message: data.message
        }
      }
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success', record })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit form' })
    };
  }
};