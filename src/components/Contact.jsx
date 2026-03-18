import { useState } from 'react';
import {
    MapPin,           // Address
    Phone,            // Phone
    Mail,             // Email
    Clock,            // Hours
    AlertTriangle,    // Form error warning
    Loader2,          // Sending spinner
    Send,             // Submit button icon
    CheckCircle2,     // Success card checkmark
    Instagram,        // Social — Instagram
    Twitter,          // Social — Twitter
    Youtube,          // Social — YouTube
    Music2,           // Social — TikTok (closest Lucide match)
} from 'lucide-react';

/* ── Contact info items ── */
const INFO = [
    { Icon: MapPin, label: 'Address', value: '142/A, Meri Biso Mawatha, Gampaha SL 10351' },
    { Icon: Phone, label: 'Phone', value: '+(94) 12 345 6789' },
    { Icon: Mail, label: 'Email', value: 'hello@fitnessgym.com' },
    { Icon: Clock, label: 'Hours', value: 'Mon–Fri: 5am–11pm  ·  Sat–Sun: 6am–10pm' },
];

/* ── Social links ── */
const SOCIALS = [
    { Icon: Instagram, label: 'Instagram', href: '#' },
    { Icon: Twitter, label: 'Twitter', href: '#' },
    { Icon: Youtube, label: 'YouTube', href: '#' },
    { Icon: Music2, label: 'TikTok', href: '#' },
];

const INTERESTS = [
    'Membership Info', 'Personal Training', 'Group Classes',
    'Nutrition Coaching', 'Corporate Plans', 'Other',
];

/* ── Reusable field wrapper ── */
function Field({ label, error, children }) {
    return (
        <div style={{ marginBottom: 14 }}>
            <label style={{
                display: 'block', fontSize: 11, fontWeight: 700,
                letterSpacing: 1, textTransform: 'uppercase',
                color: 'rgba(242,239,230,0.38)', marginBottom: 7,
            }}>
                {label}
            </label>
            {children}
            {error && (
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 5,
                    color: '#e05555', fontSize: 11, marginTop: 5,
                }}>
                    <AlertTriangle size={11} strokeWidth={2.2} />
                    {error}
                </div>
            )}
        </div>
    );
}

