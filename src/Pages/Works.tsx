import React, { useState } from 'react'
import './Page.css'
import { Grid, useMediaQuery, useTheme } from "@mui/material"

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
            color: "000000",
            fontWeight: "normal"
        },
        {
            id: 2,
            name: "Design",
            color: "000000",
            fontWeight: "normal"
        },
        {
            id: 3,
            name: "Others",
            color: "000000",
            fontWeight: "normal"
        }
    ])
    const [selectedCategory, setSelectedCategory] = useState<string>("")

    const handleClickCategory = (id: number, name: string) => {
        setCategory(
            category.map(item => {
                if (item.id === id) {
                    return { ...item }
                }
                return { ...item, color: "#828282" }
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
                <Grid item sm={4} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                    {category.map(item => (
                        <p
                            key={item.id}
                            style={{ color: item.color, cursor: "pointer", fontSize: 20 }}
                            onClick={() => handleClickCategory(item.id, item.name)}
                        >
                            {item.name}
                        </p>
                    ))}
                </Grid>
                <Grid item sm={8}>
                    {selectedCategory === "Code" &&
                        <div>
                            <p style={{ fontSize: 20 }}>/Code works</p>
                            <p>Not ready yet</p>
                        </div>
                    }
                    {selectedCategory === "Design" &&
                        <div>
                            <p style={{ fontSize: 20 }}>/Design works</p>
                            <p>Not ready yet</p>
                        </div>
                    }
                    {selectedCategory === "Others" &&
                        <p style={{ fontSize: 20 }}>/Others works</p>
                    }
                </Grid>
            </Grid>
        </div>

    )
}

export default Works