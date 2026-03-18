import { useState } from 'react';
import { Award, ChevronUp, ChevronDown, Calendar } from 'lucide-react';

/* ── Import all trainer images ── */
import trainer1 from '../assets/trainers/trainer1.jpg';
import trainer2 from '../assets/trainers/trainer2.jpg';
import trainer3 from '../assets/trainers/trainer3.jpg';
import trainer4 from '../assets/trainers/trainer4.jpg';
import trainer5 from '../assets/trainers/trainer5.jpg';
import trainer6 from '../assets/trainers/trainer6.jpg';

const TRAINERS = [
    {
        id: 1, image: trainer1, name: 'Ravin Chamara',
        role: 'Head of Strength & Conditioning', cert: 'NSCA-CSCS, NASM-CPT', exp: '12 Years',
        spec: ['Powerlifting', 'Hypertrophy', 'Performance'],
        bio: 'Former NCAA athlete turned elite coach. Marcus has trained 3 national champions and specialises in evidence based strength programming for athletes at every level.',
        initials: 'MR', color: '#C9920A',
    },
    {
        id: 2, image: trainer2, name: 'Sathishka Prasade',
        role: 'Yoga & Mindfulness Director', cert: 'RYT-500, NASM', exp: '9 Years',
        spec: ['Vinyasa Yoga', 'Breath Work', 'Recovery'],
        bio: 'Certified Yoga Alliance instructor who trained in Mysore, India. Sofia blends ancient practice with modern biomechanics for transformative results.',
        initials: 'SC', color: '#8aad6e',
    },
    {
        id: 3, image: trainer3, name: 'Johan Kurupu',
        role: 'HIIT & Combat Specialist', cert: 'ACE-CPT, USA Boxing', exp: '8 Years',
        spec: ['HIIT', 'Boxing', 'Fat Loss'],
        bio: 'Professional boxer turned fitness educator. Darius brings championship level intensity to every session with a proven track record of client transformations.',
        initials: 'DO', color: '#d4845a',
    },
    {
        id: 4, image: trainer4, name: 'Danushka Shenal',
        role: 'Nutrition & Wellness Coach', cert: 'RD, CISSN, Pn2', exp: '11 Years',
        spec: ['Sports Nutrition', 'Weight Mgmt'],
        bio: 'Registered Dietitian and certified sports nutritionist. Elena creates sustainable eating strategies that fuel performance and real world life.',
        initials: 'EV', color: '#9b7ec8',
    },
    {
        id: 5, image: trainer5, name: 'Chamara Ranwaka',
        role: 'Functional Fitness Coach', cert: 'CrossFit L3, FMS', exp: '7 Years',
        spec: ['CrossFit', 'Olympic Lifting', 'Mobility'],
        bio: 'CrossFit Games competitor with a passion for making elite movement accessible. Works with athletes from weekend warriors to competition level.',
        initials: 'JT', color: '#5aad8a',
    },
    {
        id: 6, image: trainer6, name: 'Mohomade Risvan',
        role: 'Aqua & Rehab Specialist', cert: 'ATRI-AEA, NASM-CES', exp: '10 Years',
        spec: ['Aqua Fitness', 'Corrective', 'Post-Op'],
        bio: 'Physical therapy background meets creative fitness programming. Aisha specialises in making fitness possible for those with injuries or chronic conditions.',
        initials: 'AM', color: '#C9920A',
    },
];

