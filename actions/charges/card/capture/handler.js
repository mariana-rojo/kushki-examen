const api = require("../../../../api");

module.exports = async (req, res) => {
    const result = await api.charges.card.capture({
        ticketNumber: req.params.id,
        amount: {
            subtotalIva: 0,
            subtotalIva0: 14.99,
            iva: 0,
            ice: 0,
            currency: "USD"
        },
        fullResponse: true,
    });

    return res.redirect(`/transactions/${result.ticketNumber}`);
};
