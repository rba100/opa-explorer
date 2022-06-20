function getJson(response) {
    return response.json();
}

const OpaClient = {
    getPolicies: (instanceUri, setPolicies) => {
        setPolicies([ { Id: 'Test' }]);

        return;
        fetch(instanceUri + '/v1/policies', { 
            mode: 'no-cors',

        })
            .then(getJson)
            .then(policies => { setPolicies(policies.result); })
    }
}

export default OpaClient;