import React from "react";
import Card from "../../../components/Card";

const CousesDetails = [
  {
    title: "Curso de Koar",
    description:
      "A criadora do método Koar estará em Belém ministrando um curso sobre esse método de extração encantador e seus mais diferentes acessórios, utilizando a nova linha de cafés raros do Arte Café."
  },
  {
    title: "Curso de barista",
    description:
      "Atendendo pedidos de muitos Coffee Lovers, desenvolvemos um curso de barista especial para o circuito. Ministrado pelo profissional Chico Neto, tem por intuito, iniciar e melhorar as técnicas de extração de espresso, latte art e desenvolvimento de drinks."
  }
];

const Courses = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Cursos</h2>
        <div className="row">
        <Card 
          title={CousesDetails[0].title} 
          description={CousesDetails[0].description} 
        >
          <p><strong>10/09</strong></p>
          <p><strong>Vagas: </strong>60</p>
          <p>
            <strong>LOTE 1: </strong> 10 pessoas - R$ 150, 00
          </p>
          <p>
            <strong>LOTE 2: </strong> 20 pessoas - R$ 180, 00
          </p>
          <p>
            <strong>LOTE 3: </strong> 30 pessoas - R$ 190, 00
          </p>
          <p>
            <strong>Local e hora: </strong>Unama Alcindo Cacela, Bloco F, Laboratório
            de Práticas Gastronômicas, 15h 18h
          </p>
        </Card>
        <Card 
          title={CousesDetails[1].title} 
          description={CousesDetails[1].description} 
        >
          <p><strong>16, 17, 19, 20/09</strong></p>
          <p><strong>Vagas: </strong>7 por curso</p>
          <p>
            <strong>Local e hora: </strong>Unama BR, sala 309, das 14h às 18h
          </p>
        </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;
