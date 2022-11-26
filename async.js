 function makeRequest(location){
    return new Promise((resolve, reject) => {
        console.log('Making request to ' + location)
        if(location == 'Google') {
            resolve ('Google says Hi')
        } else {
            reject('we can only talk to google')
        }
    })
 }

 function processRequest (response) {
    return new Promise((resolve, reject) => {
        console.log('Processing Response')
        resolve('Extra Information : ' + response )
    })
 }

//  makeRequest('Facebook').then (response => {
//     console.log('response recieved')
//     return processRequest(response)
//  }).then(processedResponse => {
//     console.log(processedResponse)
//  }).catch(err => {
//     console.log(err)
//  })

 async function doWork() {
    try {
        const response = await makeRequest ('Google')
    console.log('response Recieved')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    } catch (err) {
        console.log(err)
    }
 }

 doWork()