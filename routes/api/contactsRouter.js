const express = require("express");

const { contactsControllers: cntr } = require("../../controllers");
const { validation, isValidId } = require("../../middlewars");
const { cntrlWrap } = require("../../helpers");
const { joiSchema, joiSchemaFavorite } = require("../../models/contact");

const contactsRouter = express.Router();

contactsRouter.get("/", cntrlWrap(cntr.getAll));

contactsRouter.get("/:id", isValidId, cntrlWrap(cntr.getById));

contactsRouter.post("/", validation(joiSchema), cntrlWrap(cntr.add));

contactsRouter.delete("/:id", isValidId, cntrlWrap(cntr.remove));

contactsRouter.put(
  "/:id",
  isValidId,
  validation(joiSchema),
  cntrlWrap(cntr.update)
);

contactsRouter.patch(
  "/:id/favorite",
  validation(joiSchemaFavorite),
  cntrlWrap(cntr.updateFavorite)
);

module.exports = contactsRouter;
