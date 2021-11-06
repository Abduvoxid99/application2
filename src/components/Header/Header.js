import React from "react"
import {Col, Row} from "antd"
import leftOutIcon from "../../icons/Icon color.png"

const Header = ({handleClick,title}) => {
    return (
        <div>
            <Row>
                <Col span={2}>
                    <span className='header_back_image' onClick={handleClick}><img src={leftOutIcon} alt=""/></span>
                </Col>
                <Col span={22}><h1 className="header_title">{title}</h1></Col>
            </Row>
        </div>
    )
}

export default Header