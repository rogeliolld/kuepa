import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Contacto from "./Contacto";

const Agenda = () => {
  const { loading, data } = useFetch(`https://api.opendota.com/api/proPlayers`);

  return (
    <>
      <div className="row my-5">
        <div className="col-12 col-xl-5 mx-3 info-personal">
          <h3>Conexiones de agenda para hoy</h3>
          <div className="agenda-table">
            <table className="table table-striped">
              <thead>
                
              </thead>
              <tbody>
                {!loading &&
                  data
                    .slice(0, 4)
                    .map((item) => (
                      <Contacto key={item.account_id} {...item} />
                    ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-12 col-xl-6 my-5">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-xl-6">
                  <h3>Tu Plan de hoy</h3>
                </div>
                <div className="col-xl-6">
                  <span>
                    {" "}
                    Ir a la gestion de llamados{" "}
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-5 info-personal mx-2">
                  <div className="row">
                    <div className="col-xl-6 col-12">
                      <div className="plan plan-fondo1">
                        <span className="plan-numero">30</span>
                      </div>
                    </div>
                    <div className="col-xl-6 col-12">
                      <div className="row">
                        <div className="col-12">Leads de primer contacto</div>
                        <div className="col-12">
                          <span>
                            <i className="fas fa-phone-alt"></i> 15
                          </span>
                        </div>
                        <div className="col-12">
                          <span>
                            <i className="far fa-comment-alt"></i>15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 info-personal mx-2">
                  <div className="row">
                    <div className="col-xl-6 col-12">
                      <div className="plan plan-fondo2">
                        <span className="plan-numero">30</span>
                      </div>
                    </div>
                    <div className="col-xl-6 col-12">
                      <div className="row">
                        <div className="col-12">Leads por confirmar cita</div>
                        <div className="col-12">
                          <span>
                            <i className="fas fa-phone-alt"></i> 15
                          </span>
                        </div>
                        <div className="col-12">
                          <span>
                            <i className="far fa-comment-alt"></i>15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-5 info-personal mx-2 my-2">
                  <div className="row">
                    <div className="col-xl-6 col-12">
                      <div className="plan plan-fondo3">
                        <span className="plan-numero">30</span>
                      </div>
                    </div>
                    <div className="col-xl-6 col-12">
                      <div className="row">
                        <div className="col-12">Leads por confirmar cita</div>
                        <div className="col-12">
                          <span>
                            <i className="fas fa-phone-alt"></i> 15
                          </span>
                        </div>
                        <div className="col-12">
                          <span>
                            <i className="far fa-comment-alt"></i>15
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agenda;
