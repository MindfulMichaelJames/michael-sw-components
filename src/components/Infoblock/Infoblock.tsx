import "@/global.css"

interface Props {
  heading: string,
  data: string[]
}

export function Infoblock({ heading, data }: Props) {
  return (
    <div className="border-2 border-white rounded px-5 pt-3 m-5">
      <div>
        <h1 className="text-yellow-300 text-2xl font-bold">{heading}</h1>
      </div>
      <ul>
        {data.map(item => <li className="border-2 border-yellow-300 text-yellow-100 list-none rounded my-5 p-2">
          {item}
        </li>)}
      </ul>
    </div>
  );
}