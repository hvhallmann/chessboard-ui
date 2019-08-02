/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import classname from 'classname';
import _clone from 'lodash.clonedeep';

import { List } from 'tpz-react-components';

import neideApi from '../../neideApi';
import PartnerForm from './PartnerForm';
import config from './config';
import Menu from '../../components/Menu';
// import fixture from './fixture';

const Partners = () => {
  const [docs, setDocs] = useState(undefined);
  const [doc, setDoc] = useState(undefined);
  const [columns, setColumns] = useState(config.columns);

  const alert = useAlert();

  useEffect(() => {
    neideApi.get('/partner')
      .then(setDocs);
  }, []);

  const onCancel = () => {
    setDoc(undefined);
    setColumns(config.columns);
  };

  const post = docToPost => neideApi.post(
    '/partner',
    docToPost
  ).then((postedDoc) => {
    const newDocs = _clone(docs);
    newDocs.push(postedDoc);
    setDocs(newDocs);
    onCancel();
    return 'done';
  })
    .catch((axiosError) => {
      alert.error(axiosError
        && axiosError.response
        && axiosError.response.data
        && axiosError.response.data.message);
      return 'fail';
    });

  const patch = (
    docToPatch,
    idx
  ) => neideApi.patch(`/partner/${docToPatch.clientId}`, docToPatch)
    .then((patchedDoc) => {
      const newDocs = _clone(docs);
      newDocs[idx] = patchedDoc;
      setDocs(newDocs);
      onCancel();
      return 'done';
    })
    .catch((axiosError) => {
      alert.error(axiosError
        && axiosError.response
        && axiosError.response.data
        && axiosError.response.data.message);
      return 'fail';
    });

  const onSave = (docToSave) => {
    const idx = docs && docs.findIndex(item => item._id === docToSave._id);
    return (idx === -1) ? post(docToSave) : patch(docToSave, idx);
  };

  const onEdit = (id) => {
    const docToEdit = docs.find(d => d._id === id);
    setDoc(_clone(docToEdit));
    setColumns(columns.filter(c => c.main));
  };

  const onNew = () => {
    setDoc(_clone(config.defaultDoc));
    setColumns(columns.filter(c => c.main));
  };

  return (

    <div className='container-fluid'>
      <div className='row'>
        <nav className='col-md-2' style={{ backgroundColor: '#f8f9fa' }}>
          <Menu />
        </nav>

        <div className={classname({ 'col-md-3': !!doc, 'col-md-10': !doc })}>
          <h2>Parceiros</h2>
          <button
            className='btn btn-link'
            onClick={onNew}
            style={{ padding: 0 }}
            type='button'
          >
            <span className='oi oi-plus' />
          </button>

          <List
            docs={docs}
            columns={columns}
            onEdit={onEdit}
            doc={doc}
          />
        </div>

        {doc && (
          <div className='col-md-7'>
            <br />
            <PartnerForm
              doc={doc}
              onSave={onSave}
              onCancel={onCancel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Partners;
