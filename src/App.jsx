import { motion } from "framer-motion"
import {
  Database,
  Globe,
  Cpu,
  BarChart3,
  Mail,
  MapPin,
} from "lucide-react"

export default function App() {
  return (
    <div className="bg-[#050816] text-white min-h-screen overflow-x-hidden">

      {/* BACKGROUND EFFECT */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">jordansanchez.github.io</h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#technologies" className="hover:text-cyan-400 transition">
              Technologies
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#architecture" className="hover:text-cyan-400 transition">
              Architecture
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center px-8 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-cyan-400 font-semibold mb-4 tracking-widest">
              PROFESSIONAL PORTFOLIO
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-8">
              Jordan Sánchez Zuniga
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Holder of a Bachelor's Degree in Information Technology Engineering in Costa Rica,
              currently pursuing a Licentiate Degree, with knowledge in frontend and backend
              development, automation, IoT, and enterprise systems integration.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Laravel",
                "PHP",
                "JavaScript",
                "Node-RED",
                "MySQL",
                "Oracle",
                "Grafana",
                "IoT",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-cyan-400 hover:bg-cyan-300 text-black px-7 py-4 rounded-2xl font-bold transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-white/20 hover:border-cyan-400 px-7 py-4 rounded-2xl transition"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 shadow-2xl">
              <h2 className="text-3xl font-bold mb-8">
                Main Technologies
              </h2>

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-black/30 rounded-2xl p-6">
                  <Database className="text-cyan-400 mb-4" size={40} />
                  <h3 className="font-bold mb-2">Databases</h3>
                  <p className="text-gray-400 text-sm">
                    Oracle XE and MySQL
                  </p>
                </div>

                <div className="bg-black/30 rounded-2xl p-6">
                  <Cpu className="text-cyan-400 mb-4" size={40} />
                  <h3 className="font-bold mb-2">IoT</h3>
                  <p className="text-gray-400 text-sm">
                    LoRaWAN + MQTT
                  </p>
                </div>

                <div className="bg-black/30 rounded-2xl p-6">
                  <Globe className="text-cyan-400 mb-4" size={40} />
                  <h3 className="font-bold mb-2">Web</h3>
                  <p className="text-gray-400 text-sm">
                    Laravel + APIs
                  </p>
                </div>

                <div className="bg-black/30 rounded-2xl p-6">
                  <BarChart3 className="text-cyan-400 mb-4" size={40} />
                  <h3 className="font-bold mb-2">Dashboards</h3>
                  <p className="text-gray-400 text-sm">
                    Real-time Grafana dashboards
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="technologies" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black mb-16">
            Technology Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Laravel",
              "PHP",
              "JavaScript",
              "React",
              "Node.js",
              "MySQL",
              "Oracle XE",
              "Node-RED",
              "Grafana",
              "MQTT",
              "LoRaWAN",
              "Python",
            ].map((tech) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={tech}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400 transition"
              >
                <h3 className="font-bold text-xl">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black mb-16">
            Featured Projects
          </h2>

          <div className="space-y-12">

            {/* PROJECT 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden"
            >
              <div className="grid md:grid-cols-2">

                <div className="bg-black/30 flex items-center justify-center p-10">
                  <img
                    src={`${import.meta.env.BASE_URL}images/arquitectura.png`}
                    alt="Architecture"
                    className="rounded-3xl shadow-2xl border border-white/10"
                  />
                </div>

                <div className="p-10">

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full text-sm">
                      IoT
                    </span>

                    <span className="bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full text-sm">
                      Node-RED
                    </span>

                    <span className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
                      Grafana
                    </span>
                  </div>

                  <h3 className="text-4xl font-black mb-6">
                    LoRaWAN IoT System
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-8">
                    Complete architecture for intelligent meter monitoring
                    using MQTT, Node-RED, Oracle XE, MySQL, and Grafana.
                    This project is currently under development, based on the
                    architectural foundation I designed for the system.
                  </p>

                  <ul className="space-y-4 text-gray-300">
                    <li>✔ MQTT integration with TTN</li>
                    <li>✔ Automatic validations</li>
                    <li>✔ Real-time processing</li>
                    <li>✔ Interactive dashboards</li>
                    <li>✔ Oracle → MySQL replication</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* PROJECT 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] overflow-hidden"
            >
              <div className="grid md:grid-cols-2">

                <div className="p-10">

                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-yellow-500/10 text-yellow-300 px-3 py-1 rounded-full text-sm">
                      Python
                    </span>

                    <span className="bg-red-500/10 text-red-300 px-3 py-1 rounded-full text-sm">
                      XML
                    </span>
                  </div>

                  <h3 className="text-4xl font-black mb-6">
                    Massive XML Processing
                  </h3>

                  <p className="text-gray-300 leading-relaxed mb-8">
                    Application for automation and large-scale XML file
                    processing with real-time monitoring. This system is
                    currently being used within the HYH accounting company,
                    supporting accounting processes.
                  </p>

                  <ul className="space-y-4 text-gray-300">
                    <li>✔ Concurrent processing</li>
                    <li>✔ Graphical interface</li>
                    <li>✔ Logs and monitoring</li>
                    <li>✔ Automatic reprocessing</li>
                    <li>✔ Administrative management</li>
                  </ul>
                </div>

                <div className="bg-black/30 flex items-center justify-center p-10">
                  <img
                    src={`${import.meta.env.BASE_URL}images/procesadorXML.png`}
                    alt="XML System"
                    className="rounded-3xl shadow-2xl border border-white/10"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-8">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-8">
            Contact
          </h2>

          <p className="text-gray-300 text-xl mb-12">
            Available for job opportunities in web development,
            backend, and systems integration.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <MapPin className="mx-auto mb-4 text-cyan-400" size={40} />

              <h3 className="font-bold mb-2">Location</h3>

              <p className="text-gray-400">
                Costa Rica
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <Mail className="mx-auto mb-4 text-cyan-400" size={40} />

              <h3 className="font-bold mb-2">
                Email
              </h3>

              <p className="text-gray-400">
                josanchezzu@est.utn.ac.cr
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <div className="mx-auto mb-4 text-cyan-400 text-4xl text-center">
                📱
              </div>

              <h3 className="font-bold mb-2">
                Phone
              </h3>

              <p className="text-gray-400">
                +506 8940-5754
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 Jordan Sánchez Zuniga — Professional Portfolio
      </footer>
    </div>
  )
}