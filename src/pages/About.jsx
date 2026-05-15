import { useInView } from '../hooks/useInView'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import StaffCard from '../components/StaffCard'
import { Phone } from 'lucide-react'

const LINDSAY_PHOTO = 'https://images.squarespace-cdn.com/content/v1/5f8397bd8502ed181768b927/7f3db0f5-4049-492d-bffe-25e05a3a26dd/Smiling+Woman+at+Sunset+Beach.png'
const SARA_PHOTO = 'https://images.squarespace-cdn.com/content/v1/5f8397bd8502ed181768b927/e10613d6-a89c-4e47-aa5f-7fd81255d3b7/Sara.png'

const LINDSAY_BIO = `Lindsay is a licensed Speech-Language Pathologist who has dedicated the past 12 years to supporting individuals of all ages in overcoming communication challenges. With a strong commitment to helping others find their voice, she's spent her time working with children in school systems and private practice settings. In 2020, after years of hands-on experience and collaboration in the field, Lindsay brought TalkAbilities to life!

Lindsay earned her Master of Science in Communication Disorders from North Carolina Central University. Her journey into the field began after completing a Bachelor's degree in Elementary Education at San Diego State University. Shortly after graduation, she moved to Shanghai, China, where she taught elementary school English. It was during this time that her love for working with children and helping them communicate truly began to grow.

After returning to the U.S., Lindsay pursued a second Bachelor's degree in Communication Disorders from Utah State University and gained valuable experience working as a Speech-Language Pathology Assistant in California. She later moved to North Carolina to complete her graduate studies, where she gained clinical experience across a variety of settings and with diverse populations.

Prior to TalkAbilities, Lindsay worked at the Virginia Institute of Autism, where she expanded her expertise in selecting and implementing augmentative and alternative communication (AAC) systems for children and adolescents with Autism Spectrum Disorder. She collaborated closely with ABA therapists, occupational therapists, physical therapists, and special education teachers to provide comprehensive, team-based support.

Lindsay is passionate about making therapy fun, engaging, and impactful. She values collaboration with families and caregivers to help ensure progress made in therapy carries over into everyday environments. In her free time, Lindsay enjoys spending time with her family, traveling the world, and exploring all the beauty North Carolina has to offer.`

const SARA_BIO = `Sara is originally from Burlington, North Carolina. She earned her Bachelor of Science in 2018 from Appalachian State University in Communication Sciences and Disorders. Sara continued her graduate studies at North Carolina Central University where she earned a Master of Science in speech-language pathology.

During graduate school, Sara served as a research and graduate assistant. Throughout her clinical training and into her professional practice, Sara has worked with both children and adults at local public schools, private practices specializing in early intervention, and adult rehabilitation centers.

Sara is passionate about working with young children and loves helping develop early communication skills. She has a strong interest in developmental disabilities and natural language acquisition. Sara strongly believes in using a play-based, child-led approach during therapy sessions. Sara's favorite part about being an SLP in her community is serving as an advocate for patients and their families!

Sara is licensed by the board of North Carolina and holds her Certificate of Clinical Competence from the American Speech-Language-Hearing Association. Sara lives in Zebulon, North Carolina. In her free time, she loves spending time with her husband, two kids, and two dogs!`

function MissionSection() {
  const [ref, visible] = useInView()
  return (
    <section ref={ref} className={`fade-up max-w-3xl mx-auto px-4 py-14 text-center ${visible ? 'visible' : ''}`}>
      <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6" />
      <p className="font-heading font-semibold text-2xl md:text-3xl text-secondary italic leading-snug">
        "TalkAbilities strives to recognize everyone's unique Abilities, while helping individuals grow their communication skills."
      </p>
      <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6" />
    </section>
  )
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroBanner
          headline="Meet Our Team"
          subheadline="Dedicated speech-language pathologists serving Knightdale, NC and surrounding areas"
        />

        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <StaffCard
              name="Lindsay Fleitz"
              credentials="MS, CCC-SLP"
              title="Owner & Speech Language Pathologist"
              photo={LINDSAY_PHOTO}
              bio={LINDSAY_BIO}
              delay={0}
            />
            <StaffCard
              name="Sara Baker Brookshire"
              credentials="M.S. CCC-SLP"
              title="Speech Language Pathologist"
              photo={SARA_PHOTO}
              bio={SARA_BIO}
              delay={150}
            />
          </div>
        </section>

        <MissionSection />

        {/* CTA */}
        <section className="bg-secondary/10 py-12 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl text-secondary">Ready to work with our team?</h2>
            <p className="text-gray-600 mt-2 text-sm">We're accepting new patients. Contact us to schedule a consultation.</p>
            <a
              href="tel:9197045542"
              className="inline-flex items-center gap-2 mt-5 px-7 py-3 bg-primary text-white rounded-full font-heading font-bold hover:bg-primary-dark transition-colors shadow-md"
            >
              <Phone size={16} /> Call (919) 704-5542
            </a>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating mobile call button */}
      <a
        href="tel:9197045542"
        className="md:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-lg font-heading font-bold text-sm hover:bg-primary-dark transition-colors"
        aria-label="Call TalkAbilities"
      >
        <Phone size={18} />
        Call Us
      </a>
    </div>
  )
}
