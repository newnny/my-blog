import React, { useState } from 'react'
import './Page.css'
import { useMediaQuery, useTheme, Grid, Typography } from "@mui/material"
import minifluxbinder from '../Images/minifluxbinder.png'
import ramp from '../Images/ramp.png'
import hackyourfridge from '../Images/hackyourfirdge.png'

interface Data {
    id: number;
    category: string;
    name: string;
    textColor: string;
    select: boolean;
}

const Works: React.FC = () => {
    const theme = useTheme();
    const xsMatch = useMediaQuery(theme.breakpoints.down('xs'));
    const smMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const [list, setList] = useState<Data[]>([
        {
            id: 1,
            category: "work",
            name: "RAMP medical",
            textColor: "#828282",
            select: false
        },
        {
            id: 2,
            category: "project",
            name: "Miniflux e-pub binder",
            textColor: "#828282",
            select: false
        },
        {
            id: 3,
            category: "project",
            name: "Hack your fridge",
            textColor: "#828282",
            select: false
        },
        {
            id: 4,
            category: "project",
            name: "Working with D3.js",
            textColor: "#828282",
            select: false
        },
    ])
    const [selectedItem, setSelectedItem] = useState<string>("")

    const handleClickCategory = (id: number, name: string) => {
        setList(
            list.map(item => {
                if (item.id === id) {
                    return { ...item, textColor: "#000000", select: true }
                }
                return { ...item, textColor: "#828282", select: false }
            })
        )
        if (name === "RAMP medical") {
            setSelectedItem("RAMP medical")
        } else if (name === "Miniflux e-pub binder") {
            setSelectedItem("Miniflux e-pub binder")
        } else if (name === "Working with D3.js") {
            setSelectedItem("Working with D3.js")
        } else if (name === "Hack your fridge") {
            setSelectedItem("Hack your fridge")

        }
    }

    return (
        <div className="flex-column">
            {list.map(i => (
                <div key={i.id} className="flex-row" style={{ marginTop: 10, marginBottom: 10 }}>
                    <div style={{ width: 30, backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", minHeight: 90 }}>
                        <p style={{ transform: "rotate(-90deg)" }}>
                            {i.category}
                        </p>
                    </div>
                    <div style={{ display: "flex", width: "100%" }}>
                        <Grid container direction={"column"} style={{ minHeight: 90, justifyContent: "center" }}>
                            <Grid item style={{ display: "flex", alignItems: "center" }}>
                                <Typography
                                    key={i.id}
                                    style={{ color: i.textColor, cursor: "pointer", fontSize: 16, padding: 10 }}
                                    onClick={() => handleClickCategory(i.id, i.name)}
                                >
                                    {i.name === "Working with D3.js" ?
                                        <a
                                            href="https://visualisations-one.vercel.app/"
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ padding: 10, color: "inherit", fontSize: xsMatch ? 14 : "inherit", textDecoration: "none" }}
                                        >
                                            {i.name}
                                        </a>
                                        : i.name
                                    }
                                </Typography>
                            </Grid>
                            {selectedItem !== "" && i.select &&
                                <Grid item>
                                    {selectedItem === "RAMP medical" && i.select &&
                                        <div className="flex-column" style={{ padding: 10 }}>
                                            <div className="flex-center">
                                                <img style={{ width: xsMatch ? "100%" : "30%" }} src={ramp} alt="ramp" />
                                            </div>
                                            <div className="flex-center">
                                                <p style={{ fontSize: smMatch ? 14 : "inherit", color: "#444" }}>
                                                    I've been fortunate to be part of an innovative healthtech company, RAMP medical, that has been changing the healthcare landscape for 8 years.<br />
                                                    Our team is dedicated to creating exceptional web and mobile interfaces for an in-house Electronic Medical Record (EMR) system, Clinical Decision System (CDS) and patient dashboards.<br />
                                                    These cutting-edge tools are trusted by hospitals and private practices across Germany and Argentina.<br />
                                                    You can check Ramp's product demo video with a below link.<br />
                                                    <a className="a" href="https://www.rampmedical.com/help" target="_blank" rel="noreferrer">
                                                        Ramp product demo video
                                                    </a>
                                                    <br />
                                                    <a className="a" href="https://www.rampmedical.com" target="_blank" rel="noreferrer">
                                                        Ramp medical website
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    }
                                    {selectedItem === "Miniflux e-pub binder" && i.select &&
                                        <div className="flex-column" style={{ padding: 10 }}>
                                            <div className="flex-center">
                                                <img style={{ width: xsMatch ? "100%" : "30%" }} src={minifluxbinder} alt="minifluxbinder" />
                                            </div>
                                            <div className="flex-center">
                                                <p style={{ fontSize: smMatch ? 14 : "inherit", color: "#444" }}>
                                                    It designed to bind e-pub files using the Miniflux API.<br />
                                                    I've simplified the process of consuming feeds on your e-book reader, providing unparalleled convenience and ease-of-use.<br />
                                                    Discover a better way to enjoy your favorite RSS feeds with miniflux binder application<br />
                                                    Please check here:&nbsp;
                                                    <a className="a" href="https://www.minifluxbinder.com/" target="_blank" rel="noreferrer">
                                                        www.minifluxbinder.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    }
                                    {selectedItem === "Hack your fridge" && i.select &&
                                        <div className="flex-column" style={{ padding: 10 }}>
                                            <div className="flex-center">
                                                <img style={{ width: xsMatch ? "100%" : "30%" }} src={hackyourfridge} alt="hackyourfridge" />
                                            </div>
                                            <div className="flex-center">
                                                <p style={{ fontSize: smMatch ? 14 : "inherit", color: "#444" }}>
                                                    Hack your Fridge is a web application that helps users cook efficiently by suggesting recipes based on the ingredients they have in their fridge.<br />
                                                    The application leverages the Yummly API and is built using TypeScript, React, and deployed on Vercel.<br />
                                                    Please check here:&nbsp;
                                                    <a className="a" href="https://hack-your-fridge.vercel.app/" target="_blank" rel="noreferrer">
                                                        HAYFRIE: HAck Your FRIdgE
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    }
                                </Grid>
                            }
                        </Grid>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Works