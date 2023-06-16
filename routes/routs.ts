export {};
const express = require("express");
const router = express.Router();

import { isadmin, iscustomer } from "../Middelware/tokenveify";
import { addproduct } from "../controllers/Admin/Products/Add&Edintproduct";
import { addcategorys } from "../controllers/Admin/Category/AddCategory";
import { signup,Login } from "../controllers/auth/Auth";
import { getProduct } from "../controllers/comman/getProduct";
import { getcategory } from "../controllers/comman/getcategory";
import { deletproduct } from "../controllers/Admin/Products/Deleteproduct";
import {validateUser,validateLogin} from  "../joivalidations/Auth/joiauthschema";
import { CustomProduct } from "../controllers/USER/homepage/CustomProduct";
import {addcart}from "../controllers/USER/cart/Addtocart";
import {Getcart} from "../controllers/USER/cart/Getcart";
import { Deletecartitem } from "../controllers/USER/cart/Deletecartitem";
import { UpdateUser } from "../controllers/USER/profile/UpdateUser";
import { Address } from "../controllers/USER/address/Address";
import { GetAddress } from "../controllers/USER/address/GetAddress";
import { delAddress } from "../controllers/USER/address/delAddress";

import { categoryschema } from "../joivalidations/Adminvalidation/categoryschema";
import { productschema } from "../joivalidations/Adminvalidation/productschema";
import { addtocartschema } from "../joivalidations/uservalidation/addtocartschema";
import { deleteproduct } from "../joivalidations/uservalidation/deleteproduct";
import { deletaddress } from "../joivalidations/uservalidation/deletaddress";

//auth api
router.post("/signUp",validateUser,signup);
router.post("/login",validateLogin,Login);


//category api admin
router.post("/category", isadmin,categoryschema,addcategorys);
router.get("/getcategory",getcategory);


//product api  admin
router.get("/getproduct",getProduct);
router.post("/addproduct",isadmin, productschema,addproduct);
router.get("/getcproduct",CustomProduct);
router.delete("/deletproduct/:id",isadmin,deletproduct);


//cart  user
router.post("/addtocart",iscustomer,addtocartschema,addcart);
router.post("/getcart",Getcart);
router.post("/updateuser",iscustomer,UpdateUser);
router.delete("/deletecart",iscustomer,deleteproduct,Deletecartitem);


//address
router.post("/address",iscustomer,Address);
router.get("/getaddress",iscustomer,GetAddress);
router.delete("/deladdress",iscustomer,deletaddress,delAddress);

module.exports = router