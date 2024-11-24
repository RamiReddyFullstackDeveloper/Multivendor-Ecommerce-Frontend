import { useEffect, useState } from "react";
import publicRoutes from "./router/routes/publicRoutes";
import MyRouter from "./router/MyRouter";
import { getRoutes } from "./router/routes"; //this is from router/routes/index.js

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);
  useEffect(() => {
    const routes = getRoutes();
    console.log(routes);
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return (
    <div>
      {/* <h1 className="flex  text-3xl font-bold underline items-center justify-center">
        Welcome to Ecommerce Site!
      </h1> */}
      <MyRouter allRoutes={allRoutes} />
    </div>
  );
}

export default App;
