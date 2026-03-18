import {
    Dumbbell,
    FlaskConical,
    Users,
    BarChart3,
} from 'lucide-react';

const PILLARS = [
    {
        icon: Dumbbell,
        title: 'Elite Equipment',
        desc: 'Over 300 premium machines and free weights sourced from leading brands.',
    },
    {
        icon: FlaskConical,
        title: 'Science-Based',
        desc: 'Evidence-backed training programs tailored to your body and goals.',
    },
    {
        icon: Users,
        title: 'Community',
        desc: 'A tribe of motivated individuals who lift each other up every day.',
    },
    {
        icon: BarChart3,
        title: 'Measurable Results',
        desc: 'Monthly assessments to track your progress and adjust your plan.',
    },
];

const BARS = [
    { label: 'Member Satisfaction', pct: 97 },
    { label: 'Goal Achievement Rate', pct: 89 },
    { label: 'Trainer Certification', pct: 100 },
];

export default function About() {
    return (
        <section
            id="about"
            style={{ background: 'var(--bg)', padding: 'var(--section-gap) 0', overflow: 'hidden' }}
        >
            <div className="container">

                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <span style={{ width: 40, height: 2, background: '#C9920A', display: 'block' }} />
                    <span style={{
                        fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
                        color: '#C9920A', fontWeight: 600,
                    }}>
                        Our Story
                    </span>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                    gap: 'clamp(40px,6vw,80px)',
                    alignItems: 'center',
                }}>

                    {/* ── Left column ── */}
                    <div>
                        <h2 style={{
                            fontFamily: 'var(--font-display)', fontWeight: 900,
                            fontSize: 'clamp(48px,7vw,88px)', textTransform: 'uppercase',
                            lineHeight: 0.9, letterSpacing: -2, color: 'var(--text)', marginBottom: 26,
                        }}>
                            MORE THAN<br />
                            <span style={{
                                WebkitTextStroke: '2px var(--text)',
                                WebkitTextFillColor: 'transparent',
                            }}>A GYM</span>
                        </h2>

                        <p style={{
                            fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8,
                            maxWidth: 430, marginBottom: 18,
                        }}>
                            Founded in 2023, FitZone was born from a simple belief: that world class fitness
                            should be accessible to everyone. We've spent 5 years building a space where
                            beginners and elite athletes share the same floor.
                        </p>
                        <p style={{
                            fontSize: 15, color: 'var(--text-2)', lineHeight: 1.8,
                            maxWidth: 430, marginBottom: 38,
                        }}>
                            Our 25,000 sq ft flagship facility is equipped with the latest technology, staffed
                            by certified experts, and designed to make every workout your best one.
                        </p>

                        {/* Progress bars */}
                        {BARS.map(({ label, pct }) => (
                            <div key={label} style={{ marginBottom: 18 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                                    <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)' }}>
                                        {label}
                                    </span>
                                    <span style={{
                                        fontFamily: 'var(--font-display)', fontWeight: 700,
                                        fontSize: 16, color: '#C9920A',
                                    }}>
                                        {pct}%
                                    </span>
                                </div>
                                <div style={{
                                    height: 4, background: 'var(--bg-3)',
                                    borderRadius: 2, overflow: 'hidden',
                                }}>
                                    <div style={{
                                        height: '100%', width: `${pct}%`, borderRadius: 2,
                                        background: 'linear-gradient(90deg, #C9920A, #E5A80C)',
                                    }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Right column ── */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            background: '#080808', borderRadius: 18,
                            padding: 'clamp(28px,4vw,50px)',
                            position: 'relative', overflow: 'hidden',
                            border: '1px solid rgba(201,146,10,0.1)',
                        }}>
                            {/* Glow */}
                            <div style={{
                                position: 'absolute', top: -40, right: -40,
                                width: 220, height: 220, borderRadius: '50%',
                                background: 'radial-gradient(circle,rgba(201,146,10,0.1) 0%,transparent 70%)',
                                pointerEvents: 'none',
                            }} />

                            {/* Big number */}
                            <div style={{
                                fontFamily: 'var(--font-display)', fontWeight: 900,
                                fontSize: 'clamp(56px,8vw,96px)', color: '#C9920A',
                                lineHeight: 1, letterSpacing: -3, marginBottom: 6,
                            }}>5+</div>

                            <div style={{
                                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20,
                                textTransform: 'uppercase', color: '#F2EFE6',
                                letterSpacing: 1, marginBottom: 14,
                            }}>Years of Excellence</div>

                            <p style={{
                                color: 'rgba(242,239,230,0.45)', fontSize: 13,
                                lineHeight: 1.7, maxWidth: 290,
                            }}>
                                From a single studio to the city's premier fitness destination. Every rep,
                                every member, every milestone has brought us here.
                            </p>

                            {/* Pillars grid */}
                            <div style={{
                                display: 'grid', gridTemplateColumns: '1fr 1fr',
                                gap: 10, marginTop: 28,
                            }}>
                                {PILLARS.map(({ icon: Icon, title, desc }) => (
                                    <div
                                        key={title}
                                        style={{
                                            background: 'rgba(201,146,10,0.05)',
                                            border: '1px solid rgba(201,146,10,0.12)',
                                            borderRadius: 10, padding: 14,
                                        }}
                                    >
                                        {/* Lucide icon inside a gold-tinted circle */}
                                        <div style={{
                                            width: 34, height: 34, borderRadius: 8,
                                            background: 'rgba(201,146,10,0.12)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            marginBottom: 10,
                                        }}>
                                            <Icon size={17} color="#C9920A" strokeWidth={1.8} />
                                        </div>

                                        <div style={{
                                            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
                                            textTransform: 'uppercase', color: '#F2EFE6',
                                            letterSpacing: 0.5, marginBottom: 4,
                                        }}>{title}</div>

                                        <div style={{
                                            fontSize: 11,
                                            color: 'rgba(242,239,230,0.38)',
                                            lineHeight: 1.5,
                                        }}>{desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Floating badge */}
                        <div style={{
                            position: 'absolute', bottom: -18, left: -18,
                            background: '#C9920A', borderRadius: 12,
                            padding: '16px 20px', zIndex: 2,
                            boxShadow: '0 14px 44px rgba(201,146,10,0.35)',
                        }}>
                            <div style={{
                                fontFamily: 'var(--font-display)', fontWeight: 900,
                                fontSize: 28, color: '#080808', lineHeight: 1,
                            }}>1,000+</div>
                            <div style={{
                                fontSize: 10, fontWeight: 700,
                                color: 'rgba(8,8,8,0.6)',
                                textTransform: 'uppercase', letterSpacing: 1.5,
                            }}>Active Members</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}