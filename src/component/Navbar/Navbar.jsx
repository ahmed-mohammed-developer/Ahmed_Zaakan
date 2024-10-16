import { useEffect } from 'react';
import './Navbar.css'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    useEffect(() => {
        const mainNav = document.querySelector('#mainNav');
        if (mainNav) {
            new window.bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                rootMargin: '0px 0px -40%',
            });
        }
        const navbarToggler = document.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.forEach((responsiveNavItem) => {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });
    }, []);
    return (
        <nav className="navbar navbar-expand-md navbar-light fixed-top py-4" id="mainNav">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand py-0" href="#page-top">
                أحمد زعــــكان
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <FaBars className="fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav me-auto my-2 my-lg-0">
                        <li className="nav-item"><a className="nav-link margintop" href="#hero">الرئسية</a></li>
                        <li className="nav-item"><a className="nav-link" href="#Latestworks">أحدث الأعمال</a></li>
                        <li className="nav-item"><a className="nav-link" href="#Latestarticles">أحدث المقالات</a></li>
                        <li className="nav-item"><a className="nav-link" href="#Mybooks">المؤلفات</a></li>
                        <li className="nav-item"><a className="nav-link" href="https://ahmed-mohammed-developer.github.io/qalipAhmedMahmmed/" target='_blank'>قالب</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
