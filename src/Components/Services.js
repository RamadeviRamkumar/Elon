import React, { useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import Card1 from './Card1';

const Services = () => {
  const [services] = useState([
    { title: 'Fin-Tech', description: 'Experience Speed and security with the scalable financial solution and better customer experience.' },
    { title: 'HealthCare', description: 'Empower healthcare industry professionals with patient-friendly software.' },
    { title: 'Start-Up', description: 'Accelerate your business growth with our start-up product development service.' },
    { title: 'Retail&E-commerce', description: 'Develop retail and e-commerce software for automated business processes and enhanced shopping experiences.' },
    { title: 'Insurance', description: 'Innovate insurance software solution to boost profitability and safety of the business process.' },
  ]);

  return (
    <section id="services" className='bg-light'>
      <Container>
        <Card className='m-3'>
          {services.map((service, index) => (
            <Card1 key={index} title={service.title} description={service.description} />
          ))}
        </Card>
      </Container>
    </section>
  );
}

export default Services;
