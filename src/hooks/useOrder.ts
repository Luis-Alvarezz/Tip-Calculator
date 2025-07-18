import { useState } from "react"
import type { MenuItem, OrderItem } from "../types/types"

export default function useOrder() {
  // * STATE 1 - Orden
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = (item: MenuItem) => {
    // console.log('Agregando...');
    console.log(item);

  }

  
  return {
    addItem
  }
}