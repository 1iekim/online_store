import React from "react";
import {
  Button,
  Card,
  Container,
  Form,
  FormControl,
  NavLink,
  Row,
} from "react-bootstrap";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="mx-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <FormControl className="mt-3" placeholder="Введите ваш email..." />
          <FormControl className="mt-3" placeholder="Введите ваш пароль..." />
          <Row className="d-flex justify-content-between mt-3">
            <div>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink></div>
            <Button className="align-self-end" variant="outline-success">
              Войти
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
