const express = require("express");
const router = express.Router();

router.get("/fedcm.json", async (req, res, next) => {
  console.log("fedcm.json",req.params,req.body,req.headers,req.baseUrl)
  return res.status(200).json({
    "accounts_endpoint": "/auth/accounts",
    "client_metadata_endpoint": "/auth/metadata",
    "id_token_endpoint": "/auth/idtokens"
  });
});

router.get("/metadata", async (req, res, next) => {
  console.log("metadata,",req.params,req.body,req.headers)
  return res.status(200).json({
    "privacy_policy_url": "https://www.amazon.in/gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help",
    "terms_of_service_url": "https://www.amazon.in/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ",
  });
});
router.get("/accounts", async (req, res, next) => {
  console.log("accounts",req.params,req.body,req.headers,req.baseUrl)
  return res.status(200).json({
    "accounts": [{
      "id": "1234",
      "given_name": "John",
      "name": "John Doe",
      "email": "john_doe@idp.example",
     }, {
      "id": "5678",
      "given_name": "Johnny",
      "name": "Johnny",
      "email": "johnny@idp.example",
     }]
   });
});
router.post("/idtokens", async (req, res, next) => {
  console.log("idtokens",req.params,req.body,req.headers,req.baseUrl)
  return res.status(200).json({
    "token": "eyJ3242323"
  });
});

module.exports = router;
