pipeline {
    agent any

    environment {
        IMAGE_NAME = 'naveen1708/cicd-demo'
        CONTAINER_NAME = 'cicd-demo-app'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Getting latest code from GitHub...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${IMAGE_NAME}:latest ."
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                sh "docker run --rm ${IMAGE_NAME}:latest sh -c 'npm test'"
            }
        }

       stage('Deploy') {
    steps {
        echo 'Deploying the app...'
        sh "docker stop ${CONTAINER_NAME} || true"
        sh "docker rm ${CONTAINER_NAME} || true"
        sh "docker run -d --name ${CONTAINER_NAME} -p 3001:3000 ${IMAGE_NAME}:latest"
    }
}
    }

    post {
        success { echo 'SUCCESS: App is live!' }
        failure { echo 'FAILED: Check the logs.' }
    }
}
