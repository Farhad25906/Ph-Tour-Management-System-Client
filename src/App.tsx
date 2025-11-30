import { Outlet } from "react-router";
import Commonlayout from "./components/layout/Commonlayout";

function App() {
  return (
    <Commonlayout>
      <Outlet></Outlet>
    </Commonlayout>
  );
}

export default App;
