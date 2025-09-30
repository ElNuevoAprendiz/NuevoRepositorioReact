{/*Explicación en detalle de uso de map en los apuntes mios bajo el titulo patron de listado*/}

type Props = {
  data: string[];
}

function List({ data }: Props) {


  return (
    
        <ul className="list-group">
          {data.map((elemento) => (
          <li className="list-group-item">{elemento}</li>
        ))}
        </ul>
    
  )
}

export default List