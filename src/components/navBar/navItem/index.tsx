import { NavLink } from "react-router-dom";

import type { NavItemProps } from "../../../interfaces/components/navItem";
import type { CSSProperties } from "react";
import './index.css'

type Props = NavItemProps & {
  style? : CSSProperties
}


export const NavItem = ({name,path,type,logo,style}:Props)=>{
  // Icon mapping for navigation items
  const iconMap: {[key: string]: string} = {
    'Accueil': '🏠',
    'Actualités': '📰',
    'Messages': '💬',
    'Profil': '👤',
    'Paramètres': '⚙️'
  }

  switch (type) {
    case "icon":
      return (
        <NavLink
          style={{...style, marginInline: 12, padding: '0.5rem'}}
          to={path}
          className="nav-item-icon"
        >
          <div className="icon-wrapper">
            <img width={logo?.logoWidth} height={logo?.logoHeight} src={logo?.logoUrl} alt="Logo"/>
          </div>
        </NavLink>
      )

    default:
      return (
        <NavLink
          className={({isActive}) => `nav-item-text ${isActive ? 'active' : ''}`}
          style={style}
          to={path}
        >
          <span className="nav-item-icon-emoji">
            {iconMap[name] || '📌'}
          </span>
          <span>{name}</span>
        </NavLink>
      )
  }

}