pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                // Checkout the code from the repository
                checkout scm: [
                    $class: 'GitSCM',
                    branches: [[name: 'origin/main']],
                    userRemoteConfigs: [[url: 'https://github.com/THAKURkamlesh/my-node-app.git', credentialsId: 'docker-hub-credentials']]
                ]
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Add steps to build the Docker image
                    echo 'Building Docker image...'
                    sh 'docker build -t my-node-app .'
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Add steps to push the Docker image
                    echo 'Pushing Docker image...'
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                        sh 'docker tag my-node-app $DOCKER_USER/my-node-app:latest'
                        sh 'docker push $DOCKER_USER/my-node-app:latest'
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    // Add steps to deploy the container
                    echo 'Deploying container...'
                    sh 'docker compose up -d'
                }
            }
        }
    }
}
