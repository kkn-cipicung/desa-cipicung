// ecosystem.config.cjs
module.exports = {
  apps: [{
    name: 'desa-cipicung',
    script: 'build/index.js',
    env: {
      PORT: 3000,
      HOST: '0.0.0.0',
      NODE_ENV: 'production'
    }
  }]
}