aws configure set AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION
aws s3api create-bucket --bucket $AWS_BUCKET region $AWS_DEFAULT_REGION bucket
aws s3 cp --recursive --acl public-read ./www s3://$AWS_BUCKET/
aws s3 cp --acl public-read --cache-control="max-age=0, no-cache, no-store, must-revalidate" ./www/index.html s3://$AWS_BUCKET/
aws s3 website s3://$AWS_BUCKET/ --index-document index.html