import React, { useEffect } from "react";
//import './prism.css'
import Prism from 'prismjs'

const Policy = (props) => {

    useEffect(() => {
        Prism.highlightAll();
      }, []);

    // Get packageName

    var lines = props.Raw.replace("/r","").split("/n");
    var packageName = props.Id;

    for(var i = 0; i < lines.length; i++) {
        var matches = lines[i].match(/package\s+([a-zA-Z0-9_.]+)/);
        if(matches) {
            packageName = matches[1];
            break;
        }
    }

    // Get URL to run query
    var queryUrl = "/query?instanceUri=" + encodeURI(props.instanceUri) + "&package=" + packageName;

    return <div className="policy">
        <div className="policy-heading">
            <h3>{props.Id}</h3>
                <a href={queryUrl} className="btn btn-secondary btn-sm">Query</a>
    </div>
    <hr />
    <div className="policy-body Code"><pre><code className="language-rego">{props.Raw}</code></pre></div>
</div>

}

export default Policy;