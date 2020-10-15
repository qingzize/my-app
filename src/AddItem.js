import React, {Component} from 'react';
import store from './store';
class AddItem extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={
            date:'',
            type:'',
            ig_handle:'',
            image:'',
            content:''
        }
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <div className="addItem">
                        
                        <span>ig_handle:</span>
                        <input onChange={this.handleListener.bind(this, "ig_handle")} value={this.state.ig_handle} type='text' required/>
                        
                        <span>image:</span>
                        <input onChange={this.handleListener.bind(this, "image")} value={this.state.image} type="url" required/>
                        
                        <span>content:</span>
                        <input onChange={this.handleListener.bind(this, "content")} value={this.state.content} type="text" required/>
                    
                        <span>type:</span>
                        <select value={this.state.type} onChange={this.handleListener.bind(this, "type")}>
                            <option value=''>*</option>
                            <option value='storage'>storage</option>
                            <option value='living'>living</option>
                            <option value='dining'>dining</option>
                            <option value='bedroom'>bedroom</option>
                            <option value='other'>other</option>
                        </select>
                        <span>date:</span>
                        <input onChange={this.handleListener.bind(this, "date")} value={this.state.date} type='date' required/>

                        <button type="submit">submit</button>
                 </div>
            </form>
        </div>
        )
    }
    handleSubmit(event) {
        event.preventDefault();
        const action = {
            type:"addItem",
            value: this.state
        }
        this.setState({
            date:'',
            type:'',
            ig_handle:'',
            image:'',
            content:''
        })
        store.dispatch(action);
    }
    handleListener(type, e){
        const value = e.target.value;
        this.setState({
            [type]: value
        })
    }
}
export default AddItem;