import type { CSSProperties } from "react"

import type { NavItemProps } from "../../interfaces/components/navItem"
import { NavItem } from "./navItem"
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
  gap: "2rem"
} as CSSProperties

export const NavBar = (props:Props) => {

  return (
    <nav style={{...defaultStyle, ...props.style}} className="navbar-modern">
      <div className="leftMenu">
        {
          props.navItems.map((nav:NavItemProps) => {
            return (
              <NavItem {...nav} key={nav.path}/>
            )
          })
        }
      </div>
      <div className="rightMenu">
        <div className="user-profile">
          <div className="avatar-container">
            <img src="avatar.jpg" alt="User" className="avatar"/>
          </div>
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-status">En ligne</span>
          </div>
          <button className="dropdown-btn" aria-label="Menu utilisateur">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}