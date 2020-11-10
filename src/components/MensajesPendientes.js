import React from "react";
import { useFetch } from "../hooks/useFetch";
import MensajePendiente from "./MensajePendiente";

const MensajesPendientes = () => {
  const { loading, data } = useFetch(`https://api.opendota.com/api/proPlayers`);

  return (
    <>
      <div className="col-xl-1 col-12 nav-mensaje-pendientes">
        {!loading &&
          data
            .slice(0, 10)
            .map((item) => (
              <MensajePendiente key={item.account_id} {...item} />
            ))}
      </div>
    </>
  );
};

export default MensajesPendientes;
