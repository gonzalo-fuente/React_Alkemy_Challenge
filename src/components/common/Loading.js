/* Generate Loading Spinner */
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-5">
      <div
        className="spinner-border text-info"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <h1 className="ms-4 fs-italic text-info">Loading...</h1>
    </div>
  );
};

export default Loading;
