import App from "./App.js";
import NewTestament from "./NewTestament.js"
import OldTestament from "./OldTestament.js"

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/oldtestament",
        element: <OldTestament />
    },
    {
        path: "/newtestament",
        element: <NewTestament />
    }
]