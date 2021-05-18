pipeline {
    agent node
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}