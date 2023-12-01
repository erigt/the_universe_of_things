import Amiibo from "../../models/perretes/perretes";

export default class PerretesService {

    perretes = []

    constructor(repository) {
        this.repository = repository
    }

    async index() {
        const perretes = await this.repository.getAll()
        
        perretes.forEach(perretes => {
            const perretesToAdd = new Perrete(perrete.name, perrete.image)
            this.perretes.push(perreteToAdd)
        });

        return this.perretes
    }

}