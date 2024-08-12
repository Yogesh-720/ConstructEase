import { design, management, material, quality, safety, support ,facebook,instagram,twitter} from "../assets/icons";
import { project1,project2,project3,project4,customer1,customer2 } from "../assets/images";

export const navLinks = [
    { href: "#Home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#projects", label: "Projects" },
    { href: "#contact-us", label: "Contact Us" },
];

export const statistics = [
    { value: '100+', label: 'Projects Completed' },
    { value: '50+', label: 'Experienced Engineers' },
    { value: '200+', label: 'Satisfied Clients' },
];

export const projects = [
    {
      imgURL: project1,
      name: "Modern Residential Complex",
      description: "A state-of-the-art residential complex featuring eco-friendly designs and modern amenities.",
    },
    {
      imgURL: project2,
      name: "High-Tech Office Building",
      description: "An innovative office space with cutting-edge technology and sustainable architecture.",
    },
    {
      imgURL: project3,
      name: "Luxury Urban Apartments",
      description: "Premium urban living spaces offering luxury and convenience in the heart of the city.",
    },
    {
      imgURL: project4,
      name: "Eco-Friendly Shopping Mall",
      description: "A shopping destination with eco-friendly features and contemporary design.",
    },
  ];
  
  export const services = [
    {
      imgURL: management,
      label: "Project Management",
      subtext: "Efficient and reliable project management from inception to completion."
    },
    {
      imgURL: quality,
      label: "Quality Assurance",
      subtext: "Committed to delivering the highest standards of quality and safety."
    },
    {
      imgURL: support,
      label: "Customer Support",
      subtext: "Our team is ready to assist you with personalized service and support."
    },
    {
      imgURL: design,
      label: "Design Consultation",
      subtext: "Collaborate with our experts to create innovative and sustainable designs."
    },
    {
      imgURL: safety,
      label: "Safety Compliance",
      subtext: "Ensuring strict adherence to safety regulations and standards."
    },
    {
      imgURL: material,
      label: "Material Procurement",
      subtext: "Sourcing top-grade materials for optimal project execution."
    }
  ];

  export const reviews = [
    {
      imgURL: customer1, 
      clientName: 'Morich Brown',
      rating: 4.8,
      feedback: "The team at ConstructEase delivered exceptional quality and craftsmanship. Our project was completed on time and within budget. Highly recommended!"
    },
    {
      imgURL: customer2, 
      clientName: 'Lota Mongeskar',
      rating: 4.7,
      feedback: "Working with ConstructEase was a fantastic experience. Their professionalism and attention to detail made our vision a reality. We'll definitely work with them again!"
    }
  ];
  
  export const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Residential Construction", link: "/" },
        { name: "Commercial Construction", link: "/" },
        { name: "Renovations", link: "/" },
        { name: "Project Management", link: "/" },
        { name: "Design & Build", link: "/" },
        { name: "Consultation", link: "/" },
      ],
    },
    {
      title: "Help",
      links: [
        { name: "About Us", link: "/" },
        { name: "FAQs", link: "/" },
        { name: "Our Process", link: "/" },
        { name: "Privacy Policy", link: "/" },
        { name: "Terms of Service", link: "/" },
      ],
    },
    {
      title: "Get in Touch",
      links: [
        { name: "contact@constructease.com", link: "mailto:contact@constructease.com" },
        { name: "+1234567890", link: "tel:+1234567890" },
      ],
    },
  ];

  export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];