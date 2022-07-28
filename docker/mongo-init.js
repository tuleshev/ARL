db.user.drop()
db.user.insert({ username: '@dmin123',  password: hex_md5('arlsalt!@#'+'!QAZ2wsx#EDC-pl,') })
