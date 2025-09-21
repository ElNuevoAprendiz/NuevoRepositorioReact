interface Props {
    body: string 
    
}

function Card(props: Props) {
    const { body } = props; {/* Es una desestruracion de las propiedades pasadas al objeto, que hemos llamdo props */}
  return (
    <div
      className="card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{body}</div> {/*recordar que body es una propiedad del objeto props*/}
    </div>
  );
}

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
    </>
  );
}
export default Card;
