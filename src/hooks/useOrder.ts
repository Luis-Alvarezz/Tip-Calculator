import { useState } from "react"
import type { MenuItem, OrderItem } from "../types/types"

export default function useOrder() {
  // * STATE 1 - Orden
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item: MenuItem) => {
    // console.log('Agregando...');
    // console.log(item);
    const itemExist = order.find(orderItem => orderItem.id === item.id) // * Retorna si encontro o no elemento pero NO dice que elemento es
    // * Por como funciona la MUTABILIDAD en React, NO podemos modificarlo directamtente como en Vue.js
    if (itemExist) {
      // console.log('Ya existe');
      // * 1.- Identificar el Elemento
      const updatedOrder = order.map( orderItem => orderItem.id === item.id ?  {...orderItem, quantity: orderItem.quantity + 1  } : orderItem)
      // * 2.- ({...orderItem, quantity: orderItem.quantity + 1  }) -> Conocer que elemento es el duplicado para Tomar que cantidad ya hay e irla incrementado siempre manteniendo objetos que NO se muten directamente
      setOrder(updatedOrder)
    } else {
      const newItem : OrderItem = {...item, quantity: 1} // * CASTEO para asegurarnos de mantener el TYPE 
      setOrder([...order, newItem])
    }
  }

  const removeItem = (id: MenuItem['id']) => { // * loopUp para indicar el MenuItem con 'id'
    // console.log('Eliminando...', id)
    setOrder(order.filter(item => item.id !== id))
  }
 
  // console.log(order);
  
  
  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem
  }
}