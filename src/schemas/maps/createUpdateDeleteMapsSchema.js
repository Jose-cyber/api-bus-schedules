const yup = require('../userSchema');

const createUpdateDeleteMapsSchema = yup.object({
    maps_name: yup.string().required('Maps name is required'),
    link: yup.string().required('Link is required').url('Link must be a valid URL')
  });

module.exports = createUpdateDeleteMapsSchema