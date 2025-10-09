const translatedMenu = {
  de: {
    uiLanguageLabel: "App Sprache",
    topicLabel: "Thema",
    yourLanguageLabel: "Deine Sprache",
    targetLanguageLabel: "Zielsprache",
    errorMessageSameLanguage: "Bitte wählen Sie zwei unterschiedliche Sprachen aus.",
    errorTitle: "Fehler",
    learningTextTitle: "Lerntext",
    vocabListTitle: "Vokabelliste",
    originalTextTitle: "Originaltext",
    translationTextTitle: "Übersetzung",
  },
  en: {
    uiLanguageLabel: "App Language",
    topicLabel: "Topic",
    yourLanguageLabel: "Your Language",
    targetLanguageLabel: "Target Language",
    errorMessageSameLanguage: "Please select two different languages.",
    errorTitle: "Error",
    learningTextTitle: "Learning Text",
    vocabListTitle: "Vocabulary List",
    originalTextTitle: "Original Text",
    translationTextTitle: "Translation",
  },
  es: {
    uiLanguageLabel: "Idioma de la aplicación",
    topicLabel: "Tema",
    yourLanguageLabel: "Tu Idioma",
    targetLanguageLabel: "Idioma Objetivo",
    errorMessageSameLanguage: "Por favor, seleccione dos idiomas diferentes.",
    errorTitle: "Error",
    learningTextTitle: "Texto de Aprendizaje",
    vocabListTitle: "Lista de Vocabulario",
    originalTextTitle: "Texto Original",
    translationTextTitle: "Traducción",
  },
  fr: {
    uiLanguageLabel: "Langue de l'application",
    topicLabel: "Sujet",
    yourLanguageLabel: "Votre langue",
    targetLanguageLabel: "Langue cible",
    errorMessageSameLanguage: "Veuillez sélectionner deux langues différentes.",
    errorTitle: "Erreur",
    learningTextTitle: "Texte d'apprentissage",
    vocabListTitle: "Liste de vocabulaire",
    originalTextTitle: "Texte original",
    translationTextTitle: "Traduction",
  },
  it: {
    uiLanguageLabel: "Lingua dell'app",
    topicLabel: "Argomento",
    yourLanguageLabel: "La tua lingua",
    targetLanguageLabel: "Lingua di destinazione",
    errorMessageSameLanguage: "Si prega di selezionare due lingue diverse.",
    errorTitle: "Errore",
    learningTextTitle: "Testo di apprendimento",
    vocabListTitle: "Lista di vocaboli",
    originalTextTitle: "Testo originale",
    translationTextTitle: "Traduzione",
  },
};

const content = {
  // --- Fly ---
  // --- Book flight ---
  book_flight: {
    base: {
      en: "Consider possible {routes}, offered {services}, the {price} you decide.<br><br>Your tickets: {no_return_ticket} for singles or {round_trip_ticket} for return journey. Specify if it's a {domestic_flight} within a country or an {international_flight} between countries.<br><br>Upon successful booking and payment, you will receive an {e_ticket}, which serves as your proof of purchase and contains all flight details.<br><br>",
    },
    vocab: {
      airline_carrier: { de: "Fluggesellschaft", en: "airline", es: "aerolínea", fr: "compagnie aérienne", it: "compagnia aerea" },
      airfare: { de: "Flugpreis", en: "airfare", es: "tarifa aérea", fr: "tarif aérien", it: "tariffa aerea" },
      one_way_ticket: { de: "Einfaches Ticket", en: "one-way ticket", es: "billete de ida", fr: "billet aller simple", it: "biglietto di sola andata" },
      round_trip_ticket: { de: "Rückflugticket", en: "round-trip ticket", es: "billete de ida y vuelta", fr: "billet aller-retour", it: "biglietto di andata e ritorno" },
      domestic_flight: { en: "domestic flight", de: "Inlandsflug", es: "vuelo nacional", fr: "vol intérieur", it: "volo nazionale" },
      international_flight: { de: "Internationaler Flug", en: "international flight", es: "vuelo internacional", fr: "vol international", it: "volo internazionale" },
      e_ticket: { de: "E-Ticket", en: "e-ticket", es: "billete electrónico", fr: "billet électronique", it: "e-ticket" },
    },
  },
  airport: {
    base: {
      en: "At the airport {terminal}, travelers proceed to the {check_in_counter_desk} to {check_in} for their flights. They present {ID_identification} and receive a {boarding_pass}.<br><br>{luggage_baggage} is either {checked_baggage} or a {carry_on_bag}. Passengers must adhere to the {baggage_allowance} to avoid {overweight_oversized} fees.<br><br>After check-in, everyone goes through {security_check_screening} to ensure no {prohibited_items} are brought on board. International travel requires passing through {passport_control} and {customs}, where passengers may need to {declare} certain goods.<br><br>",
    },
    vocab: {
      terminal: { de: "Terminal", en: "terminal", es: "terminal", fr: "terminal", it: "terminale" },
      check_in_counter_desk: { de: "Check-in-Schalter", en: "check-in counter/desk", es: "mostrador de facturación", fr: "comptoir d'enregistrement", it: "banco del check-in" },
      check_in: { de: "einchecken", en: "checking in", es: "facturar", fr: "enregistrement", it: "check-in" },
      ID_identification: { de: "Ausweis", en: "ID/identification", es: "identificación", fr: "carte d'identité/identification", it: "carta d'identità/identificazione" },
      boarding_pass: { de: "Boardingpass", en: "boarding pass", es: "tarjeta de embarque", fr: "carte d'embarquement", it: "carta d'imbarco" },
      luggage_baggage: { de: "Gepäck", en: "luggage/baggage", es: "equipaje", fr: "bagages", it: "bagaglio" },
      checked_baggage: { de: "aufgegebenes Gepäck", en: "checked baggage", es: "equipaje facturado", fr: "bagages enregistrés", it: "bagaglio registrato" },
      carry_on_bag: { de: "Handgepäck", en: "carry-on bag", es: "equipaje de mano", fr: "bagage à main", it: "bagaglio a mano" },
      baggage_allowance: { de: "Freigepäck", en: "baggage allowance", es: "franquicia de equipaje", fr: "franchise de bagages", it: "franchigia bagaglio" },
      overweight_oversized: { de: "Übergewicht/Übergröße", en: "overweight/oversized", es: "sobrecarga/sobredimensionado", fr: "surdimensionné/surpoids", it: "sovrappeso/sovradimensionato" },
      security_check_screening: { de: "Sicherheitskontrolle", en: "security check/screening", es: "control de seguridad", fr: "contrôle de sécurité", it: "controllo di sicurezza" },
      prohibited_items: { de: "verbotene Gegenstände", en: "prohibited items", es: "objetos prohibidos", fr: "objets interdits", it: "oggetti proibiti" },
      passport_control: { de: "Passkontrolle", en: "passport control", es: "control de pasaportes", fr: "contrôle des passeports", it: "controllo passaporti" },
      customs: { de: "Zoll", en: "customs", es: "aduana", fr: "douane", it: "dogana" },
      declare: { de: "anmelden", en: "declare", es: "declarar", fr: "déclarer", it: "dichiarare" },
    },
  },
  departure_boarding: {
    base: {
      en: "At the airport, check the {departures} board for your flight status. It will display your {depart_departure_time} and {gate} number.<br><br>Be aware of potential updates, such as a {gate_change}. Head to the {departure_lounge} near your assigned gate well before your {board_boarding_time}.<br><br>Listen for announcements, including the {final_call} for boarding. Flight statuses can vary: your flight might be {on_time}, {delayed}, or in unfortunate cases, {cancelled}.<br><br>",
    },
    vocab: {
      departures: { de: "Abflugtafel", en: "departures", es: "salidas", fr: "départs", it: "partenze" },
      depart_departure_time: { de: "Abflugzeit", en: "departure time", es: "hora de salida", fr: "heure de départ", it: "orario di partenza" },
      gate: { de: "Gate", en: "gate", es: "puerta", fr: "porte", it: "gate" },
      gate_change: { de: "Gate-Änderung", en: "gate change", es: "cambio de puerta", fr: "changement de porte", it: "cambio di gate" },
      departure_lounge: { de: "Abflughalle", en: "departure lounge", es: "sala de embarque", fr: "salle d'embarquement", it: "sala partenze" },
      board_boarding_time: { de: "Boarding-Zeit", en: "boarding time", es: "hora de embarque", fr: "heure d'embarquement", it: "orario di imbarco" },
      final_call: { de: "letzter Aufruf", en: "final call", es: "último aviso", fr: "dernier appel", it: "ultimo avviso" },
      on_time: { de: "pünktlich", en: "on time", es: "a tiempo", fr: "à l'heure", it: "in orario" },
      delayed: { de: "verspätet", en: "delayed", es: "retrasado", fr: "retardé", it: "in ritardo" },
      cancelled: { de: "annulliert", en: "cancelled", es: "cancelado", fr: "annulé", it: "cancellato" },
    },
  },
  on_plane: {
    base: {
      en: "Once on board, find your assigned {cabin_seat}, whether it's an {aisle_seat} or a {window_seat}. Store your belongings in the {overhead_bin_locker}.<br><br>The {cabin_crew_flight_attendant} will provide safety instructions and service throughout the flight. The pilots operate the aircraft from the {cockpit}. Remember to {fasten_your_seatbelt} when instructed, especially during {turbulence}.<br><br>If your journey involves a {connecting_flight}, you'll have a {layover_stopover} at an intermediate airport before continuing to your final destination.<br><br>",
    },
    vocab: {
      cabin_seat: { de: "Kabinenplatz", en: "cabin seat", es: "asiento de cabina", fr: "siège en cabine", it: "posto in cabina" },
      aisle_seat: { de: "Gangplatz", en: "aisle seat", es: "asiento de pasillo", fr: "siège côté couloir", it: "posto lato corridoio" },
      window_seat: { de: "Fensterplatz", en: "window seat", es: "asiento junto a la ventana", fr: "siège côté hublot", it: "posto lato finestrino" },
      overhead_bin_locker: { de: "Gepäckfach", en: "overhead bin/locker", es: "compartimento superior", fr: "compartiment supérieur", it: "vano superiore" },
      cabin_crew_flight_attendant: { de: "Kabinenpersonal/Flugbegleiter", en: "cabin crew/flight attendant", es: "tripulación de cabina/asistente de vuelo", fr: "équipage de cabine/hôtesse de l'air", it: "equipaggio di cabina/assistente di volo" },
      cockpit: { de: "Cockpit", en: "cockpit", es: "cabina de mando", fr: "cockpit", it: "cockpit" },
      fasten_your_seatbelt: { de: "Sicherheitsgurt anlegen", en: "fasten your seatbelt", es: "abrocharse el cinturón de seguridad", fr: "attachez votre ceinture de sécurité", it: "allacciare la cintura di sicurezza" },
      turbulence: { de: "Turbulenzen", en: "turbulence", es: "turbulencia", fr: "turbulence", it: "turbolenza" },
      connecting_flight: { de: "Anschlussflug", en: "connecting flight", es: "vuelo de conexión", fr: "vol de correspondance", it: "volo di collegamento" },
      layover_stopover: { de: "Zwischenstopp", en: "layover/stopover", es: "escala", fr: "escale", it: "scalo" },
    },
  },
  plane_arrival: {
    base: {
      en: "Upon reaching your destination, proceed to the {arrivals} area. The {landed_arrival_time} will be displayed on screens.<br><br>Your next stop is {baggage_claim} to retrieve your checked luggage from the {carousel_conveyor_belt}. If you have multiple bags or heavy items, a {trolley_cart} can be very helpful.<br><br>In the unfortunate event that your baggage is missing, report it immediately to the {lost_and_found} office.<br><br>",
    },
    vocab: {
      arrivals: { de: "Ankunftsbereich", en: "arrivals", es: "llegadas", fr: "arrivées", it: "arrivi" },
      landed_arrival_time: { de: "Ankunftszeit", en: "arrival time", es: "hora de llegada", fr: "heure d'arrivée", it: "orario di arrivo" },
      baggage_claim: { de: "Gepäckausgabe", en: "baggage claim", es: "recogida de equipaje", fr: "retrait des bagages", it: "ritiro bagagli" },
      carousel_conveyor_belt: { de: "Gepäckkarussell/ Förderband", en: "carousel/conveyor belt", es: "cinta transportadora", fr: "tapis roulant", it: "nastro trasportatore" },
      trolley_cart: { de: "Gepäckwagen", en: "trolley/cart", es: "carrito", fr: "chariot", it: "carrello" },
      lost_and_found: { de: "Fundbüro", en: "lost and found", es: "objetos perdidos", fr: "objets trouvés", it: "oggetti smarriti" },
    },
  },
  bus_locations: {
    base: {
      en: "When traveling by bus, locate the nearest {bus_stop} or a {bus_shelter}. For longer journeys, head to a {bus_station_bus_terminal}. Check the {timetable_schedule} for your desired {route_number} and {destination}. You might take a {local_bus}, an {express_bus}, a {shuttle_bus}, or for longer distances, a {coach_intercity_bus}.",
    },
    vocab: {
      bus_stop: { de: "Bushaltestelle", en: "bus stop", es: "parada de autobús", fr: "arrêt de bus", it: "fermata dell'autobus" },
      bus_shelter: { de: "Buswartehalle", en: "bus shelter", es: "refugio de autobús", fr: "abri de bus", it: "pensilina dell'autobus" },
      bus_station_bus_terminal: { de: "Busbahnhof", en: "bus station", es: "estación de autobuses", fr: "gare routière", it: "stazione degli autobus" },
      timetable_schedule: { de: "Fahrplan", en: "timetable", es: "horario", fr: "horaire", it: "orario" },
      route_number: { de: "Liniennummer", en: "route number", es: "número de ruta", fr: "numéro de ligne", it: "numero di percorso" },
      destination: { de: "Ziel", en: "destination", es: "destino", fr: "destination", it: "destinazione" },
      local_bus: { de: "Stadtbus", en: "local bus", es: "autobús local", fr: "bus local", it: "autobus locale" },
      express_bus: { de: "Expressbus", en: "express bus", es: "autobús expreso", fr: "bus express", it: "autobus espresso" },
      shuttle_bus: { de: "Shuttlebus", en: "shuttle bus", es: "autobús lanzadera", fr: "navette", it: "navetta" },
      coach_intercity_bus: { de: "Reisebus", en: "coach", es: "autocar", fr: "autocar", it: "pullman" },
    },
  },
  bus_tickets_fares: {
    base: {
      en: "To ride the bus, you'll need to pay the {fare} for a {ticket}. You can buy a {single_one_way} or a {return_round_trip} ticket. For frequent travel, a {day_pass_travel_card} is economical. Pay at the {fare_box} or {ticket_machine}. Remember to {validate} your ticket. Many buses accept {contactless} payment or {exact_change}.",
    },
    vocab: {
      fare: { de: "Fahrpreis", en: "fare", es: "tarifa", fr: "tarif", it: "tariffa" },
      ticket: { de: "Fahrschein", en: "ticket", es: "billete", fr: "billet", it: "biglietto" },
      single_one_way: { de: "Einzelfahrt", en: "one-way", es: "sencillo", fr: "aller simple", it: "solo andata" },
      return_round_trip: { de: "Rückfahrt", en: "round-trip", es: "ida y vuelta", fr: "aller-retour", it: "andata e ritorno" },
      day_pass_travel_card: { de: "Tageskarte", en: "day pass", es: "pase diario", fr: "pass journalier", it: "pass giornaliero" },
      fare_box: { de: "Fahrpreisbox", en: "fare box", es: "caja de tarifas", fr: "boîte tarifaire", it: "cassa tariffe" },
      ticket_machine: { de: "Fahrkartenautomat", en: "ticket machine", es: "máquina de billetes", fr: "distributeur de billets", it: "distributore di biglietti" },
      validate: { de: "entwerten", en: "validate", es: "validar", fr: "valider", it: "convalidare" },
      contactless: { de: "kontaktlos", en: "contactless", es: "sin contacto", fr: "sans contact", it: "contactless" },
      exact_change: { de: "passendes Kleingeld", en: "exact change", es: "cambio exacto", fr: "monnaie exacte", it: "spiccioli esatti" },
    },
  },
};

