import OpaClient from '../Services/OpaClient.js'

const RunQuery = (props) => {

    var runQuery = function(e) {
      OpaClient.runQuery(props.instanceUri, props.package, "{}", (result) => {
        alert(result);
      });
    };

    return (
      <div className="container">
        <label htmlFor="query-inputPath">Data path <small>(exclude <code>/v1/data/</code>)</small></label>
        <textarea name="query-inputPath" id="query-inputPath"
          style={{width: "100%", fontFamily: "monospace"}}
          rows="1" defaultValue={props.package} />
        <label htmlFor="query-input">Query input JSON <small>(exclude <code>&#123; "input" : &#125;</code> wrapper)</small></label>
        <textarea name="query-input" id="query-input" style={{width: "100%", fontFamily: "monospace"}} rows="20" defaultValue="&#123;&#125;" />
        <br />
        <button id="btn-run" className="btn btn-primary" onClick={runQuery}>Run</button>
        <br />
        <br />
        <pre id="query-output"></pre>
      </div>
    );
  };
  export default RunQuery;
  