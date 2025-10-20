import Link from "next/link";
import { generateSEO } from "@/lib/seo";
import PolicyHero from "@/components/policy-hero";
import { Section } from "@/components/section";
import Header from "@/components/header";

export const metadata = generateSEO({
  title: "Política de Privacidade - XBits",
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
  { label: "GLOSSÁRIO", href: "glossario" },
  { label: "O USO DOS DADOS", href: "uso-dados" },
  { label: "A POLÍTICA DO USO DE COOKIES", href: "cookies" },
  { label: "O USO DE TECNOLOGIAS SIMILARES", href: "tecnologias" },
  { label: "DIREITOS DO TITULAR", href: "direitos" },
  { label: "CONTATO", href: "contato" },
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
            <section id="glossario">
              <p>
                Conheça parte a parte a nossa PPPD. <br />
                Atualizada em 01.º de Julho de 2025.
              </p>
              <br />
              <br />
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                GLOSSÁRIO
              </h2>
              <p className="">
                Este tópico destina-se a esclarecer termos utilizados nesta
                PPPD. Acrescenta-se que procuramos ao máximo adotar os termos
                previstos no art. 5.º da Lei de Geral de Proteção de Dados –
                LGPD, Lei n.º 13.709 de 2018, conforme a redação dada pela Lei
                13.853/2019.
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">
                1.A. Pessoas envolvidas
              </h3>
              <br />
              <p>
                I - titular: pessoa natural a quem se refere os dados pessoais
                que são objeto de tratamento. Geralmente, o titular dos dados é
                o Usuário de nossos produtos e serviços, devendo ser pessoa
                maior de 18 anos, com plena capacidade para aceitar e consentir
                os termos apresentados nesta PPPD. Caso não se encaixe neste
                perfil, requer-se que pessoas autorizadas e/ou responsáveis pelo
                Titular expressem o seu aceite e consentimento. <br />
                <br />
                II - controlador: a quem compete decidir questões referentes ao
                tratamento de dados pessoais. Nossos produtos e serviços podem
                ter como controlador: <br /> <br /> - Quando os dados são
                solicitados por terceiros/clientes da X-Bits, a X-Bits atua
                apenas como operadora, coletando diretamente ou indiretamente os
                dados do titular/usuário. Neste caso, considera-se controlador
                aquele com quem o titular/usuário celebrou o contrato
                originalmente;
                <br />
                <br />- Quando os dados são solicitados diretamente pela X-Bits,
                a X-Bits atua como controladora e, muitas vezes, a operadora dos
                dados do titular/usuário. Os dados coletados e motivos de coleta
                são descritos nos Termos de Uso de cada produto ou serviço da
                X-Bits;
                <br />
                <br /> III - operador: quem realiza o tratamento de dados
                pessoais em nome do controlador – geralmente a X-Bits. <br />{" "}
                <br /> IV - agentes de tratamento: o controlador e o operador.
                <br />
                <br /> V – encarregado ou Data Protection Officer (DPO): pessoa
                física ou jurídica, indicada pelo controlador e operador para
                atuar como canal de comunicação entre os agentes de tratamento,
                os titulares dos dados e a Autoridade Nacional de Proteção de
                Dados (ANPD). No tocante aos produtos e serviços prestados
                diretamente pela X-Bits, o encarregado será identificado no
                último tópico desta PPPD.{" "}
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">1.B. Tipos de dados </h3>
              <br />
              <p>
                I - dado pessoal: informação que permite a identificação do
                titular dos dados, tais como nome, CPF, telefone, e-mail,
                endereço, ...;  <br />
                II - dado pessoal sensível: dado pessoal sobre origem racial ou
                étnica, convicção religiosa, opinião política, filiação a
                sindicato ou a organização de caráter religioso, filosófico ou
                político, dado referente à saúde ou à vida sexual, dado genético
                ou biométrico, vinculado ao titular;  <br />
                III - dado anonimizado: dado relativo ao titular que não possa
                ser identificado, considerando a utilização de meios técnicos
                razoáveis e disponíveis na ocasião de seu tratamento.
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">1.C. Sobre os dados </h3>
              <br />
              <p>
                I - banco de dados: conjunto estruturado de dados pessoais,
                estabelecido em um ou em vários locais, em suporte eletrônico ou
                físico;  <br />
                II - tratamento: toda operação realizada com dados pessoais,
                como as que se referem a coleta, produção, recepção,
                classificação, utilização, acesso, reprodução, transmissão,
                distribuição, processamento, arquivamento, armazenamento,
                eliminação, avaliação ou controle da informação, modificação,
                comunicação, transferência, difusão ou extração;  <br />
                III - bloqueio: suspensão temporária de qualquer operação de
                tratamento, mediante guarda do dado pessoal ou do banco de
                dados;  <br />
                IV - eliminação: exclusão de dado ou de conjunto de dados
                armazenados em banco de dados, independentemente do procedimento
                empregado;  <br />V - uso compartilhado de dados: comunicação,
                difusão, transferência internacional, interconexão de dados
                pessoais ou tratamento compartilhado de bancos de dados pessoais
                por órgãos e entidades públicas no cumprimento de suas
                competências legais, ou entre esses e entes privados,
                reciprocamente, com autorização específica, para uma ou mais
                modalidades de tratamento permitidas por esses entes públicos,
                ou entre entes privados.
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">1.D. Fonte de dados</h3>
              <br />
              <p>
                Os dados são inseridos em nossos sistemas:
                <br /> <br />
                - voluntariamente pelos Usuários; ou
                <br />- são submetidos por nossos clientes e parceiros, do qual
                esperamos o respeito à proteção de dados e à legislação vigente,
                além da observação das nossas Políticas de Privacidade e
                consentimento do Titular para o compartilhamento; ou
                <br /> - podem ser obtidos de forma sistematizadas, tal como as
                ações de Cookies.
                <br />
                <br />
                De todo o modo, a coleta dos dados geralmente ocorre por meio
                de:
                <br /> <br />I - sites gerenciados ou operados pela X-Bits em
                nossos próprios domínios;
                <br />
                II - páginas comerciais e/ou redes sociais que envolvam
                terceiros, como o Facebook, Instagram, LinkedIn, ou anúncios de
                um site alheio; <br /> III – softwares e aplicativos
                desenvolvidos pela X-Bits; <br /> IV - dados disponibilizados
                por terceiros, que consistem em dados repassados pelos Clientes
                para a utilização de produtos e serviços da X-Bits; <br /> V -
                e-mails, mensagens de texto e outras mensagens eletrônicas
                promovidas para a interação e comunicação eletrônica;
                <br />
                VI - formulários de registro, impressos ou digitais e similares.
              </p>
              <br />
              <br />
              <h3 className="text-[#983131] font-bold">
                1.E. Tipo de informações coletada
              </h3>
              <br />
              <p>
                Geralmente, nos dados coletados constam informações sobre:{" "}
                <br />
                <br />
                I – dados específicos, como nome completo, CPF, data de
                nascimento, endereço, e-mail, detalhes de redes sociais, número
                de telefone, entre outros;
                <br />
                II - login, tais como nome de usuário, CPF, senha, pergunta e
                resposta de segurança, são armazenados para que se possa acessar
                mais rapidamente o sistema e dar continuidade as transações
                efetuadas com maior simplicidade.
                <br />
                III – dados espontâneos geradas pelo próprio Titular, quando
                cria e compartilha matéria de natureza própria, tais como fotos
                e vídeos, que apresentam nossos produtos e serviços;
                <br />
                IV - localização demográfica, interesses e satisfação, para
                análise de características comportamentais, reconhecimento do
                público-alvo, relatos de experiência para melhoria e
                aperfeiçoamento dos produtos e serviços prestados;
                <br />V - dados técnicos do dispositivo utilizado para acessar
                nossos produtos e serviços, como exemplo, o endereço IP
                (Internet Protocol), o tipo de sistema operacional e o tipo e a
                versão do navegador da web;
                <br />
                VI - dados tecnológicas coletadas automaticamente por meio de
                interações com os sites, aplicativos e softwares, como Cookies,
                web beacons e via rastreamento de terceiros;
                <br />
                VII - dados financeiros e de pagamento quando efetuado um
                pedido, uma compra, entre outros. Cabe esclarecer que os dados
                de cartão de débito ou crédito, bem como as formas de pagamento,
                não ficam no banco de dados ou servidores da X-Bits, ou seja,
                não são gravados. Nossos prestadores de serviço que processam
                pagamentos lidam com as informações financeiras em conformidade
                com as leis, normas e os padrões de segurança aplicáveis;
                <br />
                VIII – dados que aduzam dados sensíveis requisitadas diretamente
                pela X-Bits vem sempre acompanhada da finalidade pretendida e
                solicitado o prévio e expresso consentimento do Titular;
                <br />
                IX – dados vinculados a menores de idade requisitadas
                diretamente pela X-Bits são coletadas apenas em situações de
                necessidade e com o consentimento expresso de um responsável.
              </p>
            </section>

            <section id="uso-dados">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                O USO DOS DADOS
              </h2>
              <p className="">
                Para a X-Bits, seus dados são preciosos e devem ser resguardados
                e mantidos em sigilo o máximo possível. Nos reservamos o direito
                de compilar estas contas em uma conta única, quando for o caso.
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">2.A. Prazo</h3>
              <br />
              <p>
                A coleta e manutenção dos dados em nossos servidores não é
                obrigatória, existindo e persistindo enquanto for necessário
                viabilizar a relação comercial, cumprir obrigações contratuais e
                legais, ou engajarmos a nossa marca. Logo, os Dados Pessoais
                serão armazenados pelo tempo necessário para alcançar as
                finalidades ou para cumprir com obrigações legais aplicáveis. 
                Os Dados Pessoais serão ainda gerenciados e operados por nossos
                colaboradores e por sistemas de armazenamento e segurança.  O
                Titular pode solicitar a eliminação de seus Dados Pessoais em
                nossa base a qualquer momento. 
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">
                2.B. Armazenamento e compartilhamento interno{" "}
              </h3>
              <br />
              <p>
                Armazenamos seus Dados Pessoais adotando medidas e protocolos de
                segurança razoáveis a fim de prevenir acesso não autorizado.  
                Seus Dados Pessoais podem ser acessados por nossos colaboradores
                ou agentes autorizados, quando necessário e mediante propósitos
                específicos. <br />  Desta forma, NUNCA forneça seus dados por
                telefone ou e-mail. Na dúvida, entre em contato conosco. 
                Relembramos que a transmissão de informação pela internet não é
                completamente segura, não sendo possível garantir a segurança
                dos dados durante transmissão por nossos sites/aplicativos. 
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">
                2.C. Motivos para o compartilhamento de seus dados com terceiros
              </h3>
              <br />
              <p>
                O compartilhamento com terceiros ocorrerá quando necessário:
                <br />
                I - cumprir os termos de qualquer acordo ou os termos do nosso
                site. 
                <br /> II - cumprir obrigações dispostas em lei, regulamentações
                de órgãos governamentais, sentenças e acordos, e/ou a pedido de
                autoridades fiscais, Poder Judiciário, ou qualquer outra
                autoridade competente; 
                <br /> III - proteger interesse legítimo ou direitos,
                privacidade, segurança ou propriedade, sejam dos nossos ou do
                próprio Titular; 
                <br /> IV -  por motivos legais ou fusão/aquisição, ou por
                motivo de falência, mediante a existência de novos sucessores
                legais. 
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">
                2.D. Terceiros com os quais compartilhamos seus dados
              </h3>
              <br />
              <p>
                Além das entidades governamentais, para mantermos a regular
                prestação do seu serviço, a X-Bits compartilhará seus Dados
                Pessoais com:
                <br />
                <br />I - prestadores de serviços: entidades externas
                selecionadas e autorizadas pela X-Bits para acessar seus Dados
                Pessoais em tarefas específicas, sendo obrigados por contrato e
                por leis a manter a confidencialidade e sigilo. Cabe esclarecer
                que uma vez que dispomos de prestadores de serviços
                internacionais, seus Dados Pessoais são transferidos para outros
                países para o alcance das finalidades dos nossos negócios.
                Existindo divergência de leis e requisitos quanto à proteção de
                dados daqueles aplicados pelo Brasil, há de se ponderar entrar
                as legislações dos países relacionados; <br />
                II - agências de análise de crédito e/ou cobrança de
                dívidas: terceiros autorizados pela X-Bits ou por seus Clientes
                a verificar a situação do seu crédito, sendo autorizados a
                efetuar cobrança de valores vencidos. <br />
                III - empresas terceiras com finalidades de marketing: a X-Bits
                não licencia ou vende seus Dados Pessoais para terceiros,
                solicitando sempre o seu consentimento para as ações e
                explicitando as finalidades para as quais se destinam.
              </p>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                A POLÍTICA DO USO DE COOKIES{" "}
              </h2>
              <p className="">
                Cookies são arquivos amplamente utilizados para fazer com que
                sites funcionem de forma mais produtiva e eficiente, fornecendo
                uma experiência personalizada de acesso. Os Cookies podem ser
                classificados de acordo com as suas características:
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">I - Durabilidade: </h3>
              <br />
              <p>
                1. Cookies de sessão, apagados quando você fecha o navegador de
                internet. Ele é armazenado na memória temporária do computador e
                não é retido depois que o navegador é encerrado. Os cookies de
                sessão não coletam informações do seu computador. Eles
                normalmente armazenam informações na forma de uma identificação
                que não coleta dados pessoais do usuário; 
                <br />
                2. Cookies persistentes, que permanecem no navegador até expirar
                (cookies persistentes são definidos com datas de expiração) ou
                até você excluir. 
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">II - Necessidade: </h3>
              <br />
              <p>
                1. Cookies essenciais para a navegação e utilização dos recursos
                do site, não sendo possível se opor a este tratamento ou
                desabilitá-lo;  <br />
                2. Cookies de preferências podem ser gerenciados e desabilitados
                nas configurações do seu navegador. Entretanto, alguns Cookies
                são necessários para a utilização dos nossos produtos e
                serviços. Dentre os 
              </p>
              <br />
              <h3 className="text-[#983131] font-bold">III – Origem: </h3>
              <br />
              <p>
                1. Cookies de primeira parte são colocados e utilizados apenas
                pela X-Bits e que mandam informações sobre o usuário; 
                <br />
                2. Cookies de terceiros são aqueles colocados em sites de
                terceiros, que extraem informações quando se interage com eles,
                como exemplo, os cookies de anúncios. Neste sentido, a X-Bits
                pode colocar estes Cookies em sites de terceiros, bem como
                nossos sites podem utilizar Cookies de terceiros, enviando
                informação para companhias parceiras – como as redes sociais. 
              </p>
            </section>

            <section id="tecnologias">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                O USO DE TECNOLOGIAS SIMILARES{" "}
              </h2>
              <p className="">
                Nossos sites utilizam tecnologias para rastreamento, arquivos de
                registro e sinalizadores da web, conforme as nossas e suas
                necessidades pessoais. Dentre eles, podemos destacar:
              </p>
              <br />
              <p>
                I - endereço de IP, que consiste em um número que identifica seu
                computador todas as vezes que você se conecta na internet. O
                registro do seu IP é coletado:  <br />
                1. (i) por problemas técnicos de troubleshoot;
                <br />
                2. (ii) para manutenção da proteção e segurança do site;
                <br />
                3. (iii) para estudos sobre o modo que nossos sites são
                utilizados; <br />
                4. (iv) para melhor adaptar o acesso ao site às suas
                necessidades.  
              </p>
              <br />
              <p>
                II - arquivos de registro que armazenam as atividades do site
                anonimamente e coletam: <br />
                1. (i) o tipo de navegador e o sistema do usuário; <br />
                2. (ii) informações sobre a sessão do usuário (URL de origem,
                data, hora e páginas visitadas, tempo de permanência);
                <br />
                3. (iii) outros dados de navegação ou de contagem de cliques.  
              </p>
            </section>

            <section id="direitos">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                DIREITOS DO TITULAR
              </h2>
              <p className="">
                Amparado pelos arts. 18 da LGPD, a X-Bits assegura ao titular o
                direito de obter do controlador a qualquer momento e mediante
                requisição: 
              </p>
              <br />
              <p>
                I –  confirmar a existência de tratamento; 
                <br />
                II –  acessar, revisar e solicitar a correção de dados
                incompletos, inexatos ou desatualizados. Sempre confira a sua
                identidade (login e senha) antes de acessar ou alterar sua
                conta, para prevenir acesso não autorizado. 
                <br />
                III –  solicitar a anonimização, bloqueio ou eliminação de dados
                desnecessários, excessivos ou tratados em desconformidade com o
                disposto na LGPD; 
                <br />
                IV –  requerer a portabilidade dos dados a outro fornecedor de
                serviço ou produto, mediante requisição expressa, de acordo com
                a regulamentação da autoridade nacional, observados os segredos
                comercial e industrial;
                <br />
                V –  solicitar a eliminação dos dados pessoais tratados com o
                consentimento do titular, exceto nas hipóteses previstas no art.
                16 da LGPD;
                <br />
                VI –  solicitar informação das entidades públicas e privadas com
                as quais o controlador realizou uso compartilhado de dados;
                <br />
                VII –  obter informação sobre a possibilidade de não fornecer
                consentimento e sobre as consequências da negativa;
                <br />
                VIII –  requerer a revogação do consentimento, nos termos do §
                5º do art. 8º da LGPD. 
              </p>
              <br />
              <p>
                O art. 9º ainda assegura ao titular o direito ao acesso
                facilitado às informações sobre o tratamento de seus dados, de
                forma clara, adequada e ostensiva no que diz respeito à:
              </p>
              <br />
              <p>
                I - finalidade específica, forma e duração do tratamento,
                observados os segredos comercial e industrial; 
                <br />
                II - identificação, informações de contato do controlador; 
                <br />
                III -  informações acerca do uso compartilhado de dados pelo
                controlador e a finalidade; 
                <br /> IV - responsabilidades dos agentes que realizarão o
                tratamento. 
              </p>
              <br />
              <p>
                As medidas de segurança adotadas pela X-Bits são continuamente
                monitoradas e revisadas de acordo com os avanços tecnológicos e
                recursos organizacionais mais atuais. Entretanto, as proteções
                perdem eficácia e não se aplicam a informações compartilhadas
                pelo próprio Titular, ou mediante descuido deste, em áreas
                públicas, como redes sociais. Do mesmo modo, a criação de
                usuário e senha confidencial deve ser exclusiva, evitando-se
                repetições em outras contas. <br /> Atente-se também quanto ao
                uso de computador compartilhado ou público no que se refere à
                opção de lembrar o ID de login e senha. Por fim, sempre se
                certifique que você saiu da sua conta (“log out”) ao finalizar o
                uso dos nossos sites, sistemas e aplicativos. 
              </p>
            </section>

            <section id="contato">
              <h2 className="text-2xl font-bold text-[#983131] mb-4">
                CONTATO
              </h2>
              <p className="">
                Para exercer os seus direitos ou realizar perguntas, sugestões
                ou reclamações sobre as práticas de privacidade adotadas pela
                X-Bits, por favor, entre em contato conosco pelo formulário ou
                por:
              </p>
              <br />
              <p>
                E-mail: contato@xbits.com.br  <br />
                Telefone (WhatsApp): +55 41 9.9615-6707 
                <br />
                Endereço : R. Zeila Moura dos Santos, n.º101 – Sala 1014 Cristo
                Rei – Curitiba/PR – CEP. 80.050-605
              </p>
              <br />
              <p>
                Para o exercício de direitos, anexe uma prova da sua identidade
                (documento de reconhecimento nacional com foto), ou forneça
                elementos que comprovem a legitimidade para pedidos realizados
                em seu nome. Qualquer informação de identificação só será
                processada de acordo com as leis aplicáveis. 
              </p>
              <br />
              <p>
                Nos reservamos o direito de fazer alterações às nossas práticas
                e a esta Política a qualquer tempo. Por favor, acesse-a
                frequentemente para verificar quaisquer atualizações ou
                mudanças. 
              </p>
              <br />
              <p>
                É um prazer tê-lo operando nossos sistemas, sites e aplicativos.
                Estaremos sempre à sua disposição para melhor atendê-lo.
              </p>
            </section>
          </article>
        </div>
      </Section>
    </>
  );
}
