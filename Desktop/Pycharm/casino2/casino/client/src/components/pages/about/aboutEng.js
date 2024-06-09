import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { translate } from '../../../translations/translate'
import { useDispatch } from 'react-redux'
import { changePage, changeGame, changeGamePage } from '../../../reducers/page'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleQuestion} from '@fortawesome/free-solid-svg-icons'

function AboutEng(props){
    let casino_name = props.casino_name ? props.casino_name : translate({lang: props.lang, info: "our_casino"})
    let dispatch = useDispatch()
    function handleHowToPlay(){
        dispatch(changePage("how_to_play"))
        dispatch(changeGame(null))
        dispatch(changeGamePage(null))
    }
    return <Row id="about" className="other_page_container">
        <Col sm={2}></Col>
        <Col sm={8}>            
            <p>Добро пожаловать в TolegenBet, проект, созданный исключительно для забавы (конечно же для защиты курсовой работы, Так как я дурак выбрал тему Казино) казино, которые стремятся поделиться своей страстью к азартным играм со всем миром. Хотя этот проект не является коммерческим казино (по крайней мере, пока), моя задача состоит в том, чтобы предоставить людям уникальный и приятный игровой опыт.</p>
            <p id="about_how_to_play" onClick={()=>handleHowToPlay()}><FontAwesomeIcon icon={faCircleQuestion} />{translate({lang: props.lang, info: "how_to_play"})}</p>
        </Col>
    </Row>
}
export default AboutEng