import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CardProps {
  title: string;
  description: string;
  id: string;
}

const CustomCard: React.FC<CardProps> = ({ title, description, id }) => {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/details/${id}`)} className="bg-[#0D1317] text-white cursor-pointer hover:shadow-lg">
      <CardHeader>
        <CardTitle  className='text-white'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white mb-4">{description}</p>
        <Button
          className="bg-[#101D42] hover:bg-[#232ED1] text-white"
          onClick={() => navigate(`/details/${id}`)}
        >
          Ver Detalhes
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
