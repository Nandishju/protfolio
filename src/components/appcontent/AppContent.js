import React from 'react';
import { About } from '../about';
import { Blogs } from '../blogs';
export const AppContent =(props)=>{
    return(<div>
        This is app content
        <section id="about">
            <About></About>
        </section>
        <section id="blogs">
            <Blogs></Blogs>
        </section>
    </div>)
}