import React, { Fragment, useState, useEffect } from 'react';
import _clone from 'lodash.clonedeep';
import _get from 'lodash.get';
import _set from 'lodash.set';
import classname from 'classname';
import {
  CheckboxField,
  List,
  NumberField,
  SelectField,
  TextField
} from 'tpz-crud';

import neideApi from '../neideApi';
import MultiSelectField from './MultiSelectField';

const CRUD = (props) => {
  const [docs, setDocs] = useState(undefined);
  const [doc, setDoc] = useState(undefined);
  const [columns, setColumns] = useState(props.listColumns);

  useEffect(() => {
    neideApi.get(props.resourceUri).then(setDocs);
  }, [props.resourceUri]);

  const onCancel = () => {
    setDoc(undefined);
    setColumns(props.listColumns);
  };

  const post = docToPost => neideApi.post(props.resourceUri, docToPost).then((postedDoc) => {
    const newDocs = _clone(docs);
    newDocs.push(postedDoc);
    setDocs(newDocs);
    onCancel();
  });

  const patch = (docToPatch, idx) => neideApi.patch(props.resourceUri, docToPatch)
    .then((patchedDoc) => {
      const newDocs = _clone(docs);
      newDocs[idx] = patchedDoc;
      setDocs(newDocs);
      onCancel();
    });

  const onSave = () => {
    console.log('---', doc);
    const idx = docs.findIndex(item => item._id === doc._id);
    return (idx === -1) ? post(doc) : patch(doc, idx);
  };

  const onEdit = (id) => {
    const docToEdit = docs.find(d => d._id === id);
    setDoc(_clone(docToEdit));
    setColumns(columns.filter(c => c.main));
  };

  const onNew = () => {
    setDoc(props.defaultDoc ? _clone(props.defaultDoc) : {});
    setColumns(columns.filter(c => c.main));
  };

  const onChange = (name, value) => {
    setDoc({ ..._set(doc, name, value) });
  };

  const renderField = editingDoc => (field) => {
    switch (field.component) {
      case 'NumberField':
        return (
          <NumberField
            id={field.id}
            key={field.id}
            label={field.label}
            name={field.name}
            onChange={onChange}
            value={_get(editingDoc, field.name, '')}
          />
        );

      case 'SelectField':
        return (
          <SelectField
            id={field.id}
            key={field.id}
            label={field.label}
            name={field.name}
            options={field.options}
            onChange={onChange}
            value={_get(editingDoc, field.name, '')}
          />
        );

      case 'MultiSelectField':
        return (
          <MultiSelectField
          key={field.id}
            label={field.label}
            name={field.name}
            options={field.options}
            onChange={onChange}
            value={_get(editingDoc, field.name, [])}
          />
        );

      case 'CheckboxField':
        return (
          <CheckboxField
            id={field.id}
            key={field.id}
            label={field.label}
            name={field.name}
            onChange={onChange}
            value={_get(editingDoc, field.name, false)}
          />
        );

      case 'TextField':
        return (
          <TextField
            id={field.id}
            key={field.id}
            label={field.label}
            name={field.name}
            onChange={onChange}
            value={_get(editingDoc, field.name, '')}
          />
        );

      default:
        return (
          <TextField
            id={field.id}
            key={field.id}
            label={field.label}
            name={field.name}
            onChange={onChange}
            value={_get(editingDoc, field.name, '')}
          />
        );
    }
  };

  return (
    <Fragment>

      <div className={classname({ 'col-md-3': !!doc, 'col-md-10': !doc })}>
        <h2>{props.label}</h2>
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

          {props.formFields.map(renderField(doc))}

          <br />
          <button type="button" className="btn btn-primary" onClick={onSave}>Salvar</button>&nbsp;
          <button type="button" className="btn btn-link" onClick={onCancel}>Cancelar</button>
        </div>
      )}
    </Fragment>
  );
};

export default CRUD;
