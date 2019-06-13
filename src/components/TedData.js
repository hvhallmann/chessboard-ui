import React, { Fragment } from 'react';

const TedData = props => (
  <Fragment>
    <div className="form-group row">
      <label className="col-md-4" htmlFor="field-ted-endpoint-confirm">Endpoint de confirmação</label>
      <input
        className="form-control col-md-6"
        id="field-ted-endpoint-confirm"
        name="ted.endpointConfirm"
        type="text"
      />
    </div>
    <div className="form-group row">
      <label className="col-md-4" htmlFor="field-ted-security-string">Header de autenticação</label>
      <input
        className="form-control col-md-6"
        id="field-ted-security-string"
        name="ted.securityString"
        type="text"
      />
    </div>
    <div className="form-group row">
      <label className="col-md-4" htmlFor="field-ted-account">Contas bancárias (separadas por virgula)</label>
      <input
        className="form-control col-md-6"
        id="field-ted-account"
        name="ted.account"
        type="text"
      />
    </div>
    <div className="form-group row">
      <label className="col-md-4" htmlFor="field-ted-code-identifier">Código de identificação</label>
      <input
        className="form-control col-md-6"
        id="field-ted-code-identifier"
        name="ted.codeIdentifier"
        type="text"
      />
    </div>
    <div className="form-group row">
      <label className="col-md-4" htmlFor="field-ted-allow-transfer-to-different-recipients">Endpoint de confirmação</label>
      <input
        checked={props.allowTransferToDifferentRecipients}
        className='form-check-input col-md-6'
        id='field-ted-allow-transfer-to-different-recipients'
        type='checkbox'
      />
    </div>
  </Fragment>
);

export default TedData;
