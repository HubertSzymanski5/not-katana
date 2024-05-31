import './Symbol.css'

interface Props {
  value: string
}

export default function Symbol({value}: Props) {
  return (
    <span className="symbol-span">
      {value}
    </span>
  )
}