import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = () => {
     const location = useLocation();
     const isLogin = location.pathname === LOGIN_ROUTE;
     return (
     <Container 
          className="d-flex justify-content-center align-items-center"
          style={{height: window.innerHeight - 54}}
     >
          <Card style={{width: 600}} className="p-5">
               <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
               <Form className="d-flex flex-column">
                    <Form.Control 
                         className="mt-3"
                         placeholder="Введите email..."
                    />
                    <Form.Control 
                         className="mt-3 "
                         placeholder="Введите пароль..."
                    />
                    <Row className="d-flex justify-content-between mt-3 ps-3 pe-3">
                         {isLogin ?
                              <div className="w-auto">
                              Нет аккаунта? <NavLink className="text-decoration-none" to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                              </div>
                              :
                              <div className="w-auto">
                              Есть аккаунт? <NavLink className="text-decoration-none" to={LOGIN_ROUTE}>Войти</NavLink>
                              </div>
                         }
                         <Button 
                              variant={"outline-dark"}
                              className="w-auto"                              
                         >
                              {isLogin ? "Войти" : "Регистрация"}
                         </Button>
                    </Row>
                    
               </Form>
          </Card>   

     </Container>   
    );
  
}



export default Auth;