import React, { useState } from 'react';
import { Settings, Briefcase, Download, List, BookOpen, Search, Terminal, Network, Eye, Rocket, Phone, Printer, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import LogoImg from './assets/Logo.png';

type Page = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-win-blue selection:text-white">
      {/* Top Navbar */}
      <header className="bg-win-grey border-b-2 border-r-2 border-gray-600 border-t-2 border-white border-l-2 border-white shadow-[inset_-1px_-1px_#000,inset_1px_1px_#fff] flex justify-between items-center w-full px-2 py-1 sticky top-0 z-50">
        <div className="text-lg font-black text-win-blue italic font-serif flex items-center gap-2">
          DevCore Consultores
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          {[
            { id: 'home', label: 'Inicio' },
            { id: 'about', label: 'Nosotros' },
            { id: 'services', label: 'Soluciones' },
//            { id: 'portfolio', label: 'Clientes' }, 
            { id: 'contact', label: 'Soporte' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id as Page)}
              className={`p-1 font-serif text-sm uppercase tracking-wider transition-all ${
                activePage === item.id 
                ? 'text-black font-bold bg-gray-400 win95-inset' 
                : 'text-blue-700 underline hover:bg-win-teal hover:text-white cursor-pointer'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="win95-inset bg-white px-2 py-0.5 flex items-center">
            <input className="bg-transparent border-none focus:ring-0 text-xs w-24 md:w-32" placeholder="Buscar..." type="text" />
            <Search className="w-3 h-3 text-gray-600" />
          </div>
          <button 
            onClick={() => setActivePage('contact')}
            className="bg-win-grey win95-outset px-4 py-1 text-win-blue font-bold text-xs uppercase hover:bg-win-teal hover:text-white active:translate-x-0.5 active:translate-y-0.5"
          >
            Contacto
          </button>
        </div>
      </header>

      {/* Marquee Ticker */}
      <div className="bg-win-blue text-white overflow-hidden whitespace-nowrap py-1 font-mono text-xs border-b border-black">
        <div className="animate-[marquee_20s_linear_infinite] inline-block">
          +++ BIENVENIDOS A DEVCORE CONSULTORES +++ SOLUCIONES DE SOFTWARE A MEDIDA PARA LA ERA DIGITAL +++ ESTABLECIDOS EN 2026 +++ OPTIMIZADO PARA NETSCAPE NAVIGATOR 4.0 +++
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-48 bg-win-grey border-r-2 border-gray-600 border-white shrink-0 hidden md:block pixel-dot-bg">
          <div className="p-2 h-full flex flex-col">
            <div className="bg-win-blue text-white px-2 py-1 font-bold text-[10px] uppercase mb-2 win95-outset">
              Navegación V.1.0.2
            </div>
            <nav className="flex flex-col space-y-1">
              <SidebarLink icon={<Settings className="w-3 h-3" />} label="Servicios" active={activePage === 'services'} onClick={() => setActivePage('services')} />
              <SidebarLink icon={<Briefcase className="w-3 h-3" />} label="Información Corporativa" active={activePage === 'about'} onClick={() => setActivePage('about')} />
              <SidebarLink icon={<Download className="w-3 h-3" />} label="Descargas" active={false} onClick={() => {}} />
              <SidebarLink icon={<List className="w-3 h-3" />} label="Mirrors" active={false} onClick={() => {}} />
              <SidebarLink icon={<BookOpen className="w-3 h-3" />} label="Libro de Visitas" active={false} onClick={() => {}} />
            </nav>

            <div className="mt-auto border-2 border-gray-600 border-t-white border-l-white p-2 text-center bg-win-grey">
              <img 
                className="mx-auto border border-black mb-2 w-12 h-12" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtSsr5TH7QFsfx6_IAzK4fo4ilKuSx9P4SnLBBQwlQ-kcYdF60dj4IJz8PQvPPWoBijRuRe-7Ijgh6IJsuz55G3t3cXHQqapeWEnrG_1ewm_z5f2V4_Zeqf0eWKXI-Qi7uIJemPgQlBw0GZpLekJgeWX1y5uoqGLaHJXZqiIuUxjOJaV-OsTrtKLue-MekAUlmnY_qMNLvKSkpZrei9Aspy9qF3KEx2euPxmBbWojuKSSOCA0vneOZaYxAMQoydO3d0yAWDOq4ncw" 
                alt="Under Construction" 
              />
              <p className="text-[9px] font-mono leading-tight">SITIO EN<br/>CONSTRUCCIÓN</p>
            </div>
            
            <div className="mt-4 flex flex-col items-center">
              <img 
                className="w-16 h-16 border border-black" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjbELWG0gca813Ic2hvq5ZS8In0Xda6Ahb9JSu8OA7XoNQsNo6iTO6ZxMPnwR1LxbLY4tvZnONRJMAdE1gEn_JqWGoINnYTKQbIWwSlZYqSbqHtmBWtsKsXy1qtIL0CvepZSEl-2S-xu3xen2oScZ_f7uJU-60c84V-nTjaIi0nanW0jTWy2W5ah0lNNT52GumH1JcbHsq7cduXU7t55tZ3p1bogGE4jTt5bS3m8vxU9VEuhmMDWDg0pQ3RRGx8oOXT8Pd5htqEv0" 
                alt="Globe"
              />
              <p className="text-[10px] mt-1 font-mono">EN LÍNEA DESDE 2026</p>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-white md:m-1 win95-inset overflow-y-auto p-4 md:p-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activePage === 'home' && <InicioView />}
              {activePage === 'about' && <AboutView />}
              {activePage === 'services' && <ServiciosView />}
              {activePage === 'portfolio' && <PortfolioView />}
              {activePage === 'contact' && <ContactoView />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 flex flex-col items-center gap-2 border-t-2 border-white bg-win-grey">
        <div className="flex gap-4">
          <a href="#" className="text-blue-800 underline font-serif text-[10px] hover:text-red-600">Política de Privacidad</a>
          <span className="text-black">|</span>
          <a href="#" className="text-blue-800 underline font-serif text-[10px] hover:text-red-600">Administrador Web</a>
          <span className="text-black">|</span>
          <a href="#" className="text-blue-800 underline font-serif text-[10px] hover:text-red-600">Mapa del Sitio</a>
        </div>
        <p className="font-serif text-[10px] text-center text-black uppercase">
          © 2026 DevCore Consultores. Optimizado para 800x600. Última actualización: 22 de abril de 2026.
        </p>
        <div className="mt-2 flex items-center gap-4">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH-3cTyj1nLIDYopnhafJpVfa5gHFhQJRLphgiw40N1v2WB2tLs8iLsI9ZJU3r7GOv0ywSEQgu_HlUC7rL-VsNk_8fz_4CcXN-1FIwEqltzCOrbREPPa3uWQsZjY3G0YCHMD6EK6vTBYLH3zy8R4M0lQnutlv6cy7N4evfNT3RGtxWUO_dxaFD3gP4bUvApejjPh_OaO5c0l1rzO0vj2j4sPpW6XtGHrMKcWsZ-ubFxpEdCLYYEHVSgfwTr-Xpddkts4oN8LMmQ60" alt="Netscape" className="h-6" />
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGRdqluSLVlV3aK47piYbpy4S32HHSUQD03hAuU3xTILGGJol4cepxS0QD71UTESkExaXdkweTF8ISVuewHE4MHgbBVddhWsR90RmIyODkdYaJ10c1yweSAn2wKmKHAfxrGGZFnEfxX5bpk7UiSWbtVksU_Mi8aT3ecfjWA3a9p5IpAQUPiRR4V2l7yFkjsYdEna5oM9Cy7BqD1hNSIfwnzsClhapP0iu5yEpbiqasIdKTrMg7WwR2-ipG966h7xfl3rfY7v-IJVo" alt="Internet Explorer" className="h-6" />
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes win95progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}

function SidebarLink({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 p-1 font-serif text-xs leading-none transition-all w-full text-left ${
        active 
        ? 'bg-win-blue text-white font-bold' 
        : 'text-blue-800 underline hover:bg-gray-400 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

/* --- Views --- */

function InicioView() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-serif italic text-win-blue text-4xl md:text-6xl mb-2 font-bold drop-shadow-sm text-center">Bienvenidos a DevCore</h1>
      <p className="font-serif italic text-lg text-win-teal text-center mb-8">Socios tecnológicos de confianza desde 2026</p>
      
      <div className="win95-outset p-1 bg-win-grey mb-10 w-full max-w-2xl">
        <img 
          className="border border-black w-full h-auto grayscale hover:grayscale-0 transition-all cursor-crosshair" 
          src={LogoImg} 
          alt="Logo" 
        />
        <p className="text-[10px] text-center mt-1 italic p-1">Nuestro logo corporativo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="win95-inset p-4 bg-gray-50">
          <div className="flex items-center gap-3 mb-4 text-win-blue">
            <Terminal className="w-8 h-8" />
            <h3 className="font-bold text-lg border-b border-win-blue w-full">Ingeniería a la Medida</h3>
          </div>
          <p className="text-sm font-body-md text-gray-700 leading-relaxed">
            Nos especializamos en crear soluciones empresariales robustas usando tecnologías estables y confiables. Desde gestión de bases de datos hasta arquitecturas cliente-servidor, nuestros sistemas están diseñados para impulsar la eficiencia de cada negocio.
          </p>
        </div>
        <div className="win95-inset p-4 bg-gray-50">
          <div className="flex items-center gap-3 mb-4 text-win-blue">
            <Network className="w-8 h-8" />
            <h3 className="font-bold text-lg border-b border-win-blue w-full">Arquitectura de Redes</h3>
          </div>
          <p className="text-sm font-body-md text-gray-700 leading-relaxed">
            Desarrollamos soluciones de red escalables para empresas modernas. Priorizamos la disponibilidad, la transmisión segura de datos y una infraestructura corporativa protegida con configuraciones confiables.
          </p>
        </div>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBYAeANIL-t1eCEXtGwqqCQHOPcjYnLuRnzm_9IM3zDpCf5I6skntF9Wf8bZXBjYc5-th4ae4xp9hIlFqUQag9y0Tzx36lQkeux2pAlO4Xm9QZ-BoIX5G93tWP-24lDtgpPWjGdhYz-33J7_gq4l2AHbWz49R87GswRrqueRyWZohsNZGZuK6MemigC0HQ5qN2UMM9gtZEKbSe9SXY_a4Z6t9Qv69-a2CN502vdvD7EAWWxBzEhbt-M_CDglP2WP2fQ-yPo7IHuMI" alt="Award 1" className="h-16" />
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjjHNIpAn5R1r5mHPTy9xxwM8v7Qt0PpAmAvZhmqlqYrC1voNxtD0L6fi0hse652oxJTfnXRGqsPu3vE6llXmIYTSCkRbNT05MGmRWK0jAwt3CT2Es-Y-ivEgGB2-g8dyn8HfUkbdJh24L5p7NLoTWPazqFhalEAu3tAEiNP88Ybe0dlICQjfswOt1mYJI4YDVKD9JWM6a7ghKX31w8UTyyQp4gnvKhkWDkgJtLOLOTZbcRu64RS5KiBJINVlY3nGDIVULAn7nZNU" alt="Contacto Us" className="h-16" />
      </div>
    </div>
  );
}

function AboutView() {
  return (
    <div className="flex flex-col">
      <div className="bg-win-teal text-white p-2 mb-6 font-serif text-xl border-2 border-gray-600 win95-shadow">
        NUESTRA HISTORIA: CONSTRUYENDO EL FUTURO DIGITAL
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="win95-outset p-1 bg-white md:w-1/3">
          <img 
            className="border border-black w-full h-auto grayscale" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9NBZv4HaKDb1OYYKXSHGJJx9hjCLA3dY1pONbW-BR-dlb3inlstcj9jimVZxygzpS6WlfHq7Js7MqGivu3NlYHW54Ymx5mblOlN2vmxbnkIMSnW7LqoUytuKZOcwFlsX4oeGWIq-mkqC5h3D3aSI2SBH6xBwJtwSc9qCAjmaU8qiLe2KuybHbRzl8EzwPa_XYR9ShCjtBhHag6wHVBdpnIdEOqiynsszLi1HJjQsi3jGpL3F99ldYwS-gKixAjdb5nNfnTI-d3NQ" 
            alt="Primera oficina" 
          />
          <p className="text-[10px] text-center mt-1 italic p-1">Nuestra primera sede de trabajo, octubre de 2026.</p>
        </div>
        <div className="md:w-2/3">
          <p className="mb-4 text-justify font-serif leading-relaxed">
            Fundada en 2026 por un equipo de ingenieros en sistemas con visión tecnológica, <span className="font-bold text-win-blue">DevCore Consultores</span> nació con el objetivo de ofrecer soluciones de software ajustadas a las necesidades reales de cada cliente. Nuestra misión fue clara desde el inicio: conectar los procesos tradicionales de las empresas con herramientas digitales eficientes, seguras y fáciles de implementar.
          </p>
          <p className="text-justify font-serif leading-relaxed">
            Hoy seguimos trabajando en integración de sistemas, optimización de bases de datos y desarrollo de software de alto rendimiento. Creemos en la tecnología útil, el código eficiente y las soluciones que realmente mejoran la operación de una empresa.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <MissionCard title="MISIÓN.EXE" icon={<Rocket className="w-10 h-10" />} desc="Ofrecer soluciones de software robustas, escalables y seguras que ayuden a las empresas a mejorar sus procesos, reducir errores y aprovechar mejor sus recursos digitales." />
        <MissionCard title="VISIÓN.SYS" icon={<Eye className="w-10 h-10" />} desc="Ser una empresa referente en modernización tecnológica, reconocida por desarrollar sistemas confiables, personalizados y orientados al crecimiento de nuestros clientes." />
      </div>

      <h2 className="font-serif italic text-win-blue text-2xl border-b-2 border-gray-400 mb-6 pb-1">Conoce al Equipo</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <TeamMember name="Nombre 1" role="Ingeniero en Sistemas" img="https://lh3.googleusercontent.com/aida-public/AB6AXuATz0BNyOWP5f29ExL86hmT4Hl7DT8FITFdcv77630jGvSuVGPz05dDbdHL6r9hxV6diIivLjymAd1WihBHLKbVcPbX5RiHbJTEAa-hZ5SvXh6nmaOTaNk_wHnBZhisJt2Natn5abDxfTz2YmxSKn-HqL3QT-eEyHHNPLuIMXMlxL4wi_HRVQv45n4LeuKcDNo14pMwNGkg81Cj2Hw-x0Y4uL6pVhaVmdDJX1yCE5iqVI8KV7ASFH-t1CYHlE9qzoNThvjnKiMSkz0" />
        <TeamMember name="Nombre 2" role="Ingeniero en Sistemas" img="https://lh3.googleusercontent.com/aida-public/AB6AXuATz0BNyOWP5f29ExL86hmT4Hl7DT8FITFdcv77630jGvSuVGPz05dDbdHL6r9hxV6diIivLjymAd1WihBHLKbVcPbX5RiHbJTEAa-hZ5SvXh6nmaOTaNk_wHnBZhisJt2Natn5abDxfTz2YmxSKn-HqL3QT-eEyHHNPLuIMXMlxL4wi_HRVQv45n4LeuKcDNo14pMwNGkg81Cj2Hw-x0Y4uL6pVhaVmdDJX1yCE5iqVI8KV7ASFH-t1CYHlE9qzoNThvjnKiMSkz0" />
        <TeamMember name="Nombre 3" role="Ingeniero en Sistemas" img="https://lh3.googleusercontent.com/aida-public/AB6AXuATz0BNyOWP5f29ExL86hmT4Hl7DT8FITFdcv77630jGvSuVGPz05dDbdHL6r9hxV6diIivLjymAd1WihBHLKbVcPbX5RiHbJTEAa-hZ5SvXh6nmaOTaNk_wHnBZhisJt2Natn5abDxfTz2YmxSKn-HqL3QT-eEyHHNPLuIMXMlxL4wi_HRVQv45n4LeuKcDNo14pMwNGkg81Cj2Hw-x0Y4uL6pVhaVmdDJX1yCE5iqVI8KV7ASFH-t1CYHlE9qzoNThvjnKiMSkz0" />
        <TeamMember name="Nombre 4" role="Ingeniero en Sistemas" img="https://lh3.googleusercontent.com/aida-public/AB6AXuATz0BNyOWP5f29ExL86hmT4Hl7DT8FITFdcv77630jGvSuVGPz05dDbdHL6r9hxV6diIivLjymAd1WihBHLKbVcPbX5RiHbJTEAa-hZ5SvXh6nmaOTaNk_wHnBZhisJt2Natn5abDxfTz2YmxSKn-HqL3QT-eEyHHNPLuIMXMlxL4wi_HRVQv45n4LeuKcDNo14pMwNGkg81Cj2Hw-x0Y4uL6pVhaVmdDJX1yCE5iqVI8KV7ASFH-t1CYHlE9qzoNThvjnKiMSkz0" />
      </div>
    </div>
  );
}

function ServiciosView() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-serif italic text-win-blue text-4xl mb-2 font-bold text-center">Professional Soluciones & Servicios</h1>
      <p className="font-serif italic text-lg text-gray-600 text-center mb-8">Impulsamos tu negocio con tecnología diseñada a tu medida.</p>
      
      <div className="w-full win95-outset bg-gray-200 shadow-[inset_1px_1px_#fff]">
        <div className="bg-win-teal text-white p-2 font-black text-center border-b-2 border-gray-600 tracking-widest text-sm">
          DIRECTORIO DE SERVICIOS
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-600">
          <ServiceCategory title="Software Personalizado" icon={<Terminal className="w-6 h-6" />} items={["Soluciones de bases de datos", "Arquitectura cliente-servidor", "Optimización de sistemas existentes", "Desarrollo con tecnologías modernas y heredadas"]} />
          <ServiceCategory title="Desarrollo Web" icon={<Eye className="w-6 h-6" />} items={["Sitios web optimizados", "Soporte e integración backend", "Diseño adaptable y funcional", "Integración de componentes interactivos"]} />
          <ServiceCategory title="Automatización" icon={<Settings className="w-6 h-6" />} items={["Scripts de mantenimiento", "Procesamiento por lotes", "Flujos de trabajo digitales", "Reducción de errores 99%"]} />
          <ServiceCategory title="Integración" icon={<Network className="w-6 h-6" />} items={["Conexión entre sucursales", "Protocolos TCP/IP corporativos", "Pasarelas de correo electrónico", "Seguridad y firewalls"]} />
        </div>
      </div>

      <div className="mt-8 w-full win95-inset bg-white p-4">
        <h3 className="font-bold text-win-teal mb-3 uppercase text-xs">Progreso del Sistema</h3>
        <div className="win95-inset bg-gray-200 h-8 p-1 overflow-hidden">
          <div
            className="h-full"
            style={{
              background: 'repeating-linear-gradient(to right, #008080 0px, #008080 22px, transparent 22px, transparent 26px)',
              animation: 'win95progress 14.5s steps(20, end) infinite'
            }}
          />
        </div>
        <p className="text-[10px] mt-2 font-mono italic">Indexación completa. Todos los sistemas funcionan correctamente.</p>
      </div>
    </div>
  );
}

function PortfolioView() {
  return (
    <div className="flex flex-col">
       <div className="bg-win-teal text-white p-2 mb-6 font-serif text-xl border-2 border-gray-600 win95-shadow">
        ARCHIVO DE PROYECTOS RECIENTES
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectCard 
          title="CyberNet v2.0" 
          desc="Optimización de infraestructura para sistemas empresariales de tamaño medio."
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDhk8ZpVRNk8cxl8L56gZgZvx8LKJPycQyB2NURsohQrnYUUaLccw61g3bUPZSDcQHScEk5NI-dEDaejgeiaINqrPaL_2Y0RVkeSod0jNtWj1X9WwYEKHbZlNKjtKhF3nWC44mjePUAVNff_9XNqq8gj_4TsC-HXIKhqnZkiP9bZ4YObYFYfm_hRY42kDdD2hgaAq-gN4ydQZTot9O9qKVIX3n1YCoCSjPOP5VQcmxi3vqHztI9_mY7fk7PtE8l9jH4FD1flyD7c8k"
        />
        <ProjectCard 
          title="Intranet Portal" 
          desc="Desarrollo de scripts personalizados para reportes internos automatizados."
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuAx47uW7SVj9JFhMdxEZw1DJldE_CdhFHrhvsnZX5uF3A_nhr5M0MSrDxesRdu1mdjodK1SmmmYdOhG0i954GRwEzagQc8fYY8HzHhSt7bkExPSyWgdR710js03gN0TX0R65SiB18FsK8R_hQiHUJaZ8GV-MBBnR-13TANu-5CHj0fUj_T_nlPAc6R_ORu0PNHRPDLr9DrNP0cffbb4MhuVFrhfv0s38eKZ7gKYaDA1OHLQ9QVXAEt57fFdUgoubBW2WQZC73874mw"
        />
        <ProjectCard 
          title="Legacy 2000" 
          desc="Auditoría de compatibilidad, continuidad operativa y respaldo de sistemas."
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuAEp5U-jRj86v5XvybiWgRhpxHc4jhOUZqAFOFYffvFFicO9E57V2H0Ptw2-hF4Wgua-2IGi_kU110VoLC9MNo0gsASIyVZUDom5HU-IMIw3dG0fJL71FNd-NlfSgUVTGBz_J5SST9a-lJCBOk9_FrXrjfVDOmpK23ducUk5BDhzNwZSkM1qlaN5KPJEgLHPlJ0x4HOLZHxvvc7H0wJpq6oOFMdH2nI3k4DIdPS6JOsBmspl6vRRv02HMkrPCOhOsKrXMyWj4QdJG4"
        />
      </div>
    </div>
  );
}

function ContactoView() {
  return (
    <div className="flex flex-col">
      <div className="bg-win-blue text-white p-2 mb-px font-bold text-sm tracking-widest border-2 border-gray-600 win95-shadow">
        ESTABLECER CONEXIÓN - CONTACTAR AL EQUIPO
      </div>
      <div className="win95-outset flex flex-col md:flex-row bg-win-grey">
        <div className="p-6 md:w-2/3 md:border-r-2 border-gray-600">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[10px] font-bold mb-1 uppercase">Tu nombre:</label>
              <input className="w-full win95-inset bg-white p-1 font-mono text-xs focus:outline-none" type="text" />
            </div>
            <div>
              <label className="block text-[10px] font-bold mb-1 uppercase">Correo electrónico:</label>
              <input className="w-full win95-inset bg-white p-1 font-mono text-xs focus:outline-none" type="email" />
            </div>
            <div>
              <label className="block text-[10px] font-bold mb-1 uppercase">Mensaje:</label>
              <textarea className="w-full win95-inset bg-white p-1 font-mono text-xs focus:outline-none" rows={5}></textarea>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center gap-2">
                <div className="win95-inset bg-white p-0.5 w-16 h-3 relative">
                  <div className="bg-win-teal h-full w-2/3"></div>
                </div>
                <span className="text-[10px] font-mono leading-none">Encriptando...</span>
              </div>
              <button className="win95-outset bg-win-grey px-8 py-2 font-black text-win-blue uppercase tracking-widest text-xs hover:bg-gray-300 active:win95-inset active:translate-x-0.5 active:translate-y-0.5">
                ENVIAR MENSAJE
              </button>
            </div>
          </form>
        </div>
        <div className="p-6 md:w-1/3 bg-gray-100 flex flex-col">
          <h4 className="font-bold border-b border-black mb-4 pb-1 text-xs uppercase">Información de Contacto Directo</h4>
          <div className="space-y-4 text-[10px] font-mono">
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4" />
              <div><p className="font-bold">TELÉFONO:</p><p>+1 (555) 900-CORE</p></div>
            </div>
            <div className="flex items-start gap-2">
              <Printer className="w-4 h-4" />
              <div><p className="font-bold">FAX:</p><p>+1 (555) 900-FAX1</p></div>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4" />
              <div>
                <p className="font-bold">CORREO ELECTRÓNICO:</p>
                <a href="mailto:admin@devcore.net" className="text-blue-800 underline">admin@devcore.net</a>
              </div>
            </div>
          </div>
          <div className="mt-auto pt-8 flex justify-center">
             <div className="win95-outset bg-win-grey p-4 text-center">
                <div className="bg-black text-green-500 font-mono text-xl px-2 py-1 tracking-widest">
                  0004829
                </div>
                <p className="text-[8px] mt-1 font-serif">NÚMERO DE VISITANTE</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- UI Components --- */

function MissionCard({ title, icon, desc }: { title: string, icon: React.ReactNode, desc: string }) {
  return (
    <div className="win95-outset bg-win-grey p-0.5">
      <div className="bg-win-teal text-white px-2 py-0.5 font-bold text-[10px] flex justify-between items-center border-b border-gray-600">
        <span>{title}</span>
        <div className="flex gap-0.5">
           <div className="win95-outset w-3 h-3 bg-win-grey"></div>
           <div className="win95-outset w-3 h-3 bg-win-grey"></div>
        </div>
      </div>
      <div className="bg-white m-1 p-4 border border-gray-400 flex gap-4 items-center">
        <div className="text-win-blue">{icon}</div>
        <p className="text-xs font-serif italic">{desc}</p>
      </div>
    </div>
  );
}

function TeamMember({ name, role, img }: { name: string, role: string, img: string }) {
  return (
    <div className="win95-outset p-2 bg-win-grey flex flex-col items-center">
      <div className="bg-white border-2 border-inset p-1 mb-2">
        <img className="w-full h-auto grayscale border border-black" src={img} alt={name} />
      </div>
      <h4 className="font-bold text-win-blue text-[11px] uppercase text-center leading-tight">{name}</h4>
      <p className="text-[9px] bg-win-teal text-white px-2 mb-2 mt-1">{role}</p>
    </div>
  );
}

function ServiceCategory({ title, icon, items }: { title: string, icon: React.ReactNode, items: string[] }) {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center gap-2 mb-3 text-win-blue border-b border-gray-200 pb-1">
        {icon}
        <h3 className="font-bold font-serif">{title}</h3>
      </div>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="text-[11px] font-mono flex items-start gap-2">
            <span className="text-win-blue">■</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, desc, img }: { title: string, desc: string, img: string }) {
  return (
    <div className="win95-outset p-3 bg-win-grey flex flex-col">
      <div className="win95-inset bg-white p-0.5 mb-3 overflow-hidden">
        <img src={img} alt={title} className="w-full h-32 object-cover grayscale hover:grayscale-0 transition-grayscale" />
      </div>
      <h4 className="font-bold text-win-blue mb-1 text-sm">{title}</h4>
      <p className="text-[10px] font-mono leading-tight mb-2">{desc}</p>
      <a href="#" className="mt-auto text-[10px] text-blue-700 underline italic">Ver Archivo...</a>
    </div>
  );
}
