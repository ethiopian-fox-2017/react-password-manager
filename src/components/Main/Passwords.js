import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetchData } from '../../actions'

class Passwords extends React.Component {

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const { data } = this.props
    return (
      <tbody className="Passwords">
        { data.map(each =>
          <tr key={each.id}>
            <th>{each.id}</th>
            <td><a href={each.url} target="_blank">{each.url}</a></td>
            <td>{each.username}</td>
            <td>{each.password}</td>
            <td>{each.createdAt}</td>
            <td>{each.updatedAt}</td>
          </tr>
        ) }
      </tbody>
    )
  }
}

Passwords.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  data: state.data
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
})

export default connect(mapStateToProps, mapDispatchToProps)(Passwords)