// import React from 'react'
// import './App.css'
// import { fontawesomeIcon } from '@fontawesome/react-fontawesome'
// const axios = require('axios')
// const API_ENDPOINT = 'url'

const express = require('express')

const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// const run = () => {
//   getTestData();
// } 

// async function getTestData() {
//   const testData = await axios.get('url')
//   console.log(testData)   
// }