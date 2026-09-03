import app, {
  inicializarBanco
} from '../src/index';

export default async function handler(
  req: any,
  res: any
) {

  try {

    await inicializarBanco();

    return app(req, res);

  } catch (error) {

    console.error(
      '❌ Erro ao inicializar a API:',
      error
    );

    return res.status(500).json({

      sucesso: false,

      mensagem:
        'Erro ao inicializar o servidor.'

    });

  }

}
