import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.equiposWrapper}>
      <h2 className={styles.sectionTitle}>Equipos y Plantillas</h2>

      {equipos.map((equipo) => (
        <section key={equipo.id} className={styles.clubSection}>
          {/* Cabecera del Club */}
          <div className={styles.clubHeader}>
            <span className={styles.clubBadge}>{equipo.siglas}</span>
            <div>
              <h3 className={styles.clubName}>{equipo.nombre}</h3>
              <p className={styles.clubMeta}>{equipo.liga} • {equipo.estadio}</p>
            </div>
          </div>

          {/* Cuadrícula de Jugadores */}
          <div className={styles.playersGrid}>
            {equipo.plantilla.map((jugador) => (
              <article className={styles.playerCard} key={jugador.id}>
                <div className={styles.imageContainer}>
                  <img
                    src={jugador.foto}
                    alt={`Fotografía de ${jugador.nombre}`}
                    className={styles.playerPhoto}
                  />
                  <span className={styles.playerNumber}>#{jugador.dorsal}</span>
                </div>

                <div className={styles.playerInfo}>
                  <span className={styles.playerPosition}>{jugador.posicion}</span>
                  <h4 className={styles.playerName}>{jugador.nombre}</h4>

                  <div className={styles.statsRow}>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>Altura</span>
                      <span className={styles.statValue}>{jugador.altura} m</span>
                    </div>
                    <div className={styles.statBox}>
                      <span className={styles.statLabel}>Peso</span>
                      <span className={styles.statValue}>{jugador.peso}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default function Home() {
  // Datos ampliados y con medidas reales ajustadas
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid C.F.",
      siglas: "RMA",
      liga: "LaLiga (España)",
      estadio: "Santiago Bernabéu",
      plantilla: [
        {
          id: 101,
          nombre: "Vinícius Júnior",
          dorsal: 7,
          posicion: "Delantero",
          altura: "1.76",
          peso: "73 kg",
          foto: "https://ui-avatars.com/api/?name=Vinicius+Junior&background=1e293b&color=f8fafc&size=256&bold=true"
        },
        {
          id: 102,
          nombre: "Jude Bellingham",
          dorsal: 5,
          posicion: "Centrocampista",
          altura: "1.86",
          peso: "75 kg",
          foto: "https://ui-avatars.com/api/?name=Jude+Bellingham&background=1e293b&color=f8fafc&size=256&bold=true"
        },
        {
          id: 103,
          nombre: "Thibaut Courtois",
          dorsal: 1,
          posicion: "Portero",
          altura: "2.00",
          peso: "96 kg",
          foto: "https://ui-avatars.com/api/?name=Thibaut+Courtois&background=1e293b&color=f8fafc&size=256&bold=true"
        }
      ]
    },
    {
      id: 2,
      nombre: "F.C. Barcelona",
      siglas: "FCB",
      liga: "LaLiga (España)",
      estadio: "Spotify Camp Nou",
      plantilla: [
        {
          id: 201,
          nombre: "Marc-André ter Stegen",
          dorsal: 1,
          posicion: "Portero",
          altura: "1.87",
          peso: "85 kg",
          foto: "https://ui-avatars.com/api/?name=Ter+Stegen&background=991b1b&color=fef2f2&size=256&bold=true"
        },
        {
          id: 202,
          nombre: "Lamine Yamal",
          dorsal: 19,
          posicion: "Delantero",
          altura: "1.80",
          peso: "72 kg",
          foto: "https://ui-avatars.com/api/?name=Lamine+Yamal&background=1d4ed8&color=eff6ff&size=256&bold=true"
        },
        {
          id: 203,
          nombre: "Gavi",
          dorsal: 6,
          posicion: "Centrocampista",
          altura: "1.73",
          peso: "70 kg",
          foto: "https://ui-avatars.com/api/?name=Pablo+Gavi&background=991b1b&color=fef2f2&size=256&bold=true"
        }
      ]
    },
    {
      id: 3,
      nombre: "Manchester City",
      siglas: "MCI",
      liga: "Premier League (Inglaterra)",
      estadio: "Etihad Stadium",
      plantilla: [
        {
          id: 301,
          nombre: "Erling Haaland",
          dorsal: 9,
          posicion: "Delantero",
          altura: "1.94",
          peso: "88 kg",
          foto: "https://ui-avatars.com/api/?name=Erling+Haaland&background=0284c7&color=f0f9ff&size=256&bold=true"
        },
        {
          id: 302,
          nombre: "Rodri Hernández",
          dorsal: 16,
          posicion: "Centrocampista",
          altura: "1.91",
          peso: "82 kg",
          foto: "https://ui-avatars.com/api/?name=Rodri+Hernandez&background=0284c7&color=f0f9ff&size=256&bold=true"
        },
        {
          id: 303,
          nombre: "Rúben Dias",
          dorsal: 3,
          posicion: "Defensa",
          altura: "1.87",
          peso: "82 kg",
          foto: "https://ui-avatars.com/api/?name=Ruben+Dias&background=0284c7&color=f0f9ff&size=256&bold=true"
        }
      ]
    },
    {
      id: 4,
      nombre: "Bayern de Múnich",
      siglas: "FCB",
      liga: "Bundesliga (Alemania)",
      estadio: "Allianz Arena",
      plantilla: [
        {
          id: 401,
          nombre: "Harry Kane",
          dorsal: 9,
          posicion: "Delantero",
          altura: "1.88",
          peso: "86 kg",
          foto: "https://ui-avatars.com/api/?name=Harry+Kane&background=dc2626&color=ffffff&size=256&bold=true"
        },
        {
          id: 402,
          nombre: "Jamal Musiala",
          dorsal: 42,
          posicion: "Centrocampista",
          altura: "1.84",
          peso: "72 kg",
          foto: "https://ui-avatars.com/api/?name=Jamal+Musiala&background=dc2626&color=ffffff&size=256&bold=true"
        },
        {
          id: 403,
          nombre: "Manuel Neuer",
          dorsal: 1,
          posicion: "Portero",
          altura: "1.93",
          peso: "93 kg",
          foto: "https://ui-avatars.com/api/?name=Manuel+Neuer&background=dc2626&color=ffffff&size=256&bold=true"
        }
      ]
    }
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.heroHeader}>
          <h1>Gestión de Clubes de Fútbol</h1>
          <p>Explora las plantillas oficiales, posiciones y fichas técnicas de los jugadores.</p>
        </header>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
