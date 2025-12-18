import { useState, type JSX } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

type Product = { id: number; title: string; price: string; img: string };

function NavBar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-4 py-2 rounded-2xl font-medium transition-all duration-200 ${
      isActive ? 'bg-white text-pink-600 shadow-lg' : 'text-white/90 hover:bg-white/10'
    }`;

  return (
    <header className="bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src="/images/Logo.jpg" alt="Floreria Camelia Logo" className="h-12 w-12 rounded-full object-cover shadow-inner" />
          {/* Ocultar texto en pantallas pequeñas para ganar espacio */}
          <div className="hidden sm:block">
            <h1 className="text-white text-xl font-bold leading-none">Florería Camelia</h1>
            <p className="text-white/90 text-xs">Detalles que florecen ✿ Entregas locales</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass} end>
            Inicio
          </NavLink>
          <NavLink to="/catalogo" className={linkClass}>
            Catálogo
          </NavLink>
          <NavLink to="/contacto" className={linkClass}>
            Contacto
          </NavLink>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white"
          >
            {/* simple icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`md:hidden transition-max-height duration-300 overflow-hidden ${open ? 'max-h-40' : 'max-h-0'}`}>
        <div className="px-4 pb-4 flex flex-col gap-2">
          <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => `py-3 px-4 rounded-lg ${isActive ? 'bg-white text-pink-600' : 'text-white/90 hover:bg-white/10'}`} end>
            Inicio
          </NavLink>
          <NavLink to="/catalogo" onClick={() => setOpen(false)} className={({ isActive }) => `py-3 px-4 rounded-lg ${isActive ? 'bg-white text-pink-600' : 'text-white/90 hover:bg-white/10'}`}>
            Catálogo
          </NavLink>
          <NavLink to="/contacto" onClick={() => setOpen(false)} className={({ isActive }) => `py-3 px-4 rounded-lg ${isActive ? 'bg-white text-pink-600' : 'text-white/90 hover:bg-white/10'}`}>
            Contacto
          </NavLink>
        </div>
      </div>
    </header>
  );
}

function Home(): JSX.Element {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <section className="grid md:grid-cols-2 gap-6 items-center mb-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-600">Bienvenidos a Florería Camelia</h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">Somos una floristería familiar apasionada por crear arreglos frescos, elegantes y personalizados. Creamos ramos para bodas, cumpleaños, eventos corporativos y momentos especiales. Entregas locales y servicio amable.</p>

          <ul className="flex flex-col gap-3 mt-4">
            <li className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">✔ <span className="ml-2">Flores 100% frescas</span></li>
            <li className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">✔ <span className="ml-2">Diseños personalizados</span></li>
            <li className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">✔ <span className="ml-2">Entregas a domicilio</span></li>
            <li className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3">✔ <span className="ml-2">Asesoría para eventos</span></li>
          </ul>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="/catalogo" className="w-full sm:w-auto text-center px-5 py-3 rounded-2xl bg-pink-600 text-white font-semibold shadow hover:bg-pink-700">Ver catálogo</a>
            <a href="/contacto" className="w-full sm:w-auto text-center px-5 py-3 rounded-2xl bg-white text-pink-600 font-semibold shadow hover:opacity-90">Contacto</a>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <img src="/images/Hero2.jpg" alt="Ramo destacado" className="w-full h-90 md:h-120 object-cover" />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Nuestra ubicación</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <iframe
              title="Mapa Florería Camelia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7364167.166082134!2d-110.08888417499999!3d25.678429199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c2fc354ecec1%3A0xf3a7719b2da34823!2sFloreria%20Camelia!5e0!3m2!1ses-419!2smx!4v1766019536396!5m2!1ses-419!2smx"
              width="100%"
              height={320}
              allowFullScreen
              loading="lazy"
              className="border-0"
            />
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <h4 className="text-lg font-semibold">Horario</h4>
            <p className="text-gray-600">Lunes - Sábado: 09:00 - 19:00</p>
            <p className="text-gray-600">Domingo: 10:00 - 15:00</p>

            <h4 className="mt-4 text-lg font-semibold">Servicios</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Ramos personalizados</li>
              <li>Arreglos para eventos</li>
              <li>Envíos locales y recogida en tienda</li>
            </ul>

            <h4 className="mt-4 text-lg font-semibold">Dirección</h4>
            <p className="text-gray-600">C. Aramberri, Maria Luisa, Centro, 64000 Monterrey, N.L.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Catalogo(): JSX.Element {
  const productos: Product[] = [
    { id: 1, title: 'Jarrones', price: 'MXN $450', img: '/images/Flor1.png' },
    { id: 2, title: 'Box Floral', price: 'MXN $1200', img: '/images/Flor2.png' },
    { id: 3, title: 'Bouquet de Rosas', price: 'MXN $780', img: '/images/Flor3.png' },
    { id: 4, title: 'Bouquet de Girasoles', price: 'MXN $650', img: '/images/Flor4.png' },
  ];

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Catálogo de Flores</h2>
      <p className="text-gray-600 mb-6">Selecciona un arreglo para ver detalles. Reemplaza las imágenes en <code>/public/images/</code> con tus propias fotos.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productos.map((p) => (
          <article key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
            <img src={p.img} alt={p.title} className="h-52 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-pink-600 font-bold mt-2">{p.price}</p>
              <p className="text-gray-500 text-sm mt-2 flex-1"> Flores frescas, empaques elegantes y entrega puntual.</p>
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <button className="w-full sm:w-auto px-4 py-2 rounded-full bg-pink-600 text-white font-medium shadow hover:bg-pink-700">Ordenar</button>
                <button className="w-full sm:w-auto px-4 py-2 rounded-full border border-pink-200 text-pink-600 font-medium">Ver</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function Contacto(): JSX.Element {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Contacto</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Escríbenos</h3>
          <p className="text-gray-600 mb-4">Mándanos un mensaje y te responderemos lo antes posible.</p>

          <form className="space-y-3">
            <input className="w-full p-3 rounded-xl border" type="text" placeholder="Nombre" />
            <input className="w-full p-3 rounded-xl border" type="email" placeholder="Correo" />
            <textarea className="w-full p-3 rounded-xl border" rows={4} placeholder="Tu mensaje" />
            <div className="flex flex-col sm:flex-row gap-2">
              <button type="button" className="w-full sm:w-auto px-4 py-2 rounded-2xl bg-pink-600 text-white font-semibold">Enviar</button>
              <button type="reset" className="w-full sm:w-auto px-4 py-2 rounded-2xl border">Limpiar</button>
            </div>
          </form>

          <div className="mt-6 space-y-2 text-sm text-gray-700">
            <p>WhatsApp: <a href="https://wa.me/5218131269187" className="text-pink-600">(52) 81 3126 9187</a></p>
            <p>Correo: <a href="mailto:contacto@floreriacamelia.mx" className="text-pink-600">contacto@floreriacamelia.mx</a></p>
            <p>Teléfono: (81) 3126 9187</p>
          </div>
        </div>

        <div className="bg-gradient-to-b from-rose-50 to-white rounded-2xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg">Visítanos</h3>
            <p className="text-gray-600">C. Aramberri, Maria Luisa, Centro, 64000 Monterrey, N.L.</p>

            <h4 className="mt-4 font-medium">Horario</h4>
            <p className="text-gray-600">Lun - Sáb: 09:00 - 19:00</p>

            <h4 className="mt-4 font-medium">Síguenos</h4>
            <div className="flex gap-3 mt-2">
              <a href="#" className="px-3 py-2 rounded-lg bg-white/80 shadow">Instagram</a>
              <a href="#" className="px-3 py-2 rounded-lg bg-white/80 shadow">Facebook</a>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500">* Para pedidos urgentes, comunícate por WhatsApp.</div>
        </div>
      </div>
    </main>
  );
}

function Footer(): JSX.Element {
  return (
    <footer className="mt-12 bg-gray-50 border-t py-6">
      <div className="max-w-6xl mx-auto text-center text-gray-600">© {new Date().getFullYear()} Florería Camelia — Hecho con ♥</div>
    </footer>
  );
}

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-white to-rose-50 text-gray-900 flex flex-col">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
