import React from 'react'
import { createUseStyles } from 'react-jss'
import { NavLink } from 'react-router-dom'
import {ReactComponent as LogoImg} from '../../assets/images/logo.svg'
import {ReactComponent as UserImg} from '../../assets/images/user.svg'
import {ReactComponent as VpsImg} from '../../assets/images/vps.svg'
import {ReactComponent as DomensImg} from '../../assets/images/domens.svg'
import {ReactComponent as HelpImg} from '../../assets/images/help.svg'

const links = [
    {
        image: UserImg,
        title: 'Аккаунт',
        src: '/user',
    },
    {
        image: VpsImg,
        title: 'VPS',
        src: '/vps',
    },
    {
        image: DomensImg,
        title: 'Домены',
        src: '/domens',
    },
    {
        image: HelpImg,
        title: 'Бортовой журнал',
        src: '/help',
    }
]

const Sidebar = () => {
    const styles = useStyles()
    
    return (
        <div className = {styles.root}>
            <div className = {styles.content}>
                <div className = {styles.logo}>
                    <LogoImg/>
                </div>
                <div className = {styles.links}>
                    {links.map((link, index) => 
                        <NavLink className = {styles.link} activeClassName = {styles.linkActive} exact to = {link.src} key = {index}>
                            <span><link.image/></span>
                            <span>{link.title}</span>
                        </NavLink>
                    )}                    
                </div>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        backgroundColor: '#062436',
        maxWidth: '211px',
        width: '100%',
        position: 'fixed',
        height: '100vh'
    },

    content: {
        color: '#FFFFFF',
        paddingTop: '22px '
    },

    logo: {
        padding: '0px 20px',
        marginBottom: '68px'
    },

    links: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    link: {
        height: '40px',
        width: '100%',
        padding: '0px 12px 0px 20px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'nowrap',

        '&:hover': {
            background: '#15526A',
        },

        '& span:first-of-type': {
            maxWidth: '37px',
            width: '100%'
        },

        '& span:last-of-type': {
            fontWeight: 'bold',
            fontSize: '14px',
            lineHeight: '17px',
            textTransform: 'uppercase'
        },
    },

    linkActive: {
        background: '#15526A',
        position: 'relative',

        '&::before': {
            position: 'absolute',
            content: '""',
            width: '6px',
            height: '100%',
            background: '#3DBDF6',
            top: '0',
            left: '0'
        }
    }
})

export default Sidebar
