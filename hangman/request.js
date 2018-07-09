const getPuzzle = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch puzzle')
    }
  }).then((data) => {
    return data.puzzle
  })
}

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

// THE ONE UNDER IS THE SAME THING BUT USIN THE FETCH METHOD RATHER THAN XMLHttpRequest() and then creating a promise from it
// The fetch method already returns a promise

const getCountry = (countryCode) => {
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

const getLocation = () => {
  return fetch('https://ipinfo.io/json?token=b167e4d3c3329b').then((response) => {
    if (response.status === 200) {
      return response.json()
    } else {
      throw new Error('Unable to fetch IP data')
    }
  })
}