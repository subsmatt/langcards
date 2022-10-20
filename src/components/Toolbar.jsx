import { ThemeContext } from "../contexts/ThemeContext";
import { ToolbarContext } from "../contexts/ToolbarContext";
import { useState, useContext } from "react";

function Toolbar(){
    const [showDesc, setShowDesc] = useState(true);
    const {theme, setTheme} = useContext(ThemeContext);
    const {searchQuery, setSearchQuery} = useContext(ToolbarContext);

    const extraThemeClass = theme === "light" ? "" : "bg-gradient"

    return (
        <div className={`container bg-${theme} text-bg-${theme} ${extraThemeClass} py-3`}>
            <ul className="toolrow d-flex flex-column flex-lg-row justify-content-between p-0 mb-0">
                <li className="d-flex flex-column flex-md-row align-items-center">
                    <div className="form-check form-switch">
                        <label className="form-check-label" htmlFor="showDescSwitch">Show Description</label>
                        <input className="form-check-input" type="checkbox" role="switch" id="showDescSwitch" checked={showDesc} onChange={(event)=> setShowDesc(event.target.checked)}/>
                    </div>
                </li>
                <li className="d-flex flex-column flex-md-row ml-sm-5">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}/>
                    </div>
                    <div className="input-group-append">
                        <button type="button" className="btn btn-secondary">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </li>
                <li className="d-flex flex-column flex-md-row ml-sm-5 align-items-center">
                    <b>Theme&nbsp;&nbsp;</b>
                    <label className="dropdown">
                        <select className="form-control theme" value={theme} onChange={(event) => setTheme(event.target.value)}>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </label>
                </li>
            </ul>
        </div>
    );
}

export default Toolbar;