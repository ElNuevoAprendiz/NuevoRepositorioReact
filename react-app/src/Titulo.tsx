function Titulo() {
  const nombre = "Pipo";
  if (nombre /* es lo mismo que evaluar nombre !== ''*/) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola mundo</h1>;
}

export default Titulo;
