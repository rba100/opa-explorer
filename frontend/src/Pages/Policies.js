import OpaClient from '../Services/OpaClient.js'
import { useState } from 'react'
import Policy from '../Components/Policy.js'

const ViewPolicies = (props) => {

    const [viewState, setViewState] = useState({ policies: [], fetchStatus: 'init' });

    if(props.instanceUri && viewState.fetchStatus == 'init') {
        OpaClient.getPolicies(props.instanceUri, (p) => {
            setViewState({ policies: p, fetchStatus: 'done' });
        });
    }

    return (
        <div className="container">
            <h1 className='centred'>Policies</h1>
            { viewState.policies && viewState.policies.map(policy => 
            <Policy key={policy.id} Id={policy.id} Raw={policy.raw} instanceUri={props.instanceUri} package={props.package} /> ) }
      </div>
    );
  };
  export default ViewPolicies;
  