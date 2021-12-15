// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_cognito_region": "ap-south-1",
  "aws_user_pools_id": "ap-south-1_nDwp5PGi5",                           // CognitoID
  "aws_user_pools_web_client_id": "49dm05jhhk8kvqef7ktu47ofc8",     // CognitoClientID
  "api_base_url": "https://pkvgqx2b90.execute-api.ap-south-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "mytodoappdemo-jaydip-lambda-refarch-webapp.auth.ap-south-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://amplify-console.d1mbe09cqwc6qv.amplifyapp.com"                                      // AmplifyURL
};

export default config;
