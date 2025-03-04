
import React from 'react';
import ServiceItem from './ServiceItem';
import { Service } from '@/data/services';

interface ServiceListProps {
  services: Service[];
}

const ServiceList = ({ services }: ServiceListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceItem 
          key={service.id} 
          service={service} 
          index={index}
        />
      ))}
    </div>
  );
};

export default ServiceList;
