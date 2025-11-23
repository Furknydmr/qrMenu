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
            <button
                onClick={onGoMenu}
                style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '10px' }}
            >
                Menüye Git
            </button>
        </div>
    )
}
