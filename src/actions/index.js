// TODO: add and export your own actions
import cities from '../../data/cities';

export function setCities() {
  // TO DO API CALL
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function selectCity(city) {
  return {
    type: 'SELECT_CITY',
    payload: city
  };
}
