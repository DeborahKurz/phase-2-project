import {NavLink} from "react-router-dom";

function NavBar(){
    return(
        <>
            <h1>Bible Verse Keeper</h1>
            <nav>
                <NavLink
                    to="/"
                    className="nav-link"
                >   Add A Verse   </NavLink>
                <NavLink
                    to="/oldtestament"
                    className="nav-link"
                >   Old Testament Verses   </NavLink>
                <NavLink
                    to="/newtestament"
                    className="nav-link"
                >   New Testament Verses   </NavLink>
            </nav>
        </>
    )
}

export default NavBar;