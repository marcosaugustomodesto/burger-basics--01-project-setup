import React, {Component} from 'react';
import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger'
class BurguerBuilder extends Component {

    render(){
        return (
            <Auxilary>
                <Burger />
                <div>Builder Controls</div>
            </Auxilary>
        );
    }
}

export default BurguerBuilder;