// Components
import navMenu from './components/nav-menu';
import repairNav from './components/repair-nav';
import pageScroll from './components/page-scroll';
import anchorScroll from './components/anchor-scroll';
import forms from './components/forms';
import textarea from './components/textarea';
import wow from './components/wow';
import select from './components/select';
import sliders from './components/sliders';

// Pages
import service from './pages/service';

// DOM content load
document.addEventListener("DOMContentLoaded", () => {
    navMenu();
    repairNav();
    pageScroll();
    anchorScroll();
    forms();
    textarea();
    wow();
    select();
    sliders();
    service();
})
