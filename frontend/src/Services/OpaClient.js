
function getJson(response) {
    return response.json();
}

function proxyUrl(instanceUri, path){

    var prefix = "";

    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        prefix = "http://localhost:8000";
    }

    return prefix + '/proxy/' + encodeURI(instanceUri) + path;
}

const OpaClient = {
    getPolicies: (instanceUri, setPolicies) => {

        fetch(proxyUrl(instanceUri, '/v1/policies'), { 
            mode: 'cors',
        })
            .then(getJson)
            .then(policies => { setPolicies(policies.result); })
    },

    runQuery: (instanceUri, packageName, payload, callback) => {

        var input = '{ "input": ' + payload + '}';

        fetch(proxyUrl(instanceUri, '/v1/data/' + packageName.replace(".","/")), { 
            method: "POST",
            mode: 'cors',
            body: input
        }).then(response => response.text())
          .then(txt => callback(txt));
    }
}

export default OpaClient;