export default function Trainers() {
    const [activeId, setActiveId] = useState(null);

    return (
        <section id="trainers" style={{ background: 'var(--bg)', padding: 'var(--section-gap) 0' }}>
            <div className="container">

                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <span style={{ width: 40, height: 2, background: '#C9920A', display: 'block' }} />
                    <span style={{
                        fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
                        color: '#C9920A', fontWeight: 600,
                    }}>Meet the Team</span>
                </div>

                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 48,
                }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontWeight: 900,
                        fontSize: 'clamp(44px,6vw,72px)', textTransform: 'uppercase',
                        lineHeight: 0.9, letterSpacing: -2, color: 'var(--text)',
                    }}>
                        ELITE<br /><span style={{ color: '#C9920A' }}>TRAINERS</span>
                    </h2>
                    <p style={{ color: 'var(--text-2)', fontSize: 14, maxWidth: 340, lineHeight: 1.7 }}>
                        Every coach is certified and passionate about your success.
                        Click any card to view their full profile.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,330px), 1fr))',
                    gap: 18,
                }}>
                    {TRAINERS.map(t => (
                        <TrainerCard
                            key={t.id}
                            trainer={t}
                            isOpen={activeId === t.id}
                            onToggle={() => setActiveId(activeId === t.id ? null : t.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── Trainer card ── */
function TrainerCard({ trainer: t, isOpen, onToggle }) {
    const [imgError, setImgError] = useState(false);

    return (
        <div
            onClick={onToggle}
            style={{
                background: 'var(--card-bg)',
                border: `1.5px solid ${isOpen ? t.color : 'var(--card-border)'}`,
                borderRadius: 14, overflow: 'hidden',
                transition: 'all 0.3s ease', cursor: 'pointer',
                boxShadow: isOpen
                    ? `0 20px 60px ${t.color}22`
                    : '0 2px 12px rgba(0,0,0,0.04)',
            }}
        >
            {/* ── Card header ── */}
            <div style={{ padding: '26px 26px 0', display: 'flex', gap: 18, alignItems: 'flex-start' }}>

                {/* Avatar — image with initials fallback */}
                <div style={{
                    width: 72,
                    height: 72,
                    borderRadius: 12,
                    flexShrink: 0,
                    overflow: 'hidden',
                    border: `2px solid ${t.color}55`,
                    boxShadow: isOpen ? `0 0 0 3px ${t.color}22` : 'none',
                    transition: 'box-shadow 0.3s',
                    position: 'relative',
                    background: `${t.color}1a`,       /* shown while image loads */
                }}>
                    {!imgError ? (
                        <img
                            src={t.image}
                            alt={t.name}
                            onError={() => setImgError(true)}  /* fallback if file missing */
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',     /* crop to fill the square */
                                objectPosition: 'top',  /* keep face visible */
                                display: 'block',
                            }}
                        />
                    ) : (
                        /* Initials fallback shown if image fails to load */
                        <div style={{
                            width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'var(--font-display)', fontWeight: 900,
                            fontSize: 24, color: t.color,
                        }}>
                            {t.initials}
                        </div>
                    )}
                </div>

                {/* Name / role / cert */}
                <div style={{ flex: 1 }}>
                    <div style={{
                        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 19,
                        textTransform: 'uppercase', letterSpacing: 0.5,
                        color: 'var(--text)', lineHeight: 1.1, marginBottom: 3,
                    }}>{t.name}</div>
                    <div style={{ fontSize: 12, fontWeight: 600, color: t.color, marginBottom: 3 }}>
                        {t.role}
                    </div>
                    {/* Cert with Award icon */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                        <Award size={10} color="var(--text-3)" strokeWidth={2} />
                        <span style={{ fontSize: 11, color: 'var(--text-3)' }}>{t.cert}</span>
                    </div>
                </div>
            </div>

            {/* ── Specs row ── */}
            <div style={{
                display: 'flex', alignItems: 'center',
                padding: '14px 26px', borderBottom: '1px solid var(--border)',
            }}>
                {/* Experience */}
                <div>
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2,
                    }}>
                        <Calendar size={9} color="var(--text-3)" strokeWidth={2.2} />
                        <span style={{
                            fontSize: 9, color: 'var(--text-3)', fontWeight: 700,
                            letterSpacing: 1.5, textTransform: 'uppercase',
                        }}>Experience</span>
                    </div>
                    <div style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700,
                        fontSize: 17, color: 'var(--text)',
                    }}>{t.exp}</div>
                </div>

                {/* Specialisation tags */}
                <div style={{
                    display: 'flex', gap: 5, flexWrap: 'wrap',
                    marginLeft: 'auto', justifyContent: 'flex-end',
                }}>
                    {t.spec.map(s => (
                        <span key={s} style={{
                            background: `${t.color}18`, color: t.color,
                            fontSize: 9, fontWeight: 800, letterSpacing: 1,
                            textTransform: 'uppercase', padding: '3px 8px', borderRadius: 100,
                        }}>{s}</span>
                    ))}
                </div>
            </div>

            {/* ── Expandable bio ── */}
            <div style={{
                maxHeight: isOpen ? '260px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
            }}>
                <div style={{ padding: '18px 26px' }}>
                    <p style={{
                        fontSize: 13, color: 'var(--text-2)',
                        lineHeight: 1.7, marginBottom: 16,
                    }}>
                        {t.bio}
                    </p>
                    <a
                        href="#contact"
                        onClick={e => e.stopPropagation()}
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: t.color, color: '#080808',
                            fontFamily: 'var(--font-display)', fontWeight: 800,
                            fontSize: 13, textTransform: 'uppercase', letterSpacing: 1,
                            padding: '9px 18px', borderRadius: 6,
                            transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        Book Session
                    </a>
                </div>
            </div>

            {/* ── Footer toggle ── */}
            <div style={{
                padding: '11px 26px',
                borderTop: isOpen ? 'none' : '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
                fontSize: 12, fontWeight: 600, color: 'var(--text-3)',
            }}>
                {isOpen
                    ? <><ChevronUp size={13} strokeWidth={2.5} /> Less</>
                    : <><ChevronDown size={13} strokeWidth={2.5} /> View Profile</>
                }
            </div>
        </div>
    );
}