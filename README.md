# service-express-typescript

## installation
```bash
git clone git://github.com/danangkonang/service-express-typescript.git

cd service-express-typescript

cp .env.example .env

npm install

# (optional) if use container mysql
docker-compose up --build -d

# running migration
npx sequelize-cli db:migrate

# runing seeder
npx sequelize-cli db:seed:all

```

## now you can visit this address
1. Rest Api [http://localhost:9000/](http://localhost:9000/)

2. PhpMyAdmin [http://localhost:9001/](http://localhost:9001/)
