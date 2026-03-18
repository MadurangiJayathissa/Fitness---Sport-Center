import { useState } from 'react';

const PLANS = [
    {
        name: 'Starter', monthly: 29, annual: 23,
        desc: 'Perfect for those just beginning their fitness journey.',
        highlight: false,
        features: [
            { text: 'Full gym access (6am–10pm)', yes: true },
            { text: '2 group classes / month', yes: true },
            { text: 'Locker room access', yes: true },
            { text: 'Fitness assessment', yes: true },
            { text: 'Personal training sessions', yes: false },
            { text: 'Nutrition coaching', yes: false },
            { text: 'Guest passes', yes: false },
            { text: 'Priority class booking', yes: false },
        ],
    },
    {
        name: 'Pro', monthly: 59, annual: 47,
        desc: 'The complete fitness package for committed members.',
        highlight: true,
        features: [
            { text: 'Full gym access (24/7)', yes: true },
            { text: 'Unlimited group classes', yes: true },
            { text: 'Locker + towel service', yes: true },
            { text: 'Monthly fitness assessment', yes: true },
            { text: '2 PT sessions / month', yes: true },
            { text: 'Nutrition consultation', yes: true },
            { text: '2 guest passes / month', yes: true },
            { text: 'Priority class booking', yes: false },
        ],
    },
    {
        name: 'Elite', monthly: 99, annual: 79,
        desc: 'The ultimate experience for those who demand the best.',
        highlight: false,
        features: [
            { text: 'Full gym access (24/7)', yes: true },
            { text: 'Unlimited group classes', yes: true },
            { text: 'Premium locker + towel', yes: true },
            { text: 'Biweekly fitness assessment', yes: true },
            { text: '4 PT sessions / month', yes: true },
            { text: 'Full nutrition coaching', yes: true },
            { text: 'Unlimited guest passes', yes: true },
            { text: 'Priority class booking', yes: true },
        ],
    },
];

