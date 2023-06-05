const api = require("../../../../api");

module.exports = async (req, res) => {
    const result = await api.charges.card.void(req.params.id, {
        amount: {
            subtotalIva: 14.99,
            subtotalIva0: 0,
            ice: 0,
            iva: 0,
            currency: "USD",
        },
        fullResponse: true,
    });

    return res.redirect(`/transactions/${result.ticketNumber}`);
};
