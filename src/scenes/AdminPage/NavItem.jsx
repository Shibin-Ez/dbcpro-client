const NavItem = (props) => {
  const { icon, text, active, onClick } = props;
  return (
    <div className={`flex admin-nav-item ${active ? "admin-nav-item-active" : ""}`} onClick={onClick}>
     {/* <div className="flex admin-nav-item">    */}
      <img className="admin-nav-icon" src={require(`./admin-page-images/${icon}`)} alt="sidebar-icon" />
      <div className="admin-nav-name">{text}</div>
    </div>
  );
};

export default NavItem;