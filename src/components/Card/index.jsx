import React from "react";

const Card = ({ title, description }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", padding: '22px 11px', border: '1px solid #d8d8d8' }}>
      <div style={{ display: "flex", flex: 2, flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
        <figure className="image is-128x128">
          <img
            src="https://bulma.io/images/placeholders/256x256.png"
            alt=""
            className="is-rounded"
          />
        </figure>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          textAlign: "center",
          padding: '22px 0'
        }}
      >
        <h3>Título</h3>
        <p>Descrição</p>
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <a href="#" className="button">
          Saiba mais
        </a>
      </div>
    </div>
  );
};

export default Card;
