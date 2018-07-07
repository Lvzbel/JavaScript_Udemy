let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('Only offer up vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('Make sure to offer up some vegan options')
} else {
  console.log('Offer up anything on the manue')
}