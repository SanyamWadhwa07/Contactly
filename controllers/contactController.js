const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactmodel");
const contactmodel = require("../models/contactmodel");
//@desc - get all contacts
//@route GET /api/contacts
//@access private

const getContacts = asyncHandler(async(req,res)=>{
    const Contacts = await Contact.find({user_id: req.user_id});
    res.status(200).json(Contacts);

})

//@desc - Create all contacts
//@route POST /api/contacts
//@access private

const createContact =asyncHandler(async(req,res)=>{
    console.log("the request body is ",req.body);
    const {name,email,phoneNo} =req.body;
    if( !name || !email || !phoneNo){
        res.status(400);
        throw new Error("All fields are mandatory");
        
    };
    const contact = await Contact.create({
        name,
        email,
        phoneNo,
    });
    res.status(201).json(contact);

})

//@desc - get particular id contacts
//@route GET /api/contacts/id
//@access private

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
 res.status(200).json(contact);
});


//@desc - update contact
//@route PUT /api/contacts/id
//@access private

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
  if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});
//@desc - delete contact
//@route DELETE /api/contacts/id 
//@access private

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

   
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

   
    await contact.deleteOne();

   
    res.status(200).json({ message: `Contact with id ${req.params.id} deleted successfully` });
});

module.exports = { getContacts,
    createContact,
    getContact,updateContact,deleteContact

}