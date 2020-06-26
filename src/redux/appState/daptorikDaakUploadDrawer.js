const initialState = {
  visibility: false
};

const daptorikDaakUploadDrawerReducer = (
  state = initialState,
  {type, payload}
) => {
  switch (type) {
    case "DAPTORIK_DAAK_UPLOAD_DRAWER": {
      return {
        ...state,
        visibility: !state.visibility
      };
    }
    case "DAPTORIK_DAAK_UPLOAD_DRAWER_HIDE": {
      return {
        ...state,
        visibility: false
      };
    }
    case "DAPTORIK_DAAK_UPLOAD_DRAWER_OPEN": {
      return {
        ...state,
        visibility: true
      };
    }

    default:
      return {
        ...state
      };
  }
};

export default daptorikDaakUploadDrawerReducer;
