import React from 'react'
import logo from '../../images/logo.png'
import CartWidget from './CartWidget';

const styles = {
    logoHeader: {
        marginRight: 10,
        borderRadius: 300,
        width: 90,
        height: 90
    },
};

const classnames = {
    header: 'text-gray-400 bg-gray-900 body-font',
    headerContainer: 'container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center',
    headerContainerLink: 'flex title-font font-medium items-center text-white mb-4 md:mb-0',
    headerContainerLinkSpan: 'ml-3 text-xl',
    headerContainerNav: 'md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center',
    headerContainerNavLink: 'mr-5 hover:text-white font-medium',
    headerContainerButtonBack: 'inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0',
};

function goHome() {
    document.location.href = "/";
}

const navbar = ({links}) => {
  return (
    <header className={classnames.header}>
        <div className={classnames.headerContainer}>
            <a className={classnames.headerContainerLink} href="/">
                <img src={logo} style={styles.logoHeader} alt="Logo"/> {/* we need to improve the quality of the logo, maybe convert it to svg*/}
                <span className={classnames.headerContainerLinkSpan}>Adopt a pet</span>
            </a>
            <nav className={classnames.headerContainerNav}>
                {links.map(link => <a key={link} className={classnames.headerContainerNavLink} href="/">{link}</a>)}
            </nav>
            <CartWidget />
            <button onClick={goHome} className={classnames.headerContainerButtonBack}>Back
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 28 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </button>
        </div>
    </header>
  );
}

export default navbar;