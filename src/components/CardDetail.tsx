import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, } from '@/components/ui/card' ;
import { Button } from '@/components/ui/button' ;

interface CardDetailProps {
  title: string;
  content: string;
}

const CardDetail: React.FC<CardDetailProps> = ({ title, content }) => {
  const navigate = useNavigate();
  return (
    <Card className="bg-[#0D1317] text-white border border-gray-700 shadow-md">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white mb-4">{content}</p>
        <Button className="bg-[#101D42] hover:bg-[#232ED1] text-white" onClick={() => navigate(`/`)}>Voltar</Button>
      </CardContent>
    </Card>
  );
};

export default CardDetail;
