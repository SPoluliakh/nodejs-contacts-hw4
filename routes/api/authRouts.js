const express = require("express");

const { authControllers: cntr } = require("../../controllers");
const { validation } = require("../../middlewars");
const { cntrlWrap } = require("../../helpers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const authRouter = express.Router();

authRouter.post(
  "/register",
  validation(joiRegisterSchema),
  cntrlWrap(cntr.register)
);

authRouter.post("/login", validation(joiLoginSchema), cntrlWrap(cntr.login));

module.exports = authRouter;
