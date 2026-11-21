const ErrorComponent = ({ msg }) => {
  return (
    <div className="error-div">
      <div className="error-msg">{msg}</div>
    </div>
  );
};

export default ErrorComponent;
