import React, { useEffect } from "react";
import './prism.css'
import Prism from 'prismjs'

const Policy = (props) => {

    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return <div className="policy">
        <div className="policy-heading">
            <h3>{props.Id}</h3>
                <a className="btn btn-secondary btn-sm" asp-area="" data-page="/RunQuery"
            data-instanceUri="@Model.InstanceUri?.ToString()" data-dataPath="@policy.GetPackage().Replace('.','/')">Query</a>
    </div>
    <hr />
    <div className="policy-body Code"><pre><code className="language-rego">{props.Raw}</code></pre></div>
</div>

}

export default Policy;