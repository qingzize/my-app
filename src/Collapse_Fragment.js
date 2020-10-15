import store from './store';
import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './collapse_Fragment.css'
class Home_Collapse extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const type_name = this.props.type_name;
        const items = store.getState()[type_name];
        return (
            <Fragment>
                <div className="produces_type">
                    {Object.keys(items).map((key)=>{
                        let constru = {
                            "id":key,
                            "type":type_name
                        }
                        constru = JSON.stringify(constru)
                        const arr = ["", "January", "Feberary", "March", "April", "May", "Jun", "July", "Auguest", "Setember", "October", "Novenber", "December"]
                        const tim = (items[key].date+'').split('-');
                        const d = `${arr[Number(tim[1])]} ${tim[0]}`
                        return (
                                <div key={key} className='produces'>
                                    <Link to={`/Detail/${constru}`}>
                                        <img src={items[key].image} className="imgs"/>
                                        {console.log(items[key].image)
                
                                        }
                                    </Link>
                                        <div className='simple_info'>
                                            <div className="ig_handle">{items[key].ig_handle}</div>
                                            <div className="item_date">{d}</div>
                                        </div>
                                </div>
                        )
                    })}
                </div>
            </Fragment>
        )
    }
}
export default Home_Collapse;