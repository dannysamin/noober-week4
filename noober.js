
function renderRide(ride) {

  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
  }
  else if (ride.length == 1 && ride[0].numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  }
  else if (ride.length == 1 && ride[0].purpleRequested) {
    levelOfService = 'Noober Purple'
  }
  else { levelOfService = 'Noober X' }

  let outputElement = document.querySelector('.rides')
  outputElement.insertAdjacentHTML('beforeend', `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
     <i class="fas fa-car-side"></i>
     <span>${levelOfService}</span>
   </h1>`)
}


async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write code to loop through the rides




  for (let i = 0; i < json.length; i++) {
    let ride = json[i]
    renderRide(ride)
    for (let j = 0; j < ride.length; j++) {
      let pass = ride[j]

      if (levelOfService == 'Noober Purple') {
        let outputElement = document.querySelector('.rides')
        outputElement.insertAdjacentHTML('beforeend', ` <div class="border-4 border-purple-500 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">${pass.passengerDetails.first} ${pass.passengerDetails.last}</h2>
      <p class="font-bold text-gray-600">${pass.passengerDetails.phoneNumber}</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
        ${pass.numberOfPassengers}
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${pass.pickupLocation.address}</p>
      <p>C${pass.pickupLocation.city}, ${pass.pickupLocation.state} ${pass.pickupLocation.zip}</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${pass.dropoffLocation.address}</p>
      <p>${pass.dropoffLocation.city}, ${pass.dropoffLocation.state} ${pass.dropoffLocation.zip}</p>
    </div>
  </div>
</div>`)
      }
      else {
        let outputElement = document.querySelector('.rides')
        outputElement.insertAdjacentHTML('beforeend', ` <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${pass.passengerDetails.first} ${pass.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${pass.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${pass.numberOfPassengers}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pass.pickupLocation.address}</p>
          <p>C${pass.pickupLocation.city}, ${pass.pickupLocation.state} ${pass.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${pass.dropoffLocation.address}</p>
          <p>${pass.dropoffLocation.city}, ${pass.dropoffLocation.state} ${pass.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>`)
      }
    }
  }










  //   let ride=json.rides
  //   for (let i=0; i<ride.length; i++){
  //     if (ride.length > 1) {
  //       let outputElement = document.querySelector('.output')
  //   outputElement.insertAdjacentHTML('beforeend',''
  //     }
  //     else if (ride.length == 1 && ride[0].numberOfPassengers > 3) {
  //       levelOfService = 'Noober XL'
  //     }
  //     else if (ride.length == 1 && ride[0].purpleRequested) {
  //       levelOfService = 'Noober Purple'
  //     }
  //     else { levelOfService = 'Noober X' }
  //     for (let j=0; j<ride[i].numberofpassengers; j++){

  //       let outputElement = document.querySelector('.output')
  //   outputElement.insertAdjacentHTML('beforeend',`
  //   <div class="border-4 border-gray-900 p-4 my-4 text-left">
  //   <div class="flex">
  //     <div class="w-1/2">
  //       <h2 class="text-2xl py-1">${ride.passengerDetails.first}+''+${ride.passengerDetails.last}</h2>
  //       <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
  //     </div>
  //     <div class="w-1/2 text-right">
  //       <span class="rounded-xl bg-gray-600 text-white p-2">
  //         2 passengers
  //       </span>
  //     </div>
  //   </div>
  //   <div class="mt-4 flex">
  //     <div class="w-1/2">
  //       <div class="text-sm font-bold text-gray-600">PICKUP</div>
  //       <p>123 Main St</p>
  //       <p>Chicago, IL 60603</p>
  //     </div>
  //     <div class="w-1/2">
  //       <div class="text-sm font-bold text-gray-600">DROPOFF</div>
  //       <p>123 Main St</p>
  //       <p>Chicago, IL 60603</p>
  //     </div>
  //   </div>
  // </div>`)

  //     }
  //   }
}

window.addEventListener('DOMContentLoaded', pageLoaded)
