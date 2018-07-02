import React from  'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'


ReactDOM.render(
    <Family lastName ='Monteiro'>
        <Member name ='Marcos' />
        <Member name ='Rafael' />
        <Member name ='Malu' />
        
    </Family>
    , document.getElementById('app'))


