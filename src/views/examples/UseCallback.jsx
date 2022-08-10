import React, {useState, useCallback} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from '../examples/UseCallbackButtons'


const UseCallback = (props) => {
    
    const [count,setCount]=useState(0)
    
    const inc = useCallback(function(delta){
        setCount(curr=>curr+delta)
    },[setCount])
    
    

    


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <UseCallbackButtons inc={inc}/>
                    
    {
                    /* <buton onClick={()=>inc(6)} className="btn">+6</buton>
                    <buton onClick={()=>inc(12)} className="btn">+12</buton>
                    <buton onClick={()=>inc(18)} className="btn">+18</buton>
    */}
                </div>
            </div>
        </div>
    )
}

export default UseCallback
