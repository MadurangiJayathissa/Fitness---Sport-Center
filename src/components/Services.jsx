import { useState } from 'react';
import {
    Dumbbell,       // Strength Training
    Zap,            // HIIT & Cardio
    Leaf,           // Yoga & Mindfulness
    Shield,         // Boxing & MMA
    UserCheck,      // Personal Coaching
    RefreshCw,      // CrossFit & Functional
    Waves,          // Aqua Fitness
    Apple,          // Nutrition Coaching
    Search,         // Search input icon
    Clock,          // Duration meta
    CalendarDays,   // Frequency meta
    Signal,         // Level meta
} from 'lucide-react';

const ALL_SERVICES = [
    {
        id: 1, icon: Dumbbell, cat: 'Strength',
        title: 'Strength Training', level: 'All Levels',
        desc: 'Progressive overload programs with free weights, barbells, and machines. Build muscle, increase power, and boost metabolism.',
        tags: ['strength', 'weights', 'powerlifting'], dur: '60 min', freq: '3–5x/week',
    },
    {
        id: 2, icon: Zap, cat: 'Cardio',
        title: 'HIIT & Cardio', level: 'Intermediate',
        desc: 'High-intensity intervals engineered to maximize fat burn and cardiovascular fitness in minimum time.',
        tags: ['hiit', 'cardio', 'fat burn'], dur: '45 min', freq: '2–4x/week',
    },
    {
        id: 3, icon: Leaf, cat: 'Mind & Body',
        title: 'Yoga & Mindfulness', level: 'Beginner',
        desc: 'Restore balance, improve flexibility, and reduce stress. Available in Hatha, Vinyasa, and Restorative styles.',
        tags: ['yoga', 'flexibility', 'recovery'], dur: '60 min', freq: '2–3x/week',
    },
    {
        id: 4, icon: Shield, cat: 'Combat',
        title: 'Boxing & MMA', level: 'All Levels',
        desc: 'Learn real boxing fundamentals and MMA techniques while getting the ultimate full-body workout.',
        tags: ['boxing', 'combat', 'cardio'], dur: '60 min', freq: '2–4x/week',
    },
    {
        id: 5, icon: UserCheck, cat: 'Personal',
        title: 'Personal Coaching', level: 'All Levels',
        desc: '1-on-1 sessions with certified trainers. Fully personalized programs based on your goals, body, and schedule.',
        tags: ['personal', '1on1', 'custom'], dur: '50 min', freq: 'Custom',
    },
    {
        id: 6, icon: RefreshCw, cat: 'Functional',
        title: 'CrossFit & Functional', level: 'Advanced',
        desc: 'High-intensity functional movements drawn from weightlifting, gymnastics, and metabolic conditioning.',
        tags: ['crossfit', 'functional', 'strength'], dur: '60 min', freq: '3–5x/week',
    },
    {
        id: 7, icon: Waves, cat: 'Aqua',
        title: 'Aqua Fitness', level: 'Beginner',
        desc: 'Low-impact pool workouts for all fitness levels. Perfect for injury recovery or adding joint-friendly cardio.',
        tags: ['aqua', 'recovery', 'cardio'], dur: '45 min', freq: '2–3x/week',
    },
    {
        id: 8, icon: Apple, cat: 'Nutrition',
        title: 'Nutrition Coaching', level: 'All Levels',
        desc: 'Personalized nutrition plans created by certified dietitians to complement your training and accelerate results.',
        tags: ['nutrition', 'diet', 'health'], dur: '60 min', freq: 'Monthly',
    },
];

const CATEGORIES = ['All', 'Strength', 'Cardio', 'Mind & Body', 'Combat', 'Personal', 'Functional', 'Aqua', 'Nutrition'];

/* Meta row items — icon + label + value */
const META = [
    { Icon: Clock, labelKey: 'dur', label: 'Duration' },
    { Icon: CalendarDays, labelKey: 'freq', label: 'Frequency' },
    { Icon: Signal, labelKey: 'level', label: 'Level' },
];

