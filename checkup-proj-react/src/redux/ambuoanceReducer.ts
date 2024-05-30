
import {
    FETCH_AMBULANCES_REQUEST,
    FETCH_AMBULANCES_SUCCESS,
    FETCH_AMBULANCES_FAILURE,
  } from './actions'

  import { AmbulanceAction } from './actions';
  import { Ambulance } from '../components/types'; 
  
  interface AmbulanceState {
    ambulances: Ambulance[];
    loading: boolean;
    error: any;
  }
  
  const initialState: AmbulanceState = {
    ambulances: [],
    loading: false,
    error: null,
  };
  
  const ambulanceReducer = (state = initialState, action: AmbulanceAction): AmbulanceState => {
    switch (action.type) {
      case FETCH_AMBULANCES_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_AMBULANCES_SUCCESS:
        return {
          ...state,
          loading: false,
          ambulances: action.payload,
        };
      case FETCH_AMBULANCES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default ambulanceReducer;
  