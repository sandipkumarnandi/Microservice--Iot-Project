echo 'Building the Docker image'
docker build -t iotmicoservice:qa .
echo 'Tagging the Docker image'
docker tag iotmicoservice:qa 915966410640.dkr.ecr.us-west-2.amazonaws.com/iotmicoservice-qa:latest
echo 'Getting the credentials for aws with docker'
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 915966410640.dkr.ecr.us-west-2.amazonaws.com
echo 'Pushing the Image to AWS'
docker push 915966410640.dkr.ecr.us-west-2.amazonaws.com/iotmicoservice-qa:latest
