import PasswordReducer from '../reducers/passwordReducer';
import SearchReducer from '../reducers/searchReducer';
import {fetchPassword,addPassword,deletePassword,searchPassword,editPassword } from '../actions'
import {filterPassword} from '../selector'
describe('actions tets',()=>{
  const initState = [
    {"id":1,"url":"http://lalala.com","username":"mantap","password":"mantap","createdAt":"lqlq","updatedAt":"lwle"},
    {"id":2,"url":"http://lalala.com","username":"santap","password":"mantap","createdAt":"","updatedAt":""}
  ];
  it('addPassword reducers',()=>{
    const newpassword={url:"http://lalala3.com",username:"mantap3",password:"mantap3"};
    let newstate=PasswordReducer(initState,addPassword(newpassword))
    expect(newstate.length).toEqual(3);
  });
  it('edit Password reducers',()=>{
    const newpassword={id:2,url:"http://lalala3.com",username:"mantap3",password:"mantap3"};
    let newstate=PasswordReducer(initState,editPassword(newpassword))
    expect(newstate[1].url).toEqual('http://lalala3.com');
  });
  it('deletes Password reducers',()=>{
    const id=1;
    let newstate=PasswordReducer(initState,deletePassword(1))
    expect(newstate.length).toEqual(1);
  });

  it('search Password reducers',()=>{
    const initSearch='';
    const id=1;
    let newstate=SearchReducer(initState,searchPassword('makan'))
    expect(newstate).toEqual('makan');
  });
 it ('selector test',()=>{
    let password = filterPassword(initState,'s');
    expect(password[0].username).toBe('santap')
 })

})
