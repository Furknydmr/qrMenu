import background from '../assets/images/background-phone.jpg'

export default function Home() {

    const categories = [
        "DÖNER 228",
        "İÇECEKLER",
        "ÖĞRENCİ MENÜ",
        "KÖFTE MENÜ",
        "ATIŞTIRMALIK",
        "PİLAV MENÜ"
    ];
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
            <div style={{ backgroundColor: 'red', width: '90%', justifyContent: 'center', alignItems: 'center', padding: '5px', }}>
                <div className="category-container">
                    {categories.map((item, index) => (
                        <button key={index} className="category-box">
                            {item}
                        </button>
                    ))}
                </div>


            </div>


        </div>
    )



}
