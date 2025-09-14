import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgetOptions = [
    "< ₹10,000",
    " ₹10,000 -  ₹30,000",
    " ₹30,000 -  ₹50,000",
    " ₹50,000 -  ₹1,00,000",
    " ₹1,00,000+",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const [result, setResult] = React.useState("");
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "fe3c558a-ed94-4849-802b-067bc4166fc7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data: { success: boolean; message: string } = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Request failed", error);
      setResult("Something went wrong. Please try again.");
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ceo@asadalam.info",
      link: "ceo@asadalam.info",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7417331926",
      link: "tel:+917417331925",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Lucknow, IN",
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-cursorpointer={true} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In{" "}
            <span data-cursorpointer={true} className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p data-cursorpointerText={true} className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss your ideas and turn them
            into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 data-cursorpointersm={true} className="text-2xl font-bold text-white mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link} data-cursorpointerMini={true}
                    className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="p-3 bg-blue-900/30 text-blue-400 rounded-lg group-hover:bg-blue-900/50 transition-colors duration-300">
                      <IconComponent size={24} data-cursorpointerMini={true} />
                    </div>
                    <div>
                      <h4 data-cursorpointerMini={true} className="font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      <p data-cursorpointerMini={true} className="text-gray-400">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-2xl text-white">
              <h4 data-cursorpointerText={true} className="text-lg font-semibold mb-2">Quick Response</h4>
              <p data-cursorpointerText={true} className="text-blue-100 text-sm">
                I typically respond to messages within 24 hours. For urgent
                projects, don't hesitate to call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-2xl shadow-lg p-8">
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-900/20 border border-green-800 rounded-lg flex items-center gap-3">
                  <CheckCircle className="text-green-400" size={20} />
                  <p className="text-green-400 font-medium">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      data-cursorpointerMini={true}
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-800 border-gray-600 text-white ${
                        errors.name ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      data-cursorpointerMini={true}
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-800 border-gray-600 text-white ${
                        errors.email ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="subject"
                      data-cursorpointerMini={true}
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-800 border-gray-600 text-white ${
                        errors.subject ? "border-red-500" : "border-gray-600"
                      }`}
                      placeholder="Project discussion"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      data-cursorpointerMini={true}
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Project Budget (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-gray-800 text-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    data-cursorpointerMini={true}
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none bg-gray-800 border-gray-600 text-white ${
                      errors.message ? "border-red-500" : "border-gray-600"
                    }`}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? "opacity-75 cursor-not-allowed"
                      : "hover:scale-105"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
