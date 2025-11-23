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
            <div
                style={{
                    backgroundColor: 'red',
                    width: '80%',
                    display: 'flex',             // satırları yan yana koymak için
                    justifyContent: 'space-between', // iki div arası boşluk
                    alignItems: 'flex-start',   // üstten hizala
                    margin: '0 auto'            // sayfa ortası
                }}
            >
                {/* Sol taraf */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button
                        className='app-button'
                    >
                        Soslu tavuklar
                    </button>
                    <button
                        className='app-button'
                    >
                        Soslu tavuklar aufsdghjakslasşdlasd
                    </button>
                </div>

                {/* Sağ taraf */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button
                        className='app-button'
                    >
                        Soslu tavuklar
                    </button>
                    <button
                        className='app-button'
                    >
                        Soslu tavuklar aksdhgjasjdh
                    </button>
                </div>
            </div>
        </div>
    )
}
