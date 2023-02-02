import React, { useState } from 'react'
import './Page.css'
import { Grid, Button, useMediaQuery, useTheme } from "@mui/material"

interface Data {
    id: number;
    name: string;
    color: string;
    fontWeight: string;
}

const Works: React.FC = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [category, setCategory] = useState<Data[]>([
        {
            id: 1,
            name: "Code",
            color: "#4b5e91",
            fontWeight: "normal"
        },
        {
            id: 2,
            name: "Design",
            color: "#4b5e91",
            fontWeight: "normal"
        },
        {
            id: 3,
            name: "Others",
            color: "#4b5e91",
            fontWeight: "normal"
        }
    ])
    const [selectedCategory, setSelectedCategory] = useState<string>("")

    const handleClickCategory = (id: number, name: string) => {
        setCategory(
            category.map(item => {
                if (item.id === id) {
                    return { ...item, color: "#504718", fontWeight: "bold" }
                }
                return { ...item, color: "#4b5e91", fontWeight: "normal" }
            })
        )
        if (name === "Code") {
            setSelectedCategory("Code")
        } else if (name === "Design") {
            setSelectedCategory("Design")
        } else if (name === "Others") {
            setSelectedCategory("Others")
        }
    }


    return (
        <div className={matches ? " work-mobile-div" : "work-div"}>
            <Grid container direction={matches ? "column" : "row"}>
                <Grid item sm={6} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    {category.map(item => (
                        <p
                            style={{ color: item.color, fontWeight: item.fontWeight, cursor: "pointer", }}
                            onClick={() => handleClickCategory(item.id, item.name)}
                        >
                            {item.name}
                        </p>
                    ))}
                </Grid>
                <Grid item sm={6}>
                    {selectedCategory === "Code" &&
                        <div>
                            <p>/Code works</p>
                            <p>Not ready yet</p>
                        </div>
                    }
                    {selectedCategory === "Design" &&
                        <div>
                            <p>/Design works</p>
                            <p>Not ready yet</p>
                        </div>
                    }
                    {selectedCategory === "Others" &&
                        <p>/Others works</p>
                    }
                </Grid>
            </Grid>
        </div>

    )
}

export default Works