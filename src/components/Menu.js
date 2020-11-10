import React from 'react';

const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-1 d-md-block bg-kuepa sidebar collapse">
                <div className="sidebar-sticky pt-5">
                    <ul className="nav flex-column nav-kuepa">
                    
                        <li className="nav-item">
                            <a className="nav-link" href="/#">
                                <i className="fas fa-warehouse"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/#">
                                <i className="fas fa-clipboard-list"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">
                                <i className="fas fa-bars"></i>
                            </a>
                        </li>
                    </ul>
            
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                      <span></span>
                      
                    </h6>
                    <ul className="nav flex-column mb-2 nav-kuepa">
                        <li className="nav-item">
                            <a className="nav-link" href="/#">
                                <i className="far fa-comment-alt"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">
                                <span data-feather="file-text"></span>
                            </a>
                        </li>
                    </ul>
                  </div>
            </nav>
    )
}

export default Menu
