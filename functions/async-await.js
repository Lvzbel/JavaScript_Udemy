const processData = async () => {
  throw new Error('Something went wrong!')
  return 10
}

processData().then((data) => {
  console.log('Data', data)
}).catch((error) => {
  console.log('Error', error)
})