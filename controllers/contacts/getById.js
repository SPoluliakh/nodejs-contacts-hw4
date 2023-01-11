const { Contact } = require("../../models/contact");

const getById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id, "-createdAt -updatedAt").populate(
    "owner",
    "_id name email"
  );
  if (!contact) {
    const error = new Error(`contact whith id = ${id} not found`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = getById;
