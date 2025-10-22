import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import PolicyHero from "@/components/policy-hero";
import { Section } from "@/components/section";
import Header from "@/components/header";

export const metadata = generateSEO({
  title: "Política de Privacidade - Partilha Online",
  description:
    "Saiba como tratamos seus dados e garantimos sua privacidade conforme a LGPD.",
  keywords: [
    "política de privacidade",
    "proteção de dados",
    "LGPD",
    "cookies",
    "direitos do titular",
  ],
  url: "/politica-de-privacidade",
});

const menuPoliticadePrivacidade = [
  { label: "01. Introdução", href: "introducao" },
  { label: "02. Controladora e Encarregada (DPO)", href: "controladora" },
  { label: "03. Definições essenciais (LGPD, art. 5º)", href: "definicoes" },
  { label: "04. Fontes e formas de coleta", href: "fontes" },
  { label: "05. Categorias de dados pessoais tratados", href: "categorias" },
  { label: "06. Finalidades e bases legais", href: "finalidades" },
  { label: "07. Cookies e tecnologias similares", href: "cookies" },
  { label: "08. Compartilhamento e operadores", href: "compartilhamento" },
  { label: "09. Transferência internacional de dados", href: "transferencia" },
  { label: "10. Segurança da informação", href: "seguranca" },
  { label: "11. Retenção e eliminação", href: "retencao" },
  { label: "12. Direitos do titular e canais", href: "direitos" },
  { label: "13. Dados de crianças e adolescentes", href: "menores" },
  { label: "14. Alterações desta Política", href: "alteracoes" },
  { label: "15. Contato", href: "contato" },
];

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <Header />
      <PolicyHero />

      <Section background="white" padding="xl">
        <div className="grid grid-cols-12 gap-8">
          {/* Menu lateral fixo */}
          <aside className="col-span-12 md:col-span-3 lg:col-span-2 top-24 self-start">
            <nav className="space-y-4">
              {menuPoliticadePrivacidade.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href}`}
                  className="block text-[#AC5757] hover:underline"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Conteúdo */}
          <article className="col-span-12 md:col-span-9 lg:col-span-10 text-[#6F6F6F] space-y-16">
            <section id="introducao">
              <p>
                Conheça parte a parte a nossa PPPD <br />
                Última atualização: 20 de outubro de 2025
              </p>
              <br />
              <br />
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                01. Introdução
              </h2>
              <p className="">
              Esta Política de Privacidade descreve, de forma clara e objetiva, como a Partilha Online Ltda. ("Partilha Online" ou "Controladora") coleta, utiliza, armazena, compartilha e protege dados pessoais no contexto do aplicativo Partilha Online e de seus sites e serviços correlatos, em conformidade com a Lei nº 13.709/2018 (LGPD), o Marco Civil da Internet (Lei nº 12.965/2014) e demais normas aplicáveis.               </p>
              <br />
              <p>Ao utilizar o aplicativo ou nossos serviços, você declara ciência desta Política. Quando necessário, solicitaremos consentimento específico, informado e destacado. </p>
            </section>

            <section id="controladora">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                02. Controladora e Encarregada (DPO)
              </h2>
              <p className="mb-4">
                <strong>Controladora:</strong> Partilha Online Ltda.<br />
                <strong>CNPJ: </strong>61.429.341/0001-71<br />
                <strong>Endereço: </strong> Rua Dr. Manoel Pedro, nº 365, Conj. 504 - Curitiba/PR, CEP 80.035-030
              </p>
              <p>
                <strong>Encarregada pelo tratamento de dados (DPO):</strong> Barbara Duarte da Silva<br />
                <strong>E-mail:</strong> contato@partilhaonline.com.br<br />
                <strong>Telefone:</strong> +55 (41) 98870-5498
              </p>
            </section>

            <section id="definicoes">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                03. Definições essenciais (LGPD, art. 5º)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Titular:</strong> pessoa natural a quem se referem os dados pessoais.</li>
                <li><strong>Dado pessoal:</strong> informação relacionada a pessoa natural identificada ou identificável.</li>
                <li><strong>Dado pessoal sensível:</strong> dado sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico.</li>
                <li><strong>Controladora / Operadora:</strong> quem decide sobre o tratamento / quem realiza o tratamento em nome da controladora.</li>
                <li><strong>Agentes de tratamento:</strong> controladora e operadora.</li>
                <li><strong>Anonimização:</strong> dado relativo ao titular que não possa ser identificado, considerando meios técnicos razoáveis e disponíveis.</li>
                <li><strong>Banco de dados:</strong> conjunto estruturado de dados pessoais, em suporte eletrônico ou físico.</li>
                <li><strong>Tratamento:</strong> toda operação realizada com dados pessoais.</li>
              </ul>
              <p className="mt-4">
                <strong>Observação: </strong>Em determinadas soluções, a Partilha Online poderá atuar como operadora, quando tratar dados em nome de clientes (p. ex., escritórios que inserem dados de seus clientes/partes). Nesses casos, o controlador é o cliente contratante, e a Partilha Online seguirá as instruções documentadas do controlador.
              </p>
            </section>

            <section id="fontes">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                04. Fontes e formas de coleta
              </h2>
              <p className="mb-4">Coletamos dados pessoais por meio de:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identificação e contato:</strong> nome, CPF, RG, data de nascimento, endereço, e-mail, telefone.</li>
                <li><strong>Credenciais:</strong> login, CPF/e-mail, senha (hash), autenticação via Google/Apple.</li>
                <li><strong>Dados profissionais:</strong> nº OAB, nome da sociedade, especialidade.</li>
                <li><strong>Financeiros:</strong> faturamento e pagamentos (cartão via ASAAS Pagamentos, não armazenado pela Partilha Online).</li>
                <li><strong>Clientes/patrimoniais:</strong> bens, valores, quotas e informações para cálculos e simulações.</li>
                <li><strong>Navegação e técnicos:</strong> IP, dispositivo, sistema operacional, cookies, logs e localização aproximada.</li>
                <li><strong>Sensíveis:</strong> somente quando estritamente necessários e com base legal adequada.</li>
                <li><strong>Menores:</strong> apenas quando indispensável à finalidade jurídica e com consentimento do responsável.</li>
              </ul>
            </section>

            <section id="categorias">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                05. Categorias de dados pessoais tratados
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identificação e contato:</strong> nome, CPF, RG, data de nascimento, endereço, e-mail, telefone.</li>
                <li><strong>Credenciais:</strong> login, CPF/e-mail, senha (hash), autenticação via Google/Apple.</li>
                <li><strong>Dados profissionais:</strong> nº OAB, nome da sociedade, especialidade.</li>
                <li><strong>Financeiros:</strong> faturamento e pagamentos (cartão via ASAAS Pagamentos, não armazenado pela Partilha Online).</li>
                <li><strong>Clientes/patrimoniais:</strong> bens, valores, quotas e informações para cálculos e simulações.</li>
                <li><strong>Navegação e técnicos:</strong> IP, dispositivo, sistema operacional, cookies, logs e localização aproximada.</li>
                <li><strong>Sensíveis:</strong> somente quando estritamente necessários e com base legal adequada.</li>
                <li><strong>Menores:</strong> apenas quando indispensável à finalidade jurídica e com consentimento do responsável.</li>
              </ul>
            </section>

            <section id="finalidades">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                06. Finalidades e bases legais
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Finalidade</th>
                      <th className="border border-gray-300 p-3 text-left">Base Legal (LGPD, art. 7º)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Operar o aplicativo e gerenciar contas</td>
                      <td className="border border-gray-300 p-3">Execução de contrato (V)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Cálculos e simulações de partilhas/inventários</td>
                      <td className="border border-gray-300 p-3">Execução de contrato (V) / Legítimo interesse (IX)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Processar pagamentos e emitir notas</td>
                      <td className="border border-gray-300 p-3">Execução de contrato (V) / Obrigação legal (II) / Proteção ao crédito (X)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Suporte e comunicações operacionais</td>
                      <td className="border border-gray-300 p-3">Execução de contrato (V) / Legítimo interesse (IX)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Segurança, prevenção a fraudes, desempenho</td>
                      <td className="border border-gray-300 p-3">Legítimo interesse (IX) / Proteção ao crédito (X)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Cumprimento de obrigações legais e regulatórias</td>
                      <td className="border border-gray-300 p-3">Obrigação legal (II)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Marketing consentido</td>
                      <td className="border border-gray-300 p-3">Consentimento (I)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                07. Cookies e tecnologias similares
              </h2>
              <p className="mb-4">
                Utilizamos cookies e tecnologias equivalentes para lembrar suas preferências, manter sessões, medir performance e melhorar a segurança.
              </p>
              <p className="mb-4 text-[#C17C7C]" ><strong>Categorias:</strong></p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Essenciais:</strong> necessários ao funcionamento do serviço.</li>
                <li><strong>Funcionais:</strong> personalizam a experiência.</li>
                <li><strong>Analíticos:</strong> medem uso e desempenho.</li>
                <li><strong>Marketing:</strong> dependem de consentimento expresso.</li>
              </ul>
              <p className="mb-4">
                Você pode gerenciar cookies em seu navegador, mas a desativação pode limitar funcionalidades.
              </p>
              <p className="mb-4 text-[#C17C7C]"><strong>Anexo I - Tabela de Cookies e SDKs Utilizados</strong></p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Nome</th>
                      <th className="border border-gray-300 p-2 text-left">Finalidade</th>
                      <th className="border border-gray-300 p-2 text-left">Tipo</th>
                      <th className="border border-gray-300 p-2 text-left">Base Legal</th>
                      <th className="border border-gray-300 p-2 text-left">Prazo de Retenção</th>
                      <th className="border border-gray-300 p-2 text-left">Fornecedor</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">_ga (Google Analytics)</td>
                      <td className="border border-gray-300 p-2">Coletar estatísticas de uso e navegação</td>
                      <td className="border border-gray-300 p-2">Analítico</td>
                      <td className="border border-gray-300 p-2">Legítimo interesse (art. 7º, IX)</td>
                      <td className="border border-gray-300 p-2">Duração da conta + 6 meses</td>
                      <td className="border border-gray-300 p-2">Google LLC</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">_gid (Google Analytics)</td>
                      <td className="border border-gray-300 p-2">Identificar sessões e usuários (anon.)</td>
                      <td className="border border-gray-300 p-2">Analítico</td>
                      <td className="border border-gray-300 p-2">Legítimo interesse</td>
                      <td className="border border-gray-300 p-2">5 anos após transação</td>
                      <td className="border border-gray-300 p-2">Google LLC</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">Intercom</td>
                      <td className="border border-gray-300 p-2">Gestão de sessão e suporte ao usuário</td>
                      <td className="border border-gray-300 p-2">Funcional</td>
                      <td className="border border-gray-300 p-2">Execução de contrato</td>
                      <td className="border border-gray-300 p-2">2 anos</td>
                      <td className="border border-gray-300 p-2">Intercom, Inc</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">asaas_token</td>
                      <td className="border border-gray-300 p-2">Processar pagamentos e autenticação segura</td>
                      <td className="border border-gray-300 p-2">Essencial</td>
                      <td className="border border-gray-300 p-2">Execução de contrato</td>
                      <td className="border border-gray-300 p-2">Até revogação do consentimento</td>
                      <td className="border border-gray-300 p-2">ASAAS Pagamentos</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">app_session</td>
                      <td className="border border-gray-300 p-2">Manter sessão autenticada do usuário</td>
                      <td className="border border-gray-300 p-2">Essencial</td>
                      <td className="border border-gray-300 p-2">Execução de contrato</td>
                      <td className="border border-gray-300 p-2">Até revogação do consentimento</td>
                      <td className="border border-gray-300 p-2">Partilha Online</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">marketing_tag</td>
                      <td className="border border-gray-300 p-2">Exibir campanhas de marketing mediante consentimento</td>
                      <td className="border border-gray-300 p-2">Marketing</td>
                      <td className="border border-gray-300 p-2">Consentimento</td>
                      <td className="border border-gray-300 p-2">Até revogação</td>
                      <td className="border border-gray-300 p-2">Meta Platforms / Google Ads</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="compartilhamento">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                08. Compartilhamento e operadores
              </h2>
              <p className="mb-4">
                Compartilhamos dados apenas quando necessário e em conformidade com a LGPD.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>ASAAS Pagamentos:</strong> processamento de transações financeiras;</li>
                <li><strong>Microsoft Azure (Brasil):</strong> hospedagem e armazenamento;</li>
                <li><strong>Fornecedores de tecnologia e suporte:</strong> e-mail, monitoramento, analytics e atendimento;</li>
                <li><strong>Autoridades públicas:</strong> mediante obrigação legal.</li>
              </ul>
              <p>Todos os operadores contratados seguem cláusulas de confidencialidade e segurança.</p>
            </section>

            <section id="transferencia">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                09. Transferência internacional de dados
              </h2>
              <p>
              A infraestrutura principal está no Brasil (Azure – região Brasil). Pode haver tratamento fora do país por provedores de apoio, mediante garantias contratuais (arts. 33–36 da LGPD) que assegurem proteção equivalente.               </p>
            </section>

            <section id="seguranca">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                10. Segurança da informação
              </h2>
              <p className="mb-4">
                Adotamos medidas técnicas e administrativas de proteção, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Criptografia de dados sensíveis;</li>
                <li>Gestão de acessos e autenticação;</li>
                <li>Monitoramento e auditoria de sistemas;</li>
                <li>Backups e controle de versões.</li>
              </ul>
              <p className="mb-4">
                Em caso de incidente relevante, notificaremos a ANPD e os titulares afetados.
              </p>
              <p>
                <strong>Atenção:</strong> a Partilha Online nunca solicita senha por telefone, e-mail ou mensagem instantânea.
              </p>
            </section>

            <section id="retencao">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                11. Retenção e eliminação
              </h2>
              <p className="mb-4">
              Os dados são mantidos pelo tempo necessário às finalidades desta Política e obrigações legais. Após esse prazo, são eliminados ou anonimizados de forma segura.               </p>
              <p className="mb-4 text-[#C17C7C]"><strong>Tabela de Retenção de Dados</strong></p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">Categoria</th>
                      <th className="border border-gray-300 p-3 text-left">Prazo de Retenção</th>
                      <th className="border border-gray-300 p-3 text-left">Base Legal</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">Dados de identificação e login</td>
                      <td className="border border-gray-300 p-3">Duração da conta + 6 meses</td>
                      <td className="border border-gray-300 p-3">Marco Civil, art. 15</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Dados financeiros</td>
                      <td className="border border-gray-300 p-3">5 anos após transação</td>
                      <td className="border border-gray-300 p-3">Código Civil / Obrigações fiscais</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Dados de suporte e comunicações</td>
                      <td className="border border-gray-300 p-3">2 anos</td>
                      <td className="border border-gray-300 p-3">Legítimo interesse</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Dados de marketing</td>
                      <td className="border border-gray-300 p-3">Até revogação do consentimento</td>
                      <td className="border border-gray-300 p-3">Consentimento</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">Logs de acesso</td>
                      <td className="border border-gray-300 p-3">6 meses</td>
                      <td className="border border-gray-300 p-3">Marco Civil, art. 15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="direitos">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                12. Direitos do titular e canais
              </h2>
              <p className="mb-4">O titular pode requerer:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Confirmação da existência e acesso aos dados;</li>
                <li>Correção de dados incorretos;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                <li>Portabilidade;</li>
                <li>Informação sobre compartilhamento;</li>
                <li>Revogação do consentimento.</li>
              </ol>
            </section>

            <section id="menores">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                13. Dados de crianças e adolescentes
              </h2>
              <p>
              O aplicativo destina-se a maiores de 18 anos. Dados de menores serão tratados apenas quando necessários, com consentimento do responsável e observância do melhor interesse do menor.               </p>
            </section>

            <section id="alteracoes">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                14. Alterações desta Política
              </h2>
              <p>
              A Política poderá ser atualizada a qualquer momento. A versão vigente será disponibilizada no site e no aplicativo. Mudanças relevantes poderão ser comunicadas por meios razoáveis (aviso no app/e-mail).               </p>
            </section>

            <section id="contato">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                15. Contato
              </h2>
              <p>
                <strong>Encarregada (DPO):</strong> Barbara Duarte da Silva<br />
                <strong>E-mail:</strong> contato@partilhaonline.com.br<br />
                <strong>Telefone:</strong> +55 (41) 98870-5498
              </p>
            </section>
          </article>
        </div>
      </Section>
    </>
  );
}