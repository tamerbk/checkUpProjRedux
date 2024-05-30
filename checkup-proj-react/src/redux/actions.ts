
import { Ambulance } from "../components/types";
import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const FETCH_AMBULANCES_REQUEST = 'FETCH_AMBULANCES_REQUEST';
export const FETCH_AMBULANCES_SUCCESS = 'FETCH_AMBULANCES_SUCCESS';
export const FETCH_AMBULANCES_FAILURE = 'FETCH_AMBULANCES_FAILURE';

export interface AmbulanceAction {
  type: string;
  payload?: any;
}

export const fetchAmbulancesRequest = (): AmbulanceAction => ({
  type: FETCH_AMBULANCES_REQUEST,
});

export const fetchAmbulancesSuccess = (ambulances: Ambulance[]): AmbulanceAction => ({
  type: FETCH_AMBULANCES_SUCCESS,
  payload: ambulances,
});

export const fetchAmbulancesFailure = (error: any): AmbulanceAction => ({
  type: FETCH_AMBULANCES_FAILURE,
  payload: error,
});

export const fetchAmbulances = () => {
    return async (dispatch: (arg0: AmbulanceAction) => void) => {
      dispatch(fetchAmbulancesRequest());
      try {
        const response = await axios.get('http://localhost:3000/ambulance');
        dispatch(fetchAmbulancesSuccess(response.data));
      } catch (error) {
        dispatch(fetchAmbulancesFailure(error));
      }
    };
  };