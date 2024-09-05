import React from 'react';
import { useParams } from 'react-router-dom';
import CardDetail from '../components/CardDetail';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const cardDetails: { [key: string]: { title: string; content: string } } = {
    racionalismo: {
      title: 'Racionalismo',
      content:
        'O racionalismo é uma corrente filosófica que enfatiza o papel da razão como fonte primária do conhecimento. Grandes nomes do racionalismo incluem Descartes, que defendia a ideia de que o conhecimento certo deriva de princípios inatos e da dedução lógica.',
    },
    empirismo: {
      title: 'Empirismo',
      content:
        'O empirismo é uma corrente filosófica que enfatiza a experiência sensorial como base do conhecimento. Filósofos como John Locke e David Hume são conhecidos por suas defesas do empirismo, argumentando que todo conhecimento deriva da experiência.',
    },
  };

  const details = id && cardDetails[id as keyof typeof cardDetails];

  if (!details) {
    return <div className="container mx-auto p-4 text-white">Assunto não encontrado.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <CardDetail title={details.title} content={details.content} />
    </div>
  );
};

export default Details;
