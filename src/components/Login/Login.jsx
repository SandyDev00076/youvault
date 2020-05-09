import React from "react";

import SimpleLayout from "../../layouts/SimpleLayout";
import { AppLogo } from "../Header";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Link from "../atoms/Link";

import css from "./Login.module.scss";

const Login = () => {
  function logIn(evt) {
    evt.preventDefault();
  }

  return (
    <SimpleLayout componentClass={css.login}>
      <div className={css.welcome}>
        <div className={css.welcomeText}>Log in</div>
        <AppLogo />
      </div>
      <form className={css.loginForm} onSubmit={(evt) => logIn(evt)}>
        <Label name="Username">
          <Input />
        </Label>
        <Label name="Password">
          <Input />
        </Label>
        <Button type="primary" className={css.loginBut}>
          Log in
        </Button>
      </form>
      <div className={css.loginOptions}>
        <Link>Forgot Password?</Link>
        <Link>Create an account</Link>
      </div>
    </SimpleLayout>
  );
};

export default Login;
