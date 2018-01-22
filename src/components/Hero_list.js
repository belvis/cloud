import React, {Component} from 'react';
import axios from 'axios';
import Btn from './Button'
class HeroList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        herolist: []
      }
    }

    componentDidMount(){
        axios.get('http://localhost:3005/api/heroes')
        .then(res=>{
            this.setState({
                herolist: res.data
            });
        })
    }

    render(){

        

        var list = this.props.list.length<1? this.state.herolist.map(val=>(
            <h1>{val.name}</h1>
        )):this.props.list.map(val=>(
            <div>
                <h1>{val.name}</h1>
                <Btn id={val.id}/>
            </div>
        ))
    return(
        <div>
            {list}
        </div>
    );
}
}
export default HeroList;