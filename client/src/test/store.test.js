import store from '../store'
import {fetchPasswordDone,fetchPassword,addPassword,deletePassword,searchPassword,editPassword } from '../actions';

describe('store test',()=>{
  const initState = [
    {"id":1,"url":"http://lalala.com","username":"mantap","password":"mantap","createdAt":"lqlq","updatedAt":"lwle"},
    {"id":2,"url":"http://lalala.com","username":"santap","password":"mantap","createdAt":"","updatedAt":""}
  ];

  it('fetch data',()=>{
    const newpassword={url:"http://lalala3.com",username:"mantap3",password:"mantap3"};
    store.dispatch(fetchPasswordDone(initState));
    expect(store.getState().passwords.length).toEqual(2);
  })
  it('add data',()=>{
    const newpassword={url:"http://lalala3.com",username:"mantap3",password:"mantap3"};
    store.dispatch(addPassword(newpassword));
    expect(store.getState().passwords.length).toEqual(3);
    expect(store.getState().passwords[2].username).toEqual('mantap3');
  })
  it('edit data',()=>{
    const newpassword={id:2,url:"http://lalala3.com",username:"mantap3",password:"mantap3"};
    store.dispatch(editPassword(newpassword));
    expect(store.getState().passwords[1].username).toEqual('mantap3');
  })
  it('edit data',()=>{
    store.dispatch(deletePassword(3));
    expect(store.getState().passwords.length).toEqual(2);
  })
})
