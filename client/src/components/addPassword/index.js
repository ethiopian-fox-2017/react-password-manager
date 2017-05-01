import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Label, Form, Container, Segment} from 'semantic-ui-react';
import {Redirect} from 'react-router-dom';
import {addPassword} from '../../actions'
import CheckPassword from './checkPassword'

const style = {
    addPassword: {
        position: 'relative',
        top: 20
    }
}

export class AddPassword extends Component {
    constructor() {
        super()
        this.state = {
            password: {
                url: '',
                username: '',
                password: '',
                createdAt: '',
                updatedAt: ''
            },
            submited:false,
        }
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange = (e) => {
        let password = this.state.password
        password[e.name] = e.value;
        this.setState({password: password})
    }
    submit(e, newpassword) {
        let date = new Date();
        date = date.toString()
        let newsubmit = {
            ...newpassword,
            createdAt: date
        }
        e.preventDefault();
        this.props.addPassword(newsubmit);
        this.setState({submited: true})
    }
    componentDidMount() {
        this.setState({submited: false})
    }
    validation(password) {}
    render() {
        if (this.state.submited) {
            return (<Redirect to={{
                pathname: '/'
            }}/>)
        }
        return (
            <div style={style.addPassword}>
                <Container text>
                    <Segment padded>
                        <Label size='big' attached='top'>Add Password</Label>
                        <Form>
                            <Form.Field>
                                <label>URL
                                </label>
                                <input name='url' placeholder='URL' onChange={(e) => this.handleChange(e.target)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>
                                    User Name
                                </label>
                                <input name='username' value={this.state.password.username} placeholder='username' onChange={(e) => this.handleChange(e.target)}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Password
                                </label>
                                <input name='password' placeholder='password' value={this.state.password.password} onChange={(e) => this.handleChange(e.target)}/>
                            </Form.Field>
                            <Button type='submit' onClick={(e) => this.submit(e, this.state.password)}>Submit</Button>
                            <Form.Field>
                                <CheckPassword password={this.state.password.password}/>
                            </Form.Field>
                        </Form>
                    </Segment>
                </Container>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addPassword: (newpassword) => dispatch(addPassword(newpassword))
})
export default connect(null, mapDispatchToProps)(AddPassword)
