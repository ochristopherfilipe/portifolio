# Planejamento - Pagina "Entre em contato"

## Objetivo
Criar uma pagina simples de contato com envio para o seu proprio e-mail, no mesmo estilo de fluxo usado em telas de "esqueci a senha":

1. O usuario preenche o formulario.
2. O frontend envia os dados para um endpoint do backend.
3. O backend valida os campos.
4. O backend envia um e-mail para a sua caixa de entrada.
5. O frontend mostra sucesso ou erro.

Observacao:
O projeto `idpb` foi localizado em `/Users/joelsantos/idpb`, e este planejamento agora considera a implementacao real dele.

## Base real encontrada no projeto IDPB
Arquivos principais encontrados:

- tela: `/Users/joelsantos/idpb/login/esqueci-senha/index.html`
- processamento: `/Users/joelsantos/idpb/login/php/esqueci-senha.php`
- conexao com banco: `/Users/joelsantos/idpb/login/php/conexao.php`
- dependencia de e-mail: `/Users/joelsantos/idpb/composer.json`

O fluxo atual de "esqueci a senha" no `idpb` e:

1. recebe o `email` via `POST`
2. consulta a tabela `usuarios`
3. gera um codigo de 6 digitos
4. envia esse codigo por e-mail com `PHPMailer`
5. grava o codigo e a expiracao na tabela `Troca_Senha_Usuarios`
6. redireciona para a proxima etapa

Para a pagina `Entre em contato`, da para reaproveitar:

- o mesmo `PHPMailer`
- o mesmo `vendor/autoload.php`
- a mesma conexao `conectar()`
- o mesmo padrao de validacao no backend

Para contato, voce nao precisaria:

- gerar codigo
- gravar em `Troca_Senha_Usuarios`

A nao ser que queira criar historico de mensagens em outra tabela.

## Estrutura da pagina
Titulo da pagina:

`Entre em contato`

Campos obrigatorios:

- `Seu nome`
- `Titulo`
- `Seu email`
- `Mensagem`

Estrutura visual sugerida:

```txt
Entre em contato

Seu nome:   [_____________________]
Titulo:     [_____________________]
Seu email:  [_____________________]
Mensagem:   [_____________________]
            [_____________________]
            [_____________________]

            [ Enviar mensagem ]
```

## Regra de negocio
Todos os campos devem ser obrigatorios.

Validacoes minimas:

- `seu nome`: nao pode estar vazio
- `titulo`: nao pode estar vazio
- `seu email`: nao pode estar vazio e deve ter formato valido
- `mensagem`: nao pode estar vazia

Validacoes recomendadas:

- limitar `seu nome` para 120 caracteres
- limitar `titulo` para 150 caracteres
- limitar `seu email` para 180 caracteres
- limitar `mensagem` para 3000 caracteres
- remover espacos extras no inicio e no fim

## Melhor forma de fazer usando seu proprio e-mail
Nunca envie e-mail diretamente pelo frontend.

O correto e:

- o frontend coleta os dados
- o backend recebe os dados
- o backend usa um servico de envio de e-mail

## Reaproveitamento da logica do "Esqueci a senha"
Se o projeto `idpb` ja envia e-mail na tela de "esqueci a senha", a melhor abordagem e reaproveitar:

- o mesmo `PHPMailer`
- a mesma estrutura de envio do backend
- o mesmo padrao de validacao do backend
- o mesmo padrao de mensagens de erro/sucesso

Na pratica, a pagina de contato seria quase outro caso de uso do mesmo servico de envio.

Exemplo conceitual:

- `forgot password`: envia link de redefinicao
- `entre em contato`: envia para sua caixa de entrada os dados do formulario

## Fluxo tecnico recomendado

### Frontend
Pagina ou componente com formulario:

- `nome`
- `titulo`
- `email`
- `mensagem`

Ao clicar em `Enviar mensagem`:

1. validar campos
2. desabilitar o botao enquanto envia
3. fazer `POST /api/contact`
4. mostrar resposta de sucesso ou erro

### Backend
Criar um endpoint, por exemplo:

`POST /api/contact`

Payload esperado:

```json
{
  "name": "Christopher Santos",
  "title": "Proposta comercial",
  "email": "pessoa@exemplo.com",
  "message": "Gostaria de falar sobre um projeto."
}
```

Resposta de sucesso:

```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso."
}
```

Resposta de erro:

```json
{
  "success": false,
  "message": "Nao foi possivel enviar sua mensagem."
}
```

## Conteudo do e-mail que voce receberia
Assunto sugerido:

`[Site] Nova mensagem de contato - {{title}}`

Corpo do e-mail:

```txt
Nova mensagem recebida pelo formulario do site

Nome: {{name}}
Titulo: {{title}}
Email: {{email}}

Mensagem:
{{message}}
```

Opcionalmente, voce pode configurar `replyTo` com o e-mail informado pela pessoa.

Isso ajuda porque, ao clicar em responder no seu e-mail, a resposta vai para quem enviou a mensagem.

## Opcoes para envio do e-mail

### Opcao 1 - Reutilizar o mesmo mailer do projeto idpb
Melhor opcao se o backend do `idpb` ja faz envio de e-mails.

Voce criaria:

- um novo endpoint de contato
- um novo template de e-mail
- uma chamada para o mesmo servico de envio

No caso real do `idpb`, isso significa:

- reaproveitar `PHPMailer`
- reaproveitar `vendor/autoload.php`
- reaproveitar `login/php/conexao.php` se quiser salvar no banco
- mover credenciais SMTP para `.env` antes de publicar no GitHub

### Opcao 2 - SMTP com Gmail
Se voce quiser usar seu proprio Gmail.

Voce precisaria:

