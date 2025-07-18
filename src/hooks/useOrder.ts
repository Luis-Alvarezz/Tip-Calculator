import { useState } from "react"
import type { MenuItem, OrderItem } from "../types/types"

export default function useOrder() {
  // * STATE 1 - Orden
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {
    // console.log('Agregando...');
    // console.log(item);
    const newItem : OrderItem = {...item, quantity: 1} // * CASTEO para asegurarnos de mantener el TYPE 
    setOrder([...order, newItem])
  }

  console.log(order);
  
  
  return {
    addItem
  }
}