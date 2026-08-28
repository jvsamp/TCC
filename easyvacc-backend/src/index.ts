import express from 'express';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente (necessário para a nuvem)
dotenv.config();

// Conexão inteligente: usa a nuvem se configurada, ou o XAMPP local como padrão
export const sequelize = new Sequelize(
  process.env.DB_NAME || 'easyvacc',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: Number(process.env.DB_PORT) || 3306,
    logging: false
  }
);
// Importando os modelos do Sequelize usando a mesma conexão
import { Usuario } from './usuario';
import { Vacina } from './vacina';
import { Posto } from './postos';
import { Campanha } from './campanha';
import { Dependente } from './dependentes';

const app = express();
app.use(cors());
app.use(express.json());

// ==========================================
// FUNÇÃO DE POPULAR DADOS REAIS (SEEDS)
// ==========================================
const popularDadosReais = async () => {
  try {
    // 1. Inserir Postos de Saúde Reais em Saquarema, RJ
    const totalPostos = await Posto.count();
    if (totalPostos === 0) {
      await Posto.create({
        nome: "Posto de Saúde Central de Saquarema",
        endereco: "Rua Coronel Madureira, 77 - Centro, Saquarema - RJ",
        horarioFuncionamento: "Segunda a Sexta, das 08h às 17h",
        aberto: true
      });
      await Posto.create({
        nome: "UBS Bacaxá",
        endereco: "Av. Saquarema, 4500 - Bacaxá, Saquarema - RJ",
        horarioFuncionamento: "Segunda a Sexta, das 08h às 16h",
        aberto: true
      });
      await Posto.create({
        nome: "USF Jaconé",
        endereco: "Rua 13, s/n - Jaconé, Saquarema - RJ",
        horarioFuncionamento: "Segunda a Sexta, das 08h às 16h",
        aberto: true
      });
      console.log("📍 Postos reais de Saquarema inseridos no banco!");
    }

    // 2. Inserir Campanhas de Vacinação Reais
    const totalCampanhas = await Campanha.count();
    if (totalCampanhas === 0) {
      await Campanha.create({
        titulo: "Campanha Nacional de Vacinação contra a Influenza (Gripe)",
        descricao: "Proteja-se contra os vírus da gripe mais circulantes. Direcionado a idosos, profissionais da saúde, gestantes e público prioritário.",
        dataInicio: "01/04/2026",
        dataFim: "31/05/2026"
      });
      await Campanha.create({
        titulo: "Multivacinação para Atualização da Caderneta",
        descricao: "Campanha voltada para atualização do cartão de vacinas de crianças, jovens e adultos na rede pública.",
        dataInicio: "05/10/2026",
        dataFim: "23/10/2026"
      });
      console.log("📢 Campanhas de vacinação inseridas no banco!");
    }
  } catch (error) {
    console.error("Erro ao popular dados reais:", error);
  }
};

// ==========================================
// ROTAS DE USUÁRIO E AUTENTICAÇÃO
// ==========================================

app.post('/api/usuarios/cadastro', async (req, res) => {
  try {
    const dados = req.body;
    const novoUsuario = await Usuario.create(dados);
    res.json({ sucesso: true, mensagem: "Usuário cadastrado!", dados: novoUsuario });
  } catch (error) {
    res.status(400).json({ sucesso: false, mensagem: "Erro ao cadastrar usuário. Verifique se o CPF ou CNS já existem." });
  }
});

app.post('/api/usuarios/login', async (req, res) => {
  try {
    const { cpf, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { cpf } });
    const userData = usuario ? (usuario.toJSON() as any) : null;
    
    if (userData && userData.senha === senha) {
      res.json({ sucesso: true, mensagem: "Login efetuado!", dados: { id: userData.id, nome: userData.nome } });
    } else {
      res.status(401).json({ sucesso: false, mensagem: "CPF ou senha incorretos." });
    }
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro no servidor." });
  }
});

app.get('/api/usuarios/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    res.json({ sucesso: true, dados: usuario });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar perfil." });
  }
});

app.get('/api/usuarios/cpf/:cpf', async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ where: { cpf: req.params.cpf } });
    if (!usuario) {
      return res.status(404).json({ sucesso: false, mensagem: "Usuário não encontrado." });
    }
    res.json({ sucesso: true, dados: usuario });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar usuário por CPF." });
  }
});

// ==========================================
// ROTAS DE VACINAS
// ==========================================

app.get('/api/vacinas/:usuarioId', async (req, res) => {
  try {
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

// ==========================================
// ROTAS DE POSTOS, CAMPANHAS E NOTIFICAÇÕES
// ==========================================

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

app.get('/api/notificacoes/:usuarioId', async (req, res) => {
  try {
    const usuarioId = req.params.usuarioId;
    const vacinas = await Vacina.findAll({ where: { usuarioId } });
    
    let notificacoesDinamicas = [
      {
        id: 1,
        titulo: "Bem-vindo ao EasyVacc",
        mensagem: "Sua caderneta digital está sincronizada com os servidores do SUS.",
        lida: true
      }
    ];

    vacinas.forEach((vacina: any, index: number) => {
      if (vacina.proximaDose) {
        notificacoesDinamicas.push({
          id: index + 2,
          titulo: `Lembrete de Retorno: ${vacina.nome}`,
          mensagem: `Você tem uma dose de retorno agendada para ${vacina.proximaDose}. Compareça ao posto mais próximo.`,
          lida: false
        });
      }
    });

    res.json({ sucesso: true, dados: notificacoesDinamicas });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao gerar notificações." });
  }
});

// ==========================================
// ROTAS DE DEPENDENTES
// ==========================================

app.get('/api/dependentes/:usuarioId', async (req, res) => {
  try {
    const dependentes = await Dependente.findAll({ where: { usuarioId: req.params.usuarioId } });
    res.json({ sucesso: true, dados: dependentes });
  } catch (error) {
    res.status(500).json({ sucesso: false, mensagem: "Erro ao buscar dependentes." });
  }
});

app.post('/api/dependentes', async (req, res) => {
  try {
    const { usuarioId, nome, parentesco, dataNascimento } = req.body;
    
    if (!usuarioId || !nome || !parentesco) {
      return res.status(400).json({ sucesso: false, mensagem: "Preencha todos os campos obrigatórios." });
    }

    const novoDependente = await Dependente.create({
      usuarioId: Number(usuarioId),
      nome,
      parentesco,
      dataNascimento: dataNascimento || null
    });

    res.json({ sucesso: true, mensagem: "Dependente cadastrado com sucesso!", dados: novoDependente });
  } catch (error) {
    console.error("Erro ao cadastrar dependente:", error);
    res.status(400).json({ sucesso: false, mensagem: "Erro ao cadastrar dependente no banco de dados." });
  }
});
const PORT = 5000;

// Sincroniza o banco de dados (forçando a criação correta da tabela dependentes) e inicia o servidor
sequelize.sync({ force: true }).then(async () => {
  console.log("📦 Banco de dados sincronizado e limpo com sucesso!");
  await popularDadosReais();
  
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando com Sequelize na porta ${PORT}`);
  });
}).catch(err => {
  console.error("Erro ao sincronizar com o banco de dados:", err);
});