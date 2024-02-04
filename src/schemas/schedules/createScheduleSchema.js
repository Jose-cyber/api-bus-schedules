const yup = require('../userSchema');

const createScheduleSchema = yup
    .object({
        start: yup.string().min(3).max(255).required(),
        end: yup.string().min(3).max(255).required(),
        weekly: yup.boolean().required(),
        saturday: yup.boolean().required(),
        come_from_sfx: yup.boolean(),
        sunday: yup.boolean().required(),
        itineraries_name: yup.string().min(3).max(255).required(),
        itineraries_alias: yup.string().min(3).max(255).required(),
}).required();

module.exports = createScheduleSchema;