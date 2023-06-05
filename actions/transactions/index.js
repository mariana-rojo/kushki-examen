const api = require('../../api');
const dayjs = require('dayjs');

module.exports = async (req, res) => {
    const from = dayjs().subtract(1, 'day');
    const to = from.add(2, 'day');

    const result = await api.transactions.find({
        from: from.format('YYYY-MM-DDTHH:mm:ss') ,
        to: to.format('YYYY-MM-DDTHH:mm:ss') ,
    });

    return res.render('transactions/index', {
        payload: JSON.stringify(result, null, 2),
    });
};
