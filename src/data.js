// images
import Logo from '../src/assets/img/header/logo-1.png';
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import AikidoImg from '../src/assets/img/workouts/aikido.png'; // Added Aikido image
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Se connecter',
  btnSignupText: 'S’inscrire',
};

export const nav = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/' },
  { name: 'Programmes', href: '/' },
  { name: 'Tarifs', href: '/' },
  { name: 'Communauté', href: '/' },
  { name: 'FAQ', href: '/' },
];

export const banner = {
  titlePart1: 'Profitez de la meilleure partie de votre journée',
  titlePart2: '– Vous êtes à votre place ici.',
  subtitle:
    'Nous offrons une approche sérieuse du fitness dans un espace amical, convivial et sécurisé.',
  textBtn: 'Rejoignez-nous maintenant',
  img: '', // Add gym-specific image here if available
};

export const about = {
  icon: UsersIcn,
  title: 'Notre mission',
  subtitle1:
    'VITASPORT se distingue par son ambiance motivante, son personnel compétent et ses équipements de premier choix, vous aidant à atteindre vos objectifs de remise en forme.',
  subtitle2:
    'Nous inspirons chaque personne qui franchit les portes de notre club à se surpasser et à améliorer leur bien-être.',
  link: 'Rejoignez-nous maintenant',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Programmes d’entraînement',
  programs: [
    {
      image: AikidoImg, // Added Aikido
      name: 'Aikido',
    },
    {
      image: ResistanceImg,
      name: 'Résistance',
    },
    {
      image: BoxingImg,
      name: 'Boxe',
    },
    {
      image: BodyPumpImg,
      name: 'Body Pump',
    },
    {
      image: YogaImg,
      name: 'Yoga',
    },
    {
      image: FullBodyImg,
      name: 'Entraînement complet',
    },
    {
      image: FitnessImg,
      name: 'Fitness',
    },
    {
      image: BattleRopeImg,
      name: 'Corde à bataille',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Plan tarifaire',
  plans: [
    {
      name: 'Basique',
      price: '200 MAD',
      list: [
        { name: 'Accès illimité à la salle' },
        { name: '1 programme d’entraînement' },
        { name: 'Consultation fitness gratuite' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '350 MAD',
      list: [
        { name: 'Accès illimité à la salle' },
        { name: '5 programmes d’entraînement' },
        { name: 'Consultation fitness gratuite' },
        { name: 'Entraîneur personnel' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '490 MAD',
      list: [
        { name: 'Accès illimité à la salle' },
        { name: 'Tous les programmes d’entraînement' },
        { name: 'Consultation fitness gratuite' },
        { name: 'Entraîneur personnel' },
        { name: '50% de réduction sur les boissons' },
      ],
      delay: 1000,
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Communauté',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Omar B.',
      message:
        '“Excellente localisation, prix abordable et un personnel très serviable. Tout ce qu’il faut pour un bon entraînement !”',
    },
    {
      image: CommunityImg2,
      name: 'Sara M.',
      message:
        '“VITASPORT a changé ma vie, physiquement et mentalement. Je suis une meilleure mère et une meilleure personne grâce à ce club.”',
    },
    {
      image: CommunityImg3,
      name: 'Yassine K.',
      message:
        '“J’adore ces entraînements ! Les entraîneurs sont compétents et motivants. VITASPORT est super !”',
    },
    {
      image: CommunityImg4,
      name: 'Fatima Z.',
      message:
        '“L’ambiance est géniale et les cours sont vraiment motivants. Un super club !”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'FAQ',
  accordions: [
    {
      question: 'Comment puis-je réserver un cours de fitness ?',
      answer:
        'Vous pouvez réserver un cours en ligne via notre site web ou en nous contactant directement.',
    },
    {
      question: 'Puis-je payer mon abonnement en espèces ?',
      answer:
        'Oui, nous acceptons les paiements en espèces directement à la réception du club.',
    },
    {
      question: 'Quel âge faut-il avoir pour rejoindre le club ?',
      answer:
        'L’âge minimum pour rejoindre VITASPORT est de 16 ans, avec l’accord parental pour les mineurs.',
    },
    {
      question: 'Y a-t-il des casiers disponibles ?',
      answer:
        'Oui, des casiers sont disponibles pour tous les membres du club.',
    },
    {
      question: 'Comment puis-je annuler mon abonnement ?',
      answer:
        'Vous pouvez annuler votre abonnement en nous contactant via notre service client.',
    },
    {
      question: 'Y a-t-il de l’eau disponible au gymnase ?',
      answer:
        'Oui, nous proposons de l’eau gratuite à nos membres et des boissons en vente.',
    },
  ],
};

export const join = {
  image: JoinImg,
  title: 'Envie de rejoindre & de vous amuser ?',
  subtitle:
    'Nous vous tiendrons informé de tout ce que vous devez savoir sur VITASPORT. Rien de plus, rien de moins.',
  btnText: 'Rejoignez-nous',
};

export const footer = {
  logo: Logo,
  copyrightText: 'Tous droits réservés. VITASPORT 2024.',
};
