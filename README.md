# Aplicativo To Do list

# Back-End
1. Clone o repositório:
- `git clone https://github.com/tryber/sd-010-b-project-delivery-app.git`
2. Entre na pasta do repositório que você acabou de clonar, instale o ambiente virtual e as depedências:
  - `cd to-do-list/back`
  - Execute `python3 -m venv env` para instalar o ambiente virtual
  - Ative o ambiente com o seguinte comando `source env/vin/activate`
  - Por fim, instale as depêndencias que estão no arquivo `requiriments.txt` com o comando `pip install -r requirements.txt`.
3. Modifique o arquivo **setings.py** dentro de **/api_todo**
- Altere os dados que estão em **DATABASE** para se conectar ao seu banco de dados:

![DATABASE](https://user-images.githubusercontent.com/64266184/149747553-90e7f1ff-caaa-4fa2-bca7-c7c698d73df1.png)

3. Crie um schema chamado **todolist** em seu banco de dados MySQL.
4. Faça o migrate:
- Em `cd to-do-list/back/api_todo` execute o comando `python manage.py migrate`.
5. Por fim, execute o comando `python manage.py runserver` para executar o back-end da aplicação.

# Front-End
1. Acesse o caminho:
  - `cd to-do-list/front/todolist`
2. Rode o comando `npm install` para instalar as dependências.
3. E por fim use o comando `ionic serve` para executar a aplicação localmente.
