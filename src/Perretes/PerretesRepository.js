export default class PerretesRepository {

    uri = import.meta.env.VITE_API_ENDPOINT_PERRETES

    async getAll() {

        try {
            const response = await fetch(this.uri) 
            const data = await response.json()
            return data.perretes
        } catch (error) {
            throw new Error('Ups!!! Something happened')
        }

    }

}