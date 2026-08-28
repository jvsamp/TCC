import express from 'express';
import cors from 'cors';

// Importando o modelo do Usuário que criamos no Sequelize
import { Usuario } from './usuario';

// (Em breve, você vai criar e importar os outros modelos aqui também)
// import { Vacina } from './Vacina';
// import { Posto } from './Posto';
// import { Campanha } from './Campanha';
// import { Notificacao } from './Notificacao';

const app = express();
app.use(cors());
app.use(express.json());

// ==========================================
// ROTAS DE USUÁRIO E AUTENTICAÇÃO
// ==========================================

// 1. Cadastrar novo usuário
app.post('/api/usuarios/cadastro', async (req, res) => {
  try {
    const dados = req.body;
    // Sequelize: usa .create() direto no modelo
    const novoUsuario = await Usuario.create(dados);
    res.json({ sucesso: true, mensagem: "Usuário cadastrado!", dados: novoUsuario });
  } catch (error) {
    res.status(400).json({ sucesso: false, mensagem: "Erro ao cadastrar usuário. Verifique se o CPF ou CNS já existem." });
  }
});

// 2. Fazer Login (Simplificado para o TCC)
app.post('/api/usuarios/login', async (req, res) => {
  try {
    const { cpf, senha } = req.body;
    // Sequelize: usa .findOne() para buscar um registro específico
    const usuario = await Usuario.findOne({ where: { cpf } });
    
    // Convertendo para JSON para ler os dados facilmente
    const userData = usuario ? usuario.toJSON() : null;
    
    if (userData && userData.senha === senha) {
      res.json({ sucesso: true, mensagem: "Login efetuado!", dados: { id: userData.id, nome: userData.nome } });
    } else {
      res.status(401).json({ sucesso: false, mensagem: "CPF ou senha incorretos." });
    }
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro no servidor." });
  }
});

// 3. Buscar perfil do usuário
app.get('/api/usuarios/:id', async (req, res) => {
  try {
    // Sequelize: usa .findByPk() (Find by Primary Key) para buscar por ID
    const usuario = await Usuario.findByPk(req.params.id);
    res.json({ sucesso: true, dados: usuario });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar perfil." });
  }
});

// ==========================================
// ROTAS DE VACINAS E OUTROS (Próximos passos)
// ==========================================
// Nota: Deixei estas rotas comentadas por enquanto.
// Assim que você criar os arquivos Vacina.ts, Posto.ts, etc., 
// basta descomentar e elas voltarão a funcionar normalmente!

/*
app.get('/api/vacinas/:usuarioId', async (req, res) => {
  try {
    // Sequelize: usa .findAll()
    const vacinas = await Vacina.findAll({ where: { usuarioId: req.params.usuarioId } });
    res.json({ sucesso: true, dados: vacinas });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar vacinas." });
  }
});

app.post('/api/vacinas', async (req, res) => {
  try {
    const novaVacina = await Vacina.create(req.body);
    res.json({ sucesso: true, mensagem: "Vacina registrada!", dados: novaVacina });
  } catch (error) {
    res.status(400).json({ sucesso: false, mensagem: "Erro ao registrar vacina." });
  }
});

app.get('/api/postos', async (req, res) => {
  try {
    const postos = await Posto.findAll();
    res.json({ sucesso: true, dados: postos });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar postos." });
  }
});

app.get('/api/campanhas', async (req, res) => {
  try {
    const campanhas = await Campanha.findAll();
    res.json({ sucesso: true, dados: campanhas });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar campanhas." });
  }
});

app.get('/api/notificacoes', async (req, res) => {
  try {
    const notificacoes = await Notificacao.findAll();
    res.json({ sucesso: true, dados: notificacoes });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar notificações." });
  }
});
*/

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando com Sequelize na porta ${PORT}`);
});