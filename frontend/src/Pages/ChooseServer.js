
const ChooseServer = (props) => {

    return (
      <div>
        <form action="policies">
            <input type="text" id="instanceUri" name="instanceUri" placeholder="Opa address" />
        </form>

        <hr />

        <ul style={{'list-style': 'none'}}>
            <li><a href="policies?instanceUri=http%3A%2F%2Flocalhost%3A8181">Localhost 8181</a></li>
            <li><a href="policies?instanceUri=http%3A%2F%2Fhost.docker.internal%3A8181">host.docker.internal 8181</a> </li>
        </ul>
      </div>
    );
  };
  export default ChooseServer;
  