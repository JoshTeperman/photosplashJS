const run = () => {
  getTestData();
} 

async function getTestData() {
  const testData = await axios.get('url')
  console.log(testData)   
}