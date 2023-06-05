const api = require('../../api');

module.exports = async (req, res) => {
    const result = await api.subscriptions.retrieve(req.params.id);

    return res.render('subscriptions/details', {
        payload: JSON.stringify(result, null, 2),
    });
};
