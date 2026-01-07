const dotenv = require("dotenv");
dotenv.config({
  path: ".env.development", // O `dotenv` pega o arquivo com as variáveis de ambiente e injeta dentro do `process.env`
});

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: ".",
});

const jestConfig = createJestConfig({
  moduleDirectories: ["node_modules", "<rootDir>"], // Se você quiser customizar as importações, mas quer continuar importando os modulos do 'node_modules', você deve redeclarar o diretório
});

module.exports = jestConfig;
