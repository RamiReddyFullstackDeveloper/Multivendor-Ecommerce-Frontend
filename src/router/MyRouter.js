import { useRoutes } from "react-router-dom";

//step1: deifine publicRoutes firsts
//Step2: define MyRouter
const MyRouter = ({ allRoutes }) => {
  //here allRoutes we will pass from App , in App we will get allRoutes from publicRoutes
  const routes = useRoutes([...allRoutes]); //... means spread operator
  return routes;
};

export default MyRouter;
