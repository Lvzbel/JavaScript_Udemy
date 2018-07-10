const getPuzzle = async (wordCount) => {
  const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

  if (response.status === 200) {
    const data = await response.json()
    return data.puzzle
  } else {
    throw new Error('Unable to get puzzle')
  }

}
// THE ONE UNDER IS THE SAME THING BUT USIN THE FETCH METHOD RATHER THAN XMLHttpRequest() and then creating a promise from it
// The fetch method already returns a promise

const getCountry = async (countryCode) => {
  const response = await fetch('http://restcountries.eu/rest/v2/all')

  if (response.status === 200) {
    const data = await response.json()
    return data.find((country) => country.alpha2Code === countryCode)
  } else {  
    throw new Error('Unable to fetch country data')
  }
}

const getLocation = async () => {
  const response = await fetch('https://ipinfo.io/json?token=b167e4d3c3329b')

  if (response.status === 200) {
    return response.json()
  } else {
    throw new Error('Unable to fetch IP data')
  }
}

const getCurrentCountry = async () => {
  const IPresponse = await getLocation()
  const countryInfo = await getCountry(IPresponse.country)
  return countryInfo
}

// Old versions using promise chaining
const getCountryOld = (countryCode) => {
  return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch country data')
    }
  }).then((countries) => {
    return countries.find((country) => country.alpha2Code === countryCode)
  })
}

const getLocationOld = () => {
  return fetch('https://ipinfo.io/json?token=b167e4d3c3329b').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch IP data')
    }
  })
}

// const getPuzzleOld = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//     if (response.status === 200) {
//       return response.json()
//     } else {
//       throw new Error('Unable to fetch puzzle')
//     }
//   }).then((data) => {
//     return data.puzzle
//   })
// }

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//   const countryRequest = new XMLHttpRequest();

//   countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       const country = data.find((country) => country.alpha2Code === countryCode);
//       resolve(country)
//     } else if (e.target.readyState === 4) {
//       reject('Unable to fetch country')
//     }
//   })

//   countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//   countryRequest.send();
// })
