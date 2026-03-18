import logo from '../assets/logo.jpg';   

const LINKS = {
    Explore: ['About Us', 'Our Trainers', 'Services', 'Membership Plans', 'Schedule'],
    Support: ['FAQ', 'Contact Us', 'Terms of Service', 'Privacy Policy', 'Careers'],
};

export default function Footer() {
    return (
        <footer style={{
            background: '#2A2516', color: '#F2EFE6',
            padding: '56px 0 0',
            borderTop: '1px solid rgba(201,146,10,0.1)',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,180px), 1fr))',
                    gap: 36, marginBottom: 52,
                }}>

                    {/* ── Brand ── */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>

                            {/* Logo image — replaces the old gold "FZ" box */}
                            <div style={{
                                width: 40,
                                height: 40,
                                borderRadius: 8,
                                overflow: 'hidden',
                                flexShrink: 0,
                                border: '1.5px solid rgba(201,146,10,0.35)',
                                boxShadow: '0 0 12px rgba(201,146,10,0.15)',
                            }}>
                                <img
                                    src={logo}
                                    alt="FitZone logo"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />
                            </div>

                            {/* Brand name */}
                            <span style={{
                                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19,
                                letterSpacing: 1.5, textTransform: 'uppercase', color: '#F2EFE6',
                            }}>Fitness</span>
                        </div>

                        <p style={{
                            color: 'rgba(242,239,230,0.35)', fontSize: 13, lineHeight: 1.7,
                            maxWidth: 220, marginBottom: 20,
                        }}>
                            Forging exceptional athletes and everyday heroes since 2023.
                            Your transformation starts here.
                        </p>

                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 7,
                            background: 'rgba(201,146,10,0.12)',
                            border: '1px solid rgba(201,146,10,0.28)',
                            color: '#C9920A', padding: '7px 14px', borderRadius: 100,
                            fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase',
                        }}>
                            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C9920A' }} />
                            Open 24/7 for Members
                        </div>
                    </div>

                    {/* ── Link columns ── */}
                    {Object.entries(LINKS).map(([section, links]) => (
                        <div key={section}>
                            <div style={{
                                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13,
                                textTransform: 'uppercase', letterSpacing: 2, color: '#C9920A', marginBottom: 18,
                            }}>{section}</div>
                            <ul style={{ listStyle: 'none' }}>
                                {links.map(link => (
                                    <li key={link} style={{ marginBottom: 11 }}>
                                        <a
                                            href="#"
                                            style={{ color: 'rgba(242,239,230,0.38)', fontSize: 13, transition: 'color 0.2s' }}
                                            onMouseEnter={e => e.target.style.color = '#F2EFE6'}
                                            onMouseLeave={e => e.target.style.color = 'rgba(242,239,230,0.38)'}
                                        >{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* ── Newsletter ── */}
                    <div>
                        <div style={{
                            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13,
                            textTransform: 'uppercase', letterSpacing: 2, color: '#C9920A', marginBottom: 18,
                        }}>Newsletter</div>
                        <p style={{ color: 'rgba(242,239,230,0.35)', fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
                            Get fitness tips, class schedules, and member-only offers.
                        </p>
                        <div style={{ display: 'flex' }}>
                            <input
                                type="email" placeholder="your@email.com"
                                style={{
                                    flex: 1, padding: '10px 14px',
                                    background: 'rgba(201,146,10,0.05)',
                                    border: '1px solid rgba(201,146,10,0.14)',
                                    borderRight: 'none', borderRadius: '6px 0 0 6px',
                                    color: '#F2EFE6', fontSize: 13, outline: 'none',
                                    fontFamily: 'var(--font-body)',
                                }}
                            />
                            <button style={{
                                background: '#C9920A', color: '#080808', border: 'none',
                                padding: '10px 16px', borderRadius: '0 6px 6px 0',
                                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, cursor: 'pointer',
                            }}>→</button>
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div style={{
                    borderTop: '1px solid rgba(201,146,10,0.08)', padding: '22px 0',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    flexWrap: 'wrap', gap: 10,
                }}>
                    <span style={{ color: 'rgba(242,239,230,0.2)', fontSize: 12 }}>
                        © 2026 Fitness Gym. All rights reserved.
                    </span>
                    <span style={{ color: 'rgba(242,239,230,0.2)', fontSize: 12 }}>
                        Built by Madurangi Jayathissa
                    </span>
                </div>
            </div>
        </footer>
    );
}