

export async function getCountry() {
    try {
        const responce = fetch('https://restcountries.com/v3.1/all', {
            method: 'GET',
            headers: {accept: 'application/json'}
        })
        if(!(await responce).ok){
            throw new Error("Ошибка 200")
        }
        const data = (await responce).json();
        return data

    } catch (error) {
        console.log("Запрос завершился ошибкой: ", error)
    }
    
    
}
export async function getCountryDetails(name: string) {
    try {
        const responce = fetch( `https://restcountries.com/v3.1/name/${name}`, {
            method: 'GET',
            headers: {accept: 'application/json'}
        })
        if(!(await responce).ok){
            throw new Error("Ошибка 200")
        }
        const data = (await responce).json();
        return data

    } catch (error) {
        console.log("Запрос завершился ошибкой: ", error)
    }
    
    
}