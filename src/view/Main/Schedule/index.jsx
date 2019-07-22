import React from "react";
import Card from "../../../components/Card";

const ScheduleDetails = [
  {
    title: "Workshop",
    description:
      "O workshop será voltado para a disseminação  do conhecimento sobre cafés especiais em vários métodos de extração, sejam eles espresso ou os muitos acessórios de coados."
  },
  {
    title: "Barista do dia",
    description: ""
  },
  {
    title: "Campeonato de baristas",
    description:
      "No campeonato de baristas, temos por objetivo inserir o Pará no contexto dos melhores baristas do mundo, integrando nossas frutas exóticas e sabores peculiares."
  },
  {
    title: "Circuito Alquimista",
    description:
      "Trazer ao costume do paraense à mistura de sabores especiais, possibilitando ao Coffee Lover conhecer, cafeterias e baristas, profissionais que estão por trás dos seus mais deliciosos cafés."
  }
];

const Schedule = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Programas</h2>
        <div className="row">
          <Card
            title={ScheduleDetails[0].title}
            description={ScheduleDetails[0].description}
          >
            <p>
              <strong>09/08, 10/08, 11/08:</strong> Barista Lidiane Santos, 4
              horas por dia, exclusivo Circuito Alquimista Cafés
            </p>
            <p>
              <strong>Local: </strong> Unama Alcindo Cacela, Bloco F,
              Laboratório de Práticas Gastronômicas
            </p>
            <p>
              <strong>Baristas: </strong> 09, 10, 11/09 das 8h as 12h
            </p>
            <p>
              <strong>Coffee Lovers: </strong> 12/09 das 14h as 18h
            </p>
            <p>
              <strong>Alunos Unama: </strong> 13/09 das 8h as 12h
            </p>
            <p>
              <strong>Vagas: </strong>60
            </p>
            <p>
              <strong>LOTE 1: </strong>10 pessoas - R$ 150, 00
            </p>
            <a
              href="https://pag.ae/7V69y9Tma"
              target="_blank"
              className="button"
            >
              Comprar ingresso
            </a>
            <p>
              <strong>LOTE 2: </strong>20 pessoas - R$ 180, 00
            </p>
            <a
              href="https://pag.ae/7V69yPu6a"
              target="_blank"
              className="button"
            >
              Comprar ingresso
            </a>
            <p>
              <strong>LOTE 3: </strong>30 pessoas - R$ 190, 00
            </p>
            <a
              href="https://pag.ae/7V69zts4v"
              target="_blank"
              className="button"
            >
              Comprar ingresso
            </a>
          </Card>
          <Card
            title={ScheduleDetails[1].title}
            description={ScheduleDetails[1].description}
          >
            <p>
              <strong>09 a 17/09</strong>
            </p>
            <p>
              <strong>Exclusivo para empresas</strong>
            </p>
          </Card>
          <Card
            title={ScheduleDetails[2].title}
            description={ScheduleDetails[2].description}
          >
            <p>
              <strong>18/09</strong>
            </p>
            <p>
              <strong>Local e hora: </strong>Unama BR, início as 18h
            </p>
          </Card>
          <Card
            title={ScheduleDetails[3].title}
            description={ScheduleDetails[3].description}
          >
            <p>
              <strong>20/09 à 20/10</strong>
            </p>
            <p>
              <strong>Local e hora: </strong> Cafeterias inscritas no circuito,
              horário comercial
            </p>
            <a
              href="https://pag.ae/7V69EGxX9"
              target="_blank"
              className="button"
            >
              Comprar ingresso
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
