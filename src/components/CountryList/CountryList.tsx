import { Box, Typography } from "@mui/material";
import CountryCard from "../CoyntryCard/CountryCard";
import { useEffect, useState } from "react";
import { getCountry } from "../../request/request";
import styles from './CountryList.module.css'
export default function CountryList() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        try {
            const fetchData = async () => {
                const data = await getCountry()
                console.log("data= ", data)
                setCountries(data)
            }
            fetchData()
        } catch (error) {
            console.error("Ошибка:", error);
        } finally {
            setLoading(false);
        }

    }, [])
    console.log("country = ", countries)
    if (loading) {
        return <h1>Загружается</h1>;
    }
    return (
        <Box>
            <Typography variant="h3">Список стран</Typography>
            <Box className={styles.CountryList}>

                {countries.map(country => (
                    <CountryCard key={Math.random()} country={country} />
                ))}

            </Box>
        </Box>

    )
}