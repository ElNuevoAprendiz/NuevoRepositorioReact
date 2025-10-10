import Card, {CardBody} from "./components/Card";
import List from "./components/List";

function App() {
  
  const list=["Elemento 1", "Elemento 2", "Elemento 3"];

  return (
    <Card>
      <CardBody title="El titulo" text="El texto del cuerpo"/>
      <List data={list}/>  
    </Card>
    
  )
    }

export default App;
