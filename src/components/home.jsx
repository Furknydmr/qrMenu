import background from '../assets/images/background-phone.jpg'

export default function Home({ onGoMenu }) {
    return (
        <div
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                overflowY: 'auto',        // dikey scroll açar
                position: 'relative',
            }}
        >
            <div style={{ backgroundColor: 'red', width: '80%', }}>
                <div>
                    <button
                        style={{
                            margin: '20px',
                            padding: '12px',
                            fontSize: '1rem',
                            fontWeight: '700',
                            color: 'white',
                            backgroundColor: '#99a8a2ff', // mor-mavi ton
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.6s ease',
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#262727ff'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#99a8a2ff'}
                    >
                        Soslu tavuklar
                    </button>
                    <button>
                        Soslu tavuklar
                    </button>

                </div>
                <div>
                    <button>
                        Soslu tavuklar
                    </button>
                    <button>
                        Soslu tavuklar
                    </button>

                </div>
                <div>
                    <button>
                        Soslu tavuklar
                    </button>
                    <button>
                        Soslu tavuklar
                    </button>

                </div>
            </div>


        </div>
    )
}
