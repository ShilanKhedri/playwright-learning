const XLSX = require('xlsx');

function getTestDataFromExcel(filePath, sheetName = 'Login') {
    const workbook = XLSX.readFile(filePath);
    
    const sheet = workbook.Sheets[sheetName];
    
    const data = XLSX.utils.sheet_to_json(sheet);
    return data;
}

module.exports = { getTestDataFromExcel };