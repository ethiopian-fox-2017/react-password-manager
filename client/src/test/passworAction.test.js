import React from 'react';
import { shallow } from 'enzyme';
import {fetchPassword,addPassword,deletePassword,searchPassword,editPassword } from '../actions'

describe('actions tets',()=>{
  it('addPassword action',()=>{
    const paswd = {username:'lala',password:'lalala'};
    const expected = {
      type:'ADD_PASSWORD',
      payload:paswd
    }
    expect(addPassword(paswd)).toEqual(expected);
  });
  it('deletePassword action',()=>{
    const paswd = {username:'lala',password:'lalala'};
    const expected = {
      type:'DELETE_PASSWORD',
      payload:paswd
    }
    expect(deletePassword(paswd)).toEqual(expected);
  });
  it('editPassword action',()=>{
    const paswd = {username:'lala',password:'lalala'};
    const expected = {
      type:'EDIT_PASSWORD',
      payload:paswd
    }
    expect(editPassword(paswd)).toEqual(expected);
  });
  it('searchPassword action',()=>{
    const paswd = {username:'lala',password:'lalala'};
    const expected = {
      type:'SEARCH_PASSWORD',
      payload:paswd
    }
    expect(searchPassword(paswd)).toEqual(expected);
  });

})
