import { ReactNode } from "react";


interface Props {
    children: ReactNode; 
}
{/* ReactNode es un tipo especial de dato que puede contener cualquier cosa que React pueda renderizar, como texto, elementos JSX, componentes, etc. */}

function Card(props: Props) {
    const {children} = props; {/* Es una desestruracion de las propiedades pasadas al objeto, que hemos llamdo props */}
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div> {/*recordar que body es una propiedad del objeto props*/}
    </div>
  );
}

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
      
    </>
  );
}
export default Card;
