
import { applyMiddleware, combineReducers, createStore } from 'redux';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

// Setup
const middleWare = [ thunk, createLogger ];

// actions
export function loadImages() {
	return (dispatch, currState) => {
		dispatch(fetchingImages());
	    fetch('http://localhost:3000/api/images').then((res) => {
	      if (res.status === 200)
	        return res.json();       
	    }).then((data) => {
	      dispatch(fetchedImages(data));    
	    });
	}
}

export const fetchingImages = () => ({  
  type: 'FETCHING_IMAGES',
});

export function fetchedImages(images) {
	return {
		type: 'FETCHED_IMAGES',
		payload: {
			images: images
		}
	};
}


// reducers
export const imageReducer = (state = {}, action) => {  
  switch (action.type) {
    case 'FETCHING_IMAGES':
      return {
      	isLoading: true,
      	data: {},
      };
    case 'FETCHED_IMAGES':
      return {
      	isLoading: false,
      	data: action.payload.images,
      };      
    default:
      return state;
  }
};

export const reducers = combineReducers({  
  images: imageReducer,
});

// store.js
export function configureStore(initialState = {}) {  
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleWare)
  )
  return store;
};

export const store = configureStore();