export default function Plans() {
    const [annual, setAnnual] = useState(false);

    return (
        <section id="plans" style={{ background: '#2A2516', padding: 'var(--section-gap) 0' }}>
            <div className="container">

                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18, justifyContent: 'center' }}>
                    <span style={{ width: 40, height: 2, background: '#C9920A', display: 'block' }} />
                    <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#C9920A', fontWeight: 600 }}>
                        Membership
                    </span>
                </div>

                {/* Title + billing toggle */}
                <div style={{ textAlign: 'center', marginBottom: 50 }}>
                    <h2 style={{
                        fontFamily: 'var(--font-display)', fontWeight: 900,
                        fontSize: 'clamp(44px,6vw,72px)', textTransform: 'uppercase',
                        lineHeight: 0.9, letterSpacing: -2, color: '#F2EFE6', marginBottom: 20,
                    }}>
                        CHOOSE YOUR<br /><span style={{ color: '#C9920A' }}>PLAN</span>
                    </h2>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
                        <span style={{
                            fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)',
                            color: !annual ? '#F2EFE6' : 'rgba(242,239,230,0.4)',
                        }}>Monthly</span>

                        <button
                            onClick={() => setAnnual(a => !a)}
                            style={{
                                width: 50, height: 26, borderRadius: 100, border: 'none', cursor: 'pointer',
                                background: annual ? '#C9920A' : '#4a3e20', position: 'relative',
                                transition: 'background 0.3s',
                            }}
                        >
                            <span style={{
                                position: 'absolute', top: 3,
                                left: annual ? '27px' : '3px',
                                width: 20, height: 20, borderRadius: '50%',
                                background: annual ? '#080808' : '#F2EFE6',
                                transition: 'left 0.3s',
                                display: 'block', boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                            }} />
                        </button>

                        <span style={{
                            fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)',
                            color: annual ? '#F2EFE6' : 'rgba(242,239,230,0.4)',
                            display: 'flex', alignItems: 'center', gap: 6,
                        }}>
                            Annual
                            <span style={{
                                background: '#C9920A', color: '#080808',
                                fontSize: 9, fontWeight: 800, letterSpacing: 0.5,
                                padding: '2px 8px', borderRadius: 100,
                            }}>SAVE 20%</span>
                        </span>
                    </div>
                </div>

                {/* Plan cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,290px), 1fr))',
                    gap: 18, alignItems: 'start',
                }}>
                    {PLANS.map(plan => <PlanCard key={plan.name} plan={plan} annual={annual} />)}
                </div>

                <p style={{
                    textAlign: 'center', marginTop: 36,
                    fontSize: 13, color: 'rgba(242,239,230,0.3)',
                }}>
                    All plans include a 7-day free trial. No contract. Cancel anytime.
                </p>
            </div>
        </section>
    );
}

function PlanCard({ plan, annual }) {
    const [hov, setHov] = useState(false);
    const price = annual ? plan.annual : plan.monthly;

    return (
        <div
            onMouseEnter={() => setHov(true)}
            onMouseLeave={() => setHov(false)}
            style={{
                background: plan.highlight ? '#080808' : 'rgba(42,37,22,0.7)',
                border: `2px solid ${plan.highlight ? '#C9920A' : hov ? 'rgba(201,146,10,0.4)' : 'rgba(201,146,10,0.15)'}`,
                borderRadius: 16, padding: 30, position: 'relative', overflow: 'hidden',
                transition: 'all 0.3s ease',
                transform: plan.highlight ? 'scale(1.04)' : hov ? 'translateY(-4px)' : 'none',
                boxShadow: plan.highlight
                    ? '0 24px 80px rgba(201,146,10,0.3)'
                    : hov ? '0 16px 48px rgba(201,146,10,0.1)' : 'none',
            }}
        >
            {plan.highlight && (
                <div style={{
                    position: 'absolute', top: 18, right: 18,
                    background: '#C9920A', color: '#080808',
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 10,
                    textTransform: 'uppercase', letterSpacing: 1.5, padding: '4px 12px', borderRadius: 100,
                }}>Most Popular</div>
            )}

            <div style={{
                fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13,
                textTransform: 'uppercase', letterSpacing: 2, color: '#C9920A', marginBottom: 8,
            }}>{plan.name}</div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, marginBottom: 6 }}>
                <span style={{
                    fontFamily: 'var(--font-display)', fontWeight: 900,
                    fontSize: 54, lineHeight: 1, letterSpacing: -2, color: '#F2EFE6',
                }}>${price}</span>
                <span style={{ fontSize: 13, paddingBottom: 9, color: 'rgba(242,239,230,0.4)' }}>/month</span>
            </div>

            {annual && (
                <div style={{ fontSize: 11, color: '#C9920A', fontWeight: 600, marginBottom: 8 }}>
                    Billed ${price * 12}/year
                </div>
            )}

            <p style={{ fontSize: 13, color: 'rgba(242,239,230,0.45)', lineHeight: 1.6, marginBottom: 22 }}>
                {plan.desc}
            </p>

            <a
                href="#contact"
                style={{
                    display: 'block', textAlign: 'center',
                    background: plan.highlight ? '#C9920A' : 'transparent',
                    color: plan.highlight ? '#080808' : '#F2EFE6',
                    border: `1.5px solid ${plan.highlight ? '#C9920A' : 'rgba(201,146,10,0.25)'}`,
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15,
                    textTransform: 'uppercase', letterSpacing: 1.5,
                    padding: '13px', borderRadius: 8, marginBottom: 26,
                    transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                    if (!plan.highlight) {
                        e.currentTarget.style.borderColor = '#C9920A';
                        e.currentTarget.style.color = '#C9920A';
                    }
                }}
                onMouseLeave={e => {
                    if (!plan.highlight) {
                        e.currentTarget.style.borderColor = 'rgba(201,146,10,0.25)';
                        e.currentTarget.style.color = '#F2EFE6';
                    }
                }}
            >
                Get Started
            </a>

            <ul style={{ listStyle: 'none' }}>
                {plan.features.map(({ text, yes }) => (
                    <li key={text} style={{
                        display: 'flex', alignItems: 'flex-start', gap: 10,
                        padding: '7px 0', borderBottom: '1px solid rgba(201,146,10,0.08)',
                        opacity: yes ? 1 : 0.38,
                    }}>
                        <span style={{
                            width: 17, height: 17, borderRadius: '50%', flexShrink: 0,
                            background: yes ? '#C9920A' : 'transparent',
                            border: yes ? 'none' : '1.5px solid rgba(242,239,230,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: 9, color: yes ? '#080808' : 'rgba(242,239,230,0.4)', marginTop: 1,
                        }}>{yes ? '✓' : '×'}</span>
                        <span style={{
                            fontSize: 12, lineHeight: 1.4,
                            color: yes ? 'rgba(242,239,230,0.85)' : 'rgba(242,239,230,0.3)',
                        }}>{text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}