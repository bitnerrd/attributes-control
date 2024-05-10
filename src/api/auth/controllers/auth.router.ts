import { Body, Controller, Get, Post, Request, Route } from "tsoa";
import { ISignup } from "../interfaces/IAuth";

@Route("api")
export class AuthController {
  @Post("auth/signup")
  async signUp() {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  @Get("")
  async router() {
    console.log("router function");
    return;
  }
}
