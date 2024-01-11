const asyncHandler = require("express-async-handler")

//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler((req, res) => {
    res.status(200).json({ message: "Get all contracts" });
});

const createContact = asyncHandler((req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory");

    }
    res.status(200).json({ message: "Get all contracts" });
});

const getContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Get contract for ${req.params.id}` });
});

const updateContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Update contract for ${req.params.id}` });
});

const deleteContact = asyncHandler((req, res) => {
    res.status(200).json({ message: `Delete contract for ${req.params.id}` });
});

module.exports = { getContact, getContact, createContact, updateContact, deleteContact };