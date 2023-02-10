import React from 'react';
import './footer.styles.sass';
import paisagem from '../../assets/PAISAGEM2-1.jpg';

export default function Footer() {
    return (
        <div id="footer">
            <footer>
                <img src={paisagem} alt="" />
            </footer>
        </div>
    );
}
