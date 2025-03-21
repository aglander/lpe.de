import * as React from "react"
import SectionHeader from "./section-header"

const TextInput = ({ type, label, name, required }) =>
  type === "textarea" ? (
    <textarea
      name={name}
      class="mt-4 md:mt-8 py-4 h-28 block w-full text-xl rounded-md bg-lightgrey border-divider focus:border-green focus:bg-white focus:ring-0"
      placeholder={label}
      required={required}
    />
  ) : (
    <input
      type={type}
      name={name}
      class="mt-4 md:mt-8 py-4 block w-full text-xl rounded-md bg-lightgrey border-divider focus:border-green focus:bg-white focus:ring-0"
      placeholder={label}
      required={required}
    />
  )

const ContactForm = () => {


  return (
    <div class="max-w-5xl mx-auto text-center">
      <SectionHeader
        title="Kontakt"
        description="Wir freuen uns auf Ihre Nachricht und melden uns umgehend bei Ihnen zurück."
      />
      <form
        name="contact-form"
        method="post"
        action="https://form.taxi/s/yqwc7dz5"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <div class="grid md:grid-cols-2 md:gap-8">
          <div>
            <TextInput
              type="text"
              name="fullname"
              label="Name"
              required={true}
            />
            <TextInput
              type="email"
              name="email"
              label="E-Mail-Adresse"
              required={true}
            />
          </div>
          <div>
            <TextInput
              type="tel"
              name="phone"
              label="Telefonnummer"
              required={true}
            />
            <TextInput
              type="text"
              name="address"
              label="Straße & Hausnr., PLZ & Ort"
              required={true}
            />
          </div>
        </div>
        <div>
          <TextInput
            type="textarea"
            name="message"
            label="Nachricht"
            required={true}
          />
          <button
            type="submit"
            class="mt-8 border-green border uppercase shadow rounded px-4 py-2 bg-green text-white hover:bg-darkgreen"
          >
            Absenden
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
