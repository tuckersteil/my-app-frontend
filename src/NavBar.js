import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "110px",
        padding: "25px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div className="NavBar">
            <NavLink
                to="/"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                All Players
            </NavLink>

            <NavLink
                to="/football"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Football π
            </NavLink>

            <NavLink
                to="/basketball"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Basketball π
            </NavLink>

            <NavLink
                to="/baseball"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Baseball βΎοΈ
            </NavLink>

            <NavLink
                to="/hockey"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Hockey π
            </NavLink>

        </div>
    )
}

export default NavBar;


            