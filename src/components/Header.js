import React from "react";

const Header = () => {
  return (
    <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div class="col-md-4">
          <div class="input-group">
            <input
              class="form-control py-2 border-right-0 border"
              type="search"
              value="Buscar"
              id="example-search-input"
            />
            <span class="input-group-append">
              <div class="input-group-text bg-transparent">
                <i class="fa fa-search"></i>
              </div>
            </span>
            <span class="input-group-text icon-filtre">
              <i class="fas fa-filter"></i>
            </span>
          </div>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0 col-md-4">
          <div class="btn-group mr-2">
            <select class="form-control">
              <option>Martes, 10 Noviembre</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
