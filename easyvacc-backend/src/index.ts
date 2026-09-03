// ======================================================
// SERVIDOR PRINCIPAL - EASYVACC
// ======================================================
import express from 'express';
import cors from 'cors';
import sequelize from './database';


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
// Local:
// FRONTEND_URL=http://localhost:5173
//
// Produção:
// FRONTEND_URL=https://seu-frontend.vercel.app
//

const frontendUrl =
  process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(
  cors({
    origin: frontendUrl
  })
);


// Permite receber JSON.
app.use(express.json());


// ======================================================
// ROTA PRINCIPAL
// ======================================================

app.get('/', (_req, res) => {

  res.json({

    sucesso: true,

    mensagem:
      'API EasyVacc está funcionando!'

  });

});


// ======================================================
// HEALTH CHECK
// ======================================================
//
// Essa rota será usada para verificar se a API
// e o banco de dados estão funcionando.
//
// Local:
// http://localhost:5000/api/health
//
// Produção:
// https://seu-backend.vercel.app/api/health
//

app.get('/api/health', async (_req, res) => {

  try {

    await sequelize.authenticate();

    res.json({

      sucesso: true,

      status: 'online',

      banco: 'conectado',

      timestamp:
        new Date().toISOString()

    });

  } catch (error) {

    console.error(
      'Health check falhou:',
      error
    );

    res.status(503).json({

      sucesso: false,

      status: 'offline',

      banco: 'indisponível'

    });

  }

});


// ======================================================
// FUNÇÃO PARA POPULAR DADOS INICIAIS
// ======================================================

