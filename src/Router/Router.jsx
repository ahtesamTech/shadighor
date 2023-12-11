import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Render from "../Render";
import ListPage from "../pages/ListPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ViewProfile from "../pages/viewProfile";
import Payment from "../pages/Payment";


const Router = createBrowserRouter ([
    {
        path: '/',
        element:<Render></Render>,
        children: [
            {
                path: '/',
                element: <App></App>
            },
            {
            path: '/find',
            element: <ListPage></ListPage>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/viewProfile/:id',
            loader: ({params}) => fetch(`https://backendserver.shadighor.com/viewProfile/${params.id}`),
            element: <ViewProfile></ViewProfile>
        },
        {
            path: '/payment',
            element: <Payment></Payment>
        }
        
    ]
    },
    {
        path: '/join',
        element: <Register></Register>
    }
    
])

export default Router;