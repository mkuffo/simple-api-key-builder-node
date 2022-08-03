const { generateApiKey } = require('generate-api-key');
const companies = new Map();

const requestApiKey = (req, res) => {
    const companyName = req.body.companyName;
    if (!companyName)
        return res.json(500, { error: "companyName is required." });

    if (companies.has(companyName))
        return res.json(500, { error: `${companyName} already has an api key.` });

    let apiKey = generateApiKey({ method: 'uuidv4' });
    companies.set(companyName, apiKey);

    return res.json({
        companyName: companyName,
        apiKey: apiKey
    })
}
module.exports = {requestApiKey};