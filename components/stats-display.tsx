"use client";

import { useState, useEffect, memo } from "react";
import { useInView } from "react-intersection-observer";

// Tipos para TypeScript
type StatItemProps = {
  value: number;
  label: string;
  color?: string;
  duration?: number;
  prefix?: string;
};

type StatsDisplayProps = {
  title?: string;
  stats?: StatItemProps[];
  className?: string;
};

/**
 * Hook personalizado para manejar la animación de conteo
 * @param targetValue - El valor final al que debe llegar el contador
 * @param duration - Duración de la animación en ms
 * @param isInView - Bandera que indica si el componente está visible en pantalla
 * @returns El valor actual del contador
 */
const useCountAnimation = (
  targetValue: number,
  duration: number,
  isInView: boolean
) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    // No iniciar la animación hasta que el componente sea visible
    if (!isInView) return;

    // Función de animación utilizando requestAnimationFrame para mejor rendimiento
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;

      // Calcular el progreso de la animación (entre 0 y 1)
      const progress = Math.min(elapsedTime / duration, 1);

      // Aplicar una función de easing para hacer la animación más natural
      const easedProgress = easeOutQuad(progress);

      // Actualizar el contador
      setCount(Math.floor(easedProgress * targetValue));

      // Continuar la animación si no ha terminado
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Iniciar la animación
    animationFrameId = requestAnimationFrame(animate);

    // Limpiar la animación cuando el componente se desmonte
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [targetValue, duration, isInView]);

  return count;
};

/**
 * Función de easing para suavizar la animación
 * @param x - Valor de progreso entre 0 y 1
 * @returns Valor con easing aplicado
 */
const easeOutQuad = (x: number): number => {
  return 1 - (1 - x) * (1 - x);
};

/**
 * Componente para mostrar un elemento de estadística individual
 */
const StatItem = memo(
  ({ value, label, color, duration = 2000, prefix = "+" }: StatItemProps) => {
    // Usar Intersection Observer para iniciar la animación cuando el componente es visible
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    // Usar nuestro hook personalizado para la animación
    const count = useCountAnimation(value, duration, inView);

    return (
      <div ref={ref} className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className={`text-6xl font-bold ${label} ${color}`}>
            {prefix}
            {count}
          </div>
          <div className="mt-3 text-md font-medium text-slate-50 max-w-xs">
            {label}
          </div>
        </div>
      </div>
    );
  }
);

// Asignar un displayName para ayudar con la depuración
StatItem.displayName = "StatItem";

/**
 * Componente principal que muestra las estadísticas animadas
 */
export default function StatsDisplay({
  stats,
  className = "",
}: StatsDisplayProps) {
  // Definir los stats por defecto dentro del componente
  const defaultStats: StatItemProps[] = [
    { value: 10, label: "años de experiencia", color: "text-blue-300" },
    { value: 1000, label: "clientes asegurados", color: "text-blue-400" },
    { value: 200, label: "empresas aseguradas", color: "text-blue-500" },
  ];

  // Usar los stats proporcionados o los predeterminados
  const displayStats = stats || defaultStats;
  return (
    <div
      className={`flex flex-col items-center relative z-100 p-8 bg-gray-900 ${className}`}
      aria-labelledby="stats-heading"
    >
      <div className="flex flex-col w-full items-center sm:flex-row sm:justify-around">
        {displayStats.map((stat, index) => (
          <StatItem
            key={`stat-${index}`}
            value={stat.value}
            label={stat.label}
            color={stat.color}
            duration={2000}
            prefix="+"
          />
        ))}
      </div>
    </div>
  );
}
