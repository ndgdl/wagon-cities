import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from '../containers/city';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    const { cities } = this.props;

    return (
      <div className="cities">
        {cities.map((city) => {
          return <City key={city.slug} city={city} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
