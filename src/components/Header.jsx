import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

function Header() {
    const {theme} = useContext(ThemeContext);
    const extraThemeClass = theme === "light" ? "" : "bg-opacity-75"

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
                    Hello Mr Smith&nbsp;
                    <span>
                        <a href="#">Sign Out</a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;