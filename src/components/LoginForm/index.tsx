// import Input from "../Input";
import { Button, Flex, Input } from "antd";
import * as S from "./styles";
import React from "react";
//import { LockOutlined, UserOutlined } from "@ant-design/icons";
const LoginForm = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <S.Container>
      <S.Card>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="login">Login</label>
            <Input placeholder="Login" id="login" name="login" type="text" />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <Input
              placeholder="Senha"
              id="password"
              name="password"
              type="password"
            />
          </div>

          <Flex justify="end">
            <Button type="primary" htmlType="submit">
              {" "}
              Entrar{" "}
            </Button>
          </Flex>
        </form>
      </S.Card>
    </S.Container>
  );
};
export default LoginForm;
