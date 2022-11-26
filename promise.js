let p = new Promise((resolve,reject) => {
  let a = 1+2
  if (a == 2) {
    resolve('successful')
  } else {
    reject('failed')
  }
})

p.then((message)=> {
  console.log('this is in then ' + message)
} ) .catch((message) =>{
  console.log('this is in catch ' + message)
})

// let p = new Promise((resolve, reject) => {
//   resolve('First promise resolved')
// })

// let q = new Promise((resolve, reject) => {
//   resolve('Second promise resolved')
// })

// let r = new Promise((resolve, reject) => {
//   resolve('Third promise resolved')
// })

// Promise.all([
//   p,
//   q,
//   r
// ]).then((message)=> {
//   console.log (message)
// })
