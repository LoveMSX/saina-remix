import Column from "../../components/column"
import { useThemeColors } from "../../hooks/theme"
import { useState } from "react"
import './index.css'

const NewsPage = ()=> {
  const colors = useThemeColors()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { name: 'Tous', icon: '📰', id: 'all' },
    { name: 'Machine Learning', icon: '🤖', id: 'ml' },
    { name: 'NLP', icon: '💬', id: 'nlp' },
    { name: 'Vision', icon: '👁️', id: 'vision' },
    { name: 'Robotique', icon: '🦾', id: 'robotics' }
  ]

  return (
    <Column style={{flex: 1, padding: '2rem', gap: '1.5rem', overflowY: 'auto'}}>
        {/* Header */}
        <div style={{marginBottom: '1.5rem', animation: 'slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1)'}}>
          <h1 style={{
            fontSize: '2.75rem',
            fontWeight: 900,
            color: colors.text,
            marginBottom: '0.75rem',
            fontFamily: 'Poppins, sans-serif',
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 50%, ${colors.aiPurple} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}>
            🚀 Actualités IA
          </h1>
          <p style={{color: colors.textSecondary, fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.6}}>
            Explorez les dernières tendances, innovations et meilleures pratiques en Intelligence Artificielle
          </p>
        </div>

        {/* Search and Filter */}
        <div style={{display: 'flex', gap: '1.25rem', marginBottom: '2rem', flexWrap: 'wrap', alignItems: 'center', animation: 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)'}}>
          <div style={{flex: 1, minWidth: '280px', position: 'relative'}}>
            <input
              type="text"
              placeholder="🔍 Rechercher des actualités..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.25rem',
                borderRadius: '1rem',
                border: `1.5px solid ${colors.border}`,
                fontSize: '0.95rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: searchQuery
                  ? `0 0 0 3px ${colors.primary}20, 0 8px 20px ${colors.primary}15`
                  : `0 4px 12px ${colors.primary}10`,
                backdropFilter: 'blur(10px)',
                backgroundColor: `${colors.primaryBackground}95`,
                fontWeight: 500
              }}
            />
          </div>
          <button style={{
            padding: '1rem 2.25rem',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            color: '#ffffff',
            border: 'none',
            borderRadius: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: `0 8px 20px ${colors.primary}30`,
            fontSize: '0.95rem',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)'
            e.currentTarget.style.boxShadow = `0 16px 40px ${colors.primary}40`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = `0 8px 20px ${colors.primary}30`
          }}>
            🔎 Filtrer
          </button>
        </div>

        {/* Category Filter */}
        <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', animation: 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both'}}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
              style={{
                padding: '0.75rem 1.5rem',
                background: selectedCategory === cat.id
                  ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                  : colors.secondaryBackground,
                color: selectedCategory === cat.id ? '#ffffff' : colors.text,
                border: `1.5px solid ${selectedCategory === cat.id ? 'transparent' : colors.border}`,
                borderRadius: '2.5rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontSize: '0.9rem',
                letterSpacing: '0.3px',
                boxShadow: selectedCategory === cat.id
                  ? `0 8px 20px ${colors.primary}30`
                  : `0 2px 8px ${colors.primary}10`,
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat.id) {
                  e.currentTarget.style.backgroundColor = `${colors.primary}15`
                  e.currentTarget.style.borderColor = colors.primary
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = `0 8px 16px ${colors.primary}20`
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat.id) {
                  e.currentTarget.style.backgroundColor = colors.secondaryBackground
                  e.currentTarget.style.borderColor = colors.border
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = `0 2px 8px ${colors.primary}10`
                }
              }}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem'}}>
          {
            [...Array(12)].map((_, index) => {
              const categoryIcons = ['🤖', '💬', '👁️', '🦾', '⚙️', '🔬']
              const categoryNames = ['Machine Learning', 'NLP', 'Vision', 'Robotique', 'Automatisation', 'Recherche']
              const categoryColors = [colors.primary, colors.accent, colors.secondary, colors.primary, colors.accent, colors.secondary]

              return (
                <div
                  key={index}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: '1.5rem',
                    backgroundColor: colors.secondaryBackground,
                    border: `1.5px solid ${colors.border}`,
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 10px 30px ${categoryColors[index % 6]}15, inset 0 1px 0 ${colors.primaryBackground}`,
                    animation: `slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s both`
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)'
                    e.currentTarget.style.boxShadow = `0 30px 60px ${categoryColors[index % 6]}30, inset 0 1px 0 ${colors.primaryBackground}`
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = `0 10px 30px ${categoryColors[index % 6]}15, inset 0 1px 0 ${colors.primaryBackground}`
                  }}
                >
                  {/* Image Placeholder */}
                  <div style={{
                    height: '220px',
                    background: `linear-gradient(135deg, ${categoryColors[index % 6]} 0%, ${colors.accent} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    position: 'relative',
                    overflow: 'hidden',
                    animation: 'floatSmooth 4s ease-in-out infinite'
                  }}>
                    {categoryIcons[index % 6]}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      background: `linear-gradient(135deg, ${categoryColors[index % 6]}, ${colors.accent})`,
                      color: '#fff',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      boxShadow: `0 4px 12px ${categoryColors[index % 6]}40`
                    }}>
                      {index + 1}
                    </div>
                  </div>

                  <div style={{padding: '2rem 1.75rem'}}>
                    {/* Category Badge */}
                    <div style={{
                      display: 'inline-block',
                      background: `linear-gradient(135deg, ${categoryColors[index % 6]}20, ${categoryColors[index % 6]}10)`,
                      color: categoryColors[index % 6],
                      padding: '0.5rem 1rem',
                      borderRadius: '0.75rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      marginBottom: '1rem',
                      letterSpacing: '0.6px',
                      border: `1px solid ${categoryColors[index % 6]}30`,
                      backdropFilter: 'blur(10px)'
                    }}>
                      ✨ {categoryNames[index % 6].toUpperCase()}
                    </div>

                    {/* Title */}
                    <h3 style={{
                      color: colors.text,
                      marginBottom: '0.875rem',
                      fontWeight: 800,
                      fontSize: '1.25rem',
                      lineHeight: 1.4,
                      letterSpacing: '-0.01em'
                    }}>
                      {categoryNames[index % 6]}: Les dernières avancées
                    </h3>

                    {/* Description */}
                    <p style={{
                      color: colors.textSecondary,
                      fontSize: '0.95rem',
                      marginBottom: '1.25rem',
                      lineHeight: 1.6,
                      fontWeight: 500
                    }}>
                      Découvrez comment les modèles d'IA révolutionnent les industries et créent de nouvelles opportunités...
                    </p>

                    {/* Footer */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: `1px solid ${colors.border}`
                    }}>
                      <span style={{
                        color: colors.textTertiary,
                        fontSize: '0.85rem'
                      }}>
                        Il y a {Math.floor(Math.random() * 7) + 1} jours
                      </span>
                      <span style={{
                        color: categoryColors[index % 6],
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}>
                        Lire plus →
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </Column>
  )
}

export default NewsPage