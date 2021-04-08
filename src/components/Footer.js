import React, {useState} from 'react';
import Model from './Modal';

const Footer = () => {
    const [showModel, setShowModel] = useState(false);


    const toggle = () => {
        setShowModel(!showModel);
    }
    return (
        <>
        <footer className="footer">
            <div className="attribution">
            
            </div>
            <button className="rules"
                onClick = {toggle}
                >
                    RULES
                </button>
            {
                showModel ? <Model toggle={toggle}/> : null
            }
        </footer>
        </>
    )
}

export default Footer
