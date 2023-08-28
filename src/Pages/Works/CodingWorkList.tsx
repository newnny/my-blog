import React from 'react'
import { Link, Stack } from "@mui/material"
import { useNavigate } from 'react-router-dom'

interface codingListData {
    id: number;
    name: string;
    linkId: string;
}

export const CodingWorkList: React.FC = () => {
    const navigate = useNavigate();

    const codingList: codingListData[] = [
        {
            id: 1,
            name: "RAMP medical",
            linkId: "work_1"
        },
        {
            id: 2,
            name: "Miniflux e-pub binder",
            linkId: "work_2"
        },
        {
            id: 3,
            name: "Working with D3.js",
            linkId: "work_3"
        }
    ]

    const handleClickLink = (event: React.SyntheticEvent, linkId?: string) => {
        event.preventDefault();
        const routerId = linkId
        if (routerId === "work_3") {
            window.open("https://visualisations-one.vercel.app/", "_blank", "noreferrer")
        } else {
            navigate(`/work/coding/${routerId}`)
        }
    }

    return (
        <div>
            <Stack>
                {
                    codingList.map(list =>
                        <Link
                            key={list.id}
                            onClick={(event) => handleClickLink(event, list.linkId)}
                            color="#ad7a5b"
                            underline="hover"
                            style={{ padding: 10 }}
                        >
                            {list.name}
                        </Link>
                    )
                }

            </Stack>
        </div>
    )
}