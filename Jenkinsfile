pipeline {

    agent any

    environment {

        IMAGE_NAME = "rajvam6806/streamnest-backend"

        TAG = "${BUILD_NUMBER}"

    }

    stages {

        stage('Checkout') {

            steps {

                checkout scm

            }

        }

        stage('Install') {

            steps {

                sh 'npm install'

            }

        }

        stage('Build') {

            steps {

                sh 'npm run build'

            }

        }

        stage('Docker Build') {

            steps {

                sh 'docker build -t ${IMAGE_NAME}:${TAG} .'
            }

        }

        stage('Docker Login') {

            steps {

                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub',
                    usernameVariable: 'USERNAME',
                    passwordVariable: 'PASSWORD'
                )]) {

                    sh '''
                    echo $PASSWORD | docker login -u $USERNAME --password-stdin
                    '''
                }
            }
        }

        stage('Docker Push') {

            steps {

                sh 'docker push ${IMAGE_NAME}:${TAG}'
                sh 'docker tag ${IMAGE_NAME}:${TAG} ${IMAGE_NAME}:${TAG}'
                sh 'docker push ${IMAGE_NAME}:${TAG}'

            }

        }

        stage('Deploy to EKS') {

    steps {

        withCredentials([
            string(credentialsId: 'kubeconfig', variable: 'KUBECONFIG_CONTENT')
        ]) {

            sh '''
                mkdir -p $WORKSPACE/.kube

                echo "$KUBECONFIG_CONTENT" > $WORKSPACE/.kube/config

                chmod 600 $WORKSPACE/.kube/config

                export KUBECONFIG=$WORKSPACE/.kube/config

                kubectl get nodes

                kubectl set image deployment/streamnest-backend \
                    backend=${IMAGE_NAME}:${TAG} \
                    -n streamnest
            '''
        }
    }
}

    }

}
