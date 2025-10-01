<<<<<<< HEAD
interface Props {
    body: string 
    
}

function Card(props: Props) {
    const { body } = props; {/* Es una desestruracion de las propiedades pasadas al objeto, que hemos llamdo props */}
=======
import { ReactNode } from "react";


interface Props {
    children: ReactNode; 
}
{/* ReactNode es un tipo especial de dato que puede contener cualquier cosa que React pueda renderizar, como texto, elementos JSX, componentes, etc. */}

function Card(props: Props) {
    const {children} = props; {/* Es una desestruracion de las propiedades pasadas al objeto, que hemos llamdo props */}
>>>>>>> df4fc7a5a0ce09b2ac79da5660aa8156071db9cb
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
<<<<<<< HEAD
      <div className="card-body">{body}</div> {/*recordar que body es una propiedad del objeto props*/}
=======
      <div className="card-body">{children}</div> {/*recordar que children es una propiedad del objeto props y contiene lo que vamos a dibujar*/}
>>>>>>> df4fc7a5a0ce09b2ac79da5660aa8156071db9cb
    </div>
  );
}

<<<<<<< HEAD
export function CardBody() {
  return (
    <>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card’s content.
      </p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
=======
interface CardBodyProps {
    title: string;
    text?: string;

}
export function CardBody(props: CardBodyProps) {
  
  const {title, text} = props;
  
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        {text}
      </p>
      
>>>>>>> df4fc7a5a0ce09b2ac79da5660aa8156071db9cb
    </>
  );
}
export default Card;
