import React from "react";

const Header = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div className="col-md-4">
          <div className="input-group">
            <form>
            <input
              className="form-control py-2 border-right-0 border"
              type="text" 
              
              defaultValue="Search..."
            />
           </form>  
            <span className="input-group-append">
              <div className="input-group-text bg-transparent">
                <i className="fa fa-search"></i>
              </div>
            </span>
            <span className="input-group-text icon-filtre">
              <i className="fas fa-filter"></i>
            </span>
          </div>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0 col-md-4">
          <div className="btn-group mr-2">
            <select className="form-control">
              <option>Martes, 10 Noviembre</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
