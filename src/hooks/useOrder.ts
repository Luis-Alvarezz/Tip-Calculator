import { useState } from "react"
import type { OrderItem } from "../types/types"

export default function useOrder() {
  // * STATE 1 - Orden
  const [order, setOrder] = useState<OrderItem[]>([])

  const addItem = () => {
    console.log('Agregando...');
  }

  
  return {
    addItem
  }
}