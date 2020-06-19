import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidateProps = props => 
    <Text style={{ fontSize: 35 }}>
        {props.label || 'Opa'} 
        {props.year + 2000}
    </Text>

ValidateProps.defaultProps = {
    label: 'Ano: '
}

ValidateProps.propTypes = {
    year: PropTypes.number.isRequired
}

export default ValidateProps