import express from "express"
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser, loginUser } from "../controllers/userscontroller.js"
import {body, check} from "express-validator"
import { usersValidation } from "../middlewares/validationMiddleware.js"
import { isAdmin } from "../middlewares/isAdminMiddleware.js"
import verifyToken from "../middlewares/verifyToken.js"
const route = express.Router()

// Route GET "/users"

route.get( "/" ,verifyToken,  isAdmin,  getAllUsers)

// Route POST "/users/login"
route.post("/login", loginUser)

// Route GET "/users/:id"
route.get("/:id",verifyToken,  getSingleUser)

// Route POST "/users"

route.post("/",  usersValidation,  createUser)
// Route PATCH "/users/:id"
route.patch("/:id",verifyToken, updateUser)
// Route DELETE "/users/:id"
route.delete("/:id",verifyToken, deleteUser)


//Important !!!
export default route