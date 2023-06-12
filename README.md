# ECM System

ECM System é um Sistema feito para automatizar o processo de Emissão de Credenciais de Membro para a sua Igreja. Principais funcionalidades do sistema:

* Cadastro de Membros (listagem e edição)
* Cadastro de Cargos (listagem e edição)
* Cadastro de Congregações (listagem e edição)
* Uploads de Foto e Assinatura do membro
* Pagina de impressão de credenciais

# Instalação do Angular 15
 
Nesse breve tutorial estarei ensinando como instalar o ambiente de desenvolvimento do Frontend e do Backend. O Frontend do sistema foi construido em [Angular]('https://angular.io/') na sua versão 15. Primeiro de tudo é preciso instalar o Node, acesse esse [link](https://nodejs.org/en/download/) para acessar a página oficial de download. O Node está disponível para Windows, Mac e Linux. Com o Node instalado podemos utilizar o gerenciador de pacotes `NPM` para instalar os frameworks necessários. Para instalar o Angular precisamos digitar dois comandos: um para instalar a ferramenta de linha de comando do Angular e o outro para instalar o Typescript:

```
    npm install -g angular-cli
    npm install -g typescript
```

# Instalação do Java 17
 
O backend do sistema foi construído em [Java]('https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html') na sua versão 17 usando o framework [Spring Boot]('https://spring.io/projects/spring-boot') e o banco de dados [Postgres]('https://www.postgresql.org/'). Clique [aqui]('https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html') para descobrir como configuar o Java no seu sitema operacional. Precisamos também instalar o Maven na sua versão 3.8.6, para isso acesse a página de download clicando [aqui]('https://maven.apache.org/download.cgi'). Para instalar o Postgres basta acessar a [página](https://www.postgresql.org/download/) de download e executar o instalador, no processo de instalação deve-se criar um usuario e senha, nesse caso utilize um usuário igual a postgres e uma senha também igual a postgres, caso contrário o sistema não conseguirá acessar o banco de dados. O passo final será configurar as variáveis de Ambiente do Java e do Maven, para isso veja esse [tutorial]('https://medium.com/beelabacademy/configurando-vari%C3%A1veis-de-ambiente-java-home-e-maven-home-no-windows-e-unix-d9461f783c26').

# Execucanto a Aplicação

Após esses passos faça a clonagem do repositório. Veja que duas pastas serão baixadas: `ecm-core` e `ecm-view` Acesse o diretório `ecm-view`e digite o comando a seguir para instalar as dependências necessárias para execução da interface visual.  
 
```
    npm install
```
 
Após esse processo basta digitar acessar o diretório `ecm-view` e digitar o comando `ng serve`, em seguida aguarde os serviços serem devidamente iniciados. Para executar o backend é necessário acessar o diretório `ecm-core` e executar os seguintes comandos:

```
    mvn clean package install
    mvn spring-boot:run
```

O primeiro comando fará uma varredura no arquivo pom.xml e em seguida irá baixar todas as dependências necessárias para a execução da nossa api rest. O segundo comando irá construir o projeto e executá-lo. Por fim, digite a url a seguir no seu navegador:


```
    http://localhost:4200/app/members
```
