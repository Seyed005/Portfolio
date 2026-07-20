export const profile = {
  name: 'Seyed Ismail Bilal',
  shortName: 'SIB',
  role: 'Cyber Security Student',
  subtitle: 'Aspiring Penetration Tester',
  tagline:
    'I am a Cyber Security student passionate about offensive security, penetration testing, vulnerability assessment, and continuous learning. I enjoy solving real-world security challenges through hands-on labs, CTFs, and practical cybersecurity projects while building the skills required to become a professional Penetration Tester.',
  email: 'seyedseyed703@gmail.com',
  phone: '+91 8015386694',
  location: 'Chennai, Tamil Nadu, India',
  availability: 'Open to Internship',
  availabilityDetails: [
    'Available for Remote Internship',
    'Available for SOC Internship',
    'Available for Penetration Testing Internship',
  ],
  image: '/profile.jpg',
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/Seyed005',
    linkedin: 'https://www.linkedin.com/in/seyed-ismail-bilal-s',
    email: 'mailto:seyedseyed703@gmail.com',
  },
}

export const roles = [
  'Aspiring Penetration Tester',
  'Cyber Security Student',
  'Security Analyst',
  'Security Researcher',
  'Ethical Hacker',
  'Vulnerability Analyst',
  'Web Application Security Enthusiast',
  'Network Security Enthusiast',
  'CTF Player',
  'Linux Enthusiast',
  'Blue Team Learner',
  'Red Team Learner',
]

export const about = {
  bio: [
    'I am Seyed Ismail Bilal, a Cyber Security student pursuing B.Tech in Computer Science Engineering with a specialization in Cyber Security at Bharath Institute of Higher Education and Research. My goal is to become a Professional Penetration Tester who can identify, validate, and clearly communicate real-world security risks.',
    'I learn through hands-on practice — TryHackMe rooms, practical labs, CTFs, and methodical tooling — so every skill translates into assessment capability rather than theory alone. Continuous learning is at the center of how I grow in offensive and defensive security.',
  ],
  objective:
    'Secure a remote or on-site internship in Penetration Testing, SOC operations, or Application Security where I can contribute under mentorship, document findings rigorously, and grow into a trusted offensive security professional.',
  education: {
    degree: 'B.Tech Computer Science Engineering',
    specialization: 'Cyber Security',
    institution: 'Bharath Institute of Higher Education and Research',
    status: 'Currently pursuing',
  },
  focus: [
    'Penetration Testing',
    'Web Security',
    'Network Security',
    'CTFs',
    'TryHackMe',
    'Hands-on Labs',
  ],
}

