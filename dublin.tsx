import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Check, ChevronDown, ChevronUp, AlertCircle, ExternalLink } from 'lucide-react';

const DublinTripPlanner = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  const itinerary = [
    {
      date: "20 Dic - Sábado",
      title: "✈️ Llegada Nocturna",
      time: "20:25 - 23:30",
      location: "Dublin Airport → Clink i Lár",
      icon: "🛬",
      tasks: [
        { id: 1, text: "Aterrizaje 20:25 (Ryanair desde Birmingham)" },
        { id: 2, text: "Tomar Aircoach 700 o Dublin Express 782 en Terminal" },
        { id: 3, text: "Bajar en O'Connell Bridge/Aston Quay", mapUrl: "https://www.google.com/maps/search/?api=1&query=O'Connell+Bridge+Dublin" },
        { id: 4, text: "Check-in en Clink i Lár (O'Connell St)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Clink+i+Lár+Dublin" },
        { id: 5, text: "🍔 CENA: Supermac's (abierto hasta 2 AM) - Pide 'Curry Cheese Chips'", mapUrl: "https://www.google.com/maps/search/?api=1&query=Supermac's+O'Connell+Street+Dublin" },
        { id: 6, text: "Comprar agua en Spar 24h y descansar" }
      ],
      alert: "El Aircoach pasa cada 15 min y cuesta €8-10"
    },
    {
      date: "21 Dic - Domingo",
      title: "🚌 TOUR: Ring of Kerry",
      time: "06:00 - 22:00",
      location: "Punto de encuentro por confirmar en ticket",
      icon: "🏔️",
      tasks: [
        { id: 7, text: "05:30 - Desayuno rápido en Spar O'Connell St (24h)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Spar+O'Connell+Street+Dublin" },
        { id: 8, text: "06:30 - Salida del tour (Revisar ticket: Molly Malone o Gresham)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Molly+Malone+Statue+Dublin" },
        { id: 9, text: "En ruta: Parque Nacional Killarney + Torc Waterfall", mapUrl: "https://www.google.com/maps/search/?api=1&query=Torc+Waterfall+Killarney" },
        { id: 10, text: "Parada en Skellig Views (donde filmaron Star Wars)" },
        { id: 11, text: "Pueblos: Killarney, Kenmare" },
        { id: 12, text: "22:00 - Vuelta a Dublín (llevar snacks + batería externa)" }
      ],
      alert: "DÍA MUY LARGO - Duerme en el bus al principio. El paisaje de Kerry es espectacular"
    },
    {
      date: "22 Dic - Lunes",
      title: "🥃 Whiskey Day",
      time: "11:00 - 20:00",
      location: "Smithfield → St James's Gate → Temple Bar",
      icon: "🍺",
      tasks: [
        { id: 13, text: "11:00 - Jameson Distillery Bow St (Smithfield) - LUAS Rojo", mapUrl: "https://www.google.com/maps/search/?api=1&query=Jameson+Distillery+Bow+St" },
        { id: 14, text: "12:30 - Almuerzo en The Brazen Head (pub de 1198, el más antiguo)", mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Brazen+Head+Dublin" },
        { id: 15, text: "14:00 - GUINNESS STOREHOUSE (Entrada reservada)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Guinness+Storehouse+Dublin" },
        { id: 16, text: "Dentro: Ticket pinta gratis + Gravity Bar (vistas 360°)" },
        { id: 17, text: "17:00 - Caminar a TEMPLE BAR (20 min desde Guinness)", mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Temple+Bar+Pub+Dublin" },
        { id: 18, text: "🎵 Temple Bar: Zona de pubs con música en vivo" },
        { id: 19, text: "Cenar en The Temple Bar o The Quays (música irlandesa)" }
      ],
      alert: "Temple Bar es turístico pero icónico. Las pintas cuestan €7-8"
    },
    {
      date: "23 Dic - Martes",
      title: "📚 Cultura & Naturaleza",
      time: "10:00 - 17:00",
      location: "Trinity College → Phoenix Park",
      icon: "🦌",
      tasks: [
        { id: 20, text: "10:00 - Trinity College (entrada gratis a patios)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Trinity+College+Dublin" },
        { id: 21, text: "Opcional: Book of Kells (€16) o Chester Beatty Library (gratis)", mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Book+of+Kells+Dublin" },
        { id: 22, text: "12:30 - LUAS Rojo a Heuston Station" },
        { id: 23, text: "Alquilar bici en Phoenix Park Bikes (entrada Parkgate St)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Phoenix+Park+Bikes+Dublin" },
        { id: 24, text: "🚴 Ruta: Cruz Papal → Ver ciervos (Fallow Deer)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Papal+Cross+Phoenix+Park" },
        { id: 25, text: "Ver Áras an Uachtaráin (Casa del Presidente)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Áras+an+Uachtaráin" },
        { id: 26, text: "15:00 - Devolver bici y volver al centro" },
        { id: 27, text: "17:00 - Paseo por Grafton Street (músicos callejeros)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Grafton+Street+Dublin" }
      ],
      alert: "Phoenix Park es ENORME (1750 acres). La bici es esencial"
    },
    {
      date: "24 Dic - Miércoles",
      title: "🎄 Nochebuena - ALERTA ROJA",
      time: "10:00 - 18:00",
      location: "Moore St Market → Compras supervivencia",
      icon: "🚨",
      tasks: [
        { id: 28, text: "10:00 - Moore Street Market (historia de 1916 + fruta barata)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Moore+Street+Market+Dublin" },
        { id: 29, text: "11:00 - Ver Ha'penny Bridge y Millennium Bridge", mapUrl: "https://www.google.com/maps/search/?api=1&query=Ha'penny+Bridge+Dublin" },
        { id: 30, text: "⚠️ 12:00 - COMPRA OBLIGATORIA en Tesco/M&S (Henry St)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Tesco+Express+Henry+Street+Dublin" },
        { id: 31, text: "Comprar: Cena hoy + Desayuno/Comida/Cena para mañana" },
        { id: 32, text: "Sugerencias: Sándwiches, ensaladas, queso, vino, chocolate" },
        { id: 33, text: "Dejar comida en hostel antes de seguir" },
        { id: 34, text: "15:00 - Grafton Street (buskers navideños - Bono a veces aparece)" },
        { id: 35, text: "⏰ 17:30 - VOLVER AL HOSTEL (transporte muere a las 18:00)" },
        { id: 36, text: "18:00+ - Fiesta en cocina del hostel con otros viajeros" }
      ],
      alert: "¡CRÍTICO! Mañana TODO cierra. Compra suficiente comida o pasarás hambre"
    },
    {
      date: "25 Dic - Jueves",
      title: "🎄 Navidad Zombie",
      time: "11:00 - 16:00",
      location: "Dublin Docklands",
      icon: "🏙️",
      tasks: [
        { id: 37, text: "Desayuno tranquilo con tus compras de ayer" },
        { id: 38, text: "11:00 - Paseo por Dublín vacío (experiencia única)" },
        { id: 39, text: "Ruta: Río Liffey hacia Dublin Docklands" },
        { id: 40, text: "Ver: Samuel Beckett Bridge (forma de arpa)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Samuel+Beckett+Bridge+Dublin" },
        { id: 41, text: "Famine Memorial (esculturas conmovedoras)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Famine+Memorial+Dublin" },
        { id: 42, text: "Estudios de U2 (Windmill Lane)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Windmill+Lane+Recording+Studios+Dublin" },
        { id: 43, text: "Tarde: Relax en hostel, cocinar tu cena de Navidad" }
      ],
      alert: "TODO cerrado. Ciudad fantasma pero hermosa. Lleva música y disfruta la paz"
    },
    {
      date: "26 Dic - Viernes",
      title: "🌊 Howth Cliffs Adventure",
      time: "10:30 - 17:00",
      location: "Connolly Station → Howth",
      icon: "⛰️",
      tasks: [
        { id: 44, text: "10:30 - Caminar a Connolly Station (10 min desde hostel)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Connolly+Station+Dublin" },
        { id: 45, text: "Tomar tren DART dirección Howth (siéntate a la IZQUIERDA)" },
        { id: 46, text: "11:15 - Llegar a Howth" },
        { id: 47, text: "🥾 Cliff Path Walk - Ruta Verde (1.5-2h, IMPRESCINDIBLE)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Howth+Cliff+Path+Walk" },
        { id: 48, text: "Vistas: Bahía de Dublín, Ireland's Eye island, acantilados" },
        { id: 49, text: "14:00 - COMIDA: Fish & Chips en Beshoffs o Leo Burdock's", mapUrl: "https://www.google.com/maps/search/?api=1&query=Beshoffs+Howth" },
        { id: 50, text: "15:30 - Paseo por el puerto de Howth" },
        { id: 51, text: "16:30 - DART de vuelta a ciudad" }
      ],
      alert: "Llevar ropa impermeable. Los acantilados pueden tener viento fuerte"
    },
    {
      date: "27 Dic - Sábado",
      title: "🚌 Hop-On Hop-Off + Museos",
      time: "10:00 - 22:00",
      location: "O'Connell St → Ciudad",
      icon: "🎫",
      tasks: [
        { id: 52, text: "10:00 - Tomar bus turístico en O'Connell St (€25-30)", mapUrl: "https://www.google.com/maps/search/?api=1&query=City+Sightseeing+Dublin+O'Connell+Street" },
        { id: 53, text: "Vuelta completa para ver: Kilmainham Gaol, Catedrales" },
        { id: 54, text: "12:00 - Bajar en Kildare St" },
        { id: 55, text: "Museo Nacional de Arqueología (GRATIS - Oros celtas)", mapUrl: "https://www.google.com/maps/search/?api=1&query=National+Museum+of+Ireland+Archaeology" },
        { id: 56, text: "14:00 - Almuerzo en zona Merrion Square", mapUrl: "https://www.google.com/maps/search/?api=1&query=Merrion+Square+Dublin" },
        { id: 57, text: "OPCIONAL: Bray en tren DART (45 min) - Paseo marítimo" },
        { id: 58, text: "20:00 - CENA DESPEDIDA: The Confession Box (Marlborough St)", mapUrl: "https://www.google.com/maps/search/?api=1&query=The+Confession+Box+Dublin" },
        { id: 59, text: "Mejor Guinness de la ciudad, muy local y cerca del hostel" },
        { id: 60, text: "🧳 NOCHE: Preparar maleta, poner 5 ALARMAS para 04:00" }
      ],
      alert: "Último día completo. Revisa que no te dejes nada en el hostel"
    },
    {
      date: "28 Dic - Domingo",
      title: "✈️ Vuelo Madrugada",
      time: "04:15 - 08:15",
      location: "Clink i Lár → Birmingham",
      icon: "🛫",
      tasks: [
        { id: 61, text: "04:00 - Despertarse (múltiples alarmas)" },
        { id: 62, text: "04:15 - Check-out Clink i Lár", mapUrl: "https://www.google.com/maps/search/?api=1&query=Clink+i+Lár+Dublin" },
        { id: 63, text: "04:20 - Caminar 3 min a parada Aircoach (frente a Gresham Hotel)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Gresham+Hotel+Dublin" },
        { id: 64, text: "04:30 - Tomar Aircoach 700 (servicio 24h, cada 15 min)" },
        { id: 65, text: "05:00 - Llegada a Dublin Airport (Terminal 1)", mapUrl: "https://www.google.com/maps/search/?api=1&query=Dublin+Airport+Terminal+1" },
        { id: 66, text: "07:10 - Vuelo Ryanair FR 660 a Birmingham" },
        { id: 67, text: "08:15 - Aterrizaje en Birmingham" }
      ],
      alert: "No hay transporte público tan temprano. Aircoach es la única opción segura"
    }
  ];

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? null : index);
  };

  const toggleTask = (taskId) => {
    setCheckedItems(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="text-green-600" size={32} />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Dublín: Guía Definitiva</h1>
              <p className="text-gray-600">20-28 Diciembre 2025 • 8 días completos</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <div className="bg-green-50 p-3 rounded">
              <div className="font-semibold text-green-700">Vuelo Ida</div>
              <div className="text-gray-700">Birmingham → Dublín</div>
              <div className="text-gray-600">Sáb 20 Dic • 19:20 - 20:25</div>
            </div>
            <div className="bg-orange-50 p-3 rounded">
              <div className="font-semibold text-orange-700">Vuelo Vuelta</div>
              <div className="text-gray-700">Dublín → Birmingham</div>
              <div className="text-gray-600">Dom 28 Dic • 07:10 - 08:15</div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-gray-700">Progreso del viaje</span>
            <span className="text-sm text-gray-600">
              {Object.values(checkedItems).filter(Boolean).length} / {itinerary.flatMap(day => day.tasks).length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-orange-500 h-3 rounded-full transition-all duration-300"
              style={{ 
                width: `${(Object.values(checkedItems).filter(Boolean).length / itinerary.flatMap(day => day.tasks).length) * 100}%` 
              }}
            />
          </div>
        </div>

        {/* Daily Itinerary */}
        {itinerary.map((day, index) => (
          <div key={index} className="mb-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => toggleDay(index)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{day.icon}</div>
                  <div className="text-left">
                    <div className="font-bold text-xl text-gray-800">{day.date}</div>
                    <div className="text-lg text-gray-700">{day.title}</div>
                    <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {day.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {day.location}
                      </span>
                    </div>
                  </div>
                </div>
                {expandedDay === index ? <ChevronUp /> : <ChevronDown />}
              </button>

              {expandedDay === index && (
                <div className="p-6 pt-0 border-t">
                  {day.alert && (
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4 rounded">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
                        <p className="text-sm text-amber-800">{day.alert}</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    {day.tasks.map((task) => (
                      <label
                        key={task.id}
                        className="flex items-start gap-3 p-3 rounded hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={checkedItems[task.id] || false}
                          onChange={() => toggleTask(task.id)}
                          className="mt-1 h-5 w-5 text-green-600 rounded border-gray-300 focus:ring-green-500"
                        />
                        <span className={`flex-1 ${checkedItems[task.id] ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                          {task.text}
                        </span>
                        {task.mapUrl && (
                          <a 
                            href={task.mapUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 p-1"
                            onClick={(e) => e.stopPropagation()}
                            title="Ver en Google Maps"
                          >
                            <MapPin size={18} />
                          </a>
                        )}
                        {checkedItems[task.id] && (
                          <Check className="text-green-600 flex-shrink-0" size={20} />
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Tips */}
        <div className="bg-gradient-to-r from-green-600 to-orange-600 rounded-lg shadow-lg p-6 text-white">
          <h3 className="font-bold text-xl mb-4">💡 Tips Esenciales</h3>
          <ul className="space-y-2 text-sm">
            <li>• Leap Card: Recargable para buses/DART (ahorra dinero vs tickets sueltos)</li>
            <li>• Temple Bar es caro pero auténtico - ve al menos una noche</li>
            <li>• Guinness sabe MEJOR en Dublín (no es mito)</li>
            <li>• Howth Cliffs: Una de las mejores cosas gratis que harás</li>
            <li>• Nochebuena: Compra comida el 24 antes de las 18:00 o morirás de hambre</li>
            <li>• The Confession Box: Mejor Guinness que la Storehouse (€5 vs €7)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DublinTripPlanner;