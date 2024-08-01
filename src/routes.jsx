import App from "./App";
import FoodFeedback from "./FoodFeedback";
import Page404 from "./404";

const routes  = [
    {
        path: '/',
        element: <App />,
        errorElement: <Page404 />
    },
    {
        path: 'food-feedback',
        element: <FoodFeedback />,
    }
];

export default routes;

