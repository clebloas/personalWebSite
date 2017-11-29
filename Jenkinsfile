node {
    stage("cleanup the mess") {
        deleteDir()
    }
    
    stage('SCM') {
        git credentialsId: 'github', url:'https://github.com/clebloas/personalWebSite.git'
    }
    
    stage("yarn") {
        docker.image("kkarczmarczyk/node-yarn").inside {
            sh "yarn install"
            sh "yarn build"
        }
    }
}
