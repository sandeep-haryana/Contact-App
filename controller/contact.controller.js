import mongoose from "mongoose";
import Contact from "../models/contacts.models.js";

export const getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.render("home", { allContacts: contacts });
};

export const getContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render("404", { message: "invalid id" });
  }

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact)
      return res.render("404", { message: "contact not exist in database" });

    return res.render("show-contact", { contact });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const addContactPage = (req, res) => {
  res.render("add-contact");
};

export const addContact = async (req, res) => {
  const contacts = await Contact.create(req.body);
  res.redirect("/");
};

export const updateContactPage = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render("404", { message: "invalid id" });
  }

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact)
      return res.render("404", { message: "contact not exist in database" });

    return res.render("update-contact", { contact });
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const updateContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render("404", { message: "Invalid ID" });
  }
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body);
    if (!contact)
      return res.render("404", { message: "contact not exist in database" });

    return res.redirect("/");
  } catch (error) {
    res.render("500", { message: error });
  }
};

export const deleteContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.render("404", { message: "Invalid ID" });
  }
  try {
    const contact =await Contact.findByIdAndDelete(req.params.id)
    if(!contact) 
      return res.render("404",{message:"contact not exist in database" })
    return res.redirect("/")
    
  } catch (error) {
    res.render("500",{message:error})
  }
};
