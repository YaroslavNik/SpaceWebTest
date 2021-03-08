import React from 'react'
import { createUseStyles } from 'react-jss'
import {ReactComponent as AlarmImg} from '../../assets/images/alarm.svg'

const Header = () => {
    const styles = useStyles()
    
    return (
        <div className = {styles.root}>
            <div className = {styles.headerInfo}>
                <p>100.00 ₽</p>
                <p className = {styles.headerInfoImg}>
                    <span>
                        <span className = {styles.headerInfoImgCircle}>1</span>
                        <AlarmImg/>
                    </span>
                    <span>vikavishny</span>
                </p>
                <p className = {styles.headerInfoBtn}>
                    <button>Выйти</button>
                </p>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        width: '100%',
        backgroundColor: 'inherit',
        height: '61px'

    },

    headerInfo: {
        display: 'flex',
        marginLeft: 'auto',
        width: 'fit-content',
        height: '100%',
        alignItems: 'center',

        '& > p': {
            fontSize: '12px',
            lineHeight: '15px',
            color: '#7A8185',

            '&:not(:last-child)': {
                marginRight: '30px'
            }
        }
    },

    headerInfoImg: {
        display: 'flex',
        alignItems: 'center',

        '& > span:first-of-type': {
            marginRight: '12px',
            position: 'relative'
        }
    },

    headerInfoImgCircle: {
        position: 'absolute',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        color: 'white',
        backgroundColor: '#D0021B',
        textAlign: 'center',
        fontSize: '10px',
        lineHeight: '12px',
        top: '0',
        right: '-6px'
    },

    headerInfoBtn: {
        '& > button': {
            border: 'none',
            background: 'none',
            color: 'inherit',
            fontSize: '12px',
            lineHeight: '15px',
            padding: '0',
            cursor: 'pointer'
        }
    }
})

export default Header
