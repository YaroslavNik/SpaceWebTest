import React from 'react'
import { createUseStyles } from 'react-jss'
import Accordion from '../../Common/Accodion'

const titles = [
    'Топ-6 сервисов для проверки кроссбраузерности сайта',
    'NVMe SSD диски — обзор технологии',
    'Качественный хостинг дешево: миф или реальность?',
    'Как выбрать хостинг для сайта? ',
    'BrainyCP: Обзор и отзывы'
]

const Help = () => {
    const styles = useStyles()

    return (
        <div className = {styles.root}>
            <div className = {styles.titles}>
                <h2>Бортовой журнал</h2>
                <h1>Бортовой журнал</h1>
            </div>
            <div className = {styles.accordions}>
                {titles.map((title, index) => 
                    <Accordion title = {title} key = {index}/>
                )}
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        maxWidth: '1029px',
        background: '#FFFFFF',
        boxShadow: '1px 1px 4px #E3E9EC',
        fontSize: '16px',
        lineHeight: '19px',
        color: '#000000'
    },

    accordions: {
        '& > *': {
            position: 'relative',

            '&:not(:last-child)::before': {
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '2px',
                background: '#F7FAFB',
                content: '""'
            }
    }
    },

    titles: {
        padding: '16px 20px',
        color: '#062436',
        textTransform: 'uppercase',
        position: 'relative',

        '&::before': {
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '2px',
            background: '#F7FAFB',
            content: '""'
        },

        '& > h1': {
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 'bold',
        },

        '& > h2': {
            fontSize: '12px',
            lineHeight: '15px',
            marginBottom: '10px',
            fontWeight: 'normal'
        }
    }
})

export default Help
