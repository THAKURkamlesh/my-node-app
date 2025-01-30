pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "thakurkamlesh/my-node-app"
        DOCKER_CREDENTIALS = "dockerhub-credentials"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/THAKURkamlesh/my-node-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${env.BUILD_ID}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS) {
                        docker.image("${DOCKER_IMAGE}:${env.BUILD_ID}").push()
                        docker.image("${DOCKER_IMAGE}:${env.BUILD_ID}").push('latest') // Tag as latest
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh "docker stop my-node-app || true"
                    sh "docker rm my-node-app || true"
                    sh "docker run -d -p 3000:3000 --name my-node-app ${DOCKER_IMAGE}:latest"
                }
            }
        }
    }
}