const topicNames = {
  travel_by_plane: {
    en: "Travel by Plane", de: "Reisen mit dem Flugzeug", es: "Viajar en avión", fr: "Voyager en avion", it: "Viaggiare in aereo",
    subcategory: {
      book_flight: { en: "Book Flight", de: "Flug buchen", es: "Reservar vuelo", fr: "Réserver vol", it: "Prenotare volo" },
      airport: { en: "At the Airport", de: "Am Flughafen", es: "En el aeropuerto", fr: "À l'aéroport", it: "All'aeroporto" },
      departure_boarding: { en: "Departure & Boarding", de: "Abflug & Boarding", es: "Salida y embarque", fr: "Départ et embarquement", it: "Partenza e imbarco" },
      on_plane: { en: "On the Plane", de: "Im Flugzeug", es: "En el avión", fr: "Dans l'avion", it: "Sull'aereo" },
      plane_arrival: { en: "Plane Arrival", de: "Ankunft des Flugzeugs", es: "Llegada del avión", fr: "Arrivée de l'avion", it: "Arrivo dell'aereo" },
    },
  },
  travel_by_bus: {
    en: "Travel by Bus", de: "Reisen mit dem Bus", es: "Viajar en autobús", fr: "Voyager en bus", it: "Viaggiare in autobus",
    subcategory: {
      bus_locations: { en: "Bus Locations", de: "Busstandorte", es: "Ubicaciones de autobuses", fr: "Emplacements des bus", it: "Posizioni degli autobus" },
      bus_tickets_fares: { en: "Bus Tickets & Fares", de: "Bustickets & Fahrpreise", es: "Boletos y tarifas de autobús", fr: "Billets et tarifs de bus", it: "Biglietti e tariffe dell'autobus" },
    },
  },
};

const languageNames = {
  de: { de: "Deutsch", en: "Englisch", es: "Spanisch", fr: "Französisch", it: "Italienisch" },
  en: { de: "German", en: "English", es: "Spanish", fr: "French", it: "Italian" },
  es: { de: "Alemán", en: "Inglés", es: "Español", fr: "Francés", it: "Italiano" },
  fr: { de: "Allemand", en: "Anglais", es: "Espagnol", fr: "Français", it: "Italien" },
  it: { de: "Tedesco", en: "Inglese", es: "Spagnolo", fr: "Francese", it: "Italiano" },
};