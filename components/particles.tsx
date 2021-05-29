import React from 'react'
import Particles from 'react-particles-js'

const PARTICLECONFIG: any = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 3700
            }
        },
        color: {
            value: 'random'
        },
        size: {
            value: 4,
            random: true
        },
        opacity: {
            value: 1,
            random: true
        },
        links: {
            enable: true,
            color: 'random',
            blink: false,
            distance: 160,
            opacity: 0.6,
            width: 0.8,
            frequency: 1
        },
        move: {
            enable: true,
            direction: 'none',
            random: true,
            outModes: {
                default: 'out'
            },
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            onClick: {
                enable: true,
                mode: 'push'
            }
        },
        modes: {
            repulse: {
                distance: 100,
                easing: 'ease-out-sine'
            },
            push: {
                quantity: 1
            }
        }
    },
    fps_limit: 240,
    detect_retina: true
}

const STYLES: React.CSSProperties = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    bottom: 0,
    right: 0,
}

export default function ParticleBackground() {
    return (
        <Particles 
            params={PARTICLECONFIG}
            style={STYLES}
        ></Particles>
    )
}