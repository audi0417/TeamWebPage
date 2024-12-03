exports.handler = async (event, context) => {
    // 只允許 POST 請求
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const data = JSON.parse(event.body);
        
        const response = await fetch('https://api.airtable.com/v0/' + process.env.AIRTABLE_BASE_ID + '/Table%201', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: {
                    姓名: data.name,
                    電子郵件: data.email,
                    內容: data.message
                }
            })
        });

        if (!response.ok) throw new Error('Failed to submit to Airtable');

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Success' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to submit form' })
        };
    }
};