import styles from "./TechMarquee.module.css";

const TECHNOLOGIES = [
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="3" fill="#111" />
        <ellipse
          rx="10"
          ry="4.5"
          cx="13"
          cy="13"
          stroke="#61DAFB"
          strokeWidth="2.2"
          fill="none"
        />
        <ellipse
          rx="10"
          ry="4.5"
          cx="13"
          cy="13"
          stroke="#61DAFB"
          strokeWidth="2.2"
          fill="none"
          transform="rotate(60 13 13)"
        />
        <ellipse
          rx="10"
          ry="4.5"
          cx="13"
          cy="13"
          stroke="#61DAFB"
          strokeWidth="2.2"
          fill="none"
          transform="rotate(120 13 13)"
        />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#111",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="12" fill="#111" />
        <text x="5.5" y="18" fontSize="9.5" fill="#fff" fontWeight="bold">
          Next.js
        </text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#2f74c0",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="2" width="22" height="22" rx="5" fill="#2f74c0" />
        <text x="4" y="18" fontSize="11" fill="#fff" fontWeight="bold">
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "CSS Modules",
    color: "#2C65FF",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="2" width="22" height="22" rx="4" fill="#2C65FF" />
        <text x="6.8" y="18" fontSize="10" fill="#fff" fontWeight="bold">
          CSS
        </text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="12" fill="#fff" />
        <text x="4.6" y="18" fontSize="11" fill="#339933" fontWeight="bold">
          Node
        </text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#3fa037",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="2" width="22" height="22" rx="6" fill="#fff" />
        <text x="3.8" y="18" fontSize="10.5" fill="#3fa037" fontWeight="bold">
          Mongo
        </text>
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#38BDF8",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <rect x="2" y="2" width="22" height="22" rx="6" fill="#38BDF8" />
        <text x="4" y="18" fontSize="10" fill="#fff" fontWeight="bold">
          TW
        </text>
      </svg>
    ),
  },
  {
    name: "GraphQL",
    color: "#E535AB",
    icon: (
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
        <circle cx="13" cy="13" r="12" fill="#E535AB" />
        <text x="4" y="18" fontSize="10" fill="#fff" fontWeight="bold">
          GQL
        </text>
      </svg>
    ),
  },
];

export default function TechMarquee() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.marqueeContainer}>
        <div className={styles.fadeLeft}></div>
        <div className={styles.fadeRight}></div>

        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
              <div className={styles.techItem} key={idx}>
                <div className={styles.techIcon}>{tech.icon}</div>
                <span className={styles.techName} style={{ color: tech.color }}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
