import React from 'react';
import Agenda from './Agenda';

const InfoPersonal = () => {
    
    return (
        <>
                <div className="row">
                    <div className="col-lg-7 col-md-7 mx-4">
                        <div className="row info-personal">
                            <div className="col-sm">
                                <div className="progressCircular progress-1">
                                    <span className="progress-left">
                                        <span className="progress-bar-circular"></span>
                                    </span>
                                    <span className="progress-right">
                                        <span className="progress-bar-circular"></span>
                                    </span>
                                    <div className="progress-value">50%</div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <span className="leads">Leads obtenidos</span>
                                    </div>
                                    <div className="col-sm">
                                        <span className="leads num">50/100</span>
                                    </div>
                                </div>
                                <div className="row my-5">
                                    <div className="col-sm">
                                        <span className="leads">Matriculas Finalizada</span>
                                    </div>
                                    <div className="col-sm">
                                        <span className="leads num">10/20</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm">
                                        <span className="leads">Cola de llamdos</span>
                                    </div>
                                    <div className="col-sm">
                                        <span className="leads num">50/100</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 my-2">
                        <div className="row info-personal">
                            <div className="col-lg-12">
                                <h3>Meta grupal</h3>
                            </div>
    
                            <div className="col-sm">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <span className="leads">Leads obtenidos 50/100</span>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-1" role="progressbar" style={{width: "50%"}}
                                                aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="col-sm-12">
                                        <span className="leads">Matriculas Finalizada 10/20</span>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-2" role="progressbar" style={{width: "20%"}}
                                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Agenda/>
               
        </>
        
    )
}

export default InfoPersonal
