import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link, Stack, useMediaQuery, useTheme } from "@mui/material"
import YardIcon from '@mui/icons-material/Yard';
import '../App.css'

const Navbar: React.FC = () => {
    const [selectedRoute, setSelectedRoute] = useState<string>("main")
    const navigate = useNavigate();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSelectRoute = (event: React.SyntheticEvent, link?: string) => {
        event.preventDefault();
        //event: an action that occurs as a result of a user iteration with an element in the UI, such as a button click etc
        //React.SyntheticEvent: a type probided by the React library that represents a cross-browser-wrapper around native browser event ==>it helps you to access all the properties from different browsers.
        //especially, when I pass an event object as an argument to the function, in this case typing the argument as 'React.SyntheticEvent', 
        //meaning is I telling the typescript that the 'React.SyntheticEvent' has access to all the properties and methods defined on that type.
        if (link === "main") {
            setSelectedRoute("main")
            navigate("/")
        } else if (link === "about") {
            setSelectedRoute("about")
            navigate("/about")
        } else if (link === "works") {
            setSelectedRoute("works")
            navigate("/works")
        } else if (link === "contact") {
            setSelectedRoute("contact")
            navigate("/contact")
        }
    }

    return (
        <div>
            <Stack spacing={matches ? 2 : 0} direction={matches ? "row" : "column"}>
                <Link
                    className="nav-link"
                    color="#e8a47c"
                    onClick={(event) => handleSelectRoute(event, "main")}
                >
                    <YardIcon style={{ height: 50, width: 50 }} />
                </Link>
                <Link
                    underline="hover"
                    className="nav-link"
                    color={selectedRoute === "about" ? "#504718" : "#4b5e91"}
                    variant="h6"
                    onClick={(event) => handleSelectRoute(event, "about")}
                >
                    About
                </Link>
                <Link
                    underline="hover"
                    className="nav-link"
                    color={selectedRoute === "works" ? "#504718" : "#4b5e91"}
                    variant="h6"
                    onClick={(event) => handleSelectRoute(event, "works")}
                >
                    Works
                </Link>
                <Link
                    underline="hover"
                    className="nav-link"
                    color={selectedRoute === "contact" ? "#504718" : "#4b5e91"}
                    variant="h6"
                    onClick={(event) => handleSelectRoute(event, "contact")}
                >
                    Contact
                </Link>
            </Stack>
        </div>

    )
}

export default Navbar