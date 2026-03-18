import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';   

const NAV_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Plans', href: '#plans' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, toggleDark }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeHref, setActiveHref] = useState('#hero');

    /* Shrink nav on scroll */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Close mobile menu on desktop resize */
    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleNav = (href) => { setActiveHref(href); setMenuOpen(false); };

    /* ── styles ── */
    const S = {
        nav: {
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            background: 'rgba(8,8,8,0.97)',
            backdropFilter: 'blur(14px)',
            borderBottom: '1px solid rgba(201,146,10,0.12)',
            padding: scrolled ? '12px 0' : '18px 0',
            transition: 'padding 0.3s ease',
        },
        inner: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },

        /* ── Logo wrapper ── */
        logoWrap: {
            display: 'flex', alignItems: 'center', gap: 10,
            textDecoration: 'none',
        },

        /* ── Logo image container ── */
        logoImgBox: {
            width: 42,
            height: 42,
            borderRadius: 8,
            overflow: 'hidden',
            flexShrink: 0,
            border: '1.5px solid rgba(201,146,10,0.35)',
            /* subtle gold glow on the image container */
            boxShadow: '0 0 12px rgba(201,146,10,0.15)',
            transition: 'box-shadow 0.2s, border-color 0.2s',
        },

        /* ── Logo image itself ── */
        logoImg: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',   /* crops neatly if the jpg isn't square */
            display: 'block',
        },

        /* ── Brand name text ── */
        logoText: {
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 21,
            color: '#F2EFE6', letterSpacing: 1.5, textTransform: 'uppercase',
        },

        ul: { display: 'flex', gap: 34, listStyle: 'none', alignItems: 'center' },
        right: { display: 'flex', alignItems: 'center', gap: 12 },
        darkBtn: {
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(201,146,10,0.1)', border: '1px solid rgba(201,146,10,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 15, cursor: 'pointer', transition: 'background 0.2s',
        },
        cta: {
            background: '#C9920A', color: '#080808',
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13,
            letterSpacing: 1.5, textTransform: 'uppercase',
            padding: '9px 22px', borderRadius: 5, display: 'inline-block',
            transition: 'transform 0.2s, box-shadow 0.2s',
        },
        hamburger: {
            display: 'none', flexDirection: 'column', gap: 5,
            width: 36, height: 36, alignItems: 'center', justifyContent: 'center',
            background: 'rgba(201,146,10,0.1)', border: '1px solid rgba(201,146,10,0.2)',
            borderRadius: 5, cursor: 'pointer',
        },
        mobileMenu: {
            position: 'fixed', top: scrolled ? 67 : 79, left: 0, right: 0,
            background: 'rgba(8,8,8,0.98)', backdropFilter: 'blur(16px)',
            maxHeight: menuOpen ? '420px' : '0',
            overflow: 'hidden',
            transition: 'max-height 0.4s var(--ease)',
            borderBottom: '1px solid rgba(201,146,10,0.1)',
            zIndex: 999,
        },
    };

    return (
        <>
            <nav style={S.nav}>
                <div className="container" style={S.inner}>

                    {/* ── Logo ── */}
                    <a
                        href="#hero"
                        style={S.logoWrap}
                        onClick={() => handleNav('#hero')}
                        onMouseEnter={e => {
                            e.currentTarget.querySelector('.logo-img-box').style.boxShadow = '0 0 20px rgba(201,146,10,0.4)';
                            e.currentTarget.querySelector('.logo-img-box').style.borderColor = 'rgba(201,146,10,0.7)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.querySelector('.logo-img-box').style.boxShadow = '0 0 12px rgba(201,146,10,0.15)';
                            e.currentTarget.querySelector('.logo-img-box').style.borderColor = 'rgba(201,146,10,0.35)';
                        }}
                    >
                        {/* Logo image */}
                        <div className="logo-img-box" style={S.logoImgBox}>
                            <img
                                src={logo}
                                alt="FitZone logo"
                                style={S.logoImg}
                            />
                        </div>

                        {/* Brand name */}
                        <span style={S.logoText}>Fitness</span>
                    </a>

                    {/* ── Desktop links ── */}
                    <ul style={S.ul} className="nav-desktop-links">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={() => handleNav(href)}
                                    style={{
                                        fontSize: 13, fontWeight: 500, letterSpacing: 0.3,
                                        color: activeHref === href ? '#C9920A' : 'rgba(242,239,230,0.72)',
                                        transition: 'color 0.2s',
                                    }}
                                    onMouseEnter={e => e.target.style.color = '#C9920A'}
                                    onMouseLeave={e => e.target.style.color = activeHref === href ? '#C9920A' : 'rgba(242,239,230,0.72)'}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* ── Right controls ── */}
                    <div style={S.right}>
                        {/* Dark mode toggle */}
                        <button
                            onClick={toggleDark}
                            title={darkMode ? 'Light Mode' : 'Dark Mode'}
                            style={S.darkBtn}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,146,10,0.22)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(201,146,10,0.1)'}
                        >
                            {darkMode ? '☀️' : '🌙'}
                        </button>

                        {/* Join CTA — hidden on mobile */}
                        <a
                            href="#contact"
                            className="nav-cta-btn"
                            style={S.cta}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,146,10,0.4)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = '';
                                e.currentTarget.style.boxShadow = '';
                            }}
                        >
                            Join Now
                        </a>

                        {/* Hamburger — shown on mobile */}
                        <button
                            className="nav-hamburger"
                            onClick={() => setMenuOpen(o => !o)}
                            aria-label="Toggle menu"
                            style={S.hamburger}
                        >
                            <span style={{ width: 18, height: 2, background: '#F2EFE6', borderRadius: 2, display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : '' }} />
                            <span style={{ width: 18, height: 2, background: '#F2EFE6', borderRadius: 2, display: 'block', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
                            <span style={{ width: 18, height: 2, background: '#F2EFE6', borderRadius: 2, display: 'block', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : '' }} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* ── Mobile menu ── */}
            <div style={S.mobileMenu}>
                {NAV_LINKS.map(({ label, href }) => (
                    <a
                        key={href} href={href}
                        onClick={() => handleNav(href)}
                        style={{
                            display: 'block', padding: '13px 28px',
                            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22,
                            textTransform: 'uppercase', letterSpacing: 1,
                            color: activeHref === href ? '#C9920A' : 'rgba(242,239,230,0.8)',
                            transition: 'color 0.2s',
                        }}
                    >
                        {label}
                    </a>
                ))}
                <div style={{ padding: '14px 28px 24px' }}>
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        style={{
                            display: 'inline-block', background: '#C9920A', color: '#080808',
                            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18,
                            textTransform: 'uppercase', letterSpacing: 1.5, padding: '12px 32px', borderRadius: 5,
                        }}
                    >
                        Join Now
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .nav-desktop-links { display: none !important; }
                    .nav-cta-btn       { display: none !important; }
                    .nav-hamburger     { display: flex !important; }
                }
            `}</style>
        </>
    );
}