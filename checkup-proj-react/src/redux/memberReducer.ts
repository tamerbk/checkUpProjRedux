import { Member } from "../components/types";
  
const initialState: Member | null = null;

const memberReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

export default memberReducer;
