// ecosystem.config.cjs
module.exports = {
	apps: [
		{
			name: 'desa-cipicung',
			script: './build/index.js',
			cwd: '/home/ilham/app/desa-cipicung',
			env: {
				PORT: 3000,
				HOST: '0.0.0.0',
				NODE_ENV: 'production',
				PUBLIC_API_URL: 'https://api.cipicung.id'
			}
		}
	]
};
