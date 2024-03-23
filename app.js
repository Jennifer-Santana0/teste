const api = 'https://servicodados.ibge.gov.br/api/v1/produtos/'

const a = async () => {
    const response = await fetch(api)
    const data = await response.json()
    console.log(data)
}

a()