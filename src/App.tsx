import PrivateRoute from "./routes/PrivateRoute";
import Home from "./Home";

export default function App() {

  return <PrivateRoute component={Home} />
}