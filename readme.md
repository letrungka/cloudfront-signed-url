// https://www.npmjs.com/package/aws-cloudfront-sign
// create key pairs for CF signer

openssl genrsa -out private_key.pem 2048
openssl rsa -pubout -in private_key.pem -out public_key.pem