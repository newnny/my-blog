import React, { useState } from 'react'
import { Link, Stack } from "@mui/material"
import { useNavigate } from 'react-router-dom'

interface codingListData {
    id: number;
    name: string;
    linkId: string;
}

export const CodingWorkList: React.FC = () => {
    const navigate = useNavigate();

    const [codingList, setCodingList] = useState<codingListData[]>([
        {
            id: 1,
            name: "Reusable modal",
            linkId: "reusable_modal"
        },
        {
            id: 2,
            name: "Coding work 2",
            linkId: "work_2"
        }
    ])

    const handleClickLink = (event: React.SyntheticEvent, linkId?: string) => {
        event.preventDefault();
        const routerId = linkId
        navigate(`/work/coding/${routerId}`)
    }

    return (
        <div>
            <Stack>
                {
                    codingList.map(list =>
                        <Link
                            key={list.id}
                            onClick={(event) => handleClickLink(event, list.linkId)}
                        >
                            {list.name}
                        </Link>
                    )
                }

            </Stack>
        </div>
    )
}