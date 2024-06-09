import React from 'react'
import { Col, Row } from 'react-bootstrap'

function PolicyPrivacyEng(){
    return <Row id="policy_privacy" className="other_page_container">
        <Col sm={2}></Col>
        <Col sm={8}>
            <h3>Введение</h3>
            <p>В этом документе о политике конфиденциальности описано, как мы собираем, используем, раскрываем и защищаем личную информацию, полученную от пользователей нашего веб-сайта казино. Мы обязуемся обеспечивать конфиденциальность и безопасность всей предоставляемой нам личной информации. Используя наш веб-сайт, вы соглашаетесь с методами, описанными в этом документе.</p>
            
            <h3>Сбор личной информации</h3>
            <p>Мы можем собирать следующие типы личной информации от пользователей:</p>
            <ul>
                <li><b>Контактные данные: </b>Это включает в себя ваше имя, адрес электронной почты, номер телефона и почтовый адрес.</li>
                <li><b>Данные аккаунта: </b>Если вы создадите учетную запись на нашем веб-сайте, мы можем получить ваше имя пользователя, пароль и другие данные, связанные с учетной записью.</li>
            </ul>
        </Col>
        <Col sm={2}></Col>
    </Row>
}
export default PolicyPrivacyEng