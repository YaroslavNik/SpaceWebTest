import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import {ReactComponent as ArrowImg} from '../../assets/images/arrow.svg'
import AnimateHeight from 'react-animate-height'
import { appAPI } from '../../API/API'

interface AccordionProps {
    title: string
}

interface ContentProps {
    xml: Document,
    title: string
}

const getFilteredContent = ({xml, title}: ContentProps) => {
    const items = xml.getElementsByTagName('item');
    let filterItem = '';

    Array.from(items).forEach((item: any) => {
        if(item.children[0].textContent === title) filterItem = item.children[4].textContent
    })

    return filterItem
}

var Loader = require('react-loader');

const Accordion = ({title}: AccordionProps) => {
    const [height, setHeight] = useState<string | number>(0)
    const [data, setData] = useState<any>('')
    const [isFetching, setIsFetching] = useState(true)
    const styles = useStyles({height})


    const fetchData = async () => {
        const response = await appAPI.getContent()
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, 'text/xml');
        setData(getFilteredContent({xml, title}))
        setIsFetching(false)
    }

    const clickHandler = () => {
        height === "auto" ? setHeight(0) : setHeight("auto")
        if(isFetching) fetchData()
    }


    return (
        <div className = {styles.root}>
            <div className = {styles.title} onClick = {clickHandler}>
                <h2>{title}</h2>
                <span className = {styles.arrow}>
                    <ArrowImg/>
                </span>
            </div>
            <AnimateHeight 
                className = {styles.content}
                height = {height}
                duration = {300}
            >
                {isFetching 
                    ?   <Loader loader={isFetching} className="spinner"/>
                    :   data 
                }
            </AnimateHeight>            
        </div>
    )
}

const useStyles = createUseStyles({
    root: ({height}) =>  ({
        backgroundColor: `${height === 'auto' ? '#F3FCFF' : 'white'}`,
        paddingBottom: `${height === 'auto' ? '20px' : 0}`
    }),

    title: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(243, 252, 255)'
        }
    },

    content: {
        width: '100%',
        padding: '0px 20px'
    },

    arrow: ({height}) => ({
        transition: 'transform ease .3s',
        transform: `${height === 'auto' ? 'rotate(-180deg)' : 'none'}`
    })
})

export default Accordion
