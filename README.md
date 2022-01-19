# Aplicativo To Do list

# Back-End
1. Clone o repositório:
- `git clone https://github.com/tryber/sd-010-b-project-delivery-app.git`
2. Entre na pasta do repositório que você acabou de clonar, instale o ambiente virtual e as depedências:
  - `cd to-do-list/back`
  - Execute `python3 -m venv env` para instalar o ambiente virtual
  - Ative o ambiente com o seguinte comando `source env/vin/activate`
  - Por fim, instale as depêndencias que estão no arquivo `requiriments.txt` com o comando `pip install -r requirements.txt`.
3. Configure as variáveis de ambiente
  - Copie o arquivo _.env_example_ para a raiz do projeto renomeando para **.env**;
  - Preencha com as informações do banco de dados de desenvolvimento;

  ```
  DB_HOST=127.0.0.1
  DB_ENGINE=django.db.backends.mysql
  DB_NAME=
  DB_USER=
  DB_PASSWORD=
  DB_PORT=3306
  ```
4. Faça o migrate:
- Em `cd to-do-list/back/api_todo` execute o comando `python manage.py migrate`.
5. Por fim, execute o comando `python manage.py runserver` para executar o back-end da aplicação.

# Front-End
1. Acesse o caminho:
  - `cd to-do-list/front/todolist`
2. Rode o comando `npm install` para instalar as dependências.
3. E por fim use o comando `ionic serve` para executar a aplicação localmente.