/* ── Shared input style factory ── */
const inputStyle = (hasError) => ({
    width: '100%', padding: '12px 14px',
    background: 'rgba(201,146,10,0.04)',
    border: `1.5px solid ${hasError ? '#e05555' : 'rgba(201,146,10,0.12)'}`,
    borderRadius: 8, fontSize: 14, color: '#F2EFE6',
    outline: 'none', transition: 'border-color 0.2s',
    fontFamily: 'var(--font-body)', display: 'block',
});

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
    const [interest, setInterest] = useState('');
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | sending | success

    /* ── Validation ── */
    const validate = () => {
        const e = {};
        if (!form.name.trim() || form.name.trim().length < 2)
            e.name = 'Name must be at least 2 characters';
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            e.email = 'Enter a valid email address';
        if (!form.message.trim() || form.message.trim().length < 10)
            e.message = 'Message must be at least 10 characters';
        return e;
    };

    const handleChange = (field, value) => {
        setForm(f => ({ ...f, [field]: value }));
        if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setStatus('sending');
        await new Promise(r => setTimeout(r, 1500));
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
        setInterest('');
    };

    return (
        <section id="contact" style={{
            background: '#080808', padding: 'var(--section-gap) 0',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Background glows */}
            <div style={{ position: 'absolute', left: '-5%', bottom: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(201,146,10,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: '-8%', top: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(42,37,22,0.9) 0%,transparent 70%)', pointerEvents: 'none' }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* ── Section label ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <span style={{ width: 40, height: 2, background: '#C9920A', display: 'block' }} />
                    <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: '#C9920A', fontWeight: 600 }}>
                        Get In Touch
                    </span>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,420px), 1fr))',
                    gap: 'clamp(40px,6vw,80px)',
                }}>

                    {/* ══════════════════════════════
                        Left — contact info + socials
                    ══════════════════════════════ */}
                    <div>
                        <h2 style={{
                            fontFamily: 'var(--font-display)', fontWeight: 900,
                            fontSize: 'clamp(44px,6vw,72px)', textTransform: 'uppercase',
                            lineHeight: 0.9, letterSpacing: -2, color: '#F2EFE6', marginBottom: 22,
                        }}>
                            START YOUR<br /><span style={{ color: '#C9920A' }}>JOURNEY</span>
                        </h2>

                        <p style={{
                            fontSize: 15, color: 'rgba(242,239,230,0.48)', lineHeight: 1.8,
                            maxWidth: 380, marginBottom: 44,
                        }}>
                            Ready to transform your life? Reach out and one of our team members
                            will respond within 2 hours during business hours.
                        </p>

                        {/* Info items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                            {INFO.map(({ Icon, label, value }) => (
                                <div key={label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                                    {/* Icon box */}
                                    <div style={{
                                        width: 42, height: 42, borderRadius: 10, flexShrink: 0,
                                        background: 'rgba(201,146,10,0.08)',
                                        border: '1px solid rgba(201,146,10,0.18)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Icon size={17} color="#C9920A" strokeWidth={1.8} />
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <div style={{
                                            fontSize: 10, fontWeight: 700, letterSpacing: 1.5,
                                            textTransform: 'uppercase',
                                            color: 'rgba(242,239,230,0.3)', marginBottom: 3,
                                        }}>{label}</div>
                                        <div style={{
                                            fontSize: 14, color: 'rgba(242,239,230,0.78)', lineHeight: 1.5,
                                        }}>{value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social buttons */}
                        <div style={{ display: 'flex', gap: 10, marginTop: 36 }}>
                            {SOCIALS.map(({ Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    title={label}
                                    style={{
                                        width: 42, height: 42, borderRadius: 10,
                                        background: 'rgba(201,146,10,0.06)',
                                        border: '1px solid rgba(201,146,10,0.14)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        transition: 'all 0.2s',
                                        color: 'rgba(242,239,230,0.45)',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background = 'rgba(201,146,10,0.16)';
                                        e.currentTarget.style.borderColor = 'rgba(201,146,10,0.4)';
                                        e.currentTarget.style.color = '#C9920A';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(201,146,10,0.2)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = 'rgba(201,146,10,0.06)';
                                        e.currentTarget.style.borderColor = 'rgba(201,146,10,0.14)';
                                        e.currentTarget.style.color = 'rgba(242,239,230,0.45)';
                                        e.currentTarget.style.transform = '';
                                        e.currentTarget.style.boxShadow = '';
                                    }}
                                >
                                    <Icon size={17} strokeWidth={1.8} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ══════════════════════════════
                        Right — form or success card
                    ══════════════════════════════ */}
                    <div>
                        {status === 'success' ? (
                            <SuccessCard onReset={() => setStatus('idle')} />
                        ) : (
                            <div style={{
                                background: '#2A2516', borderRadius: 20,
                                border: '1px solid rgba(201,146,10,0.12)',
                                padding: 'clamp(26px,4vw,44px)',
                            }}>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22,
                                    textTransform: 'uppercase', color: '#F2EFE6',
                                    marginBottom: 26, letterSpacing: 0.5,
                                }}>Send Us a Message</h3>

                                <form onSubmit={handleSubmit} noValidate>

                                    {/* Name + Email */}
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%,180px),1fr))',
                                        gap: 14,
                                    }}>
                                        <Field label="Full Name *" error={errors.name}>
                                            <input
                                                type="text" placeholder="Johan Perera"
                                                value={form.name}
                                                onChange={e => handleChange('name', e.target.value)}
                                                style={inputStyle(!!errors.name)}
                                                onFocus={e => { if (!errors.name) e.target.style.borderColor = '#C9920A'; }}
                                                onBlur={e => { if (!errors.name) e.target.style.borderColor = 'rgba(201,146,10,0.12)'; }}
                                            />
                                        </Field>
                                        <Field label="Email Address *" error={errors.email}>
                                            <input
                                                type="email" placeholder="johan@email.com"
                                                value={form.email}
                                                onChange={e => handleChange('email', e.target.value)}
                                                style={inputStyle(!!errors.email)}
                                                onFocus={e => { if (!errors.email) e.target.style.borderColor = '#C9920A'; }}
                                                onBlur={e => { if (!errors.email) e.target.style.borderColor = 'rgba(201,146,10,0.12)'; }}
                                            />
                                        </Field>
                                    </div>

                                    {/* Phone */}
                                    <Field label="Phone (optional)">
                                        <input
                                            type="tel" placeholder="+(94) 12 345 6789"
                                            value={form.phone}
                                            onChange={e => handleChange('phone', e.target.value)}
                                            style={inputStyle(false)}
                                            onFocus={e => e.target.style.borderColor = '#C9920A'}
                                            onBlur={e => e.target.style.borderColor = 'rgba(201,146,10,0.12)'}
                                        />
                                    </Field>

                                    {/* Interest chips */}
                                    <div style={{ marginBottom: 14 }}>
                                        <label style={{
                                            display: 'block', fontSize: 11, fontWeight: 700,
                                            letterSpacing: 1, textTransform: 'uppercase',
                                            color: 'rgba(242,239,230,0.38)', marginBottom: 9,
                                        }}>I'm interested in</label>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                                            {INTERESTS.map(item => (
                                                <button
                                                    key={item} type="button"
                                                    onClick={() => setInterest(i => i === item ? '' : item)}
                                                    style={{
                                                        padding: '5px 12px', borderRadius: 100,
                                                        cursor: 'pointer', fontFamily: 'var(--font-body)',
                                                        fontSize: 11, fontWeight: 600, border: '1px solid',
                                                        background: interest === item ? '#C9920A' : 'transparent',
                                                        color: interest === item ? '#080808' : 'rgba(242,239,230,0.45)',
                                                        borderColor: interest === item ? '#C9920A' : 'rgba(201,146,10,0.18)',
                                                        transition: 'all 0.2s',
                                                    }}
                                                >{item}</button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <Field label="Message *" error={errors.message}>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us about your fitness goals or questions…"
                                            value={form.message}
                                            onChange={e => handleChange('message', e.target.value)}
                                            style={{
                                                ...inputStyle(!!errors.message),
                                                resize: 'vertical', minHeight: 120, lineHeight: 1.6,
                                            }}
                                            onFocus={e => { if (!errors.message) e.target.style.borderColor = '#C9920A'; }}
                                            onBlur={e => { if (!errors.message) e.target.style.borderColor = 'rgba(201,146,10,0.12)'; }}
                                        />
                                    </Field>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        style={{
                                            width: '100%', padding: '15px',
                                            background: '#C9920A', color: '#080808',
                                            fontFamily: 'var(--font-display)', fontWeight: 900,
                                            fontSize: 17, textTransform: 'uppercase', letterSpacing: 2,
                                            border: 'none', borderRadius: 8,
                                            cursor: status === 'sending' ? 'wait' : 'pointer',
                                            transition: 'all 0.2s', marginTop: 6,
                                            display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', gap: 10,
                                            opacity: status === 'sending' ? 0.75 : 1,
                                        }}
                                        onMouseEnter={e => {
                                            if (status !== 'sending') {
                                                e.currentTarget.style.transform = 'translateY(-2px)';
                                                e.currentTarget.style.boxShadow = '0 12px 32px rgba(201,146,10,0.4)';
                                            }
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.transform = '';
                                            e.currentTarget.style.boxShadow = '';
                                        }}
                                    >
                                        {status === 'sending' ? (
                                            <>
                                                <Loader2
                                                    size={18}
                                                    strokeWidth={2.2}
                                                    style={{ animation: 'spin 0.8s linear infinite' }}
                                                />
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={16} strokeWidth={2.2} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
        </section>
    );
}

