
#Browserify
* Para compilar o arquivo app.js da pasta source e lançar na pasta public (require nao finciona no broser, entao utilizamos o browserify)

instalar globalmente o pacote:
npm install -g browserify


Para o utilizar na aplicação
npx browserify source/app.js -o public/app.js 

(Obs.: -o, é o output.
      npx, apenas executa localmente o pacote ao inves de instalar globalmente ou localmente 
)

Apesar de ser funcional, é necessário otimizar com o Gulp, que fará esse trabalho de execução da compilação.

#GULP:

Automatizando o process

npm install -g gulp-cli                    (instalar a linha de comando)
npm install --save-dev gulp                 (adicionar o gulpao projeto)
npm install --save-dev vinyl-source-stream  (usado no gulp) 
npm install --save-dev browserify           (Lembra que tínhamos instalado apenas global usando o npx? Agora vamos usar a apino nosso projeto)
npm install --save-dev vinyl-source-stream  (usado no gulp) 

*podemos instalar num mesmo comando
npm install --save-dev gulp --save-dev vinyl-source-stream --save-dev browserify
