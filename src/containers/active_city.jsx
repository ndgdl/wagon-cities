import React, { Component } from 'react';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  render() {
    const { selectedCity } = this.props;

    if (!selectedCity) {
      return null;
    } else {
      return (
        <div className="active-city" >
          <h3>{selectedCity.name}</h3>
          <p>{selectedCity.address}</p>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${selectedCity.slug}`} alt="paris" />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
