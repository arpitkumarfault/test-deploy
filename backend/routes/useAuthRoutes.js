import { Router } from "express";
import express from 'express'
import userRegister from "../controller/userRegister.js";
import userLogin from "../controller/userLogin.js";
const router = express.Router();


router.post('/register',userRegister)
router.post('/login',userLogin)

export default router;
