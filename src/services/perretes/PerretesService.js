import Perrete from "../../models/perrete/Perrete";

export default class PerretesService {

    perretes = []

    constructor(repository) {
        this.repository = repository
    }

    async index() {
        const perretes = await this.repository.getAll()
        
        perretes.forEach(perrete => {
            const perreteToAdd = new Perrete(perrete.name, perrete.image)
            this.perretes.push(perreteToAdd)
        });

        return this.perretes
    }

}