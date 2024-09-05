import React, { useState } from 'react';
import CustomCard from '../components/Card';
import { Input } from '@/components/ui/input';

const Home: React.FC = () => {
  // Estado para armazenar o valor de pesquisa
  const [searchTerm, setSearchTerm] = useState('');

  // Dados estáticos dos cards
  const cards = [
    { id: 'racionalismo', title: 'Racionalismo', description: 'Uma corrente filosófica que enfatiza o papel da razão.' },
    { id: 'empirismo', title: 'Empirismo', description: 'Uma corrente filosófica que enfatiza a experiência sensorial.' },
  ];

  // Função para filtrar os cards com base no termo de pesquisa
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 bg-[#0D1317] text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Memorabilia Filosofia da Ciência</h1>
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 bg-gray-900 text-white border border-gray-600 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCards.length > 0 ? (
          filteredCards.map(card => (
            <CustomCard key={card.id} id={card.id} title={card.title} description={card.description} />
          ))
        ) : (
          <p className="text-gray-400">Nenhum resultado encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
