import App from "./App.js";
import Form from "./Form.js";
import NewTestament from "./NewTestament.js";
import OldTestament from "./Testament.js";
import ErrorPage from "./ErrorPage.js";
import Testament from './Testament.js'


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Form />
            },
            {
                path: "/oldtestament",
                element: <Testament />,
            },
            {
                path: "/newtestament",
                element: <Testament />,
            }
        ]
    },
]

export default routes;
