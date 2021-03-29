echo 'Building the Docker image'
docker build -t iotmicroservice:dev .
echo 'Tagging the Docker image'
docker tag iotmicroservice:dev 915966410640.dkr.ecr.us-east-2.amazonaws.com/iotmicroservice-dev:latest
echo 'Getting the credentials for aws with docker'
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 915966410640.dkr.ecr.us-east-2.amazonaws.com
echo 'Pushing the Image to AWS'
docker push 915966410640.dkr.ecr.us-east-2.amazonaws.com/iotmicroservice-dev:latest
