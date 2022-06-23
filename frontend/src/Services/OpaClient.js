function getJson(response) {
    return response.json();
}

function proxyUrl(instanceUri, path){
    return '/proxy/' + encodeURI(instanceUri) + path;
}

const OpaClient = {
    getPolicies: (instanceUri, setPolicies) => {

        //setPolicies([ { Id: 'Test' }]);

        fetch(proxyUrl(instanceUri, '/v1/policies'), { 
            mode: 'no-cors',

        })
            .then(getJson)
            .then(policies => { setPolicies(policies.result); })
    }
}

export default OpaClient;