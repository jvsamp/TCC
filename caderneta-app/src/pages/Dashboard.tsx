import {
  ShieldCheck,
  FileText,
  User,
  PlusCircle,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Syringe,
  CalendarDays,
  Sparkles,
  HeartPulse,
} from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    /*
      ==========================================================
      DASHBOARD EASYVACC
      ==========================================================
      Fundo escuro + gradientes + transparência + animações.
      Toda a parte funcional continua usando as mesmas rotas.
    */
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* ======================================================
          LUZES DECORATIVAS DO FUNDO
          São círculos desfocados que criam o efeito de luz.
         ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute -top-40 -left-40
            h-[500px] w-[500px]
            rounded-full
            bg-emerald-500/20
            blur-[120px]
            animate-pulse
          "
        />

        <div
          className="
            absolute top-1/3 -right-40
            h-[550px] w-[550px]
            rounded-full
            bg-cyan-500/20
            blur-[140px]
            animate-pulse
          "
        />

        <div
          className="
            absolute bottom-0 left-1/3
            h-[400px] w-[400px]
            rounded-full
            bg-teal-500/10
            blur-[120px]
          "
        />

      </div>


      {/* ======================================================
          CONTEÚDO PRINCIPAL
         ====================================================== */}

      <div
        className="
          relative z-10
          mx-auto max-w-7xl
          p-6 md:p-12
          pb-20
          animate-fade-in
        "
      >

        {/* ====================================================
            BANNER PRINCIPAL
           ==================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[2.5rem]
            border border-white/10
            bg-gradient-to-br
            from-emerald-500/30
            via-teal-500/20
            to-cyan-500/20
            p-8 md:p-10
            shadow-2xl
            shadow-cyan-950/40
            backdrop-blur-xl
            mb-8
          "
        >

          {/* Luz interna do banner */}

          <div
            className="
              absolute -right-20 -top-20
              h-72 w-72
              rounded-full
              bg-cyan-400/20
              blur-3xl
              animate-pulse
            "
          />

          <div
            className="
              absolute -bottom-32 left-1/3
              h-72 w-72
              rounded-full
              bg-emerald-400/20
              blur-3xl
            "
          />


          <div
            className="
              relative z-10
              flex flex-col
              md:flex-row
              justify-between
              items-start
              md:items-center
              gap-8
            "
          >

            {/* LADO ESQUERDO */}

            <div>

              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border border-emerald-300/20
                  bg-emerald-400/10
                  px-4 py-2
                  text-xs
                  font-bold
                  text-emerald-200
                  backdrop-blur-xl
                  mb-5
                "
              >
                <Activity size={14} />

                Sistema Integrado SUS

                <span className="relative flex h-2 w-2">

                  <span
                    className="
                      absolute inline-flex
                      h-full w-full
                      animate-ping
                      rounded-full
                      bg-emerald-400
                      opacity-75
                    "
                  />

                  <span
                    className="
                      relative inline-flex
                      h-2 w-2
                      rounded-full
                      bg-emerald-400
                    "
                  />

                </span>

              </div>


              <h1
                className="
                  text-4xl
                  md:text-5xl
                  font-black
                  tracking-tight
                "
              >
                Olá, João Victor
                <span className="inline-block ml-3 animate-bounce">
                  👋
                </span>
              </h1>


              <p
                className="
                  mt-4
                  max-w-2xl
                  text-sm
                  md:text-base
                  leading-relaxed
                  text-slate-300
                "
              >
                Sua saúde em um só lugar. Acompanhe sua vacinação,
                consulte seu histórico e mantenha sua proteção sempre
                atualizada.
              </p>


              {/* BOTÕES DO BANNER */}

              <div className="mt-7 flex flex-wrap gap-3">

                <Link
                  to="/historico"
                  className="
                    flex items-center gap-2
                    rounded-xl
                    bg-emerald-400
                    px-5 py-3
                    text-sm font-black
                    text-slate-950
                    shadow-lg
                    shadow-emerald-500/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-emerald-300
                    hover:shadow-emerald-400/30
                  "
                >
                  <Syringe size={18} />

                  Minhas Vacinas
                </Link>


                <Link
                  to="/certificado"
                  className="
                    flex items-center gap-2
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    px-5 py-3
                    text-sm font-bold
                    text-white
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-white/10
                  "
                >
                  <FileText size={18} />

                  Certificado
                </Link>

              </div>

            </div>


            {/* STATUS DE PROTEÇÃO */}

            <div
              className="
                group
                min-w-[230px]
                rounded-[2rem]
                border border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:bg-white/10
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    bg-emerald-400
                    text-slate-950
                    shadow-lg
                    shadow-emerald-500/20
                    transition-transform
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                  "
                >
                  <ShieldCheck size={30} />
                </div>


                <div>

                  <p
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-slate-400
                    "
                  >
                    Status Geral
                  </p>

                  <p className="mt-1 text-lg font-black text-white">
                    Protegido
                  </p>

                </div>

              </div>


              {/* BARRA DE PROGRESSO */}

              <div className="mt-6">

                <div
                  className="
                    mb-2
                    flex
                    justify-between
                    text-xs
                    font-bold
                  "
                >
                  <span className="text-slate-400">
                    Cobertura vacinal
                  </span>

                  <span className="text-emerald-300">
                    100%
                  </span>
                </div>


                <div
                  className="
                    h-2
                    overflow-hidden
                    rounded-full
                    bg-white/10
                  "
                >
                  <div
                    className="
                      h-full
                      w-full
                      rounded-full
                      bg-gradient-to-r
                      from-emerald-400
                      to-cyan-400
                      shadow-lg
                      shadow-emerald-400/30
                    "
                  />
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ====================================================
            MINI CARDS DE STATUS
           ==================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

          {/* VACINAS */}

          <div
            className="
              group
              rounded-2xl
              border border-white/10
              bg-white/[0.04]
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-emerald-400/30
              hover:bg-emerald-400/10
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-emerald-400/10
                  text-emerald-300
                "
              >
                <Syringe size={22} />
              </div>

              <div>
                <p className="text-2xl font-black">
                  100%
                </p>

                <p className="text-xs font-semibold text-slate-400">
                  Vacinação em dia
                </p>
              </div>

            </div>
          </div>


          {/* STATUS */}

          <div
            className="
              group
              rounded-2xl
              border border-white/10
              bg-white/[0.04]
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-cyan-400/30
              hover:bg-cyan-400/10
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-cyan-400/10
                  text-cyan-300
                "
              >
                <HeartPulse size={22} />
              </div>

              <div>
                <p className="text-2xl font-black">
                  Protegido
                </p>

                <p className="text-xs font-semibold text-slate-400">
                  Status de imunização
                </p>
              </div>

            </div>
          </div>


          {/* PRÓXIMA DOSE */}

          <div
            className="
              group
              rounded-2xl
              border border-white/10
              bg-white/[0.04]
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-teal-400/30
              hover:bg-teal-400/10
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  bg-teal-400/10
                  text-teal-300
                "
              >
                <CalendarDays size={22} />
              </div>

              <div>
                <p className="text-lg font-black">
                  Em dia
                </p>

                <p className="text-xs font-semibold text-slate-400">
                  Nenhuma dose pendente
                </p>
              </div>

            </div>
          </div>

        </div>


        {/* ====================================================
            TÍTULO ACESSO RÁPIDO
           ==================================================== */}

        <div className="mb-6 flex items-center gap-3">

          <div
            className="
              flex h-9 w-9
              items-center justify-center
              rounded-xl
              bg-emerald-400/10
              text-emerald-300
            "
          >
            <Sparkles size={18} />
          </div>

          <div>
            <h2 className="text-xl font-black">
              Acesso Rápido
            </h2>

            <p className="text-xs text-slate-500">
              Tudo que você precisa em poucos cliques
            </p>
          </div>

        </div>


        {/* ====================================================
            CARDS PRINCIPAIS
           ==================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">


          {/* ==================================================
              CARD 1 - MINHAS VACINAS
             ================================================== */}

          <Link
            to="/historico"
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-gradient-to-br
              from-emerald-500/10
              to-white/[0.03]
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-emerald-400/30
              hover:shadow-2xl
              hover:shadow-emerald-950/30
            "
          >

            {/* Luz que aparece no hover */}

            <div
              className="
                absolute
                -right-20
                -top-20
                h-48 w-48
                rounded-full
                bg-emerald-400/0
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-emerald-400/20
              "
            />


            <div className="relative z-10">

              <div
                className="
                  mb-7
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-emerald-400/10
                  text-emerald-300
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                  group-hover:bg-emerald-400
                  group-hover:text-slate-950
                "
              >
                <ShieldCheck size={28} />
              </div>


              <h3
                className="
                  mb-3
                  text-xl
                  font-black
                  text-white
                "
              >
                Minhas Vacinas
              </h3>


              <p
                className="
                  min-h-[72px]
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                Consulte seu histórico completo de imunização,
                datas de aplicação e próximas doses.
              </p>


              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-black
                  text-emerald-300
                "
              >
                Acessar histórico

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </div>

            </div>

          </Link>


          {/* ==================================================
              CARD 2 - CERTIFICADO
             ================================================== */}

          <Link
            to="/certificado"
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-gradient-to-br
              from-teal-500/10
              to-white/[0.03]
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-teal-400/30
              hover:shadow-2xl
              hover:shadow-teal-950/30
            "
          >

            <div
              className="
                absolute
                -right-20
                -top-20
                h-48 w-48
                rounded-full
                bg-teal-400/0
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-teal-400/20
              "
            />


            <div className="relative z-10">

              <div
                className="
                  mb-7
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-teal-400/10
                  text-teal-300
                  transition-all
                  duration-500
                  group-hover:-rotate-6
                  group-hover:scale-110
                  group-hover:bg-teal-400
                  group-hover:text-slate-950
                "
              >
                <FileText size={28} />
              </div>


              <h3 className="mb-3 text-xl font-black text-white">
                Certificado Nacional
              </h3>


              <p
                className="
                  min-h-[72px]
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                Gere seu comprovante oficial de vacinação
                em PDF com QR Code de validação.
              </p>


              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-black
                  text-teal-300
                "
              >
                Emitir PDF

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </div>

            </div>

          </Link>


          {/* ==================================================
              CARD 3 - PERFIL
             ================================================== */}

          <Link
            to="/perfil"
            className="
              group
              relative
              overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-gradient-to-br
              from-cyan-500/10
              to-white/[0.03]
              p-8
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-cyan-400/30
              hover:shadow-2xl
              hover:shadow-cyan-950/30
            "
          >

            <div
              className="
                absolute
                -right-20
                -top-20
                h-48 w-48
                rounded-full
                bg-cyan-400/0
                blur-3xl
                transition-all
                duration-500
                group-hover:bg-cyan-400/20
              "
            />


            <div className="relative z-10">

              <div
                className="
                  mb-7
                  flex h-14 w-14
                  items-center justify-center
                  rounded-2xl
                  bg-cyan-400/10
                  text-cyan-300
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                  group-hover:bg-cyan-400
                  group-hover:text-slate-950
                "
              >
                <User size={28} />
              </div>


              <h3 className="mb-3 text-xl font-black text-white">
                Meu Perfil e Dados
              </h3>


              <p
                className="
                  min-h-[72px]
                  text-sm
                  leading-relaxed
                  text-slate-400
                "
              >
                Visualize suas informações cadastrais,
                endereço, tipo sanguíneo e contato de emergência.
              </p>


              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-2
                  text-sm
                  font-black
                  text-cyan-300
                "
              >
                Gerenciar dados

                <ArrowUpRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </div>

            </div>

          </Link>

        </div>


        {/* ====================================================
            DEPENDENTES
           ==================================================== */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-5
            rounded-[2rem]
            border border-white/10
            bg-gradient-to-r
            from-white/[0.05]
            to-emerald-400/[0.05]
            p-6
            backdrop-blur-xl
          "
        >

          <div className="flex items-center gap-4">

            <div
              className="
                flex h-12 w-12
                shrink-0
                items-center justify-center
                rounded-2xl
                bg-emerald-400/10
                text-emerald-300
              "
            >
              <CheckCircle2 size={23} />
            </div>


            <div>

              <p className="font-bold text-white">
                Gerencie também sua família
              </p>

              <p className="mt-1 text-sm text-slate-400">
                Cadastre filhos ou familiares como dependentes
                e acompanhe a vacinação deles.
              </p>

            </div>

          </div>


          <Link
            to="/adicionar-dependente"
            className="
              flex
              shrink-0
              items-center
              gap-2
              rounded-xl
              border border-emerald-400/20
              bg-emerald-400/10
              px-5 py-3
              text-xs
              font-black
              text-emerald-300
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-emerald-400
              hover:text-slate-950
            "
          >
            <PlusCircle size={17} />

            Adicionar Dependente
          </Link>

        </div>

      </div>
    </div>
  );
}