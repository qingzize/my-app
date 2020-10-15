import React, {Component, Fragment} from 'react';
import store from './store';

class Detail extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const obj = JSON.parse(this.props.match.params.id)
        return (
            <Fragment>
                <div><a href="#/">返回</a></div>
                <div>{
                    store.getState()[obj.type][obj.id].content
                }</div>
            </Fragment>
        )
    }

}
export default Detail;