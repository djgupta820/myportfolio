import React from "react";

const Certificate = (props) => {
  return (
    <div className="estyle certificate-card">
      <div className="command-line">$ verify-cert --name "{props.name}"</div>
      <small>
        <p>{'>'} cert_id: {props.id}</p>
        <p>{'>'} issuer: <strong style={{color: 'var(--sp-col)'}}>{props.issuer}</strong></p>
        <p>{'>'} validity: <strong style={{color: '#10b981'}}>{props.validity}</strong></p>
        <p style={{color: '#10b981', marginTop: '8px'}}>✓ Certificate verified successfully</p>
      </small>
    </div>
  );
};

export default Certificate;
