// Components
import navMenu from './components/nav-menu';
import repairNav from './components/repair-nav';
import pageScroll from './components/page-scroll';
import anchorScroll from './components/anchor-scroll';
import forms from './components/forms';
import textarea from './components/textarea';
import wow from './components/wow';
import fancybox from './components/fancybox';
import select from './components/select';
import cookies from './components/cookies';
import sliders from './components/sliders';
import modals from './components/modals';

// Pages
import lk from './pages/lk';
import about from './pages/about';
import autoSelect from './pages/auto-select';

// DOM content load
document.addEventListener("DOMContentLoaded", () => {
    navMenu();
    repairNav();
    pageScroll();
    anchorScroll();
    forms();
    textarea();
    wow();
    fancybox();
    select();
    cookies();
    sliders();
    modals();

    lk();
    about();
    autoSelect();
})
