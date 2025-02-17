import React from 'react';
import PropTypes from 'prop-types';

const stringMessage = 'FirstApp';
const booleanMessage = true;
const arrayMessage = [ 1,2,3,4,5,6,7,8,9 ];
const objectMessage = { titulo: stringMessage};
const getMessage = () => "Function";

const FirstApp = ( { title, subtitle, number, isActive, isNotActive } ) => {
  return (
    <>
        <h1>string: { stringMessage }</h1>
        <h1>boolean: { booleanMessage }</h1>
        <h1>array: { arrayMessage }</h1>
        <h1>object: { objectMessage.titulo }</h1>
        <h1>
          object json: 
          <code>{ JSON.stringify(objectMessage) }</code>
        </h1>
        {/*
          Estos comentarios no salen en los Elements
        */}
        <h1>function: { getMessage() }</h1>
        <h1> isActive: { JSON.stringify( isActive )}</h1>
        <h1> isNotActive: { JSON.stringify( isNotActive )}</h1>
        <p>{ subtitle }</p>
        <p>{ number }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  number: PropTypes.number,
  isActive: PropTypes.bool,
  isNotActive: PropTypes.bool,
  ignored: PropTypes.string,
}
export default FirstApp;