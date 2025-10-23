import { Outlet } from "react-router-dom";

import { UseAuth } from "../../context/user";
import "./index.css"
import { NavBar } from "../../components/navBar";
import { navBarFactory } from "../../services/factory/navBar.factory";
import Column from "../../components/column";
import Row from "../../components/row";
import { useThemeColors } from "../../hooks/theme";

const HomeLayout = () => {
    const {logout} = UseAuth()
    const navItems = navBarFactory()
    const colors = useThemeColors()


    return (
      <Column style={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Row
          className="navSticky"
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: colors.primaryBackground,
            zIndex: 100,
            borderBottom: `1px solid ${colors.border}`
          }}
        >
          <NavBar navItems={navItems}/>
        </Row>
        <Row style={{flex: 1, overflow: 'hidden'}}>
          <Column
            className="sidebar"
            style={{
              flex: "0 0 280px",
              background: colors.secondaryBackground,
              borderRight: `1px solid ${colors.border}`,
              overflowY: 'auto',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}
          >
            <aside>
              {/* À la une */}
              <div style={{
                background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}10)`,
                padding: '1rem',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                border: `1px solid ${colors.border}`
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>🔥</span>
                  <h3 style={{
                    color: colors.text,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    margin: 0
                  }}>À la une</h3>
                </div>
              </div>

              {/* Navigation Items */}
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  { name: 'Historique', icon: '🕐', badge: null },
                  { name: 'Tendances', icon: '📈', badge: '12' },
                  { name: 'Communauté', icon: '👥', badge: null },
                  { name: 'Chat IA', icon: '💬', badge: '3' }
                ].map((item) => (
                  <div
                    key={item.name}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.875rem 1rem',
                      borderRadius: '10px',
                      color: colors.text,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontWeight: 500,
                      fontSize: '0.9rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.secondaryBackground
                      e.currentTarget.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.transform = 'translateX(0)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                        color: 'white',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 700
                      }}>{item.badge}</span>
                    )}
                  </div>
                ))}
              </nav>

              {/* Rubriques */}
              <div style={{ marginTop: '2rem' }}>
                <h4 style={{
                  color: colors.textSecondary,
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '1rem'
                }}>RUBRIQUES</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    { name: 'NLP', count: '24', color: 'hsl(250 95% 65%)' },
                    { name: 'LLM', count: '18', color: 'hsl(271 81% 56%)' },
                    { name: 'MLOps', count: '12', color: 'hsl(142 71% 45%)' },
                    { name: 'Computer Vision', count: '15', color: 'hsl(320 81% 56%)' },
                    { name: 'Robotics', count: '8', color: 'hsl(24 95% 53%)' }
                  ].map((rubric) => (
                    <div
                      key={rubric.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.625rem 0.75rem',
                        borderRadius: '8px',
                        border: `1px solid ${rubric.color}30`,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = `${rubric.color}15`
                        e.currentTarget.style.borderColor = rubric.color
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.borderColor = `${rubric.color}30`
                      }}
                    >
                      <span style={{
                        color: rubric.color,
                        fontWeight: 600,
                        fontSize: '0.85rem'
                      }}>{rubric.name}</span>
                      <span style={{
                        color: colors.textSecondary,
                        fontSize: '0.8rem',
                        fontWeight: 500
                      }}>{rubric.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={logout}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: 'auto',
                  fontSize: '0.9rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#dc2626'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#ef4444'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                🚪 Déconnexion
              </button>
            </aside>
          </Column>
          <Column
            className="main-content"
            style={{
              flex: "1 1 70%",
              overflowY: "auto",
              backgroundColor: colors.primaryBackground
            }}
          >
            <Outlet/>
          </Column>
          <Column
            className="sidebar"
            style={{
              flex: "0 0 320px",
              background: colors.secondaryBackground,
              borderLeft: `1px solid ${colors.border}`,
              overflowY: 'auto',
              padding: '1.5rem',
              gap: '1.5rem'
            }}
          >
            {/* Assistant IA Widget */}
            <div style={{
              background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}10)`,
              borderRadius: '12px',
              padding: '1.25rem',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem'
                }}>🤖</div>
                <div>
                  <h3 style={{
                    color: colors.text,
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    margin: 0
                  }}>Assistant IA</h3>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    fontSize: '0.75rem',
                    color: colors.textSecondary,
                    marginTop: '0.125rem'
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: colors.accent,
                      borderRadius: '50%',
                      display: 'inline-block'
                    }}></span>
                    Llama 3-8B
                  </span>
                </div>
              </div>
              <p style={{
                color: colors.textSecondary,
                fontSize: '0.85rem',
                margin: 0,
                lineHeight: 1.5
              }}>
                Bonjour ! Je suis votre assistant IA spécialisé en technologies d'IA.
              </p>
            </div>

            {/* Stats rapides */}
            <div style={{
              background: colors.secondaryBackground,
              borderRadius: '12px',
              padding: '1.25rem',
              border: `1px solid ${colors.border}`
            }}>
              <h4 style={{
                color: colors.text,
                fontSize: '0.9rem',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>Statistiques</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Articles publiés', value: '147', change: '+12', icon: '📰' },
                  { label: 'Temps lecture moyen', value: '8', suffix: 'min', change: 'Stable', icon: '⏱️' },
                  { label: 'Contributeurs actifs', value: '23', change: '+3', icon: '👥' },
                  { label: 'Discussions', value: '89', change: '+15', icon: '💬' }
                ].map((stat) => (
                  <div key={stat.label} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>{stat.icon}</span>
                      <span style={{
                        color: colors.textSecondary,
                        fontSize: '0.8rem'
                      }}>{stat.label}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        color: colors.text,
                        fontWeight: 700,
                        fontSize: '0.95rem'
                      }}>
                        {stat.value}{stat.suffix || ''}
                      </div>
                      <span style={{
                        color: stat.change.includes('+') ? colors.accent : colors.textTertiary,
                        fontSize: '0.7rem',
                        fontWeight: 600
                      }}>{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Articles vedettes */}
            <div style={{
              background: colors.secondaryBackground,
              borderRadius: '12px',
              padding: '1.25rem',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <h4 style={{
                  color: colors.text,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  margin: 0
                }}>À la une</h4>
                <span style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  color: 'white',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: 700
                }}>3 articles vedettes</span>
              </div>
            </div>
          </Column>
        </Row>
      </Column>
  );
}

export default HomeLayout