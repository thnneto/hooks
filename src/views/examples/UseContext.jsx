import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle'
import {AppContext} from '../../data/Store'

const UseContext = (props) => {
    const context = useContext(DataContext)
    function setNumber(delta){
        context.setState({
            ...context.state,
            number:context.state.number + delta
        })
    }

    const {num, text, setNum, setText} = useContext(AppContext)

    useEffect(function(){
        if(num>1250){
            setText('Eita!')
        }
    },[num])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício #02"></SectionTitle>
            <div className="center">
                <span className="text">Contexto text: <span className="red">{context.state.text}</span></span>
                <span className="text">Contexto number: <span className="red">{context.state.number}</span></span>
                <div>
                    <button className="btn" onClick={() => setNumber(1)}>+1</button>
                    <button className="btn" onClick={() => setNumber(-1)}>-1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{num}</span>
                <button className="btn" onClick={() => setNum(num+1)}>+1</button>
                <button className="btn" onClick={() => setNum(num-1)}>-1</button>
            </div>
        </div>
    )
}

export default UseContext
