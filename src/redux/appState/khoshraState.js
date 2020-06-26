const initialState = {
   CurrentKhoshraNumber:1
  };
  
  const khoshraState = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'CURRENT_KHOSHRA_NUMBER':
            return{
                ...state,
                CurrentKhoshraNumber:payload
            }
      
      default:
        return {
          ...state
        };
    }
  };
  
  export default khoshraState;
  