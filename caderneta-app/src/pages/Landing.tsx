import { Link } from 'react-router-dom';

import {
  ArrowRight,
  Bell,
  CalendarCheck,
  CheckCircle2,
  FileText,
  MapPin,
  ShieldCheck,
  Syringe,
  UsersRound,
} from 'lucide-react';


/*
  ============================================================
  LANDING PAGE - EASYVACC
  ============================================================

  Nova proposta visual:

  - Visual institucional
  - Fundo claro
  - Azul-marinho como identidade principal
  - Verde como cor de ação e saúde
  - Sem gradientes exagerados
  - Sem elementos decorativos desnecessários
  - Comunicação focada nas funcionalidades reais do sistema
*/


export default function Landing() {

  return (

    <div
      className="
        min-h-screen
        bg-white
        font-sans
        text-slate-900
      "
    >


      {/* ======================================================
          NAVBAR
         ====================================================== */}

      <header
        className="
          sticky
          top-0
          z-50

          border-b
          border-slate-200

          bg-white/95
          backdrop-blur
        "
      >

        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-7xl
            items-center
            justify-between

            px-6

            lg:px-8
          "
        >


          {/* LOGO */}

          <Link
            to="/"
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-lg

                bg-[#0b2239]
              "
            >

              <img
                src="/logo.png"
                alt="EasyVacc"
                className="
                  h-8
                  w-8
                  object-contain
                "
              />

            </div>


            <div>

              <p
                className="
                  text-[18px]
                  font-bold
                  tracking-tight
                  text-[#0b2239]
                "
              >
                Easy
                <span className="text-emerald-600">
                  Vacc
                </span>
              </p>

              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-slate-400
                "
              >
                Caderneta digital
              </p>

            </div>

          </Link>


          {/* NAVEGAÇÃO */}

          <nav
            className="
              hidden
              items-center
              gap-8

              md:flex
            "
          >

            <a
              href="#recursos"
              className="
                text-sm
                font-medium
                text-slate-600

                transition-colors

                hover:text-slate-950
              "
            >
              Recursos
            </a>

            <a
              href="#plataforma"
              className="
                text-sm
                font-medium
                text-slate-600

                transition-colors

                hover:text-slate-950
              "
            >
              Plataforma
            </a>

          </nav>


          {/* LOGIN */}

          <Link
            to="/login"
            className="
              inline-flex
              items-center
              justify-center
              gap-2

              rounded-lg

              bg-[#0b2239]

              px-4
              py-2.5

              text-sm
              font-semibold
              text-white

              transition-colors

              hover:bg-[#123552]
            "
          >
            Entrar

            <ArrowRight size={16} />
          </Link>

        </div>

      </header>


      {/* ======================================================
          HERO
         ====================================================== */}

      <main>

        <section
          className="
            border-b
            border-slate-200

            bg-slate-50
          "
        >

          <div
            className="
              mx-auto
              grid
              max-w-7xl
              grid-cols-1
              items-center
              gap-14

              px-6
              py-16

              lg:grid-cols-[1fr_0.95fr]
              lg:px-8
              lg:py-24
            "
          >


            {/* ==================================================
                TEXTO PRINCIPAL
               ================================================== */}

            <div>

              {/* IDENTIFICAÇÃO */}

              <div
                className="
                  mb-6
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-emerald-200

                  bg-emerald-50

                  px-3
                  py-1.5

                  text-xs
                  font-semibold
                  text-emerald-800
                "
              >

                <ShieldCheck size={14} />

                Gestão digital de vacinação

              </div>


              {/* TÍTULO */}

              <h1
                className="
                  max-w-2xl

                  text-4xl
                  font-bold
                  leading-[1.08]
                  tracking-[-0.035em]
                  text-[#0b2239]

                  sm:text-5xl
                  lg:text-[58px]
                "
              >
                Sua caderneta de vacinação,
                <span className="text-emerald-600">
                  {' '}organizada em um só lugar.
                </span>
              </h1>


              {/* DESCRIÇÃO */}

              <p
                className="
                  mt-6
                  max-w-xl

                  text-base
                  leading-7
                  text-slate-600

                  lg:text-[17px]
                "
              >
                Consulte registros de imunização,
                acompanhe seu histórico, organize
                dependentes e tenha acesso às principais
                informações da sua caderneta digital.
              </p>


              {/* BOTÕES */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                "
              >

                <Link
                  to="/login"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2

                    rounded-lg

                    bg-emerald-600

                    px-5
                    py-3

                    text-sm
                    font-semibold
                    text-white

                    shadow-sm

                    transition-colors

                    hover:bg-emerald-700
                  "
                >
                  Acessar minha caderneta

                  <ArrowRight size={17} />
                </Link>


                <a
                  href="#recursos"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    rounded-lg

                    border
                    border-slate-300

                    bg-white

                    px-5
                    py-3

                    text-sm
                    font-semibold
                    text-slate-700

                    transition-colors

                    hover:bg-slate-50
                  "
                >
                  Conhecer recursos
                </a>

              </div>


              {/* INFORMAÇÕES CURTAS */}

              <div
                className="
                  mt-9
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-3
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-xs
                    font-medium
                    text-slate-500
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="text-emerald-600"
                  />

                  Histórico organizado
                </div>


                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-xs
                    font-medium
                    text-slate-500
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="text-emerald-600"
                  />

                  Gestão de dependentes
                </div>


                <div
                  className="
                    flex
                    items-center
                    gap-2

                    text-xs
                    font-medium
                    text-slate-500
                  "
                >
                  <CheckCircle2
                    size={15}
                    className="text-emerald-600"
                  />

                  Acesso digital
                </div>

              </div>

            </div>


            {/* ==================================================
                REPRESENTAÇÃO DO SISTEMA
               ================================================== */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-[540px]
              "
            >


              {/* JANELA */}

              <div
                className="
                  overflow-hidden

                  rounded-xl

                  border
                  border-slate-200

                  bg-white

                  shadow-[0_24px_70px_rgba(15,23,42,0.12)]
                "
              >


                {/* TOPO DA JANELA */}

                <div
                  className="
                    flex
                    h-11
                    items-center
                    justify-between

                    border-b
                    border-slate-200

                    bg-slate-50

                    px-4
                  "
                >

                  <div className="flex gap-1.5">

                    <div
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-slate-300
                      "
                    />

                    <div
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-slate-300
                      "
                    />

                    <div
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-slate-300
                      "
                    />

                  </div>


                  <span
                    className="
                      text-[10px]
                      font-medium
                      text-slate-400
                    "
                  >
                    EasyVacc
                  </span>

                </div>


                {/* CONTEÚDO DA JANELA */}

                <div className="p-6">


                  {/* CABEÇALHO */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-4
                    "
                  >

                    <div>

                      <p
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-slate-400
                        "
                      >
                        Visão geral
                      </p>

                      <p
                        className="
                          mt-1
                          text-lg
                          font-bold
                          text-slate-900
                        "
                      >
                        Situação vacinal
                      </p>

                    </div>


                    <div
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center

                        rounded-lg

                        bg-emerald-50
                        text-emerald-700
                      "
                    >
                      <Syringe size={18} />
                    </div>

                  </div>


                  {/* STATUS */}

                  <div
                    className="
                      mt-6

                      rounded-lg

                      border
                      border-slate-200

                      p-5
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <div>

                        <p
                          className="
                            text-xs
                            font-medium
                            text-slate-500
                          "
                        >
                          Caderneta
                        </p>

                        <p
                          className="
                            mt-1
                            text-lg
                            font-bold
                            text-slate-900
                          "
                        >
                          Registros organizados
                        </p>

                      </div>


                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center

                          rounded-full

                          bg-emerald-50
                          text-emerald-600
                        "
                      >
                        <CheckCircle2 size={20} />
                      </div>

                    </div>


                    <div
                      className="
                        mt-5
                        h-1.5
                        overflow-hidden
                        rounded-full
                        bg-slate-100
                      "
                    >

                      <div
                        className="
                          h-full
                          w-4/5
                          rounded-full
                          bg-emerald-600
                        "
                      />

                    </div>

                  </div>


                  {/* MINI CARDS */}

                  <div
                    className="
                      mt-4
                      grid
                      grid-cols-3
                      gap-3
                    "
                  >

                    <div
                      className="
                        rounded-lg
                        border
                        border-slate-200
                        p-3
                      "
                    >

                      <FileText
                        size={16}
                        className="text-slate-500"
                      />

                      <p
                        className="
                          mt-3
                          text-[10px]
                          text-slate-400
                        "
                      >
                        Histórico
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          font-semibold
                          text-slate-800
                        "
                      >
                        Vacinas
                      </p>

                    </div>


                    <div
                      className="
                        rounded-lg
                        border
                        border-slate-200
                        p-3
                      "
                    >

                      <UsersRound
                        size={16}
                        className="text-slate-500"
                      />

                      <p
                        className="
                          mt-3
                          text-[10px]
                          text-slate-400
                        "
                      >
                        Família
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          font-semibold
                          text-slate-800
                        "
                      >
                        Dependentes
                      </p>

                    </div>


                    <div
                      className="
                        rounded-lg
                        border
                        border-slate-200
                        p-3
                      "
                    >

                      <MapPin
                        size={16}
                        className="text-slate-500"
                      />

                      <p
                        className="
                          mt-3
                          text-[10px]
                          text-slate-400
                        "
                      >
                        Unidades
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          font-semibold
                          text-slate-800
                        "
                      >
                        Postos
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* CARD FLUTUANTE */}

              <div
                className="
                  absolute
                  -bottom-6
                  -left-4

                  hidden

                  w-[220px]

                  rounded-lg

                  border
                  border-slate-200

                  bg-white

                  p-4

                  shadow-lg

                  sm:block
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center

                      rounded-lg

                      bg-blue-50
                      text-blue-700
                    "
                  >
                    <Bell size={17} />
                  </div>


                  <div>

                    <p
                      className="
                        text-[10px]
                        font-medium
                        text-slate-400
                      "
                    >
                      Acompanhamento
                    </p>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        font-semibold
                        text-slate-800
                      "
                    >
                      Informações centralizadas
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            RECURSOS
           ====================================================== */}

        <section
          id="recursos"
          className="
            bg-white

            px-6
            py-20

            lg:px-8
            lg:py-24
          "
        >

          <div className="mx-auto max-w-7xl">


            {/* TÍTULO DA SEÇÃO */}

            <div
              className="
                max-w-2xl
              "
            >

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-emerald-700
                "
              >
                Recursos
              </p>


              <h2
                className="
                  mt-3

                  text-3xl
                  font-bold
                  tracking-tight
                  text-[#0b2239]

                  md:text-4xl
                "
              >
                Informações de vacinação mais acessíveis
                e organizadas.
              </h2>


              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                O EasyVacc reúne funcionalidades para
                facilitar o acompanhamento da caderneta
                de vacinação do usuário e de seus
                dependentes.
              </p>

            </div>


            {/* CARDS */}

            <div
              className="
                mt-12

                grid
                grid-cols-1

                border
                border-slate-200

                md:grid-cols-2
                lg:grid-cols-4
              "
            >


              {/* HISTÓRICO */}

              <div
                className="
                  border-b
                  border-slate-200

                  p-6

                  md:border-r
                  lg:border-b-0
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-lg

                    bg-emerald-50
                    text-emerald-700
                  "
                >
                  <Syringe size={18} />
                </div>


                <h3
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Histórico de vacinação
                </h3>


                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  Consulte os registros de doses
                  vinculados à sua caderneta.
                </p>

              </div>


              {/* DOCUMENTOS */}

              <div
                className="
                  border-b
                  border-slate-200

                  p-6

                  lg:border-b-0
                  lg:border-r
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-lg

                    bg-blue-50
                    text-blue-700
                  "
                >
                  <FileText size={18} />
                </div>


                <h3
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Documento digital
                </h3>


                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  Organize os registros em um documento
                  que pode ser visualizado e impresso.
                </p>

              </div>


              {/* DEPENDENTES */}

              <div
                className="
                  border-b
                  border-slate-200

                  p-6

                  md:border-b-0
                  md:border-r
                "
              >

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-lg

                    bg-violet-50
                    text-violet-700
                  "
                >
                  <UsersRound size={18} />
                </div>


                <h3
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Dependentes
                </h3>


                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  Centralize o acompanhamento de
                  familiares vinculados à sua conta.
                </p>

              </div>


              {/* CAMPANHAS */}

              <div className="p-6">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-lg

                    bg-amber-50
                    text-amber-700
                  "
                >
                  <CalendarCheck size={18} />
                </div>


                <h3
                  className="
                    mt-5
                    text-sm
                    font-semibold
                    text-slate-900
                  "
                >
                  Campanhas
                </h3>


                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  Consulte campanhas e informações
                  disponibilizadas na plataforma.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            PLATAFORMA
           ====================================================== */}

        <section
          id="plataforma"
          className="
            border-y
            border-slate-200

            bg-slate-50

            px-6
            py-20

            lg:px-8
          "
        >

          <div
            className="
              mx-auto
              grid
              max-w-7xl
              grid-cols-1
              gap-12

              lg:grid-cols-2
              lg:items-center
            "
          >


            {/* TEXTO */}

            <div>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-emerald-700
                "
              >
                Plataforma
              </p>


              <h2
                className="
                  mt-3

                  max-w-xl

                  text-3xl
                  font-bold
                  tracking-tight
                  text-[#0b2239]

                  md:text-4xl
                "
              >
                Uma experiência simples para acompanhar
                informações importantes.
              </h2>


              <p
                className="
                  mt-5
                  max-w-xl

                  text-sm
                  leading-7
                  text-slate-600
                "
              >
                A proposta do EasyVacc é reduzir a
                fragmentação das informações e oferecer
                uma interface única para consultar a
                caderneta, dependentes, campanhas e
                unidades de atendimento cadastradas.
              </p>

            </div>


            {/* LISTA */}

            <div
              className="
                overflow-hidden

                border
                border-slate-200

                bg-white
              "
            >


              <div
                className="
                  flex
                  gap-4

                  border-b
                  border-slate-200

                  p-5
                "
              >

                <CheckCircle2
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-emerald-600
                  "
                />

                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-900
                    "
                  >
                    Caderneta centralizada
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    Informações reunidas em uma interface
                    de consulta simples e objetiva.
                  </p>

                </div>

              </div>


              <div
                className="
                  flex
                  gap-4

                  border-b
                  border-slate-200

                  p-5
                "
              >

                <UsersRound
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-emerald-600
                  "
                />

                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-900
                    "
                  >
                    Gestão familiar
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    Cadastre dependentes e mantenha os
                    dados organizados dentro da mesma
                    conta.
                  </p>

                </div>

              </div>


              <div
                className="
                  flex
                  gap-4
                  p-5
                "
              >

                <MapPin
                  size={18}
                  className="
                    mt-0.5
                    shrink-0
                    text-emerald-600
                  "
                />

                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-slate-900
                    "
                  >
                    Serviços em um só ambiente
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-5
                      text-slate-500
                    "
                  >
                    Acesse campanhas, notificações,
                    documentos e postos cadastrados.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ======================================================
            CTA FINAL
           ====================================================== */}

        <section
          className="
            bg-[#0b2239]

            px-6
            py-16

            lg:px-8
          "
        >

          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              justify-between
              gap-8

              md:flex-row
              md:items-center
            "
          >

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-emerald-400
                "
              >
                EasyVacc
              </p>


              <h2
                className="
                  mt-2

                  text-2xl
                  font-bold
                  tracking-tight
                  text-white

                  md:text-3xl
                "
              >
                Sua vacinação. Seus registros.
                <br className="hidden sm:block" />
                Um único lugar.
              </h2>

            </div>


            <Link
              to="/login"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2

                rounded-lg

                bg-white

                px-5
                py-3

                text-sm
                font-semibold
                text-[#0b2239]

                transition-colors

                hover:bg-slate-100
              "
            >
              Acessar EasyVacc

              <ArrowRight size={17} />
            </Link>

          </div>

        </section>

      </main>


      {/* ======================================================
          FOOTER
         ====================================================== */}

      <footer
        className="
          border-t
          border-white/10

          bg-[#081b2d]

          px-6
          py-6

          lg:px-8
        "
      >

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            justify-between
            gap-3

            text-[11px]
            text-slate-500

            sm:flex-row
            sm:items-center
          "
        >

          <p>
            © {new Date().getFullYear()} EasyVacc
          </p>

          <p>
            Caderneta digital de vacinação
          </p>

        </div>

      </footer>

    </div>

  );

}