import { connect, disconnect } from "../web3";

const Connect = () => {
  const connectStyle = {
    display: "block"
  };

  const disconnectStyle = {
    display: "none"
  };

  return (
    <div className="connect-container">
      <button className="connect-btn">
        <div id="disconnect" onClick={disconnect} style={disconnectStyle}>
          <span>DISCONNECT</span>
        </div>
        <div id="connect" onClick={connect} style={connectStyle}>
          <span>CONNECT</span>
        </div>
      </button>
    </div>
  );
};

export default Connect;