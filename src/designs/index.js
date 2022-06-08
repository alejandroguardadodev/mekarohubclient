import { Grid, Box } from "@mui/material"

import { styled } from '@mui/material/styles';

export const Container = styled(Grid)(({ theme }) => ({
    boxShadow: "0px 10px 25px -10px rgba(0,0,0,0.65)",
    overflow: "hidden",
    '&.rounded': {
        borderRadius: 10,
    },
    '&.w-70': {
        width: '70%',
    },
    [theme.breakpoints.down("md")]: {
        '&.w-70': {
            width: '100%',
        },
    },
    [theme.breakpoints.down("sm")]: {
        minHeight: "100vh",
        '&.rounded': {
            borderRadius: 0,
        },
    }
}))

export const TwoItemBetween = styled(Box)(({ theme }) => ({
    '&.w-70': {
        width: '70%',
    },
    display: "flex",
    justifyContent: 'space-between',
    [theme.breakpoints.down("md")]: {
        '&.w-70': {
            width: '100%',
        },
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        gap: "10px",
    }
}))