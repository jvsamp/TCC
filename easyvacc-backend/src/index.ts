// ======================================================
// SERVIDOR PRINCIPAL - EASYVACC
// ======================================================

import express from 'express';
import cors from 'cors';
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';


// ======================================================
// VARIÁVEIS DE AMBIENTE
// ======================================================

// Carrega as configurações existentes no arquivo .env
dotenv.config();


// ======================================================
// CONEXÃO COM O BANCO DE DADOS
// ======================================================
//
// Em desenvolvimento:
// usa as configurações do nosso .env local.
//
// Em produção:
// a hospedagem fornecerá essas informações através
// das variáveis de ambiente.
//

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


// ======================================================
// MODELOS DO BANCO
// ======================================================

import { Usuario } from './usuario';
import { Vacina } from './vacina';
import { Posto } from './postos';
import { Campanha } from './campanha';
import { Dependente } from './dependentes';


// ======================================================
// EXPRESS
// ======================================================

const app = express();


// ======================================================
// CORS
// ======================================================
//
// Por enquanto permitimos requisições do frontend.
//
// Depois podemos restringir para aceitar somente
// o domínio oficial do EasyVacc.
//

app.use(cors());


// Permite que o Express receba JSON.
app.use(express.json());


// ======================================================
// ROTA DE TESTE
// ======================================================
//
// Essa rota será muito útil depois do deploy.
//
// Quando acessarmos:
//
// https://URL-DO-BACKEND/
//
// devemos receber a mensagem abaixo.
//

app.get('/', (_req, res) => {

  res.json({
    sucesso: true,
    mensagem: 'API EasyVacc está funcionando!'
  });

});


// ======================================================
// FUNÇÃO PARA POPULAR DADOS INICIAIS
// ======================================================

const popularDadosReais = async () => {

  try {

    // ==================================================
    // POSTOS
    // ==================================================

    const totalPostos = await Posto.count();

    // Só cadastra os postos se a tabela estiver vazia.
    if (totalPostos === 0) {

      await Posto.create({

        nome: 'Posto de Saúde Central de Saquarema',

        endereco:
          'Rua Coronel Madureira, 77 - Centro, Saquarema - RJ',

        horarioFuncionamento:
          'Segunda a Sexta, das 08h às 17h',

        aberto: true

      });


      await Posto.create({

        nome: 'UBS Bacaxá',

        endereco:
          'Av. Saquarema, 4500 - Bacaxá, Saquarema - RJ',

        horarioFuncionamento:
          'Segunda a Sexta, das 08h às 16h',

        aberto: true

      });


      await Posto.create({

        nome: 'USF Jaconé',

        endereco:
          'Rua 13, s/n - Jaconé, Saquarema - RJ',

        horarioFuncionamento:
          'Segunda a Sexta, das 08h às 16h',

        aberto: true

      });


      console.log(
        '📍 Postos de Saquarema inseridos no banco!'
      );

    }


    // ==================================================
    // CAMPANHAS
    // ==================================================

    const totalCampanhas = await Campanha.count();

    // Só cria campanhas caso ainda não existam.
    if (totalCampanhas === 0) {

      await Campanha.create({

        titulo:
          'Campanha Nacional de Vacinação contra a Influenza (Gripe)',

        descricao:
          'Proteja-se contra os vírus da gripe mais circulantes. Direcionado a idosos, profissionais da saúde, gestantes e público prioritário.',

        dataInicio: '01/04/2026',

        dataFim: '31/05/2026'

      });


      await Campanha.create({

        titulo:
          'Multivacinação para Atualização da Caderneta',

        descricao:
          'Campanha voltada para atualização do cartão de vacinas de crianças, jovens e adultos na rede pública.',

        dataInicio: '05/10/2026',

        dataFim: '23/10/2026'

      });


      console.log(
        '📢 Campanhas de vacinação inseridas no banco!'
      );

    }

  } catch (error) {

    console.error(
      'Erro ao popular dados iniciais:',
      error
    );

  }

};


// ======================================================
// USUÁRIOS
// ======================================================


// ---------------- CADASTRO ----------------

