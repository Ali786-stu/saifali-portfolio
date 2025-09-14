import {
  Code,
  Smartphone,
  Globe,
  ShoppingCart,
  Check,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      icon: Globe,
      title: "Custom Website Development",
      description:
        "Professional, responsive websites built with modern technologies",
      price: "₹15,000 - ₹40,000",
      duration: "2-6 weeks",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "CMS Integration",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "SSL Certificate Setup",
      ],
      popular: false,
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Complete online stores with payment integration and inventory management",
      price: "₹40,000 - ₹80,000",
      duration: "4-8 weeks",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Payment Gateway",
        "Inventory Management",
        "Order Tracking",
        "Admin Dashboard",
      ],
      popular: true,
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      price: "₹80,000 - ₹1,50,000",
      duration: "6-12 weeks",
      features: [
        "Cross-platform Support",
        "Push Notifications",
        "Offline Functionality",
        "App Store Deployment",
        "User Authentication",
        "Data Synchronization",
      ],
      popular: false,
      image:
        "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      icon: Code,
      title: "Web Application Development",
      description:
        "Complex web applications with advanced functionality and integrations",
      price: "₹1,00,000 - ₹1,80,000",
      duration: "6-10 weeks",
      features: [
        "Database Design",
        "API Development",
        "User Management",
        "Real-time Features",
        "Third-party Integrations",
        "Scalable Architecture",
      ],
      popular: false,
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const whatsappNumber = "917417331926";

  const handleContactClick = (serviceName) => {
    const message = `Hello! I am interested in your "${serviceName}" service. Please share more details.`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-cursorpointer={true} className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{" "}
            <span data-cursorpointer={true} className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p data-cursorpointerText={true} className="text-xl text-gray-400 max-w-3xl mx-auto">
            I offer comprehensive web development and design services to help
            bring your digital vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 ">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden ${
                  service.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={14} />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="p-3 bg-gray-900/90 rounded-full">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-2xl font-bold text-white">
                        {service.price}
                      </span>
                      <div className="text-sm text-gray-400">
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {service.features
                      .slice(0, 4)
                      .map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-gray-400 pl-8">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>

                  <button
                    className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                      service.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={
                      service.popular
                        ? () => navigate("/contact")
                        : () => handleContactClick(service.title)
                    }
                  >
                    {service.popular ? (
                      <span>Get Started Now</span>
                    ) : (
                      <span>Contact Me</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
            <h3 data-cursorpointer={true} className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p data-cursorpointerText={true} className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? I'd love to discuss
              your unique requirements and create a custom solution that
              perfectly fits your needs.
            </p>
            <button
              onClick={() => handleContactClick("Custom Solution")}
              data-cursorpointermini={true}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Let's Talk About Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