export default function Services() {
    const [filter, setFilter] = useState('All');
    const [search, setSearch] = useState('');

    const filtered = ALL_SERVICES.filter(s => {
        const catOk = filter === 'All' || s.cat === filter;
        const q = search.toLowerCase();
        const searchOk = !q
            || s.title.toLowerCase().includes(q)
            || s.desc.toLowerCase().includes(q)
            || s.tags.some(t => t.includes(q));
        return catOk && searchOk;
    });

    return (
        <section id="services" style={{ background: 'var(--bg-2)', padding: 'var(--section-gap) 0' }}>
            <div className="container">

                {/* ── Section label ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <span style={{ width: 40, height: 2, background: '#C9920A', display: 'block' }} />
                    <span style={{
                        fontSize: 11, letterSpacing: 3, textTransform: 'uppercase',
                        color: '#C9920A', fontWeight: 600,
                    }}>
                        What We Offer
                    </span>
                </div>

                {/* ── Title + search ── */}
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginBottom: 38,
                }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontWeight: 900,
                        fontSize: 'clamp(44px,6vw,72px)', textTransform: 'uppercase',
                        lineHeight: 0.9, letterSpacing: -2, color: 'var(--text)',
                    }}>
                        OUR<br /><span style={{ color: '#C9920A' }}>SERVICES</span>
                    </h2>

                    {/* Search input with Lucide Search icon */}
                    <div style={{ position: 'relative', width: 'min(100%, 260px)' }}>
                        <span style={{
                            position: 'absolute', left: 12, top: '50%',
                            transform: 'translateY(-50%)', pointerEvents: 'none',
                            display: 'flex', alignItems: 'center',
                        }}>
                            <Search size={15} color="var(--text-3)" strokeWidth={2} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search services…"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{
                                width: '100%', padding: '11px 14px 11px 38px',
                                background: 'var(--surface)', border: '1.5px solid var(--border)',
                                borderRadius: 8, fontSize: 14, color: 'var(--text)',
                                outline: 'none', transition: 'border-color 0.2s',
                                fontFamily: 'var(--font-body)',
                            }}
                            onFocus={e => e.target.style.borderColor = '#C9920A'}
                            onBlur={e => e.target.style.borderColor = 'var(--border)'}
                        />
                    </div>
                </div>

                {/* ── Filter tabs ── */}
                <div style={{
                    display: 'flex', gap: 8, flexWrap: 'wrap',
                    marginBottom: 34, borderBottom: '1px solid var(--border)', paddingBottom: 18,
                }}>
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                padding: '7px 16px', borderRadius: 100,
                                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 12,
                                border: '1.5px solid', cursor: 'pointer', transition: 'all 0.2s',
                                background: filter === cat ? '#C9920A' : 'transparent',
                                color: filter === cat ? '#080808' : 'var(--text-2)',
                                borderColor: filter === cat ? '#C9920A' : 'var(--border)',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ── Cards ── */}
                {filtered.length === 0 ? (
                    <div style={{
                        textAlign: 'center', padding: '60px 20px',
                        fontFamily: 'var(--font-display)', fontSize: 28,
                        textTransform: 'uppercase', color: 'var(--text-3)',
                    }}>
                        No services found
                    </div>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%,310px), 1fr))',
                        gap: 18,
                    }}>
                        {filtered.map(s => <ServiceCard key={s.id} service={s} />)}
                    </div>
                )}
            </div>
        </section>
    );
}

/* ── Single service card ── */
function ServiceCard({ service }) {
    const [hov, setHov] = useState(false);
    const Icon = service.icon;

    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                background: 'var(--card-bg)',
                border: `1.5px solid ${hov ? '#C9920A' : 'var(--card-border)'}`,
                borderRadius: 14, padding: 26,
                transition: 'all 0.3s ease',
                transform: hov ? 'translateY(-6px)' : 'none',
                boxShadow: hov
                    ? '0 20px 60px rgba(201,146,10,0.14)'
                    : '0 2px 12px rgba(0,0,0,0.04)',
                position: 'relative', overflow: 'hidden', cursor: 'default',
            }}
        >
            {/* Top accent bar */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 3,
                background: '#C9920A',
                transform: hov ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.35s ease',
                transformOrigin: 'left',
            }} />

            {/* Icon + category badge */}
            <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'flex-start', marginBottom: 16,
            }}>
                {/* Icon box — gold-tinted rounded square */}
                <div style={{
                    width: 46, height: 46, borderRadius: 10,
                    background: hov ? 'rgba(201,146,10,0.16)' : 'rgba(201,146,10,0.08)',
                    border: `1px solid ${hov ? 'rgba(201,146,10,0.4)' : 'rgba(201,146,10,0.15)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s ease', flexShrink: 0,
                }}>
                    <Icon size={22} color="#C9920A" strokeWidth={1.75} />
                </div>

                {/* Category badge */}
                <span style={{
                    background: '#C9920A', color: '#080808',
                    fontSize: 9, fontWeight: 800, letterSpacing: 1.5,
                    textTransform: 'uppercase', padding: '4px 10px', borderRadius: 100,
                }}>{service.cat}</span>
            </div>

            {/* Title */}
            <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20,
                textTransform: 'uppercase', letterSpacing: 0.5,
                color: 'var(--text)', marginBottom: 8, lineHeight: 1.1,
            }}>{service.title}</h3>

            {/* Description */}
            <p style={{
                color: 'var(--text-2)', fontSize: 13,
                lineHeight: 1.7, marginBottom: 18,
            }}>{service.desc}</p>

            {/* Meta row — Duration / Frequency / Level */}
            <div style={{
                display: 'flex', gap: 16,
                borderTop: '1px solid var(--border)', paddingTop: 14,
            }}>
                {META.map(({ Icon: MetaIcon, labelKey, label }) => (
                    <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {/* Label row with icon */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 4,
                        }}>
                            <MetaIcon size={10} color="var(--text-3)" strokeWidth={2.2} />
                            <span style={{
                                fontSize: 9, color: 'var(--text-3)', fontWeight: 700,
                                letterSpacing: 1, textTransform: 'uppercase',
                            }}>{label}</span>
                        </div>
                        {/* Value */}
                        <span style={{
                            fontSize: 12, fontWeight: 600, color: 'var(--text)',
                        }}>{service[labelKey]}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}