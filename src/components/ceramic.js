import React, { Component, useState, useContext } from 'react';
import { globalContext } from '../context'

const aliases = require('../aliases.json')

export const CreateDoc = (content) => {
  
  const context = useContext(globalContext)
  const [doc, setDoc] = useState(null);

  const create =  async () => {
    console.log('here')
    console.log(aliases)
    content = {
      content: {created: (new Date).toISOString()},
      metadata: {
        schema: "ceramic://"+aliases.meta,
        controllers: [context.three_id],
        family: "testing"
      }
    }
    console.log(content)
    var doc = await context.ceramic.createDocument('tile', content)
    setDoc(doc)
    console.log(doc)
  }

  return (
    <>
    <button 
      className="btn btn-primary btn-pill text-info mr-2 mb-2" 
      type="button" 
      onClick={create}
    >
      create doc
    </button>
    </>
  );
}

export const QueryDoc = (did) => {

  const context = useContext(globalContext)
  const [doc, setDoc] = useState(null);
  const [docID, setDocID] = useState(null);

  const query = async () => {
    var doc = await context.ceramic.loadDocument(btoa(docID))
    setDoc(doc)
    console.log(doc)
  }

  const handleChange = (e) => { setDocID(e.target.value) }

  return (
    <>
    <input type="text" onChange={handleChange}></input>
    <button 
      className="btn btn-primary btn-pill text-info mr-2 mb-2" 
      type="button" 
      onClick={query}
    >
      query doc
    </button>
    </>
  );

}