const popularDadosReais = async () => {

  try {

    // ==================================================
    // POSTOS
    // ==================================================

    const totalPostos =
      await Posto.count();


    if (totalPostos === 0) {

      await Posto.create({

        nome:
          'Posto de Saúde Central de Saquarema',

        endereco:
          'Rua Coronel Madureira, 77 - Centro, Saquarema - RJ',

        horarioFuncionamento:
          'Segunda a Sexta, das 08h às 17h',

        aberto: true

      });


      await Posto.create({

        nome:
          'UBS Bacaxá',

        endereco:
          'Av. Saquarema, 4500 - Bacaxá, Saquarema - RJ',

        horarioFuncionamento:
          'Segunda a Sexta, das 08h às 16h',

        aberto: true

      });


      await Posto.create({

        nome:
          'USF Jaconé',

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

    const totalCampanhas =
      await Campanha.count();


    if (totalCampanhas === 0) {

      await Campanha.create({

        titulo:
          'Campanha Nacional de Vacinação contra a Influenza (Gripe)',

        descricao:
          'Proteja-se contra os vírus da gripe mais circulantes. Direcionado a idosos, profissionais da saúde, gestantes e público prioritário.',

        dataInicio:
          '01/04/2026',

        dataFim:
          '31/05/2026'

      });


      await Campanha.create({

        titulo:
          'Multivacinação para Atualização da Caderneta',

        descricao:
          'Campanha voltada para atualização do cartão de vacinas de crianças, jovens e adultos na rede pública.',

        dataInicio:
          '05/10/2026',

        dataFim:
          '23/10/2026'

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

app.post(
  '/api/usuarios/cadastro',
  async (req, res) => {

    try {

      const dados = req.body;


      const novoUsuario =
        await Usuario.create(dados);


      res.json({

        sucesso: true,

        mensagem:
          'Usuário cadastrado!',

        dados:
          novoUsuario

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

  }
);


// ---------------- LOGIN ----------------

app.post(
  '/api/usuarios/login',
  async (req, res) => {

    try {

      const {
        cpf,
        senha
      } = req.body;


      const usuario =
        await Usuario.findOne({

          where: {
            cpf
          }

        });


      const userData =
        usuario
          ? (usuario.toJSON() as any)
          : null;


      if (
        userData &&
        userData.senha === senha
      ) {

        res.json({

          sucesso: true,

          mensagem:
            'Login efetuado!',

          dados: {

            id:
              userData.id,

            nome:
              userData.nome

          }

        });

      } else {

        res.status(401).json({

          sucesso: false,

          mensagem:
            'CPF ou senha incorretos.'

        });

      }

    } catch (error) {

      console.error(
        'Erro no login:',
        error
      );


      res.status(500).json({

        sucesso: false,

        mensagem:
          'Erro no servidor.'

      });

    }

  }
);


// ---------------- USUÁRIO POR ID ----------------

app.get(
  '/api/usuarios/:id',
  async (req, res) => {

    try {

      const usuario =
        await Usuario.findByPk(
          req.params.id
        );


      res.json({

        sucesso: true,

        dados:
          usuario

      });

    } catch (error) {

      console.error(
        'Erro ao buscar perfil:',
        error
      );


      res.status(500).json({

        sucesso: false,

        mensagem:
          'Erro ao buscar perfil.'

      });

    }

  }
);


// ---------------- USUÁRIO POR CPF ----------------

app.get(
  '/api/usuarios/cpf/:cpf',
  async (req, res) => {

    try {

      const usuario =
        await Usuario.findOne({

          where: {

            cpf:
              req.params.cpf

          }

        });


      if (!usuario) {

        return res.status(404).json({

          sucesso: false,

          mensagem:
            'Usuário não encontrado.'

        });

      }


      res.json({

        sucesso: true,

        dados:
          usuario

      });

    } catch (error) {

      console.error(
        'Erro ao buscar usuário por CPF:',
        error
      );


      res.status(500).json({

        sucesso: false,

        mensagem:
          'Erro ao buscar usuário por CPF.'

      });

    }

  }
);


// ======================================================
// VACINAS
// ======================================================


// ---------------- LISTAR VACINAS ----------------

app.get(
  '/api/vacinas/:usuarioId',
  async (req, res) => {

    try {

      const vacinas =
        await Vacina.findAll({

          where: {

            usuarioId:
              req.params.usuarioId

          }

        });


      res.json({

        sucesso: true,

        dados:
          vacinas

      });

    } catch (error) {

      console.error(
        'Erro ao buscar vacinas:',
        error
      );


      res.status(500).json({

        sucesso: false,

        mensagem:
          'Erro ao buscar vacinas.'

      });

    }

  }
);


// ---------------- REGISTRAR VACINA ----------------

app.post(
  '/api/vacinas',
  async (req, res) => {

    try {

      const novaVacina =
        await Vacina.create(
          req.body
        );


      res.json({

        sucesso: true,

        mensagem:
          'Vacina registrada!',

        dados:
          novaVacina

      });

    } catch (error) {

      console.error(
        'Erro ao registrar vacina:',
        error
      );


      res.status(400).json({

        sucesso: false,

        mensagem:
          'Erro ao registrar vacina.'

      });

    }

  }
);


// ======================================================
// POSTOS
// ======================================================

app.get(
  '/api/postos',
  async (_req, res) => {

    try {

      const postos =
        await Posto.findAll();


      res.json({

        sucesso: true,

        dados:
          postos

      });

    } catch (error) {

      console.error(
        'Erro ao buscar postos:',
        error
      );


      res.status(500).json({

        sucesso: false,

        mensagem:
          'Erro ao buscar postos.'

      });

    }

  }
);


// ======================================================
// CAMPANHAS
// ======================================================

app.get(
  '/api/campanhas',
  async (_req, res) => {

    try {

      const campanhas =
        await Campanha.findAll();


      res.json({

        sucesso: true,

        dados:
          campanhas

      });

    } catch (error) {

      console.error(
        'Erro ao buscar campanhas:',
        error
      );


      res.status(500).json({

        sucesso: false,

        mensagem:
          'Erro ao buscar campanhas.'

      });

    }

  }
);


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


      const notificacoesDinamicas:
        any[] = [

          {

            id: 1,

            titulo:
              'Bem-vindo ao EasyVacc',

            mensagem:
              'Sua caderneta digital está sincronizada com os servidores do SUS.',

            lida: true

          }

        ];


      vacinas.forEach(
        (
          vacina: any,
          index: number
        ) => {

          if (vacina.proximaDose) {

            notificacoesDinamicas.push({

              id:
                index + 2,

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

        dados:
          notificacoesDinamicas

      });

    } catch (error) {

      console.error(
        'Erro ao gerar notificações:',
        error
      );


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

        dados:
          dependentes

      });

    } catch (error) {

      console.error(
        'Erro ao buscar dependentes:',
        error
      );


      res.status(500).json({

        sucesso: false,

        mensagem:
          'Erro ao buscar dependentes.'

      });

    }

  }
);


// ---------------- CADASTRAR DEPENDENTE ----------------

app.post(
  '/api/dependentes',
  async (req, res) => {

    try {

      const {
        usuarioId,
        nome,
        parentesco,
        dataNascimento
      } = req.body;


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

        dados:
          novoDependente

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

  }
);


// ======================================================
// INICIALIZAÇÃO DO BANCO
// ======================================================
//
// Essa função pode ser chamada:
//
// 1. Pelo servidor local;
// 2. Pela Vercel.
//
// IMPORTANTE:
// Não usamos force:true.
// Isso evita apagar as tabelas e os dados.
//

let bancoInicializado: Promise<void> | null = null;


export const inicializarBanco =
  async (): Promise<void> => {

    if (!bancoInicializado) {

      bancoInicializado =
        (async () => {

          try {

            await sequelize.authenticate();

            console.log(
              '📦 Conexão com banco de dados estabelecida!'
            );


            await sequelize.sync({
              alter: false
            });


            console.log(
              '📦 Banco de dados sincronizado com sucesso!'
            );


            await popularDadosReais();

          } catch (error) {

            console.error(
              '❌ Erro ao conectar/sincronizar com o banco:',
              error
            );

            // Permite uma nova tentativa caso a
            // primeira inicialização tenha falhado.
            bancoInicializado = null;

            throw error;

          }

        })();

    }


    await bancoInicializado;

  };


// ======================================================
// SERVIDOR LOCAL
// ======================================================
//
// Na Vercel não usamos app.listen().
// A Vercel utilizará o app exportado abaixo.
//
// Localmente:
// npm start
//
// continuará funcionando na porta 5000.
//

const PORT =
  Number(process.env.PORT) || 5000;


if (
  process.env.NODE_ENV !== 'production'
) {

  inicializarBanco()

    .then(() => {

      app.listen(
        PORT,
        () => {

          console.log(
            `🚀 Servidor EasyVacc rodando na porta ${PORT}`
          );

        }
      );

    })

    .catch((error) => {

      console.error(
        '❌ Não foi possível iniciar o servidor:',
        error
      );

      process.exit(1);

    });

}


// ======================================================
// EXPORTAÇÃO
// ======================================================
//
// Necessário para a Vercel utilizar o Express.
//

export default app;
