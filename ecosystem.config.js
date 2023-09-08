module.exports = {
  apps: [
    {
      name: "Bugatos",
      script: "/app/dist/main.js",
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: "1G",
      exec_mode: "cluster",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      node_args: "--max_old_space_size=1024 --max-http-header-size=16384",
      env: {
        NODE_ENV: "development"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};