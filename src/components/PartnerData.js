import React, { Fragment } from 'react';

const PartnerData = () => (
  <Fragment>
    <div className="form-group row">
      <label className="col-md-3" htmlFor="field-client-id">Client ID</label>
      <input
        className="form-control col-md-6"
        id="field-client-id"
        name="clientId"
        type="text"
      />
    </div>
    <div className="form-group row">
      <label className="col-md-3" htmlFor="field-document">Documento</label>
      <input
        className="form-control col-md-6"
        id="field-document"
        name="document"
        type="text"
      />
    </div>
    <div className="form-group row">
      <label className="col-md-3" htmlFor="field-social-name">Nome social</label>
      <input
        className="form-control col-md-6"
        id="field-social-name"
        name="socialName"
        type="text"
      />
    </div>
    <div className="form-group row">
      <label className="col-md-3" htmlFor="field-code-client">Código de cliente</label>
      <input
        className="form-control col-md-6"
        id="field-code-client"
        name="codeClient"
        type="text"
      />
    </div>
  </Fragment>
);

export default PartnerData;
