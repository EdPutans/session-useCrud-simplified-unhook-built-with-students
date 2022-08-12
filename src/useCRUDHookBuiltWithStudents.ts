

export function useCRUDHookBuiltWithStudents<T>(apiURLParam: string) {
  function getAll(callback: (data: T[]) => any) {
    return fetch(apiURLParam)
      .then(r => r.json())
      .then(callback)
  }


  function getSingleItem(id: number | string, callback: (data: T) => any) {
    return fetch(`${apiURLParam}/${id}`)
      .then(r => r.json())
      .then(callback)
  }

  function post(whatever: T, callback: (data: T) => any) {
    return fetch(apiURLParam, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(whatever)
    })
      .then(r => r.json())
      .then(callback)
  }

  return { getAll, getSingleItem, post }
}

// fetch(apiURL)
//   .then(r => r.json())
//   .then(order => console.log(order))

// // get single item
// const orderId = 5;
// fetch(`${apiURL}/${orderId}`)
//   .then(r => r.json())
//   .then(order => console.log(order))

// // post (create new)
// fetch(`${apiURL}/`, {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json"
//   },
//   body: JSON.stringify({ name: "Bruna", order: "Spagheti salad" })
// })
//   .then(r => r.json())
//   .then(order => console.log(order))

// // update
// let brunaOrderId = 14;
// fetch(`${apiURL}/${brunaOrderId}`, {
//   method: "PATCH",
//   headers: {
//     "Content-type": "application/json"
//   },
//   body: JSON.stringify({ order: "salad" })
// })
//   .then(r => r.json())
//   .then(order => console.log(order))

// // delete
// let deleteOrderId = 12;
// fetch(`${apiURL}/${deleteOrderId}`, {
//   method: "DELETE",
// })
//   .then(r => r.json())
//   .then(order => console.log(order))



// function getAllOrders(callback) {
//   return fetch(apiURL)
//     .then(r => r.json())
//     .then(orders => callback(orders))
// }

//TODO: ^ finish these too!