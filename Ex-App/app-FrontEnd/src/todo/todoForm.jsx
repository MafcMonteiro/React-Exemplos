import React, {Component} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import Grid from '../template/grid'
import IconeButton from '../template/iconButton'
import {changeDescription, search} from './todoActions'


class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){
        if (e.key === 'Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape'){
            this.props.handleClear()
        }
    }

    render() {
        return (
            <div role ='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className ='form-control'
                     placeholder='Adicione uma tarefa'
                     onChange={this.props.changeDescription}
                     onKeyUp={this.keyHandler}
                     value={this.props.description}></input>
                </Grid>  
        
                <Grid cols='12 3 2'>
                    <IconeButton style ='primary' icon='plus' onClick={this.UNSAFE_componentWillMountprops.handleAdd}></IconeButton>          
                    <IconeButton style ='info' icon='search' onClick={this.props.handleSearch}></IconeButton>          
                    <IconeButton style ='default' icon='close' onClick={this.props.handleClear}></IconeButton>         
                </Grid>          
            </div>
        )    
    }
}


const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchProps = dispatch => bindActionCreators({changeDescription, search},dispatch)

export default connect(mapStateToProps, mapDispatchProps)(TodoForm)