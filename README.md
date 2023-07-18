<!DOCTYPE html>
<html></html>
<body>
  <h1>Git Search</h1>

  <h2>Fluxo da Aplicação</h2>
  <ol>
    <li>Acessar a página inicial;</li>
    <li>Procurar um usuário do GitHub por meio do campo de busca;</li>
    <li>Se o usuário não for encontrado, você será redirecionado para a página 404;</li>
    <li>Caso o usuário seja encontrado, visualizar a página com as informações do usuário pesquisado, tais como:</li>
    <ul>
      <li>Avatar</li>
      <li>Nome</li>
      <li>Repositórios</li>
      <ul>
        <li>Nome</li>
        <li>Descrição</li>
        <li>Link do repositório</li>
      </ul>
    </ul>
  </ol>

  <h2>Desenvolvimento</h2>

  <p>
    Durante o desenvolvimento, além do layout, precisaremos criar as seguintes funcionalidades:
  </p>

  <h3>Página inicial:</h3>
  <ul>
    <li>Buscar os dados da API do GitHub com base no valor (value) do campo de busca da página inicial. Para isso, utilizaremos o endpoint: <p>https://api.github.com/users/{value}</p></li>
    <li>Caso o usuário não seja encontrado, redirecione a aplicação para uma página com a mensagem "Ooops! Não encontramos o usuário que você procurou, vamos tentar novamente."</li>
    <li>O botão "Nova Busca" deve redirecionar o usuário para a página inicial.</li>
  </ul>

  <h3>Página Home:</h3>
  <p>Renderizar as informações do usuário pesquisado, como:</p>
  <ul>
    <li>Avatar</li>
    <li>Nome</li>
    <li>Repositórios</li>
    <ul>
      <li>Nome</li>
      <li>Descrição</li>
      <li>Link do repositório</li>
    </ul>
  </ul>
</body>
</html>

