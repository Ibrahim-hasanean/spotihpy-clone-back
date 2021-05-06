let admin = require("firebase-admin");
// var serviceAccount = require("../spotiphy-clone-firebase-adminsdk-qd9h0-c30c14f41b.json");
require("dotenv").config();
// console.log(process.env.type);
let serviceAccount = {
  type: `${process.env.type}`,
  project_id: `${process.env.project_id}`,
  private_key_id: `${process.env.private_key_id}`,
  private_key: `${process.env.private_key.replace(/\\n/g, "\n")}`,
  client_email: `${process.env.client_email}`,
  client_id: `${process.env.client_id}`,
  auth_uri: `${process.env.auth_uri}`,
  token_uri: `${process.env.token_uri}`,
  auth_provider_x509_cert_url: `${process.env.auth_provider_x509_cert_url}`,
  client_x509_cert_url: `${process.env.client_x509_cert_url}`,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.BUCKET_URL,
});
let bucket = admin.storage().bucket();

module.exports = admin;
