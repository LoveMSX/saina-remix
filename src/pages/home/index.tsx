import { useThemeColors } from "../../hooks/theme"
import Column from "../../components/column"
import Row from "../../components/row"
import { useState } from "react"
import './index.css'

const HomePage = ()=> {
    const colors = useThemeColors()
    const [hoveredButton, setHoveredButton] = useState<number | null>(null)

    return (
        <Column className="home-container">
            {/* Hero Section - Glassmorphism moderne */}
            <div className="hero-section" style={{
                background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.accent}15 50%, ${colors.aiPurple}10 100%)`,
                backdropFilter: 'blur(10px)',
                borderRadius: '2rem',
                padding: '5rem 3rem',
                border: `1.5px solid ${colors.border}`,
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                animation: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: `0 20px 60px ${colors.primary}10, inset 0 1px 0 ${colors.primaryBackground}`
            }}>
                {/* Decorative elements - Gradient orbs */}
                <div style={{
                    position: 'absolute',
                    top: '-100px',
                    right: '-100px',
                    width: '300px',
                    height: '300px',
                    background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    filter: 'blur(40px)',
                    animation: 'floatSmooth 6s ease-in-out infinite'
                }}></div>
                <div style={{
                    position: 'absolute',
                    bottom: '-80px',
                    left: '-80px',
                    width: '250px',
                    height: '250px',
                    background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 70%)`,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    filter: 'blur(40px)',
                    animation: 'floatSmooth 8s ease-in-out infinite reverse'
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10%',
                    width: '200px',
                    height: '200px',
                    background: `radial-gradient(circle, ${colors.aiPurple}15 0%, transparent 70%)`,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    filter: 'blur(40px)',
                    animation: 'floatSmooth 7s ease-in-out infinite'
                }}></div>

                <div style={{position: 'relative', zIndex: 1}}>
                    <div style={{
                        fontSize: '4rem',
                        marginBottom: '1.5rem',
                        animation: 'floatSmooth 3s ease-in-out infinite'
                    }}>🤖</div>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: 900,
                        color: colors.text,
                        marginBottom: '1rem',
                        fontFamily: 'Poppins, sans-serif',
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 50%, ${colors.aiPurple} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2
                    }}>
                        L'Intelligence Artificielle Redéfinie
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: colors.textSecondary,
                        marginBottom: '2.5rem',
                        maxWidth: '700px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.7,
                        fontWeight: 500
                    }}>
                        Explorez les dernières innovations, tendances et meilleures pratiques en Intelligence Artificielle. Restez à la pointe de la technologie.
                    </p>
                    <div style={{display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
                        <button
                            onMouseEnter={() => setHoveredButton(1)}
                            onMouseLeave={() => setHoveredButton(null)}
                            style={{
                                background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                                color: '#ffffff',
                                padding: '1.125rem 2.75rem',
                                borderRadius: '1rem',
                                border: 'none',
                                fontWeight: 700,
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: hoveredButton === 1
                                    ? `0 20px 40px ${colors.primary}40, 0 0 20px ${colors.primary}20`
                                    : `0 10px 25px ${colors.primary}30`,
                                transform: hoveredButton === 1 ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)',
                                letterSpacing: '0.5px'
                            }}>
                            🚀 Découvrir les actualités
                        </button>
                        <button
                            onMouseEnter={() => setHoveredButton(2)}
                            onMouseLeave={() => setHoveredButton(null)}
                            style={{
                                backgroundColor: 'transparent',
                                color: colors.primary,
                                padding: '1.125rem 2.75rem',
                                borderRadius: '1rem',
                                border: `2px solid ${colors.primary}`,
                                fontWeight: 700,
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                boxShadow: hoveredButton === 2
                                    ? `0 0 20px ${colors.primary}30, inset 0 0 20px ${colors.primary}10`
                                    : 'none',
                                transform: hoveredButton === 2 ? 'translateY(-4px)' : 'translateY(0)',
                                letterSpacing: '0.5px'
                            }}>
                            💡 Rejoindre la communauté
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div>
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: colors.text,
                    marginBottom: '1.5rem',
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    📊 Statistiques
                </h2>
                <Row style={{gap: '1.5rem', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    {[
                        {label: 'Articles', value: '1,234', icon: '📰', color: colors.primary},
                        {label: 'Utilisateurs', value: '5,678', icon: '👥', color: colors.accent},
                        {label: 'Partages', value: '9,012', icon: '🔄', color: colors.aiPurple}
                    ].map((stat, idx) => (
                        <div
                            key={idx}
                            style={{
                                flex: '1 1 220px',
                                minWidth: '200px',
                                textAlign: 'center',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden',
                                padding: '2rem 1.5rem',
                                borderRadius: '1.25rem',
                                backgroundColor: colors.secondaryBackground,
                                border: `1.5px solid ${colors.border}`,
                                backdropFilter: 'blur(10px)',
                                background: `linear-gradient(135deg, ${colors.secondaryBackground}80 0%, ${stat.color}05 100%)`,
                                boxShadow: `0 8px 20px ${stat.color}15, inset 0 1px 0 ${colors.primaryBackground}`
                            }}
                            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                                e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}30, inset 0 1px 0 ${colors.primaryBackground}`
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                                e.currentTarget.style.boxShadow = `0 8px 20px ${stat.color}15, inset 0 1px 0 ${colors.primaryBackground}`
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: `linear-gradient(90deg, ${stat.color}, transparent)`,
                            }}></div>
                            <div style={{fontSize: '3rem', marginBottom: '1rem', animation: 'floatSmooth 3s ease-in-out infinite'}}>
                                {stat.icon}
                            </div>
                            <div style={{fontSize: '2.5rem', fontWeight: 900, background: `linear-gradient(135deg, ${stat.color}, ${stat.color}80)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.75rem'}}>
                                {stat.value}
                            </div>
                            <div style={{color: colors.textSecondary, fontWeight: 600, fontSize: '0.95rem', letterSpacing: '0.5px'}}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </Row>
            </div>

            {/* Featured Section */}
            <div>
                <h2 style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: colors.text,
                    marginBottom: '1.5rem',
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    ⭐ À la une
                </h2>
                <Row style={{gap: '1.5rem', flexWrap: 'wrap'}}>
                    {[
                        {item: 1, category: 'Machine Learning', days: 2, gradient: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`},
                        {item: 2, category: 'NLP', days: 1, gradient: `linear-gradient(135deg, ${colors.accent}, ${colors.aiPurple})`},
                        {item: 3, category: 'Vision par Ordinateur', days: 3, gradient: `linear-gradient(135deg, ${colors.aiPurple}, ${colors.aiPink})`}
                    ].map((article) => (
                        <div
                            key={article.item}
                            style={{
                                flex: '1 1 320px',
                                minWidth: '300px',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                overflow: 'hidden',
                                position: 'relative',
                                borderRadius: '1.5rem',
                                backgroundColor: colors.secondaryBackground,
                                border: `1.5px solid ${colors.border}`,
                                backdropFilter: 'blur(10px)',
                                boxShadow: `0 10px 30px ${colors.primary}15, inset 0 1px 0 ${colors.primaryBackground}`
                            }}
                            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                                e.currentTarget.style.boxShadow = `0 30px 60px ${colors.primary}30, inset 0 1px 0 ${colors.primaryBackground}`
                            }}
                            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                                e.currentTarget.style.boxShadow = `0 10px 30px ${colors.primary}15, inset 0 1px 0 ${colors.primaryBackground}`
                            }}
                        >
                            <div style={{
                                height: '220px',
                                background: article.gradient,
                                borderRadius: '1.5rem 1.5rem 0 0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '4rem',
                                position: 'relative',
                                overflow: 'hidden',
                                animation: 'floatSmooth 4s ease-in-out infinite'
                            }}>
                                {['🤖', '💬', '👁️'][article.item - 1]}
                                <div style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                                    color: '#fff',
                                    padding: '0.375rem 1rem',
                                    borderRadius: '2rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.5px',
                                    boxShadow: `0 4px 12px ${colors.primary}40`
                                }}>
                                    ✨ Nouveau
                                </div>
                            </div>
                            <div style={{padding: '1.5rem'}}>
                                <div style={{
                                    display: 'inline-block',
                                    backgroundColor: `${colors.accent}20`,
                                    color: colors.accent,
                                    padding: '0.375rem 0.75rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.75rem',
                                    fontWeight: 600,
                                    marginBottom: '0.75rem'
                                }}>
                                    {article.category}
                                </div>
                                <h3 style={{color: colors.text, marginBottom: '0.5rem', fontWeight: 700, fontSize: '1.125rem'}}>
                                    Article {article.item}: Les dernières avancées
                                </h3>
                                <p style={{color: colors.textSecondary, fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.5}}>
                                    Découvrez les dernières avancées en IA et comment elles transforment l'industrie...
                                </p>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: `1px solid ${colors.border}`}}>
                                    <span style={{color: colors.textTertiary, fontSize: '0.85rem'}}>
                                        Il y a {article.days} jour{article.days > 1 ? 's' : ''}
                                    </span>
                                    <span style={{color: colors.primary, fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s ease'}}>
                                        Lire →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Row>
            </div>
        </Column>
    )
}

export default HomePage