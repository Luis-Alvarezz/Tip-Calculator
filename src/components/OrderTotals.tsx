import { useMemo } from "react"
import type { OrderItem } from "../types/types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
  order: OrderItem[]
}

export default function OrderTotals({order}: OrderTotalsProps) {
  
  const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0 ), [order])
  // * useMemo nos simplifica el que se ejecute ese codigo cuando cambie la referencia y tambien evita tener ${subTotalAmount}
  
  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>Subtotal a pagar: {''}
          <span className="font-bold">${formatCurrency(subTotalAmount)} </span>
        </p>

        <p>Propina: {''}
          <span className="font-bold">$0</span>
        </p>

        <p>Total a pagar: {''}
          <span className="font-bold">$0</span>
        </p>
      </div>

      <button>

      </button>
    </>
  )
}
