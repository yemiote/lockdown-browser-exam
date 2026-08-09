import "../styles/Windows.css";

function Window({ title, children }) {
  return (
    <div className="window-overlay">

      <div className="window">

        <div className="title-bar">

          <span>{title}</span>

          <button className="close-btn">✕</button>

        </div>

        <div className="window-body">

          {children}

        </div>

      </div>

    </div>
  );
}

export default Window;