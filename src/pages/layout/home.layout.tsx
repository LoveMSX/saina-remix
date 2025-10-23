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
              flex: "0 0 15%",
              background: colors.secondaryBackground,
              borderRight: `1px solid ${colors.border}`,
              overflowY: 'auto',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            <aside>
              <div style={{marginBottom: '1.5rem'}}>
                <h3 style={{
                  color: colors.text,
                  fontWeight: 700,
                  marginBottom: '1rem',
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase'
                }}>
                  Menu
                </h3>
              </div>
              <button
                onClick={logout}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#ef4444',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: 'auto'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
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
              flex: "0 0 15%",
              background: colors.secondaryBackground,
              borderLeft: `1px solid ${colors.border}`,
              overflowY: 'auto',
              padding: '1.5rem'
            }}
          >
            {/* Right sidebar - peut être utilisé pour des widgets */}
            <div style={{
              padding: '1rem',
              backgroundColor: colors.primaryBackground,
              borderRadius: '0.75rem',
              border: `1px solid ${colors.border}`,
              textAlign: 'center'
            }}>
              <p style={{color: colors.textSecondary, fontSize: '0.9rem'}}>
                💡 Espace réservé pour les widgets
              </p>
            </div>
          </Column>
        </Row>
      </Column>
  );
}

export default HomeLayout