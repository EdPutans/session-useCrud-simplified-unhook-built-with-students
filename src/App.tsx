import { useEffect, useState } from 'react'
import './App.css'
import { useCRUDHookBuiltWithStudents } from './useCRUDHookBuiltWithStudents'

type Order = {
  "name": string,
  "order": string,
  "id": string | number
}
type InventoryItem = { name: string };

function App() {
  const [inv, setInv] = useState<InventoryItem[]>([]);
  const [orders, setOrders] = useState<Order[] | null>(null);

  const [order, setOrder] = useState<InventoryItem | null>(null);

  const apiForInventory = useCRUDHookBuiltWithStudents<InventoryItem>('https://60f6ed5fa9c8e3e7c09b44ec.mockapi.com/store/inventory');
  const apiForOrders = useCRUDHookBuiltWithStudents<Order>('https://62ce7d27826a88972dfc73ca.mockapi.io/orders/');

  useEffect(() => {
    apiForInventory.getAll((items) => setInv(items));
    apiForOrders.getAll((items) => setOrders(items));
  }, [])

  return (
    <div className="App">
      <h1>ORders</h1>
      {orders?.map(order => <p>{order.name}</p>)}

      <h1>Inventory!</h1>
      {inv.map((item: InventoryItem) => <p>{item.name}</p>)}

      <button onClick={() => {
        const newHardCodedOrder = { id: 21, name: "Bruna", order: "Bacon" };

        apiForOrders.post(newHardCodedOrder, (item) => setOrder(item))
      }
      }>ADD BRUNA AND HER ORDER</button>
    </div>
  )
}

export default App