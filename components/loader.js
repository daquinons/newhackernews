export default () => {
  return (
    <div class="loader">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <style jsx>{`
        .d-flex {
          margin: 2rem;
        }
      `}</style>
    </div>
  );
};
