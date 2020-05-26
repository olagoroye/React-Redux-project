// function
export default function (state = {teas: []}, action){
 
    switch (action.type){
      case 'LOAD_TEAS':
        return {teas: action.payload}
        // return action.teas

        case 'ADD_TEA':
           
            return {...state, tea: [...state.teas, action.tea]}
           
            // return state.teas.concat(action.payload)
    
            // return state.concat(action.tea)

            case 'ADD_REVIEW':
               return {...state, teas: state.teas.map(tea =>{
                   if(tea.id === action.payload.id){
                       return action.payload
                   }else {
                       return tea
                   }
               })}

             case 'DELETE_REVIEW':
                return {...state, teas: state.teas.map(tea =>{
                    if(tea.id === action.payload.id){
                        return action.payload
                    }else {
                        return tea
                    }
                })}
                
        default:
            return state
    }
   
}

