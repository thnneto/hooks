import React,{useState} from 'react'

const initialState = {
    num: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initialState)

const Store = props => {
    
    const [state, setState] = useState(initialState)
    
    function updateState(key,value){
        setState({
            ...state,
            [key]: value
        })
    }

    return(
        <AppContext.Provider value={{
            num: state.num,
            text: state.text,
            setNum: n => updateState('num',n),
            setText: t => updateState('text',t),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store