/* ── Success card ── */
function SuccessCard({ onReset }) {
    return (
        <div style={{
            background: '#2A2516', borderRadius: 20,
            border: '1px solid rgba(201,146,10,0.2)',
            padding: 'clamp(40px,5vw,60px)',
            textAlign: 'center', minHeight: 420,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
        }}>
            {/* Check icon */}
            <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'rgba(201,146,10,0.12)',
                border: '2px solid rgba(201,146,10,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 24,
                boxShadow: '0 0 0 14px rgba(201,146,10,0.06)',
            }}>
                <CheckCircle2 size={36} color="#C9920A" strokeWidth={1.8} />
            </div>

            <h3 style={{
                fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 30,
                textTransform: 'uppercase', color: '#F2EFE6', marginBottom: 10,
            }}>Message Sent!</h3>

            <p style={{
                color: 'rgba(242,239,230,0.48)', fontSize: 14, lineHeight: 1.7,
                maxWidth: 290, marginBottom: 28,
            }}>
                Thank you for reaching out! Our team will get back to you within
                2 hours during business hours.
            </p>

            <button
                onClick={onReset}
                style={{
                    background: 'transparent', color: '#C9920A',
                    border: '2px solid #C9920A', borderRadius: 8,
                    fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15,
                    textTransform: 'uppercase', letterSpacing: 1.5,
                    padding: '11px 26px', cursor: 'pointer', transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = '#C9920A';
                    e.currentTarget.style.color = '#080808';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#C9920A';
                }}
            >
                Send Another
            </button>
        </div>
    );
}