import App from "./App.js";
import NewTestament from "./NewTestament.js";
import OldTestament from "./OldTestament.js";
import ErrorPage from "./ErrorPage.js";


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />
    },
    {
        path: "/oldtestament",
        element: <OldTestament />,
        errorElement: <ErrorPage />
    },
    {
        path: "/newtestament",
        element: <NewTestament />,
        errorElement: <ErrorPage />
    }
]

export default routes;