- ativar autenticacao em 2 fatores
- gerar uma `App Password`
- usar essa senha no backend

Variaveis de ambiente sugeridas:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-app-password
CONTACT_RECEIVER=seu-email@gmail.com
```

Biblioteca comum:

- `nodemailer`

Observacao:
No `idpb`, hoje o envio real ja esta sendo feito com `PHPMailer`, entao se a pagina nascer dentro dele, faz mais sentido manter `PHPMailer` do que trocar para `nodemailer`.

### Opcao 3 - Provider de e-mail transacional
Mais profissional e geralmente melhor para entrega:

- Resend
- SendGrid
- Mailgun
- Postmark

Vantagens:

- melhor entregabilidade
- logs
- menos chance de cair em spam
- templates mais faceis de manter

## Recomendacao pratica
Se a ideia for seguir o mesmo raciocinio do `idpb`, eu recomendaria esta ordem:

1. reaproveitar o `PHPMailer` que ja existe no `idpb`
2. extrair usuario SMTP, senha SMTP e remetente para `.env`
3. criar o endpoint `POST /api/contact` ou um `contact/php/enviar-mensagem.php`
4. criar a pagina `Entre em contato`
5. ligar o formulario ao backend
6. opcionalmente salvar as mensagens no banco

Se o portfolio continuar como site estatico sem backend proprio, a melhor opcao pratica seria:

1. criar um endpoint serverless
2. usar Resend ou Nodemailer
3. enviar para o seu e-mail principal

## Estrutura tecnica sugerida

### Frontend

- `contact.html` ou pagina equivalente
- validacao de campos
- loading no botao
- feedback visual de sucesso/erro

### Backend

- `POST /api/contact`
- validacao no servidor
- servico de e-mail
- tratamento de excecoes

### Servico de e-mail

- `sendContactEmail(data)`

Responsabilidade:

- montar assunto
- montar corpo da mensagem
- enviar para seu e-mail
- retornar sucesso ou erro

## Como eu faria dentro do proprio IDPB
Se voce quiser implementar isso no projeto `idpb`, eu faria assim:

### Tela
Criar algo como:

- `/Users/joelsantos/idpb/contact/index.php`

Com os campos obrigatorios:

- `seu nome`
- `titulo`
- `seu email`
- `mensagem`

### Processamento
Criar algo como:

- `/Users/joelsantos/idpb/contact/php/enviar-mensagem.php`

Esse arquivo faria:

1. `require __DIR__ . '/../../vendor/autoload.php'`
2. `require __DIR__ . '/../../login/php/conexao.php'`
3. validacao dos 4 campos
4. instancia do `PHPMailer`
5. envio para o seu e-mail principal
6. retorno de sucesso ou erro

### Banco de dados opcional
Se quiser guardar historico das mensagens, eu criaria uma tabela separada:

```sql
CREATE TABLE contato_mensagens (
  id BIGSERIAL PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  titulo VARCHAR(150) NOT NULL,
  email VARCHAR(180) NOT NULL,
  mensagem TEXT NOT NULL,
  data_envio TIMESTAMP NOT NULL DEFAULT NOW()
);
```

Assim, alem do e-mail, voce tambem teria:

- historico no banco
- possibilidade de painel futuro
- rastreio de contatos recebidos

## Exemplo de pseudocodigo

```txt
Frontend:
  submitForm()
    validar campos
    POST /api/contact
    se sucesso -> mostrar "Mensagem enviada com sucesso"
    se erro -> mostrar "Nao foi possivel enviar"

Backend:
  POST /api/contact
    validar name, title, email, message
    chamar sendContactEmail()
    retornar success true/false

Mailer:
  sendContactEmail(data)
    enviar e-mail para CONTACT_RECEIVER
```

## Seguranca e boas praticas

- nao expor senha SMTP no frontend
- usar variaveis de ambiente
- validar dados no frontend e no backend
- adicionar rate limit para evitar spam
- adicionar captcha se o formulario ficar publico
- usar `replyTo` com o e-mail do remetente
- registrar logs de erro

No seu caso, faz sentido exatamente isso que voce falou:

- desenvolver com a logica do `idpb`
- antes de subir para o GitHub, mover configuracoes sensiveis para `.env`
- deixar o codigo lendo essas variaveis no backend

## Checklist de implementacao

- [ ] definir onde a pagina vai ficar
- [ ] criar o layout da pagina
- [ ] criar validacao dos 4 campos obrigatorios
- [ ] criar endpoint `POST /api/contact`
- [ ] configurar envio de e-mail
- [ ] testar sucesso
- [ ] testar erro
- [ ] testar e-mail invalido
- [ ] testar mensagem vazia
- [ ] testar protecao contra spam

## Dados que voce precisa decidir antes de implementar

- qual e-mail vai receber as mensagens
- qual servico vai enviar os e-mails
- se vai usar Gmail SMTP ou provider transacional
- se quer resposta automatica para quem enviou
- se a pagina sera no portfolio atual ou em outro projeto

## Recomendacao final
Se o `idpb` ja tem envio de e-mail funcionando, o caminho mais economico e confiavel e copiar a arquitetura dele:

- mesmo backend
- mesmo `PHPMailer`
- novo endpoint de contato
- novo template
- credenciais SMTP em `.env`

Resumo pratico:

- o `idpb` ja provou que envio de e-mail funciona
- a pagina de contato pode usar a mesma base
- a diferenca e que contato envia a mensagem para voce, em vez de enviar codigo para o usuario
- se quiser, pode salvar as mensagens em uma tabela propria

Se quiser, no proximo passo eu posso transformar este planejamento em implementacao real para este portfolio:

- so a pagina
- pagina + endpoint
- pagina + endpoint + envio real por e-mail
