import { useEffect, useRef } from 'react';

const STATS = [
    { value: '1,000+', label: 'Active Members' },
    { value: '28', label: 'Expert Trainers' },
    { value: '100+', label: 'Weekly Classes' },
    { value: '5yr', label: 'Established' },
];

const TICKER = [
    'Strength Training', 'HIIT Classes', 'Personal Coaching',
    'Yoga & Mindfulness', 'Nutrition Plans', 'Cardio Zone',
    'CrossFit', 'Pilates', 'Boxing', 'Recovery Lounge',
];

export default function Hero() {
    const bgRef = useRef(null);

    /* Subtle parallax on mouse move */
    useEffect(() => {
        const onMove = (e) => {
            if (!bgRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 18;
            const y = (e.clientY / window.innerHeight - 0.5) * 18;
            bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
        };
        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
    }, []);

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh', background: '#080808',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}
        >
            {/* Grid texture */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.035,
                backgroundImage: 'linear-gradient(#C9920A 1px,transparent 1px),linear-gradient(90deg,#C9920A 1px,transparent 1px)',
                backgroundSize: '55px 55px',
                pointerEvents: 'none',
            }} />

            {/* Gold radial glow — right */}
            <div style={{
                position: 'absolute', right: '-8%', top: '8%',
                width: 700, height: 700, borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(201,146,10,0.09) 0%,transparent 68%)',
                pointerEvents: 'none',
            }} />

            {/* Dark-brown glow — left bottom */}
            <div style={{
                position: 'absolute', left: '-10%', bottom: '-10%',
                width: 500, height: 500, borderRadius: '50%',
                background: 'radial-gradient(circle,rgba(42,37,22,0.9) 0%,transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Parallax dumbbell SVG */}
            <div ref={bgRef} style={{
                position: 'absolute', right: '3%', top: '10%',
                width: '42%', height: '78%', opacity: 0.1,
                transition: 'transform 0.1s ease-out', pointerEvents: 'none',
            }}>
                <svg viewBox="0 0 600 680" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <rect x="80" y="310" width="440" height="38" rx="19" fill="#C9920A" />
                    <rect x="80" y="310" width="58" height="154" rx="29" fill="#C9920A" />
                    <rect x="462" y="310" width="58" height="154" rx="29" fill="#C9920A" />
                    <rect x="22" y="290" width="78" height="78" rx="39" fill="#C9920A" opacity=".6" />
                    <rect x="500" y="290" width="78" height="78" rx="39" fill="#C9920A" opacity=".6" />
                    <circle cx="300" cy="195" r="98" stroke="#C9920A" strokeWidth="5" opacity=".4" />
                    <circle cx="300" cy="195" r="58" stroke="#C9920A" strokeWidth="3" opacity=".25" />
                    <line x1="200" y1="555" x2="400" y2="555" stroke="#C9920A" strokeWidth="4" opacity=".45" />
                    <line x1="160" y1="585" x2="440" y2="585" stroke="#C9920A" strokeWidth="2" opacity=".25" />
                </svg>
            </div>

            {/* ── Main content ── */}
            <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 130, paddingBottom: 56 }}>

                {/* Label */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    marginBottom: 28,
                    animation: 'fadeUp 0.6s ease both',
                }}>
                    <span style={{
                        width: 8, height: 8, borderRadius: '50%', background: '#C9920A',
                        animation: 'pulse-ring 1.5s ease-out infinite', flexShrink: 0,
                    }} />
                    <span style={{
                        fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
                        color: '#C9920A', fontWeight: 600,
                    }}>
                        Premium Fitness Sport Center — Est. 2023
                    </span>
                </div>

                {/* Headline */}
                <h1 style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900, lineHeight: 0.88,
                    textTransform: 'uppercase', color: '#F2EFE6',
                    fontSize: 'clamp(70px, 12vw, 152px)', letterSpacing: -3,
                    animation: 'fadeUp 0.7s ease 0.1s both', maxWidth: 720,
                }}>
                    FORGE<br />
                    <span style={{ color: '#C9920A' }}>YOUR</span><br />
                    <span style={{
                        WebkitTextStroke: '2px #F2EFE6',
                        WebkitTextFillColor: 'transparent',
                    }}>LIMITS</span>
                </h1>

                {/* Sub-heading */}
                <p style={{
                    color: 'rgba(242,239,230,0.52)', fontSize: 'clamp(15px,1.8vw,18px)',
                    maxWidth: 430, marginTop: 26, lineHeight: 1.75,
                    animation: 'fadeUp 0.7s ease 0.2s both',
                }}>
                    State of the art equipment, elite coaches, and a community that pushes you
                    beyond your limits. Your transformation starts today.
                </p>

                {/* CTA row */}
                <div style={{
                    display: 'flex', gap: 14, flexWrap: 'wrap',
                    marginTop: 36, alignItems: 'center',
                    animation: 'fadeUp 0.7s ease 0.3s both',
                }}>
                    <a
                        href="#plans"
                        style={{
                            background: '#C9920A', color: '#080808',
                            fontFamily: 'var(--font-display)', fontWeight: 900,
                            fontSize: 17, textTransform: 'uppercase', letterSpacing: 1.5,
                            padding: '15px 40px', borderRadius: 6, display: 'inline-block',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 16px 44px rgba(201,146,10,0.45)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = '';
                            e.currentTarget.style.boxShadow = '';
                        }}
                    >
                        Start Now →
                    </a>

                    <a
                        href="#about"
                        style={{
                            color: 'rgba(242,239,230,0.72)', fontSize: 15, fontWeight: 500,
                            display: 'inline-flex', alignItems: 'center', gap: 10,
                            padding: '15px 22px',
                            border: '1px solid rgba(242,239,230,0.18)', borderRadius: 6,
                            transition: 'border-color 0.2s, color 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.borderColor = 'rgba(201,146,10,0.5)';
                            e.currentTarget.style.color = '#C9920A';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'rgba(242,239,230,0.18)';
                            e.currentTarget.style.color = 'rgba(242,239,230,0.72)';
                        }}
                    >
                        <span style={{
                            width: 32, height: 32, borderRadius: '50%',
                            border: '1px solid rgba(242,239,230,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10,
                        }}>▶</span>
                        Watch Tour
                    </a>
                </div>

                {/* Stats */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                    gap: '16px 36px', marginTop: 64, maxWidth: 520,
                    animation: 'fadeUp 0.7s ease 0.4s both',
                }}>
                    {STATS.map(({ value, label }) => (
                        <div key={label}>
                            <div style={{
                                fontFamily: 'var(--font-display)', fontWeight: 900,
                                fontSize: 'clamp(30px, 4vw, 46px)',
                                color: '#F2EFE6', letterSpacing: -1, lineHeight: 1,
                            }}>
                                {value}
                            </div>
                            <div style={{
                                fontSize: 10, fontWeight: 600, letterSpacing: 1.5,
                                textTransform: 'uppercase', color: 'rgba(242,239,230,0.38)', marginTop: 4,
                            }}>
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Ticker ── */}
            <div style={{
                background: '#C9920A', overflow: 'hidden',
                padding: '13px 0', borderTop: '1px solid rgba(0,0,0,0.15)',
            }}>
                <div style={{
                    display: 'flex', width: 'max-content',
                    animation: 'ticker 30s linear infinite',
                }}>
                    {[...TICKER, ...TICKER].map((item, i) => (
                        <span
                            key={i}
                            style={{
                                fontFamily: 'var(--font-display)', fontWeight: 800,
                                fontSize: 14, textTransform: 'uppercase', letterSpacing: 2,
                                color: '#080808', padding: '0 28px', whiteSpace: 'nowrap',
                                display: 'inline-flex', alignItems: 'center', gap: 26,
                            }}
                        >
                            {item}
                            <span style={{
                                display: 'inline-block', width: 5, height: 5,
                                background: 'rgba(8,8,8,0.35)', borderRadius: '50%',
                            }} />
                        </span>
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0    rgba(201,146,10,0.7); }
          70%  { box-shadow: 0 0 0 10px rgba(201,146,10,0);   }
          100% { box-shadow: 0 0 0 0    rgba(201,146,10,0);   }
        }
        @keyframes ticker {
          0%   { transform: translateX(0);    }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0);    }
        }
      `}</style>
        </section>
    );
}