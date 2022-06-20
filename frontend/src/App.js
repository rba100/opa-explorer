import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Routes, Route, useSearchParams } from "react-router-dom";

import Navbar from "./Navigation/Navbar.js";
import ChooseServer from "./Pages/ChooseServer.js";
import ViewPolicies from "./Pages/Policies.js";
import RunQuery from "./Pages/RunQuery.js";

function App() {

  const [searchParams, setSearchParams] = useSearchParams();

  var instanceUri = searchParams.get('instanceUri');
  var dataPath = searchParams.get('dataPath');

  return (
    <div className="App">
      <Navbar brandName="OPA Explorer" instanceUri={instanceUri}/>
      <div>
        <Routes>
          <Route path='/' element={<ChooseServer />} />
          <Route path='/policies' element={<ViewPolicies instanceUri={instanceUri} />} />
          <Route path='/query' element={<RunQuery instanceUri={instanceUri} dataPath={dataPath}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
