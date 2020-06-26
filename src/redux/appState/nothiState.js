const initialState = {
  visibility: false,
  nothiInboxListLastPage: 1,
  nothiOutboxListLastPage: 1,
  nothiAllListLastPage: 1,
  noteListDrawer: false,
  noteListType: "",
  notePendingCurrentPage: 1,
  notePermittedCurrentPage: 1,
  openNothiId: null,
  currentNothi: null,
  expandOnucched: false
};

const nothiState = (state = initialState, {type, payload}) => {
  switch (type) {
    case "NOTHI_INBOX_LIST_LAST_PAGE_NUMB":
      return {
        ...state,
        nothiInboxListLastPage: payload
      };
    case "NOTHI_OUTBOX_LIST_LAST_PAGE_NUMB":
      return {
        ...state,
        nothiOutboxListLastPage: payload
      };
    case "NOTHI_ALL_LIST_LAST_PAGE_NUMB":
      return {
        ...state,
        nothiAllListLastPage: payload
      };
      break;
    case "LEFT_PANEL_DRAG_END":
      return {
        ...state,
        visibility: payload > 20
      };
    case "OPEN_NOTE_LIST_DRAWER":
      return {
        ...state,
        noteListDrawer: true,
        noteListType: payload.type,
        openNothiId: payload.id
      };
    case "CLOSE_NOTE_LIST_DRAWER":
      return {
        ...state,
        noteListDrawer: false,
        openNothiId: null
      };
    case "NOTE_PENDING_CURRENT_PAGE":
      return {
        ...state,
        notePendingCurrentPage: payload
      };
    case "NOTE_PERMITTED_CURRENT_PAGE":
      return {
        ...state,
        notePermittedCurrentPage: payload
      };
    case "CURRENT_NOTHI":
      return {
        ...state,
        currentNothi: payload
      };
    case "EXPAND_ONUCCHED":
      return {
        ...state,
        expandOnucched: !state.expandOnucched
      };

    default:
      return {
        ...state
      };
  }
};

export default nothiState;
