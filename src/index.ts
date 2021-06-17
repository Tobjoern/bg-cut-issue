const axios = require('axios');
const fs = require('fs');
const CustFormData = require('form-data');
import path from 'path'

const imagePath = path.join(__dirname, '../assets/jobs.jpg')

const settings = {
    "endpointPath": "https://backgroundcut.co/api/v1/cut/",
    apiKey: "--"
}

function endpointHeader(apiKey: string, formdata: any){
    return {
        headers: {
            'Content-Type':'multipart/form-data; boundary=' + formdata.getBoundary(),
            'Authorization': `Token ${settings.apiKey}`
        }
    }
}

const formdata = new CustFormData();
formdata.append('source_image_file', fs.createReadStream(imagePath));

axios.post(
    settings.endpointPath, formdata, endpointHeader(settings.apiKey, formdata)
)
.then((response: any) => {
    console.log(response.body)
})
.catch((errors: any) => {
    console.log(errors.response.data)
    console.log('Was error')
});




// import path from 'path'
// import fs from 'fs'
// import axios from 'axios'
// import FormData from 'form-data'
// import request from 'request'

// async function main() {
//     const imagePath = path.join(__dirname, '../assets/jobs.jpg')

//     const API_KEY = ''

//     // request.post('https://backgroundcut.co/api/v1/cut/', {
//     //     strictSSL: true,
//     //     formData: {
//     //         source_image_file: fs.createReadStream(imagePath) as any
//     //     },
//     //     headers: {
//     //         'Content-Type': 'multipart/form-data;',// boundary=' + formdata.getBoundary()
//     //         'Authorization': `Token ${API_KEY}`
//     //     }
//     // }, (err, response, body) => {
//     //     if (err) {
//     //         console.log('An error occured!')
//     //         console.log(err)
//     //     } else {
//     //         console.log(body)
//     //         console.log('All success:')
//     //     }
//     // });

//     const formdata = new FormData();

//     formdata.append('source_image_file', fs.createReadStream(imagePath) as any);

//     try {
//         const result = await axios.post(
//             'https://backgroundcut.co/api/v1/cut/',
//             formdata,
//             {
//                 headers: {
//                     'Content-Type': 'multipart/form-data; boundary=' + formdata.getBoundary(),
//                     'Authorization': `Token ${API_KEY}`
//                 }
//             }
//         )

//         console.log('Background remove success!')

//         console.log(result.data)
//     } catch (e) {
//         console.log('Background remove failed:')
//         console.log(e.response.data)
//         throw e
//     }
// }

// main()
