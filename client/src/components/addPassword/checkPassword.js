import React from 'react';


import { Grid,Checkbox} from 'semantic-ui-react';


const CheckPassword = (props) => (
  <div>
              <p>Password Strength</p>
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column size={6}>
          <Checkbox disabled checked={/[A-Z]/.test(props.password) ? true :false } label='Password harus mengandung huruf besar' />
        </Grid.Column>
        <Grid.Column size={6}>
          <Checkbox disabled checked={/[0-9]/.test(props.password) ? true :false } label='Password harus mengandung angka' />
        </Grid.Column>
     </Grid.Row>
     <Grid.Row>
       <Grid.Column size={6}>
         <Checkbox disabled checked={/[a-z]/.test(props.password) ? true :false } label='Password harus mengandung huruf kecil' />
       </Grid.Column>
       <Grid.Column size={6}>
          <Checkbox disabled checked={/.{5,}/.test(props.password) ? true :false } label='Password harus minimal 5 carakter' />
       </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column size={6}>
        <Checkbox disabled checked={/[\W]/.test(props.password) ? true :false } label='Password harus mengandung special karakter' />
     </Grid.Column>
   </Grid.Row>
  </Grid>
  </div>
)

export default CheckPassword
