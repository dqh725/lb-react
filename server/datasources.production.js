// override pg configs in production EVN
module.exports =
{
  "db": {
    "host": process.env.POSTGRESQL_ADDRESS,
    "port": 5432,
    "database": "cheeger_production",
    "username": process.env.POSTGRESQL_USERNAME,
    "password": process.env.POSTGRESQL_PASSWORD,
    "connector": "postgresql"
  }
};
