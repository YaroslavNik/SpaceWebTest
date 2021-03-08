import React from 'react'
import { createUseStyles } from 'react-jss'

const Footer = () => {
    const styles = useStyles()

    return (
        <div className = {styles.root}>
            <ul className = {styles.footerLicensed}>
                <li>
                    <span>© 2001– 2018 ООО </span>
                    <a href = '#' target = '_blank'>«СпейсВэб»</a> 
                </li>
                <li>
                    <span> Все права защищены.</span>
                </li>
                <li>
                    <span> Лицензия </span>
                    <a href = '#' target = '_blank'>№163230</a>
                </li>
            </ul>

            <ul className = {styles.footerContacts}>
                <li>
                    <a href="">+7 (812) 334-12-22</a>
                    <span> (в Санкт-Петербурге)</span>
                </li>
                <li>
                    <a href="">+7 (495) 663-16-12</a>
                    <span> (в Москве)</span>
                </li>
                <li>
                    <a href=""> (800) 100-16-15</a>
                    <span> (бесплатно по России)</span>
                </li>
            </ul>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        backgroundColor: '#F7FAFB',
        width: '100%',
        padding: '20px 20px 36px',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#000',
        fontSize: '12px',
        lineHeight: '15px',
        position: 'fixed',
        zIndex: '1',
        bottom: 0,
        left: 0,

        '& a': {
            color: '#3DBDF6'
        }
    },

    footerLicensed: {
        maxWidth: '176px',
        width: '100%',
    },

    footerContacts: {
        maxWidth: '215px',

    }
})

export default Footer
