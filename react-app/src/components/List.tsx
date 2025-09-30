{/*Explicación en detalle de uso de map en los apuntes mios bajo el titulo patron de listado*/}

type Props = {
  data: string[];
}

function List({ data }: Props) {


  return (
    
        <ul className="list-group">
          {data.map((elemento) => (
          <li onClick={()=>console.log(elemento)} key={elemento} className="list-group-item">{elemento}</li>
          ))}
        </ul>
        
  )
  {/*Como cada elemento de la lista es unico, lo usamos key como propiedad que va a identificar
    de manera única a cada elemento de la lista, y para eso le agregamos en cada iteracción
    a key el nombre que devuelve el parametro {elemento}*/}
  {/*El onClick es un manejador de eventos que se dispara cuando el usuario hace click en el elemento
     de la lista. A diferencia de la propiedad onclick de cada elemento html, este se escribe con la
     C en mayúscula, y en este caso usamos un arrow function para reaccionar al evento*/}

}

export default List