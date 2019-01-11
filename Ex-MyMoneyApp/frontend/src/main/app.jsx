import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import Footer from '../common/template/footer'
import Sidebar from '../common/template/sideBar'

import Routes from './routes'

export default props => (
    <div className='wrapper'>
        <Header />
        <Sidebar></Sidebar>
        <div className='content-wrapper'>            
            <Routes></Routes>
        </div>
        <Footer></Footer>
    </div>
)