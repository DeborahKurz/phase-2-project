import App from "./App.js";
import Form from "./Form.js";
import NewTestament from "./NewTestament.js";
import OldTestament from "./OldTestament.js";
import ErrorPage from "./ErrorPage.js";


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
                element: <OldTestament />,
            },
            {
                path: "/newtestament",
                element: <NewTestament />,
            }
        ]
    },
]

export default routes;