app.post('/api/usuarios/cadastro', async (req, res) => {

  try {

    const dados = req.body;

    const novoUsuario =
      await Usuario.create(dados);


    res.json({

      sucesso: true,

      mensagem: 'Usuário cadastrado!',

      dados: novoUsuario

    });


  } catch (error) {

    console.error(
      'Erro ao cadastrar usuário:',
      error
    );


    res.status(400).json({

      sucesso: false,

      mensagem:
        'Erro ao cadastrar usuário. Verifique se o CPF ou CNS já existem.'

    });

  }

});


// ---------------- LOGIN ----------------

app.post('/api/usuarios/login', async (req, res) => {

  try {

    const { cpf, senha } = req.body;


    // Procura o usuário através do CPF.
    const usuario = await Usuario.findOne({

      where: { cpf }

    });


    const userData =
      usuario
        ? (usuario.toJSON() as any)
        : null;


    // Compara a senha enviada com a cadastrada.
    //
    // IMPORTANTE:
    // Para o TCC isso mantém o funcionamento atual.
    // Futuramente o ideal é utilizar hash de senha.
    if (
      userData &&
      userData.senha === senha
    ) {

      res.json({

        sucesso: true,

        mensagem: 'Login efetuado!',

        dados: {

          id: userData.id,

          nome: userData.nome

        }

      });

    } else {

      res.status(401).json({

        sucesso: false,

        mensagem: 'CPF ou senha incorretos.'

      });

    }


  } catch (error) {

    console.error(
      'Erro no login:',
      error
    );


    res.status(500).json({

      sucesso: false,

      mensagem: 'Erro no servidor.'

    });

  }

});


// ---------------- USUÁRIO POR ID ----------------

app.get('/api/usuarios/:id', async (req, res) => {

  try {

    const usuario =
      await Usuario.findByPk(req.params.id);


    res.json({

      sucesso: true,

      dados: usuario

    });


  } catch (error) {

    res.status(500).json({

      sucesso: false,

      mensagem: 'Erro ao buscar perfil.'

    });

  }

});


// ---------------- USUÁRIO POR CPF ----------------

app.get('/api/usuarios/cpf/:cpf', async (req, res) => {

  try {

    const usuario =
      await Usuario.findOne({

        where: {
          cpf: req.params.cpf
        }

      });


    if (!usuario) {

      return res.status(404).json({

        sucesso: false,

        mensagem: 'Usuário não encontrado.'

      });

    }


    res.json({

      sucesso: true,

      dados: usuario

    });


  } catch (error) {

    res.status(500).json({

      sucesso: false,

      mensagem:
        'Erro ao buscar usuário por CPF.'

    });

  }

});


// ======================================================
// VACINAS
// ======================================================


// ---------------- LISTAR VACINAS ----------------

app.get('/api/vacinas/:usuarioId', async (req, res) => {

  try {

    const vacinas =
      await Vacina.findAll({

        where: {
          usuarioId: req.params.usuarioId
        }

      });


    res.json({

      sucesso: true,

      dados: vacinas

    });


  } catch (error) {

    res.status(500).json({

      sucesso: false,

      mensagem: 'Erro ao buscar vacinas.'

    });

  }

});


// ---------------- REGISTRAR VACINA ----------------

app.post('/api/vacinas', async (req, res) => {

  try {

    const novaVacina =
      await Vacina.create(req.body);


    res.json({

      sucesso: true,

      mensagem: 'Vacina registrada!',

      dados: novaVacina

    });


  } catch (error) {

    res.status(400).json({

      sucesso: false,

      mensagem: 'Erro ao registrar vacina.'

    });

  }

});


// ======================================================
// POSTOS
// ======================================================

app.get('/api/postos', async (_req, res) => {

  try {

    const postos =
      await Posto.findAll();


    res.json({

      sucesso: true,

      dados: postos

    });


  } catch (error) {

    res.status(500).json({

      sucesso: false,

      mensagem: 'Erro ao buscar postos.'

    });

  }

});


// ======================================================
// CAMPANHAS
// ======================================================

app.get('/api/campanhas', async (_req, res) => {

  try {

    const campanhas =
      await Campanha.findAll();


    res.json({

      sucesso: true,

      dados: campanhas

    });


  } catch (error) {

    res.status(500).json({

      sucesso: false,

      mensagem: 'Erro ao buscar campanhas.'

    });

  }

});


