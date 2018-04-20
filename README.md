# MyAppNodeNW

  Aplicativo desenvolvido utilizando NodeJS + NW.js.
  A Aplicação busca as imagens de uma API que retorna as informações em Json e apresenta as informações na tela do APP.


## Configurar Ambiente

  ### Instalar NodeJS + NWjs + Dependencias
    - sudo apt-get install python-software-properties 
    - curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
    - sudo apt-get install -y nodejs
    - sudo apt-get install -y build-essential
    
    Verificar as versões instaladas
    - node -v
    - npm -v

  ### Criar Projeto
    Criar Diretório para o APP
    - mkdir MyAppNodeNW
  
  Acessar o novo diretório
  - cd MyAppNodeNW
  
  Clonar o repositório
  - git clone https://github.com/iantonini/MyAppNodeNW.git .
  
  Instalar dependências do NodeJS
  - npm i --production

  ### Executar Aplicativo
    Acessar o diretório do aplicativo
    - cd MyAppNodeNW
  
  Executar NW para iniciar APP
  - node_modulo/.bin/nw . 

  ### Complilar Aplicativo (Linux)
    Abrir terminal usando atalho
  - Ctr+Alt+T
  
  Acessar o diretório do aplicativo
    - cd MyAppNodeNW
  
  Criar arquivo ZIP de todo o conteudo do diretório
  - zip -r MyAppNW.nw *
  
  Gerar arquivo executavel
  - cat `which nw` app.nw > app && chmod +x app 


## Links Referências
 - https://nodejs.org/en/
 - https://nwjs.io/
