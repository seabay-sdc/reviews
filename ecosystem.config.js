module.exports = {
    apps: [{
      name: 'review',
      script: 'server/server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-13-58-167-54.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/review.pem',
        ref: 'origin/master',
        repo: 'https://github.com/seabay-hratx42-fec/reviews.git',
        path: '/home/ubuntu/server/review',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }