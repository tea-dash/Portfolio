'use client';
import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  fallDuration: number;
  swayAmount: number;
  swayAngle: number;
  startPosition: number;
  size: number;
  opacity: number;
  rotationSpeed: number;
}

const SakuraEffect: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Create initial petals with varied properties
    const initialPetals: Petal[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      fallDuration: 8 + Math.random() * 7,
      swayAmount: 50 + Math.random() * 100,
      swayAngle: Math.random() * 360,
      startPosition: Math.random() * 100,
      size: 15 + Math.random() * 10,
      opacity: 0.6 + Math.random() * 0.4,
      rotationSpeed: 0.5 + Math.random() * 2
    }));

    setPetals(initialPetals);

    // Periodically update petal properties for continuous variation
    const intervalId = setInterval(() => {
      setPetals(prevPetals =>
        prevPetals.map(petal => ({
          ...petal,
          swayAngle: (petal.swayAngle + petal.rotationSpeed) % 360,
          ...(Math.random() < 0.1 && {
            fallDuration: 8 + Math.random() * 7,
            swayAmount: 50 + Math.random() * 100,
            startPosition: Math.random() * 100,
          })
        }))
      );
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="cherry-blossom"
          style={{
            '--fall-duration': `${petal.fallDuration}s`,
            '--sway-amount': `${petal.swayAmount}px`,
            '--sway-angle': `${petal.swayAngle}deg`,
            left: `${petal.startPosition}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            opacity: petal.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default SakuraEffect; 