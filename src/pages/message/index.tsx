import { useThemeColors } from "../../hooks/theme"
import Column from "../../components/column"
import Row from "../../components/row"
import { useState } from "react"
import './index.css'

const MessagePage = ()=> {
  const colors = useThemeColors()
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [typingIndicator, setTypingIndicator] = useState(false)

  const conversations = [
    { id: 1, name: 'Alice Martin', status: 'online', lastMessage: 'Oui, c\'est une excellente idée!', unread: 0 },
    { id: 2, name: 'Bob Johnson', status: 'offline', lastMessage: 'À bientôt!', unread: 2 },
    { id: 3, name: 'Carol Davis', status: 'online', lastMessage: 'Merci pour ton aide', unread: 0 },
    { id: 4, name: 'David Wilson', status: 'away', lastMessage: 'Je vais vérifier', unread: 1 },
    { id: 5, name: 'Emma Brown', status: 'online', lastMessage: 'Parfait!', unread: 0 }
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'online': return '#22c55e'
      case 'away': return '#f59e0b'
      case 'offline': return '#9ca3af'
      default: return '#9ca3af'
    }
  }

  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'online': return 'En ligne'
      case 'away': return 'Absent'
      case 'offline': return 'Hors ligne'
      default: return 'Hors ligne'
    }
  }

  return (
    <Row style={{flex: 1, height: '100%', gap: 0}}>
      {/* Conversations List */}
      <Column style={{flex: '0 0 340px', borderRight: `1.5px solid ${colors.border}`, overflowY: 'auto', backgroundColor: colors.secondaryBackground}}>
        <div style={{padding: '2rem 1.75rem', borderBottom: `1.5px solid ${colors.border}`}}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: 900,
            color: colors.text,
            marginBottom: '1.25rem',
            fontFamily: 'Poppins, sans-serif',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.01em'
          }}>
            💬 Messages
          </h2>
          <input
            type="text"
            placeholder="🔍 Rechercher..."
            style={{
              width: '100%',
              padding: '0.875rem 1.25rem',
              borderRadius: '1rem',
              border: `1.5px solid ${colors.border}`,
              fontSize: '0.9rem',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              backdropFilter: 'blur(10px)',
              backgroundColor: `${colors.primaryBackground}95`,
              fontWeight: 500
            }}
          />
        </div>

        {/* Conversation Items */}
        <div>
          {conversations.map((conv, idx) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              style={{
                padding: '1.25rem 1.5rem',
                borderBottom: `1px solid ${colors.border}`,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backgroundColor: selectedConversation === conv.id
                  ? `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.accent}10 100%)`
                  : 'transparent',
                borderLeft: selectedConversation === conv.id ? `4px solid ${colors.primary}` : '4px solid transparent',
                animation: `slideInLeft 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.05}s both`
              }}
              onMouseEnter={(e) => {
                if (selectedConversation !== conv.id) {
                  e.currentTarget.style.backgroundColor = `${colors.primary}08`
                  e.currentTarget.style.transform = 'translateX(4px)'
                }
              }}
              onMouseLeave={(e) => {
                if (selectedConversation !== conv.id) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.transform = 'translateX(0)'
                }
              }}
            >
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{position: 'relative', flexShrink: 0}}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    boxShadow: `0 4px 12px ${colors.primary}30`
                  }}>
                    {conv.name.charAt(0)}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: getStatusColor(conv.status),
                    border: `3px solid ${colors.secondaryBackground}`,
                    boxShadow: `0 0 0 2px ${colors.border}, 0 0 8px ${getStatusColor(conv.status)}60`
                  }}></div>
                </div>
                <div style={{flex: 1, minWidth: 0}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem'}}>
                    <div style={{fontWeight: 700, color: colors.text, fontSize: '0.95rem'}}>
                      {conv.name}
                    </div>
                    {conv.unread > 0 && (
                      <div style={{
                        backgroundColor: colors.primary,
                        color: '#fff',
                        borderRadius: '50%',
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 700
                      }}>
                        {conv.unread}
                      </div>
                    )}
                  </div>
                  <div style={{fontSize: '0.85rem', color: colors.textSecondary, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                    {conv.lastMessage}
                  </div>
                  <div style={{fontSize: '0.75rem', color: colors.textTertiary, marginTop: '0.25rem'}}>
                    {getStatusLabel(conv.status)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Column>

      {/* Chat Area */}
      <Column style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        {/* Chat Header */}
        <div style={{
          padding: '1.5rem',
          borderBottom: `1px solid ${colors.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: colors.secondaryBackground
        }}>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.25rem',
              position: 'relative'
            }}>
              A
              <div style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                border: `2px solid white`,
                boxShadow: `0 0 0 1px ${colors.border}`
              }}></div>
            </div>
            <div>
              <h3 style={{fontSize: '1.125rem', fontWeight: 700, color: colors.text, marginBottom: '0.25rem'}}>
                Alice Martin
              </h3>
              <p style={{fontSize: '0.85rem', color: colors.textSecondary}}>
                ✓ En ligne
              </p>
            </div>
          </div>
          <button style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: colors.textSecondary,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = colors.text}
          onMouseLeave={(e) => e.currentTarget.style.color = colors.textSecondary}>
            ⋮
          </button>
        </div>

        {/* Messages Area */}
        <Column style={{flex: 1, padding: '1.5rem', overflowY: 'auto', gap: '1rem'}}>
          {[
            {id: 1, text: 'Salut! Comment ça va?', sent: false, time: '10:30'},
            {id: 2, text: 'Ça va bien, merci! Et toi?', sent: true, time: '10:31'},
            {id: 3, text: 'Très bien! J\'ai une excellente nouvelle à te partager', sent: false, time: '10:32'},
            {id: 4, text: 'Dis-moi tout! 😊', sent: true, time: '10:33'}
          ].map((msg) => (
            <div key={msg.id} style={{
              display: 'flex',
              justifyContent: msg.sent ? 'flex-end' : 'flex-start',
              animation: 'slideUp 0.3s ease-out'
            }}>
              <div style={{
                maxWidth: '60%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: msg.sent ? 'flex-end' : 'flex-start',
                gap: '0.25rem'
              }}>
                <div style={{
                  padding: '0.875rem 1.25rem',
                  borderRadius: msg.sent ? '1rem 1rem 0.25rem 1rem' : '1rem 1rem 1rem 0.25rem',
                  backgroundColor: msg.sent ? colors.primary : colors.secondaryBackground,
                  color: msg.sent ? '#fff' : colors.text,
                  wordWrap: 'break-word',
                  boxShadow: msg.sent ? `0 4px 12px ${colors.primary}30` : `0 2px 6px rgba(0,0,0,.08)`,
                  transition: 'all 0.3s ease'
                }}>
                  {msg.text}
                </div>
                <span style={{fontSize: '0.75rem', color: colors.textTertiary}}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {typingIndicator && (
            <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: colors.textSecondary,
                animation: 'bounce 1.4s infinite'
              }}></div>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: colors.textSecondary,
                animation: 'bounce 1.4s infinite 0.2s'
              }}></div>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: colors.textSecondary,
                animation: 'bounce 1.4s infinite 0.4s'
              }}></div>
            </div>
          )}
        </Column>

        {/* Input Area */}
        <div style={{
          padding: '1.5rem',
          borderTop: `1px solid ${colors.border}`,
          display: 'flex',
          gap: '0.75rem',
          backgroundColor: colors.secondaryBackground
        }}>
          <input
            type="text"
            placeholder="✍️ Écrivez votre message..."
            onFocus={() => setTypingIndicator(true)}
            onBlur={() => setTypingIndicator(false)}
            style={{
              flex: 1,
              padding: '0.875rem 1rem',
              borderRadius: '0.75rem',
              border: `1.5px solid ${colors.border}`,
              fontSize: '0.95rem',
              transition: 'all 0.3s ease'
            }}
          />
          <button style={{
            padding: '0.875rem 2rem',
            backgroundColor: colors.primary,
            color: '#fff',
            border: 'none',
            borderRadius: '0.75rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: `0 4px 12px ${colors.primary}40`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = `0 8px 20px ${colors.primary}50`
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = `0 4px 12px ${colors.primary}40`
          }}>
            📤 Envoyer
          </button>
        </div>
      </Column>
    </Row>
  )
}

export default MessagePage