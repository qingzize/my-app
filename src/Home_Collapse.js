import store from './store';
import React, {Component, Fragment} from 'react';
import axios from 'axios';
import Collapse_Fragment from './Collapse_Fragment'
import './home_collapse.css'
import AddItem from './AddItem';
class Home_Collapse extends Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            storage : {},
            bedroom : {},
            living : {},
            other : {},
            dining : {},
            choices : {
                storage : true,
                bedroom: false,
                living: false,
                other: false,
                dining: false
            }
        }
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render(){
        const style = {
            collapsed: {
                display: "none"
            },
            expanded: {
                display: "block"
            }
        }
        const arr = ['storage', 'bedroom', 'living', 'other', 'dining'];
        return (
            <Fragment>
                <div className="additem">
                    <AddItem/>
                </div>
                <div className="allTypes">
                    {arr.map(key=>{
                        return (
                            <div key={key}>
                                <div className="typeLine"></div>
                                <div className='typeTitle'>
                                    <span>{key}</span>
                                    <button onClick={this.handleClickChange.bind(this, key)} className="showButton"></button>
                                </div>
                                <div style={this.state.choices[key]?style.expanded:style.collapsed}>
                                    <Collapse_Fragment type_name={key}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Fragment>
        )
    }

    handleStoreChange(){
        if(this._isMounted){
            this.setState(store.getState());
        }
    }
    
    handleClickChange(key){
        const cho = {
            storage : false,
            bedroom: false,
            living: false,
            other: false,
            dining: false
        }
        cho[key] = !this.state.choices[key];
        const action = {
            type: 'changeChoice',
            value: cho
        }
        store.dispatch(action)
    }

    componentDidMount(){
        this._isMounted = true;
        axios.defaults.baseURL = '/api';
        axios.get("").then((res)=>{
            const data = res.data.story.content;
            const action = {
                type: 'initDataAction',
                data: data
            }
            store.dispatch(action)
        })
    }
    componentWillUnmount(){
        this._isMounted = false;
    }
}
export default Home_Collapse;