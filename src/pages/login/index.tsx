import { type CSSProperties } from "react"
import type { CredentialResponse } from "@react-oauth/google"
import { jwtDecode } from "jwt-decode"

import GenericForm from "../../components/form"
import { UseAuth } from "../../context/user"
import type { LoginDTO } from "../../data/dto/login"
import { LoginFormFactory } from "../../services/factory/loginForm.factory"
import { useThemeColors } from "../../hooks/theme"
import { logoFactory } from "../../services/factory/logo.factory"
import './index.css'


const LoginPage = ()=> {
    const {login} = UseAuth()
    const colors = useThemeColors()
    const fields = LoginFormFactory()
    const logo = logoFactory(80,80)

    const titleStyle = {
        color: colors.text,
        fontFamily: 'Poppins, sans-serif',
        fontSize: '28px',
        fontWeight: 700,
    } as CSSProperties

    const style = {
        backgroundColor: colors.primaryBackground,
        display: "flex",
        flexDirection: "column",
        padding: 40,
        borderRadius: 16,
        gap: 24,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        border: `1px solid ${colors.border}`,
        maxWidth: '420px',
        width: '100%',
    } as CSSProperties

    const initialValues : LoginDTO = {
        email: '',
        password: ''
    }

    const onSuccess = (res : CredentialResponse)=>{
        const googleUser = jwtDecode(res.credential || '') as LoginDTO
        console.log(googleUser as LoginDTO)
        login({email:googleUser.email,password:'test'})
    }

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, ${colors.primary}10 0%, ${colors.accent}10 100%)`,
            padding: '1rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
                animation: 'float 6s ease-in-out infinite'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '-30%',
                left: '-5%',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${colors.accent}20 0%, transparent 70%)`,
                animation: 'float 8s ease-in-out infinite 1s'
            }}></div>

            <div style={{
                width: '100%',
                maxWidth: '420px',
                position: 'relative',
                zIndex: 10,
                animation: 'slideUp 0.6s ease-out'
            }}>
                {/* Header */}
                <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '1.5rem',
                        animation: 'slideDown 0.6s ease-out'
                    }}>
                        {logo && (
                            <div style={{
                                padding: '1rem',
                                borderRadius: '1rem',
                                background: `linear-gradient(135deg, ${colors.primary}20, ${colors.accent}20)`,
                                border: `1px solid ${colors.border}`,
                                transition: 'all 0.3s ease'
                            }}>
                                <img
                                    src={logo.logoUrl}
                                    width={logo.logoWidth}
                                    height={logo.logoHeight}
                                    alt="eKandra Logo"
                                    style={{display: 'block'}}
                                />
                            </div>
                        )}
                    </div>
                    <h1 style={{
                        fontSize: '2.25rem',
                        fontWeight: 800,
                        color: colors.text,
                        marginBottom: '0.5rem',
                        fontFamily: 'Poppins, sans-serif',
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        eKandra
                    </h1>
                    <p style={{
                        color: colors.textSecondary,
                        fontSize: '1rem',
                        marginTop: '0.5rem'
                    }}>
                        🚀 Découvrez les dernières actualités en IA
                    </p>
                </div>

                {/* Form Card */}
                <div style={{
                    ...style,
                    animation: 'fadeIn 0.8s ease-out 0.2s both',
                    boxShadow: `0 20px 40px ${colors.primary}20, 0 0 1px ${colors.border}`
                }}>
                    <GenericForm
                        fields={fields}
                        initialValues={initialValues}
                        title="🔐 Connexion"
                        titleStyle={titleStyle}
                        submitText="Se connecter"
                        onSubmit={login}
                        style={{backgroundColor: 'transparent', padding: 0, borderRadius: 0, gap: 0}}
                        showGoogleLogin={true}
                        onGoogleLoginSuccess={onSuccess}
                        logo={undefined}
                    />
                </div>

                {/* Footer */}
                <p style={{
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    color: colors.textSecondary,
                    marginTop: '1.5rem',
                    animation: 'fadeIn 0.8s ease-out 0.4s both'
                }}>
                    ✨ Partagez et découvrez les meilleures pratiques en IA
                </p>
            </div>
        </div>
    )
}

export default LoginPage