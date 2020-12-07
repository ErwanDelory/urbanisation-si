const config = {
	node: {
		port: 5000,
	},
	mysql: {
		// paramètres de connexion à la base de données
		host: "localhost", //localhost en local, db en docker
		user: "root",
		password: "root",
		port: 3308,
		database: "dburbanisation",
		charset: "utf8",
	},
};

module.exports = config;
