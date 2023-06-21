import React, { useState } from 'react'
import './Page.css'
import { useMediaQuery, useTheme, Grid, Typography} from "@mui/material"
import { CodingWorkList } from './Works/CodingWorkList'


interface Data {
    id: number;
    name: string;
    color: string;
}

const Works: React.FC = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [category, setCategory] = useState<Data[]>([
        {
            id: 1,
            name: "Code",
            color: "#000000"
        },
        {
            id: 2,
            name: "Design",
            color: "#828282"
        },
        {
            id: 3,
            name: "Others",
            color: "#828282"
        }
    ])
    const [selectedCategory, setSelectedCategory] = useState<string>("Code")

    const handleClickCategory = (id: number, name: string) => {
        setCategory(
            category.map(item => {
                if (item.id === id) {
                    return { ...item, color: "#000000" }
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
        <div>
            <Grid container spacing={2} direction={matches ? "column" : "row"}>
                <Grid item sm={4}>
                    {category.map(item => (
                        <Typography
                            key={item.id}
                            style={{ color: item.color, cursor: "pointer", fontSize: 20 }}
                            onClick={() => handleClickCategory(item.id, item.name)}
                        >
                            {item.name}
                        </Typography>
                    ))}
                </Grid>
                <Grid item sm={8}>
                    {selectedCategory === "Code" &&
                        <div>
                            <Typography style={{ fontSize: 20 }}>/Code works</Typography>
                            <CodingWorkList />
                        </div>
                    }
                    {selectedCategory === "Design" &&
                        <div>
                            <Typography style={{ fontSize: 20 }}>/Design works</Typography>
                            <Typography>Not ready yet</Typography>
                        </div>
                    }
                    {selectedCategory === "Others" &&
                        <Typography style={{ fontSize: 20 }}>/Others works</Typography>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

export default Works