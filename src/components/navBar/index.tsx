import type { CSSProperties } from "react"
import { Search, Plus, MessageSquare, Bell } from "lucide-react"
import type { NavItemProps } from "../../interfaces/components/navItem"
import './index.css'

type Props = {
  style? : CSSProperties
  navItems : NavItemProps []
}

const defaultStyle = {
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  justifyContent: "space-between",
  flex: 1,
  padding: "0 1.5rem",
  gap: "2rem",
  height: "70px"
} as CSSProperties

export const NavBar = (props:Props) => {

  return (
    <nav style={{...defaultStyle, ...props.style}} className="navbar-modern">
      {/* Logo & Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '200px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem'
        }}>
          🤖
        </div>
        <div>
          <h1 style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            margin: 0,
            background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em'
          }}>AI Etech</h1>
          <p style={{ 
            fontSize: '0.7rem', 
            margin: 0, 
            color: 'hsl(var(--text-secondary))',
            fontWeight: 500
          }}>Knowledge Hub</p>
        </div>
      </div>

      {/* Search Bar - Center */}
      <div style={{ 
        flex: 1, 
        maxWidth: '600px',
        position: 'relative'
      }}>
        <Search 
          size={18} 
          style={{
            position: 'absolute',
            left: '1rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'hsl(var(--text-muted))'
          }}
        />
        <input
          type="text"
          placeholder="Rechercher articles, tags, auteurs..."
          style={{
            width: '100%',
            padding: '0.75rem 1rem 0.75rem 3rem',
            borderRadius: '12px',
            border: '1px solid hsl(var(--border))',
            backgroundColor: 'hsl(var(--background))',
            color: 'hsl(var(--text-primary))',
            fontSize: '0.9rem',
            outline: 'none',
            transition: 'all 0.3s ease'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'hsl(var(--primary))'
            e.currentTarget.style.boxShadow = '0 0 0 3px hsl(var(--primary) / 0.1)'
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'hsl(var(--border))'
            e.currentTarget.style.boxShadow = 'none'
          }}
        />
      </div>

      {/* Right Actions */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        minWidth: '200px',
        justifyContent: 'flex-end'
      }}>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1.25rem',
          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontWeight: 700,
          fontSize: '0.85rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 8px 20px hsl(var(--primary) / 0.4)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}>
          <Plus size={16} />
          Publier
        </button>
        
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.625rem 1rem',
          background: 'transparent',
          color: 'hsl(var(--text-primary))',
          border: '1px solid hsl(var(--border))',
          borderRadius: '10px',
          fontWeight: 600,
          fontSize: '0.85rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(var(--background))'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
        }}>
          <MessageSquare size={16} />
          Chat IA
        </button>

        <button style={{
          padding: '0.5rem',
          background: 'transparent',
          color: 'hsl(var(--text-secondary))',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          position: 'relative',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(var(--background))'
          e.currentTarget.style.color = 'hsl(var(--text-primary))'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent'
          e.currentTarget.style.color = 'hsl(var(--text-secondary))'
        }}>
          <Bell size={20} />
          <span style={{
            position: 'absolute',
            top: '6px',
            right: '6px',
            width: '8px',
            height: '8px',
            background: 'hsl(var(--accent))',
            borderRadius: '50%',
            border: '2px solid hsl(var(--background))'
          }}></span>
        </button>

        <div className="user-profile">
          <div className="avatar-container" style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}>
            JD
          </div>
        </div>
      </div>
    </nav>
  )
}