// ======================================================
// NOTIFICAÇÕES
// ======================================================

app.get(
  '/api/notificacoes/:usuarioId',
  async (req, res) => {

    try {

      const usuarioId =
        req.params.usuarioId;


      const vacinas =
        await Vacina.findAll({

          where: {
            usuarioId
          }

        });


      const notificacoesDinamicas: any[] = [

        {

          id: 1,

          titulo:
            'Bem-vindo ao EasyVacc',

          mensagem:
            'Sua caderneta digital está sincronizada com os servidores do SUS.',

          lida: true

        }

      ];


      // Cria notificações para próximas doses.
      vacinas.forEach(
        (vacina: any, index: number) => {

          if (vacina.proximaDose) {

            notificacoesDinamicas.push({

              id: index + 2,

              titulo:
                `Lembrete de Retorno: ${vacina.nome}`,

              mensagem:
                `Você tem uma dose de retorno agendada para ${vacina.proximaDose}. Compareça ao posto mais próximo.`,

              lida: false

            });

          }

        }
      );


      res.json({

        sucesso: true,

        dados: notificacoesDinamicas

      });


    } catch (error) {

      res.status(500).json({

        sucesso: false,

        mensagem:
          'Erro ao gerar notificações.'

      });

    }

  }
);


// ======================================================
// DEPENDENTES
// ======================================================


// ---------------- LISTAR DEPENDENTES ----------------

app.get(
  '/api/dependentes/:usuarioId',
  async (req, res) => {

    try {

      const dependentes =
        await Dependente.findAll({

          where: {
            usuarioId:
              req.params.usuarioId
          }

        });


      res.json({

        sucesso: true,

        dados: dependentes

      });


    } catch (error) {

      res.status(500).json({

        sucesso: false,

        mensagem:
          'Erro ao buscar dependentes.'

      });

    }

  }
);


// ---------------- CADASTRAR DEPENDENTE ----------------

app.post('/api/dependentes', async (req, res) => {

  try {

    const {
      usuarioId,
      nome,
      parentesco,
      dataNascimento
    } = req.body;


    // Verifica os campos obrigatórios.
    if (
      !usuarioId ||
      !nome ||
      !parentesco
    ) {

      return res.status(400).json({

        sucesso: false,

        mensagem:
          'Preencha todos os campos obrigatórios.'

      });

    }


    const novoDependente =
      await Dependente.create({

        usuarioId:
          Number(usuarioId),

        nome,

        parentesco,

        dataNascimento:
          dataNascimento || null

      });


    res.json({

      sucesso: true,

      mensagem:
        'Dependente cadastrado com sucesso!',

      dados: novoDependente

    });


  } catch (error) {

    console.error(
      'Erro ao cadastrar dependente:',
      error
    );


    res.status(400).json({

      sucesso: false,

      mensagem:
        'Erro ao cadastrar dependente no banco de dados.'

    });

  }

});


// ======================================================
// PORTA DO SERVIDOR
// ======================================================
//
// Na hospedagem:
// utiliza a porta fornecida pela plataforma.
//
// No computador:
// continua usando a porta 5000.
//

const PORT =
  Number(process.env.PORT) || 5000;


// ======================================================
// INICIALIZAÇÃO DO SERVIDOR
// ======================================================
//
// IMPORTANTE:
//
// Antes estava:
//
// sequelize.sync({ force: true })
//
// force:true APAGA as tabelas e cria novamente.
//
// Isso não pode ser utilizado em produção,
// pois apagaria usuários, vacinas e dependentes.
//
// Agora utilizamos alter:false para preservar os dados.
//

sequelize
  .sync({ alter: false })

  .then(async () => {

    console.log(
      '📦 Banco de dados sincronizado com sucesso!'
    );


    // Insere os dados iniciais somente se necessário.
    await popularDadosReais();


    // Inicia o servidor.
    app.listen(PORT, () => {

      console.log(
        `🚀 Servidor EasyVacc rodando na porta ${PORT}`
      );

    });

  })

  .catch((err) => {

    console.error(
      '❌ Erro ao conectar/sincronizar com o banco:',
      err
    );

  });