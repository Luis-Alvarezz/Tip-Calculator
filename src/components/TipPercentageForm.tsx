import type { Dispatch, SetStateAction } from "react"
const tipOptions = [
  {
    id: '.10',
    value: .10,
    label: '10%'
  },
  {
    id: '.20',
    value: .20,
    label: '20%'
  },
  {
    id: '.50',
    value: .50,
    label: '50%'
  },
]

type TipPercentageProps = {
  setTip: Dispatch<SetStateAction<number>> // * Inferencia de vsCode para values mas avanzados
}

export default function TipPercentageForm({setTip} : TipPercentageProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>

      <form>
          { tipOptions.map(tip => (
            <div key={tip.id} className="flex gap-2">
              <label htmlFor={tip.id}>{tip.label}</label>
              <input 
                type="radio" 
                id={tip.id} 
                name="tip"  
                value={tip.value}
                onChange={e => setTip(+e.target.value)} // * +e.target.value -> Convertimos el string a number
                // * Opc 2: e.target.valueAsNumber -> Pero NO funciona con radio, unicamente con tipo TEXT y otros inputs
              />
            </div>
          )) }
      </form>
    </div>
  )
}
