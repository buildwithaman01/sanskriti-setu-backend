const path = require('path');
const fs = require('fs').promises;

module.exports = async (req, res) => {
  const filePath = path.join(process.cwd(), 'placeholder_data.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read data file' });
  }
};