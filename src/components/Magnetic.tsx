import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticProps {
    children: React.ReactNode;
    strength?: number; // How strong the magnetic pull is (default: 30)
    className?: string; // Allow passing classes for styling the wrapper if needed
}

export default function Magnetic({ children, strength = 30, className = "" }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        // @ts-ignore
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate center of the element
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const x = clientX - centerX;
        const y = clientY - centerY;

        // Update position with strength factor
        // Using a simpler proportional movement
        setPosition({
            x: x / (width / strength),
            y: y / (height / strength)
        });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
        >
            {children}
        </motion.div>
    );
}
