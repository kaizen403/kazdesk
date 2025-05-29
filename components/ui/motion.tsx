"use client"

import { useRef, useEffect, ReactNode } from 'react'

interface MotionProps {
  children: ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  exit?: Record<string, any>;
  className?: string;
  style?: Record<string, any>;
}

interface InViewOptions {
  once?: boolean;
  amount?: number;
}

export function useInView(ref: React.RefObject<Element>, options: InViewOptions = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        if (entry.isIntersecting && options.once) {
          observer.unobserve(entry.target);
        }
      },
      { threshold: options.amount || 0 }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options.once, options.amount]);

  return isInView;
}

export function motion({ 
  children, 
  initial = {}, 
  animate = {}, 
  transition = {}, 
  exit = {},
  className = '',
  style = {}
}: MotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ ...initial });
  const prevState = useRef(initial);
  
  useEffect(() => {
    if (!ref.current) return;
    
    // Apply animation
    const timer = setTimeout(() => {
      setState({ ...animate });
      prevState.current = animate;
    }, 10);
    
    return () => clearTimeout(timer);
  }, [JSON.stringify(animate)]);
  
  // Convert the state to CSS styles
  const getStyles = () => {
    const styles: Record<string, any> = { ...style };
    
    // Handle opacity
    if (state.opacity !== undefined) {
      styles.opacity = state.opacity;
    }
    
    // Handle transforms
    const transforms: string[] = [];
    
    if (state.x !== undefined) {
      transforms.push(`translateX(${state.x}px)`);
    }
    
    if (state.y !== undefined) {
      transforms.push(`translateY(${state.y}px)`);
    }
    
    if (state.scale !== undefined) {
      transforms.push(`scale(${state.scale})`);
    }
    
    if (state.rotate !== undefined) {
      transforms.push(`rotate(${state.rotate}deg)`);
    }
    
    if (transforms.length > 0) {
      styles.transform = transforms.join(' ');
    }
    
    // Handle transition
    const transitionProps: string[] = [];
    const duration = transition.duration !== undefined ? transition.duration : 0.3;
    const delay = transition.delay !== undefined ? transition.delay : 0;
    const ease = transition.ease !== undefined ? transition.ease : 'ease';
    
    for (const prop in state) {
      transitionProps.push(`${prop} ${duration}s ${ease} ${delay}s`);
    }
    
    if (transitionProps.length > 0) {
      styles.transition = transitionProps.join(', ');
    }
    
    // Handle display
    if (state.display !== undefined) {
      styles.display = state.display;
    }
    
    return styles;
  };
  
  return (
    <div ref={ref} className={className} style={getStyles()}>
      {children}
    </div>
  );
}

// Helper to handle useState import
import { useState } from 'react';