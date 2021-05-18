pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm -i -g yarn'
                sh 'yarn test'
            }
        }
    }
}