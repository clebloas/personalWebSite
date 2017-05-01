node {
    echo 'Hello World'
    stage("cleanup the mess") {
        deleteDir()
    }
    
    stage('SCM') {
//        withCredentials(credentialsId: "githubHttps", variable: "key") {
//            sh "git clone git@github.com:clebloas/personalWebSite.git -key ${key}"
//        }
 		git credentialsId: 'github', url:'https://github.com/clebloas/personalWebSite.git'
    }
    
    stage("yarn") {
        docker.image("kkarczmarczyk/node-yarn").inside {
            sh "yarn install"
            sh "yarn build"
        }
    }
}
