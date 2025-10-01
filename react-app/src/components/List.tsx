import { MouseEvent } from "react";

{/*Explicación en detalle de uso de map en los apuntes mios bajo el titulo patron de listado*/}

type Props = {
  data: string[];
}

function List({ data }: Props) {

  const handleClick = (item: string) => {
    console.log(item);
  } 
  {/*Esta es una función que maneja el evento de click en un elemento de la lista.
     Recibe como parámetro el elemento que fue clickeado y simplemente lo imprime en la consola.
     debemos indicarle que el parametro que recibe, es decir el evento es de tipo MouseEvent, pero de
     React, por eso lo debemos importar en la parte de importaciones con la instrucción
    import { MouseEvent } from "react"; */ }


  return (
    
        <ul className="list-group">
          {data.map((elemento) => (
          <li onClick={() =>handleClick(elemento)} key={elemento} className="list-group-item">{elemento}</li>
          ))}
        </ul>

        
  )
  {/*Como cada elemento de la lista es unico, lo usamos key como propiedad que va a identificar
    de manera única a cada elemento de la lista, y para eso le agregamos en cada iteracción
    a key el nombre que devuelve el parametro {elemento}*/}
  {/*El onClick es un manejador de eventos que se dispara cuando el usuario hace click en el elemento
     de la lista. A diferencia de la propiedad onclick de cada elemento html, este se escribe con la
     C en mayúscula, y en este caso usamos un arrow function para reaccionar al evento
     
     Como quiero recibir en elemento en vez del evento, ya que después voy a poder hacer algo con el elemento,
      en el onClick lo envolvemos en una fat arrow function de la siguiente manera:

          onClick={handleClick}

      por
      onClick={() =>handleClick(elemento)}

      De esta manera, cuando se haga click en el elemento de la lista, se llamará a la función handleClick
      con el elemento correspondiente como argumento. 

      Pero como ahora en vez de pasar un evento vamos a pasar un string de la lista, debemos cambiar el tipo
      del parámetro de la función handleClick, que ahora va a ser string en vez de MouseEvent, y por lo tanto
      debemos cambiar la importación, ya que ya no necesitamos importar MouseEvent de React.  

     
     */}

}

export default List