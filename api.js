const fetch = require("node-fetch");

const Requestor = function (uri, options = {}) {
    let requestHeaders = {
        "Private-Merchant-Id": process.env.KUSHKI_SKEY,
        "Content-Type": "application/json",
    };

    const requestOptions = {
        ...{
            headers: requestHeaders,
            redirect: "follow",
        },
        ...options,
    };

    const host = process.env.KUSHKI_HOST;

    return fetch(`${host}${uri}`, requestOptions);
};

module.exports.subscriptions = {
    create: (payload) => {
        return Requestor("/subscriptions/v1/card", {
            method: "POST",
            body: JSON.stringify(payload),
        }).then((res) => res.json());
    },

    retrieve: (id) => {
        return Requestor(`/subscriptions/v1/card/search/${id}`, {
            method: "GET",
        }).then((res) => res.json());
    },
};

module.exports.transactions = {
    find: (params) => {
        const url =
            "/analytics/v1/transactions-list" +
            "?" +
            new URLSearchParams(params);

        return Requestor(url, {
            method: "GET",
        }).then((res) => res.json());
    },

    retrieve: (params) => {
        const url =
            "/analytics/v1/transactions-list" +
            "?" +
            new URLSearchParams(params);

        return Requestor(url, {
            method: "GET",
        }).then((res) => res.json());
    },
};

module.exports.charges = {
    card: {
        authorization: (payload) => {
            return Requestor("/card/v1/preAuthorization", {
                method: "POST",
                body: JSON.stringify(payload),
            }).then((res) => res.json());
        },

        capture: (payload) => {
            return Requestor('/card/v1/capture', {
                method: "POST",
                body: JSON.stringify(payload),
            }).then((res) => res.json());
        },

        void: (id, payload) => {
            return Requestor(`/v1/charges/${id}`, {
                method: "DELETE",
                body: JSON.stringify(payload),
            }).then((res) => res.json());
        },
    },
};
