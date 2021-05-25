import React from "react";
import {Button} from "reactstrap";
import { connect } from 'react-redux';
import {countAC, thunkCreator} from "./reduxers/counter_reducer";



class Counter extends React.Component {

    constructor(props) {
        super(props);
    }

    addCount = (payload)=> {

        this.props.count(10)
        this.props.thunkCount(2)
    }

    render() {
        return(
            <div>
                <h1 style={{color:"darkolivegreen"}}>COUNTER-INCREMENT</h1>
                <h2 style={{color:"darkred",fontSize:50}}>{this.props.counter}</h2>
                <Button color={'success'} onClick={this.addCount}>Add Count</Button>
            </div>
        )
    }
}
const mapStateToProps=(state) =>{

    return {
        counter: state.count.counter
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        count:(counter)=>{
            dispatch(countAC(counter))
        },
        thunkCount:(payload)=>{
            dispatch(thunkCreator(payload))
        }
    }
}

const CounterContainer = connect(mapStateToProps,mapDispatchToProps) (Counter)

export default CounterContainer