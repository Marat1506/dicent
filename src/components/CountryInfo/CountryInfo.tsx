import { Box,Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCountryDetails } from "../../request/request";
import { useSearchParams } from "react-router-dom";
import { CountryType } from "../type";
import styles from './CountryInfo.module.css'
export default function CountryInfo() {
    const [details, setDetails] = useState<CountryType>();
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    console.log("name = ", name);

    useEffect(() => {
        const fetchData = async () => {
            if (name) {
                try {
                    const data = await getCountryDetails(name);
                    console.log("data = ", data);
                    setDetails(data[0]);
                } catch (error) {
                    console.error("Ошибка:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchData();
    }, [name]);


    if (loading) {
        return <h1>Загружается</h1>;
    }

    if (!details) {
        return <Typography>У этой страны нет детальной информации</Typography>;
    }
    console.log("details = ", details)
    return (
        <Box className={styles.container}>
            <Box className={styles.card}>
                <Typography variant="h4" className={styles.title}>{details.name.common}</Typography>
                <Typography variant="h6" gutterBottom>Official Name: {details.name.official}</Typography>
                <Box className={styles.info}>
                    <Box className={styles.infoItem}>
                        <Typography variant="body1"><strong>Capital:</strong> {details.capital}</Typography>
                    </Box>
                    <Box className={styles.infoItem}>
                        <Typography variant="body1"><strong>Region:</strong> {details.region}</Typography>
                    </Box>
                    <Box className={styles.infoItem}>
                        <Typography variant="body1"><strong>Subregion:</strong> {details.subregion}</Typography>
                    </Box>
                    <Box className={styles.infoItem}>
                        <Typography variant="body1"><strong>Population:</strong> {details.population.toLocaleString()}</Typography>
                    </Box>
                    <Box className={styles.infoItem}>
                        <Typography variant="body1"><strong>Area:</strong> {details.area.toLocaleString()} km²</Typography>
                    </Box>
                    <Box className={styles.infoItem}>
                        <Typography variant="body1"><strong>Continent:</strong> {details.continents}</Typography>
                    </Box>
                    {/* <Box className={styles.infoItem}>
                        <Typography variant="body1"><strong>Languages:</strong> {details.languages}</Typography>
                    </Box> */}
                    <Box className={styles.infoItem}>
                        <Typography variant="body1"><strong>Currencies:</strong> {Object.keys(details.currencies)}</Typography>
                    </Box>
                    <Box className={styles.infoItem}>
                        <Typography variant="body1"><strong>Borders:</strong> {details.borders}</Typography>
                    </Box>
                </Box>
                <Box className={styles.imageContainer}>
                    <img src={details.flags.png} alt={`${details.name.common} flag`} className={styles.image} />
                    <img src={details.coatOfArms.png} alt={`${details.name.common} coat of arms`} className={styles.image} />
                </Box>
            </Box>
        </Box>
    );
}