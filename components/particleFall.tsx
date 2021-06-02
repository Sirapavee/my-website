import React from 'react'
import Particles from 'react-particles-js'

const PARTICLECONFIG: any = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 3700
            }
        },
        color: {
            value: 'random'
        },
        size: {
            value: 6,
            random: {
                enable: true,
                minimumValue: 2,
            }
        },
        opacity: {
            value: 1,
            random: true
        },
        links: {
            enable: false,
        },
        move: {
            enable: true,
            direction: 'bottom',
            random: true,
            speed: 1.5,
            outModes: {
                default: 'out'
            },
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'attract',
                parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10
                }
            },
            onClick: {
                enable: true,
                mode: 'push'
            }
        },
        modes: {
            attract: {
                distance: 500,
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

export default function ParticleFallBackground() {
    return (
        <Particles 
            params={PARTICLECONFIG}
            style={STYLES}
        ></Particles>
    )
}