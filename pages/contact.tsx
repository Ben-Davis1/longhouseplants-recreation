import Head from 'next/head'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! Note: This is a demo form - your data is not actually sent anywhere.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Contact Us - Long House Plants</title>
        <meta name="description" content="Contact Long House Plants nursery. Address: Church Road, Noak Hill, Romford RM4 1LD. Phone: 01708 371719. Email: tim@thelonghouse.net" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">Contact Us</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="card">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Please select...</option>
                  <option value="general">General enquiry</option>
                  <option value="plants">Plant availability</option>
                  <option value="events">Open garden events</option>
                  <option value="directions">Directions</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Please include details of your enquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
              
              <p className="text-xs text-gray-500 mt-2">
                * Required fields. Note: Personal data is not sent anywhere - this is a demonstration form.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address & Contact Details */}
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Nursery Details</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                  <address className="not-italic text-gray-700">
                    Church Road, Noak Hill<br />
                    Romford RM4 1LD
                  </address>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                  <a href="tel:01708371719" className="text-green-600 hover:text-green-700">
                    01708 371719
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <a href="mailto:tim@thelonghouse.net" className="text-green-600 hover:text-green-700">
                    tim@thelonghouse.net
                  </a>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">What3words</h3>
                  <p className="text-gray-700">remain.keys.beard</p>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Opening Hours</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-green-700 mb-2">March–June</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Fridays & Saturdays: 10 am – 5 pm</li>
                    <li>Sundays: 10 am – 4 pm</li>
                    <li>Bank Holidays: 10 am – 5 pm</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-green-700 mb-2">July–September</h3>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>Saturdays: 10 am – 5 pm</li>
                    <li className="text-xs text-gray-600">
                      or by arrangement; via the website www.longhouseplants.com tim@thelonghouse.net or 01708 371719
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 mb-2">Important Notes</h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• We do not offer a mail order service</li>
                <li>• Only assistance dogs are welcome</li>
                <li>• Payment by cash, credit and debit cards</li>
                <li>• Nursery is all on one level</li>
                <li>• Off road car parking available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact