import React from 'react'
import './contact.css'
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact'
function Contact() {
    return (
        <div className='contact'>
            <Separator/>
            <label className='section-title'></label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch?Contact me on any of the platforms</p>
                    <SocialContact/>
                </div>
                <div className='download'>
                    <a download href={require('../../../assets/905983.pdf').default}>
                        <i class='fi-rr-cloud-download download-icon'></i>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
