import mongoose from "mongoose";
import Contact from "../models/contacts.models.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.render("home", { allContacts: contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).render("500", { message: "Error fetching contacts" });
  }
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
    console.error("Error fetching contact:", error);
    res.status(500).render("500", { message: "Error fetching contact" });
  }
};

export const addContactPage = (req, res) => {
  res.render("add-contact");
};

export const addContact = async (req, res) => {
  try {
    const contacts = await Contact.create(req.body);
    res.redirect("/");
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).render("500", { message: "Error adding contact" });
  }
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
    console.error("Error updating contact page:", error);
    res.status(500).render("500", { message: "Error updating contact" });
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
    console.error("Error updating contact:", error);
    res.status(500).render("500", { message: "Error updating contact" });
  }
};

export const deleteContact = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.render("404", { message: "Invalid ID" });
  }
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) 
      return res.render("404", { message: "contact not exist in database" });
    return res.redirect("/");
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).render("500", { message: "Error deleting contact" });
  }
};
