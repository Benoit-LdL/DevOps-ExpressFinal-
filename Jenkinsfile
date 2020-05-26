pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
                sh './scripts/test' 
            }
        }
        stage('Deploy') { 
            steps {
                input message: 'Please run the playbook manually and check if the project is up and running on localhost:3001. When finished, click proceed'
            }
        }  
    }
}