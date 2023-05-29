const DashHeader = () => {
  return (
    <div className="dash-header">
      <div className="flex">
        <h1 className="dash-h1">Orders</h1>
        <button className="dash-btn">Print</button>
      </div>
      <hr className="dash-hr" />
      <div className="flex">Search:</div>
      <hr className="dash-hr" />
    </div>
  );
};

export default DashHeader;
