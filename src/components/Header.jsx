import withAuth from "./withAuth";
import { useSelector } from "react-redux";

function Header({loggedInUser, setLoggedInUser}) {
    // Get theme settings
    const theme = useSelector((state) => state.toolbar.theme);
    const extraThemeClass = theme === "light" ? "" : "bg-opacity-75"
    
    function LoggedIn({loggedInUser, setLoggedInUser}){
        return (
            <div>
                <span className="mx-2">Hello {loggedInUser}</span>
                <button className="btn btn-secondary" onClick={() => {
                    setLoggedInUser("");
                }}>Log Out</button>
            </div>
        );
    }

    function NotLoggedIn({loggedInUser, setLoggedInUser}){
        return (
            <div>
                <button className="btn btn-secondary" onClick={(e) => {
                    e.preventDefault();
                    const username = window.prompt("Enter Login Name:", "");
                    setLoggedInUser(username);
                }}>Log In</button>
            </div>
        );
    }

    return (
        <div className={`container bg-${theme} text-bg-${theme} ${extraThemeClass} p-2` }>
            <div className="d-flex justify-content-between p-1">
                <div>
                    <img src={`/images/subsmatt_logo_${theme}_theme.png`} alt="Subsmatt Home Page"/>
                </div>
                <div className="my-auto pt-1">
                    <h4 className="header-title my-auto">
                        Lang Cards
                    </h4>
                </div>
                <div className="text-info my-auto">
                    {(loggedInUser && loggedInUser.length > 0) ?
                        <LoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}></LoggedIn> :
                        <NotLoggedIn loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}></NotLoggedIn> 
                    }
                </div>
            </div>
        </div>
    );
}

export default withAuth(Header);