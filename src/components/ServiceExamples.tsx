
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { ServiceExample } from '@/data/services';
import { cn } from '@/lib/utils';

interface ServiceExamplesProps {
  examples: ServiceExample[];
}

const ServiceExamples = ({ examples }: ServiceExamplesProps) => {
  return (
    <div className="mt-2 space-y-4 flex-grow">
      <h3 className="font-medium text-lg text-white/90">Example Applications:</h3>
      <div className="space-y-4 bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10">
        {examples.map((example, index) => (
          <div key={index} className={cn("space-y-1", index === examples.length - 1 ? "" : "pb-3")}>
            <div className="font-medium text-primary">{example.sector}</div>
            <p className="text-sm text-muted-foreground">{example.description}</p>
            {index < examples.length - 1 && <Separator className="mt-3 bg-white/10" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceExamples;
