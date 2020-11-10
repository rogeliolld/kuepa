import React from 'react';
import Menu from './Menu';
import Header from './Header';
import InfoPersonal from './InfoPersonal';
import MensajePendientes from './MensajesPendientes';

const Kuepa = () => {
    return (
        <>
        <nav className="navbar navbar-dark sticky-top bg-kuepa flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-1 mr-0 px-3" href="#">
            <img src="logo.png" name="logo-kuepa" className="img-fluid" />
        </a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
            data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="col-lg-11 ml-sm-auto">
            <h1 className="info-name">Hola, Jorge</h1>
        </div>
       
    </nav>
        <div className="container-fluid">
            <div className="row">
               <Menu/> 
               <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                 <Header/>
                 <InfoPersonal/>                                     
                </main>
                <MensajePendientes/>
            </div>
        </div>
        </>
    )
}

export default Kuepa
