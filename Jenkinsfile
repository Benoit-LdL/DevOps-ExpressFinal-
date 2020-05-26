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
                //ansiblePlaybook 
                    //colorized: true,
                    //credentialsId: 'ssh-jenkins',
                    //installation: 'ansible'
                    //playbook: '/home/Test-PlayBook.yml',
                    //sudo: true,
                    //sudoUser: 'jenkins'
                //sh 'ansible-playbook /home/Test-PlayBook.yml'
                input message: 'Please run the playbook manually and check if the project is up and running on localhost:3002. When finished, click proceed'
                //sh 'pm2 start app-oauth.js --name oAuth chdir=/home/Repo'
                //sh 'ls'
            }
        }  
    }
}