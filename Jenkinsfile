pipeline {
  agent any

  environment {
    dockerImageName = 'registry.gigasource.io/cms'
    dockerImage = ''
    registryName = 'https://registry.gigasource.io'
    registryCredential = 'registry-user'
    rancherWorkloadType = 'deployment'
    rancherWorkloadName = 'cms'
  }

  stages {
    stage('Prepare config file') {
      steps {
        withCredentials([string(credentialsId: 'gitbot-access-token', variable: 'GITBOT_ACCESS_TOKEN')]) {
          sh "echo $ACCESS_TOKEN > ./gitbot-access-token"
        }
        withCredentials([string(credentialsId: 'gigasource-github-access-token', variable: 'GIGASOURCE_GITHUB_ACCESS_TOKEN')]) {
          sh "curl -H 'Authorization: token $GIGASOURCE_GITHUB_ACCESS_TOKEN' -H 'Accept: application/vnd.github.v3.raw' -O -L https://api.github.com/repos/gigasource/cms-configs/contents/cms-config-vn-cluster.json"
        }
        sh "mkdir -p ./config"
        sh "mv ./cms-config-vn-cluster.json ./config/config.json"
      }
    }

    stage('Install git submodules') {
      steps {
        sh "rm -rf ./backoffice"
        sh "./scripts/update-git-submodules.sh"
      }
    }

    stage('Build Docker image') {
      steps {
        script {
          CURRENT_DATETIME = sh (
                  script: "date +%Y-%m-%d_%Hh.%Mm.%Ss",
                  returnStdout: true
          ).trim()
        }

        script {image = docker.build dockerImageName + ":$CURRENT_DATETIME"}
      }
    }

    stage('Push Docker image to registry') {
      steps {
        script {
          docker.withRegistry(registryName, registryCredential ) {
            image.push()
          }
        }
      }
    }

    stage('Remove locally built Docker image') {
      steps {
        sh "docker rmi $dockerImageName:$CURRENT_DATETIME"
      }
    }

    stage('Upgrade image version in Rancher') {
      steps {
        withKubeConfig([credentialsId: 'kubectl-config']) {
          sh "kubectl set image $rancherWorkloadType/$rancherWorkloadName $rancherWorkloadName=$dockerImageName:$CURRENT_DATETIME --record"
        }
      }
    }
  }
}
