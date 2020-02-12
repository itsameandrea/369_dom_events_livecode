const cities = ['Madrid', 'Barcelona', 'Valencia', 'Bilbao', 'Sevilla', 'Malaga']


// identify input element
const inputBox = document.querySelector('#city-name');

// add event list keyup
inputBox.addEventListener('keyup', (event) => {
  if (inputBox.value.length >= 2) {

    const filter = cities.filter((item) => {
      console.log('Item: ', item)
      console.log('Value:', inputBox.value)
      return item.toLowerCase().includes(inputBox.value.toLowerCase())
    })
    console.log(filter)
    const list = document.querySelector('#city-list');
    list.innerHTML = '';
    filter.forEach( (element) => {

      list.insertAdjacentHTML('beforeend', `<li> ${element}</li>` )

    })

  }
})





//if length <,= 2

// search array for match on 1st two chars

// display array matches, as ul






