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
import autoSelect from './components/auto-select';
import inlineScroll from './components/inline-scroll';

// Pages
import lk from './pages/lk';
import about from './pages/about';
import diagnostic from './pages/diagnostic';
import appointment from './pages/appointment';

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
    autoSelect();
    inlineScroll();

    lk();
    about();
    diagnostic();
    appointment();
})
