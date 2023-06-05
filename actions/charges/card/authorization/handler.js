const api = require('../../../../api');

module.exports = async (req, res) => {
    const result = await api.charges.card.authorization({
        token: req.body.token,
        amount: {
            subtotalIva: 0,
            subtotalIva0: 14.99,
            ice: 0,
            iva: 0,
            currency: 'USD',
        },
        orderDetails: {
            siteDomain: 'tuebook.com',
            shippingDetails: {
                name: 'John Doe',
                phone: '+593988734644',
                address: 'Calle 13 Avenida 39 40',
                city: 'Guadalajara',
                region: 'Jalisco',
                country: 'México',
                zipCode: '170402',
            },
            billingDetails: {
                name: 'John Doe',
                phone: '+593988734644',
                address: 'Calle 13 Avenida 39 40',
                city: 'Guadalajara',
                region: 'Jalisco',
                country: 'México',
                zipCode: '170402',
            },
        },
        fullResponse: true,
    });

    return res.redirect(`/transactions/${result.ticketNumber}`);
};
