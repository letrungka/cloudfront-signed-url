var cfsign = require('aws-cloudfront-sign');

var signingParams = {
  keypairId: "KQ20AKKDRZDA2", // ID of cloudfront public key
  //  privateKeyString: process.env.PRIVATE_KEY,   // content of ssh private key
  // Optional - this can be used as an alternative to privateKeyString
  privateKeyPath: 'private_key.pem',
  expireTime: 1625819116619 //in UNIX milliseconds
}

// Generating a signed URL
var signedUrl = cfsign.getSignedUrl(
  'https://d3st2bcjk6heqe.cloudfront.net/upload/*', 
  signingParams
);

console.log(signedUrl)

// https://www.npmjs.com/package/aws-cloudfront-sign