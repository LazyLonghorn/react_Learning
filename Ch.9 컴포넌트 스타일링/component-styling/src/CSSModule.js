import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            Hello I'm <span className='something'>CSS Module</span>
        </div>
    );
};

export default CSSModule;