import { Box, Typography } from "@mui/material";
import styles from './CountryCard.module.css'
import { CountryType } from "../type";
import { Link } from "react-router-dom";


export default function CountryCard({ country }: { country: CountryType }) {

    return (
        <Link to={`/countryInfo?name=${country.name.common}`}>

            <Box className={styles.card}>
                <img src={`${country.flags.png}`} />
                <Box className={styles.nameBlock}>
                    <Typography> Название: </Typography>

                    <Typography>{country.name.common}</Typography>

                </Box>

                <Box className={styles.nameBlock}>
                    <Typography> Столица: </Typography>
                    <Typography>{country.capital}</Typography>
                </Box>


            </Box>
        </Link>

    )
}