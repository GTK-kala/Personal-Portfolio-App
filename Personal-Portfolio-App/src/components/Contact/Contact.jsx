import { ContextApi } from "../../context/ContextProvider";
import { useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Send, Mail, Phone, MapPin, Loader2 } from "lucide-react";

const Contact = () => {
  const { theme } = useContext(ContextApi);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const HandelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const value = { name, email, message };
    try {
      await emailjs.send(
        "service_dga4h43",
        "template_fyt1f2g",
        value,
        "Ek-zK_lz8--m_fd-8",
      );
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Failed to send message!");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gtkkala1110@gmail.com",
      href: "mailto:gtkkala1110@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+251 909 100 754",
      href: "tel:+251909100754",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Addis Ababa, Ethiopia",
      href: "#",
    },
  ];

  const inputClass = `w-full px-4 py-3.5 rounded-xl border-none outline-none transition-all duration-200 
    ${
      theme
        ? "bg-bg shadow-neu-light-inset text-primary-800 placeholder:text-primary-400 focus:shadow-neu-light-sm"
        : "bg-darkbg-light shadow-neu-dark-inset text-bg placeholder:text-bg-dark focus:shadow-neu-dark-sm"
    }`;

  return (
    <section
      id="contact"
      className={`section-py transition-colors duration-500 ${
        theme ? "bg-bg-light" : "bg-darkbg-light"
      }`}
    >
      <div className="container-x">
        <div className="mb-12 sm:mb-16">
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together to create something
            amazing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left - Info */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden ${
                theme
                  ? "bg-gradient-to-br from-primary to-secondary text-white shadow-neu-light"
                  : "bg-gradient-to-br from-secondary to-primary text-white shadow-neu-dark"
              }`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-tertiary/20 rounded-full translate-y-16 -translate-x-16" />

              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Let's talk
                </h3>
                <p className="text-white/80 mb-6 text-sm">
                  I'm always open to discussing new projects, creative ideas or
                  opportunities.
                </p>

                <div className="space-y-4">
                  {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      className="flex items-center gap-3 group"
                    >
                      <div className="p-2.5 rounded-xl bg-white/15 group-hover:bg-white/25 transition-colors flex-shrink-0">
                        <Icon size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] sm:text-xs text-white/70">
                          {label}
                        </p>
                        <p className="font-medium text-sm truncate group-hover:text-tertiary transition-colors">
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability card */}
            <div
              className={`p-5 rounded-2xl flex items-center gap-3 ${
                theme
                  ? "bg-bg shadow-neu-light-sm"
                  : "bg-darkbg shadow-neu-dark-sm"
              }`}
            >
              <div className="w-3 h-3 bg-tertiary-500 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p
                  className={`font-semibold text-sm ${
                    theme ? "text-primary" : "text-bg"
                  }`}
                >
                  Available for work
                </p>
                <p
                  className={`text-xs ${
                    theme ? "text-primary-600" : "text-bg-dark"
                  }`}
                >
                  Response within 24 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <form
            onSubmit={HandelSubmit}
            className={`lg:col-span-3 p-6 sm:p-8 rounded-3xl space-y-5 ${
              theme ? "bg-bg shadow-neu-light" : "bg-darkbg shadow-neu-dark"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  className={`block text-xs sm:text-sm font-semibold mb-2 ${
                    theme ? "text-primary" : "text-bg"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  placeholder="John Doe"
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label
                  className={`block text-xs sm:text-sm font-semibold mb-2 ${
                    theme ? "text-primary" : "text-bg"
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="john@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div>
              <label
                className={`block text-xs sm:text-sm font-semibold mb-2 ${
                  theme ? "text-primary" : "text-bg"
                }`}
              >
                Message
              </label>
              <textarea
                name="message"
                value={message}
                placeholder="Tell me about your project..."
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full neu-btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
