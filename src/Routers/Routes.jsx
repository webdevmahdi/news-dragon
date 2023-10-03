import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Main from '../Layout/Main/Main';

let router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;