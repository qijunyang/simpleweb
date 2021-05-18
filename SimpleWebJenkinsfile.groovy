pipeline {
    agent { label 'anything' }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}