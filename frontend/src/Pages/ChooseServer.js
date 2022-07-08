
const ChooseServer = (props) => {

    return (
      <div className="centred">
        <form action="policies">
            <input type="text" id="instanceUri" name="instanceUri" placeholder="Opa address" />
        </form>

        <hr />

        <ul style={{'list-style': 'none'}}>
            <li><a href="policies?instanceUri=localhost%3A8181">Localhost 8181</a></li>
            <li><a href="policies?instanceUri=host.docker.internal%3A8181">host.docker.internal 8181</a> </li>
        </ul>
      </div>
    );
  };
  export default ChooseServer;
  