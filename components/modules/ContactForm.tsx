import Container from 'components/parts/Container'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { locale } = useRouter()
  const labels = {
    en: {
      contactUs: 'Contact Us',
      description:
        "We'd love to hear from you. Fill out the form and we'll get back to you soon!",
      name: 'Name',
      company: 'Company Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      thankYou: 'Thank you! Your message has been sent.',
    },
    no: {
      contactUs: 'Kontakt oss',
      description:
        'Vi vil gjerne høre fra deg. Fyll ut skjemaet, så tar vi kontakt så snart som mulig!',
      name: 'Navn',
      company: 'Firmanavn',
      email: 'E-post',
      message: 'Melding',
      send: 'Send melding',
      thankYou: 'Takk! Din melding er sendt.',
    },
  }
  const t = labels[locale as keyof typeof labels] || labels.en

  return (
    <section className="bg-white py-8 md:py-12">
      <Container className="mx-auto max-w-[700px]">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">{t.contactUs}</h2>
          <p className="text-gray-600 md:text-lg">{t.description}</p>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="flex flex-col gap-8 rounded-xl bg-white p-10"
          onSubmit={() => setSubmitted(true)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label
              htmlFor="name"
              className="text-gray-700 mb-1 block text-sm font-medium"
            >
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border-gray-300 w-full rounded-lg border px-5 py-3 text-base transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="text-gray-700 mb-1 block text-sm font-medium"
            >
              {t.company}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="border-gray-300 w-full rounded-lg border px-5 py-3 text-base transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-gray-700 mb-1 block text-sm font-medium"
            >
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border-gray-300 w-full rounded-lg border px-5 py-3 text-base transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-gray-700 mb-1 block text-sm font-medium"
            >
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="border-gray-300 w-full resize-none rounded-lg border px-5 py-3 text-base transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            {t.send}
          </button>
          {submitted && (
            <div className="mt-4 text-center font-medium text-green-600">
              {t.thankYou}
            </div>
          )}
        </form>
      </Container>
    </section>
  )
}
