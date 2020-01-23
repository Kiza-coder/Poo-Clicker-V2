import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (  
            <Container fluid={true} className={'mt-2'}>
                    <Row>
                        <Col xs={12} md={6} className={'componentFooter d-flex justify-content-around align-items-center'}>
                            <small>Follow us:</small>
                            
                            <a link href="https://github.com/MathieuKruk" target="_blank" rel="noopener noreferrer"><i className={"footerIcon fa fa-lg fa-github"} aria-hidden="true"></i></a>
                            
                            <a link href="https://www.linkedin.com/in/mathieu-kruk/" target="_blank" rel="noopener noreferrer"><i className={"footerIcon fa fa-lg fa-linkedin-square"} aria-hidden="true"></i></a>

                            <a link href="https://www.facebook.com/mathieu.kruk" target="_blank" rel="noopener noreferrer"><i className={"footerIcon fa fa-lg fa-facebook-official"} aria-hidden="true"></i></a>
                            
                            <a link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className={"footerIcon fa fa-lg fa-instagram"} aria-hidden="true"></i></a>
                        </Col>
                
                        <Col xs={12} md={6} className={'componentFooter d-flex justify-content-center align-items-center'}>
                            <small>&copy; Copyright 2019, BeCode: Kiza Motoko, Mathieu Kruk</small>
                        </Col>
                
                    </Row>
            </Container>          
    );
}

export default Footer;