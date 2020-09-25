import * as Actions from '../actions'

const initialState = {
  role: [],//guest
  data: {
    'displayName': 'John Doe',
    'photoURL': 'assets/images/avatars/Velazquez.jpg',
    'email': 'johndoe@withinpixels.com',
    shortcuts: [
      'calendar',
      'mail',
      'contacts',
      'todo'
    ]
  },

  editProfileDialog: {
    type: 'new',
    props: {
      open: false
    },
    data: null
  }
}

const user = function (state = initialState, action) {
  switch (action.type) {
    case Actions.SET_USER_DATA: {
      return {
        ...initialState,
        ...action.payload
      }
    }
    case Actions.REMOVE_USER_DATA: {
      return {
        ...initialState
      }
    }
    case Actions.USER_LOGGED_OUT: {
      return initialState
    }
    case Actions.USER_LANGUAGE_UPDATE: {
      initialState.languages = action.payload
      return initialState
    }
    case Actions.OPEN_EDIT_PROFILE_DIALOG: {

      return {
        ...state,
        editProfileDialog: {
          type: 'edit',
          props: {
            open: true
          },
          data: action.data

        }
      }
    }
    case Actions.CLOSE_EDIT_PROFILE_DIALOG: {

      return {
        ...state,
        editProfileDialog: {
          type: 'edit',
          props: {
            open: false
          },
          data: action.data
        }
      }
    }
    default: {
      return state
    }
  }
}

export default user
