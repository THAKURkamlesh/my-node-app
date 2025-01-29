pipeline {
    agent any
    
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/THAKURkamlesh/my-node-app.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("thakurkamlesh/my-node-app:${env.BUILD_ID}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('', 'dockerhub-credentials') {
                        docker.image("thakurkamlesh/my-node-app:${env.BUILD_ID}").push()
                    }
                }
            }
        }
    }
}
