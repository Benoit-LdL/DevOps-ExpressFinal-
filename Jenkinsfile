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
                input message: 'Please manally execute the ansible -Production- playbook and check on localhost:3002 if it works'
            }
        }  
    }
}