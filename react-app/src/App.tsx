import Card, {CardBody} from "./components/Card";
import List from "./components/List";

function App() {
  return (
    <Card>
      <CardBody title="El titulo" text="El texto del cuerpo"/>
      <List/>  
    </Card>
    
  )
    }

export default App;
