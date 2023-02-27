import { ADD_FILTER, DELETE_FILTER, CLEAR_FILTER } from './filter-actions';

export const filterReducer = (state = [], { type, filter }) => {
   switch (type) {
      case ADD_FILTER: {
         return [...state, filter];
      }

      case DELETE_FILTER: {
         return state.filter(item => item !== filter);
      }

      case CLEAR_FILTER: {
         return [];
      }

      default:
         return state;
   }
};
