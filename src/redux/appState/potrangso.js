const initialState = {
  khoshraItem:"",
  khoshraContentData: "",
  khoshraContentType: "",
  notePotroItem:"",
  notePotroContentData: "",
  notePotroContentType: "",
  allPotroItem:"",
  allPotroContentData: "",
  allPotroContentType: "",
  nothijatoPotroItem:"",
  nothijatoPotroData: "",
  nothijatoPotroType: "",
  expandPotrangso: false,
  attachmentModalVisible: false
};

const potrangsoState = (state = initialState, {type, payload}) => {
  switch (type) {
    case "KHOSHRA_CONTENT":
      return {
        ...state,
        khoshraItem:payload.potro,
        khoshraContentData: payload.data,
        khoshraContentType: payload.contentType
      };
    case "NOTE_POTRO_CONTENT":
      return {
        ...state,
        notePotroItem:payload.potro,
        notePotroContentData: payload.data,
        notePotroContentType: payload.contentType
      };
    case "ALL_POTRO_CONTENT":
      return {
        ...state,
        allPotroItem:payload.potro,
        allPotroContentData: payload.data,
        allPotroContentType: payload.contentType
      };
    case "NOTHIJATO_POTRO_CONTENT":
      return {
        ...state,
        nothijatoPotroItem:payload.potro,
        nothijatoPotroData: payload.data,
        nothijatoPotroType: payload.contentType
      };
    case "EXPAND_POTRANGSO":
      return {
        ...state,
        expandPotrangso: !state.expandPotrangso
      };
    case "OPEN_ATTACHMENT_MODAL":
      return {
        ...state,
        attachmentModalVisible: true
      };
    case "COLSE_ATTACHMENT_MODAL":
      return {
        ...state,
        attachmentModalVisible: false
      };
    default:
      return {
        ...state
      };
  }
};

export default potrangsoState;
