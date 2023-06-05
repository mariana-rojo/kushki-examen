const api = require('../../api');
const dayjs = require('dayjs');

module.exports = async (req, res) => {
    const from = dayjs().subtract(1, 'day');
    const to = from.add(2, 'day');

    const result = await api.transactions.retrieve({
        from: from.format('YYYY-MM-DDTHH:mm:ss') ,
        to: to.format('YYYY-MM-DDTHH:mm:ss') ,
        ticket_number: req.params.id
    });

    if (result.total != 1) {
        throw 'Error al intentar recuperar la transacción.';
    }

    const payload = result.data[0];
    
    return res.render('transactions/details', {
        ticket_number: payload.ticket_number,
        payload: JSON.stringify(payload, null, 2),
    });
};
