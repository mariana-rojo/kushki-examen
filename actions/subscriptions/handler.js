const api = require('../../api');

module.exports = async (req, res) => {
    const result = await api.subscriptions.create({
        token: req.body.token,
        amount: {
            subtotalIva: 0,
            subtotalIva0: 14.99,
            ice: 0,
            iva: 0,
            currency: 'USD',
        },
        planName: 'Premium',
        periodicity: 'monthly',
        contactDetails: {
            firstName: 'Juan',
            lastName: 'Flores',
            email: 'pruebas@kushki.com',
            phoneNumber: '+593984775632',
        },
        startDate: '2023-09-25',
        metadata: {
            contractID: '157AB',
        },
    });

    return res.redirect(`/subscriptions/${result.subscriptionId}`);
};
