const yup = require('../userSchema');

const createUpdateDeleteWaysSchema = yup
    .object({
        route_name: yup.string().min(3).max(255).required(),
        route_alias: yup.string().min(3).max(255).required(),
        bus_stops: yup.array().of(
            yup.string().required('Bus stop is required')
          )
}).required();

module.exports = createUpdateDeleteWaysSchema;