export const skills = [
  {
    category: 'Cybersecurity',
    items: [
      'Cyber Security',
      'Penetration Testing',
      'OWASP',
      'Networking',
      'Vulnerability Analysis',
    ],
  },
  {
    category: 'Programming',
    items: ['Python', 'HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'C', 'Java'],
  },
  {
    category: 'Tools',
    items: [
      'Nmap',
      'Burp Suite',
      'Wireshark',
      'Metasploit',
      'Git',
      'GitHub',
      'Tailwind CSS',
    ],
  },
  {
    category: 'Operating Systems',
    items: ['Linux', 'Kali Linux', 'Windows'],
  },
]

export const projects = [
  {
    title: 'Security Analysis',
    description:
      'End-to-end security assessment of a local subnet from Kali Linux. Mapped live hosts, open ports, and running services with Nmap to evaluate exposure, identify weak entry points, and document the overall security posture of the lab environment.',
    technologies: ['Nmap', 'Kali Linux', 'Networking', 'Reconnaissance'],
    github: 'https://github.com/Seyed005/Security-Analys-1',
    live: null,
    featured: true,
    image: '/projects/security-analys.svg',
    accent: 'from-neutral-900 to-neutral-600',
  },
  {
    title: 'Network Scanning Using Nmap',
    description:
      'Practical network reconnaissance workflows built around Nmap. Covered host discovery, port enumeration, OS fingerprinting, and service version detection to produce clear, actionable scan results in authorized lab networks.',
    technologies: ['Nmap', 'Kali Linux', 'Host Discovery', 'Port Scanning'],
    github: 'https://github.com/Seyed005/Nmap',
    live: null,
    featured: true,
    image: '/projects/nmap.svg',
    accent: 'from-zinc-800 to-zinc-500',
  },
  {
    title: 'Network Traffic Analysis Using Wireshark',
    description:
      'Deep-dive packet analysis with Wireshark across DNS, TCP/IP, and HTTP traffic. Inspected protocol behavior, followed conversation streams, and flagged anomalies to build stronger instincts for detecting suspicious network activity.',
    technologies: ['Wireshark', 'TCP/IP', 'DNS', 'HTTP', 'Packet Analysis'],
    github: 'https://github.com/Seyed005/Wireshark',
    live: null,
    featured: true,
    image: '/projects/wireshark.svg',
    accent: 'from-stone-800 to-stone-500',
  },
]

/**
 * Certificate metadata matched to discovered image filenames via `match` keywords.
 * Image files themselves are never listed here — they are scanned from public/certificates/.
 */
export const certificateCatalog = [
  {
    match: ['nptel'],
    title: 'NPTEL Ethical Hacking',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'Jul–Oct 2025',
    featured: true,
    order: 1,
  },
  {
    match: ['cnsp'],
    title: 'Certified Network Security Practitioner (CNSP)',
    issuer: 'The SecOps Group',
    date: '19 Nov 2025',
    featured: true,
    order: 2,
  },
  {
    match: ['oracle'],
    title: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle University',
    date: '22 Oct 2025',
    featured: true,
    order: 3,
  },
  {
    match: ['thm101', 'cyber-security-101', 'cybersecurity-101'],
    title: 'TryHackMe Cyber Security 101',
    issuer: 'TryHackMe',
    date: '28 Jun 2026',
    featured: true,
    order: 4,
  },
  {
    match: ['presecurity', 'pre-security'],
    title: 'TryHackMe Pre Security',
    issuer: 'TryHackMe',
    date: '13 Jun 2026',
    featured: false,
    order: 5,
  },
  {
    match: ['crtom', 'red-team-operations'],
    title: 'Certified Red Team Operations Management (CRTOM)',
    issuer: 'Red Team Leaders',
    date: '',
    featured: false,
    order: 6,
  },
  {
    match: ['windows-command', 'windows_command'],
    title: 'Windows Command Mastery for Ethical Hackers',
    issuer: 'Udemy',
    date: '20 Dec 2025',
    featured: false,
    order: 10,
  },
  {
    match: ['offensive-agent', 'offensive_agent'],
    title: 'Offensive Agent AI Course',
    issuer: 'Red Team Leaders',
    date: '20 Dec 2025',
    featured: false,
    order: 11,
  },
  {
    match: ['cpps'],
    title: 'Certified Phishing Prevention Specialist (CPPS)',
    issuer: 'Hack & Fix',
    date: '18 Dec 2025',
    featured: false,
    order: 12,
  },
  {
    match: ['ccep'],
    title: 'Certified Cybersecurity Educator Professional (CCEP)',
    issuer: 'Red Team Leaders',
    date: '27 Nov 2025',
    featured: false,
    order: 13,
  },
]

export const certificationsSection = {
  eyebrow: 'Certifications',
  title: 'Industry Certifications & Continuous Learning',
  description:
    'A collection of industry-recognized certifications and practical learning achievements demonstrating my continuous commitment to cybersecurity, networking, penetration testing and offensive security.',
}

export const certificationStats = {
  learningAreas: [
    'Networking',
    'Web Security',
    'Linux',
    'Ethical Hacking',
    'Cloud',
    'AI Security',
  ],
  careerFocus: [
    'Penetration Testing',
    'Security Research',
    'Offensive Security',
  ],
}

/** @deprecated Prefer certificateCatalog + virtual:certificates discovery */
export const certifications = certificateCatalog.map(
  ({ title, issuer, date, featured }) => ({
    title,
    issuer,
    year: date,
    featured,
    description: `${issuer}${date ? ` · ${date}` : ''}`,
  }),
)

export const experience = [
  {
    title: 'Security Analyst Intern',
    company: 'Oasis Infobyte',
    type: 'Internship',
    description:
      'Gained practical exposure to security analysis workflows, documentation, and foundational defensive and offensive security concepts in a structured internship setting.',
  },
  {
    title: 'Open to Internship',
    company: 'Seeking Opportunities',
    type: 'Availability',
    description:
      'Actively seeking cybersecurity internships in Penetration Testing, SOC operations, and Application Security — remote or on-site — with mentorship and real assessment work.',
  },
]

export const achievements = [
  {
    title: 'Ruby League — 1st Place',
    description:
      'Achieved 1st place in the TryHackMe Ruby League through consistent hands-on room completion and competitive ranking.',
  },
  {
    title: 'TryHackMe Learning Paths',
    description:
      'Completed multiple TryHackMe learning paths covering cybersecurity fundamentals, networking, and practical security labs.',
  },
  {
    title: 'Hands-on Web Security Labs',
    description:
      'Regular practice with web application security labs aligned with OWASP thinking and vulnerability assessment techniques.',
  },
  {
    title: 'Network Security Labs',
    description:
      'Practical network security labs including scanning, traffic analysis, and service enumeration in authorized environments.',
  },
  {
    title: 'Practical Linux Labs',
    description:
      'Hands-on Linux practice for security workflows — shell proficiency, system inspection, and lab environment management.',
  },
  {
    title: 'CTF Practice',
    description:
      'Ongoing Capture The Flag practice to sharpen problem-solving under realistic offensive and defensive security scenarios.',
  },
]

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const seo = {
  title: 'Seyed Ismail Bilal — Aspiring Penetration Tester',
  description:
    'Portfolio of Seyed Ismail Bilal, Cyber Security student specializing in penetration testing, web security, and network security. Open to internships.',
}
