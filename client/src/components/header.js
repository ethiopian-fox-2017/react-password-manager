import React,{ Component }from 'react'
import { Input, Grid } from 'semantic-ui-react';
import {connect} from 'react-redux';

import {fetchPassword} from '../actions';
import SearchBox from './searchBox';

const style = {
  header:{
    height:'70px',
    backgroundColor:'black',
    color:'white',
  },
};

class Header extends Component {
  componentDidMount(){
    this.props.fetchPassword();
  }
  render() {
    return(
      <div style={style.header}>
         <Grid padded >
           <Grid.Column textAlign='justified' width={4}>
              <h2>Password Manager</h2>
           </Grid.Column>
           <Grid.Column width={9}>
              <SearchBox/>
           </Grid.Column>
         </Grid>
         <h2>{this.props.searchKey}</h2>
      </div>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPassword:()=>dispatch(fetchPassword())
})


export default connect(null,mapDispatchToProps) (Header)
