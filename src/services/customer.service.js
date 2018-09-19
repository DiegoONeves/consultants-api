const ConsultantRepository = require('../repositories/consultant.repository');


var consultantService = class ConsultantService {

    async getConsultantsWithoutProject() {

        let query = {
            prjects: null
        };

        let consultants = await ConsultantRepository.get(query, {}, {});

        console.log('chamando serviço', consultants);

        return consultants;
    }
};

exports.ConsultantService = consultantService;