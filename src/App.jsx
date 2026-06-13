import { useState } from "react";

const TRIP_DATA = {
  "id": "france-2026",
  "name": "France",
  "subtitle": "Paris • Bordeaux",
  "dates": "Jun 30 – Jul 8, 2026",
  "emoji": "🗼",
  "color": "#1B2A4A",
  "accent": "#B8860B",
  "mood": [
    "terraces at dusk",
    "river reflections",
    "perfume and gardens",
    "drifting without rushing"
  ],
  "flights": {
    "inbound": "UA54 — EWR departs Jun 29 21:35 → CDG arrives Jun 30 10:55 — Abhijeet 9A, Anjali 10A",
    "outbound": "UA56 — CDG departs Jul 8 09:45 → EWR arrives Jul 8 11:55 — Abhijeet 9A, Anjali 10A"
  },
  "hotels": [
    {
      "name": "Paris Marriott Champs-Elysees",
      "address": "70 Avenue des Champs-Elysees, 75008 Paris",
      "phone": "+33 1 53 93 55 00",
      "checkin": "Jun 30",
      "checkout": "Jul 5",
      "nights": 5,
      "ref": null
    },
    {
      "name": "InterContinental Bordeaux Le Grand Hotel",
      "address": "2-5 Place de la Comedie, 33000 Bordeaux",
      "phone": "+33 5 57 30 44 44",
      "checkin": "Jul 5",
      "checkout": "Jul 7",
      "nights": 2,
      "ref": "34984579397"
    },
    {
      "name": "Soho House Paris",
      "address": "21 Rue Jean Goujon, 75008 Paris",
      "phone": null,
      "checkin": "Jul 7",
      "checkout": "Jul 8",
      "nights": 1,
      "ref": "34759SG135930"
    }
  ],
  "days": [
    {
      "id": "d1",
      "date": "Tue 30 Jun",
      "label": "DAY 1",
      "title": "Arrive Paris",
      "summary": "Land at CDG mid-morning, settle into the Marriott, take the Champs-Élysées at your own pace. Dinner downstairs — no effort, no taxi.",
      "items": [
        {
          "time": "10:55",
          "emoji": "✈️",
          "title": "Arrive CDG — UA54",
          "address": "CDG Terminal 2E → Paris Marriott, 70 Ave des Champs-Elysees",
          "notes": "Land 10:55am. Allow 60 mins immigration + bags. Taxi 45-60 mins to hotel. Arrive ~1pm. Seats 9A (Abhijeet) + 10A (Anjali).",
          "status": "confirmed",
          "category": "transport",
          "transit": "🚕 45-60 min taxi"
        },
        {
          "time": "~15:00",
          "emoji": "🛋️",
          "title": "Rest and decompress",
          "address": "Paris Marriott Champs-Elysees",
          "notes": "First afternoon only. Jet lag is real. Take the Champs-Elysees slowly.",
          "status": null,
          "category": "hotel",
          "transit": "🏨 at hotel"
        },
        {
          "time": "19:00",
          "emoji": "🍽️",
          "title": "Dinner — Cira",
          "address": "Paris Marriott Champs-Elysees (restaurant on site)",
          "notes": "Confirmed for 2. In-hotel restaurant. Light and easy on Day 1. Ref #PARDT-5GWU7LXAC8D6.",
          "status": "confirmed",
          "category": "dining",
          "transit": "🏨 downstairs",
          "ref": "PARDT-5GWU7LXAC8D6"
        }
      ]
    },
    {
      "id": "d2",
      "date": "Wed 1 Jul",
      "label": "DAY 2",
      "title": "Gauri + Guerlain + Pharmacy + Sainte-Chapelle + Seine Cruise",
      "summary": "A day built around beauty and light. Scent consultation on the Île Saint-Louis, Guerlain on the Champs-Élysées, pharmacy next door, Gothic stained glass at Sainte-Chapelle, and a champagne cruise on the Seine as Paris turns gold.",
      "items": [
        {
          "time": "11:30",
          "emoji": "🌸",
          "title": "Gauri Rao-Lefebvre — Scent Consultation",
          "address": "21 Rue le Regrattier, 75004 (Ile Saint-Louis)",
          "notes": "Free 40-min session. Explore her scent palette. Peer-level conversation with a serious perfumer.",
          "status": "confirmed",
          "category": "culture",
          "transit": "🚕 20 min taxi from hotel",
          "phone": "+33 7 65 51 93 23"
        },
        {
          "time": "~13:00",
          "emoji": "🚶",
          "title": "Ile Saint-Louis wander",
          "address": "Ile Saint-Louis, 75004",
          "notes": "Walk the island after the session. Small galleries, quiet bridges, the Seine below.",
          "status": null,
          "category": "culture",
          "transit": "🚶 on the island"
        },
        {
          "time": "~13:30",
          "emoji": "☕",
          "title": "Lunch — Cafe de Flore",
          "address": "172 Blvd Saint-Germain, 75006",
          "notes": "St Germain Spritz. Salade nicoise or omelette. Order Pouilly-Fumé by the glass.",
          "status": "walkin",
          "category": "dining",
          "transit": "🚕 10 min taxi"
        },
        {
          "time": "~14:30",
          "emoji": "🌹",
          "title": "Guerlain Flagship",
          "address": "68 Ave des Champs-Elysees, 75008 — 2 min walk from hotel",
          "notes": "Personalised consultation, bottle engraving, Paris-exclusive fragrances. VAT refund form. Allow 1 hr.",
          "status": "walkin",
          "category": "shopping",
          "transit": "🚕 20 min taxi",
          "phone": "+33 1 45 62 52 57"
        },
        {
          "time": "~15:30",
          "emoji": "💊",
          "title": "Pharmacie des Champs-Élysées",
          "address": "84 Ave des Champs-Elysees, 75008 — steps from Guerlain",
          "notes": "French pharmacies are extraordinary. Pick up: Avène / La Roche-Posay / Bioderma skincare at pharmacy prices, Drill throat lozenges, Oscillococcinum, Arnica gel for tired muscles. VAT refund on purchases over EUR 100.",
          "status": "walkin",
          "category": "shopping",
          "transit": "🚶 2 min walk from Guerlain"
        },
        {
          "time": "~16:00",
          "emoji": "🌿",
          "title": "Palais Royal Gardens",
          "address": "Place du Palais-Royal, 75001",
          "notes": "Colonnaded arcades, elegant garden. Architectural, restrained, sophisticated. Sit, have coffee, observe.",
          "status": null,
          "category": "culture",
          "transit": "🚕 15 min taxi"
        },
        {
          "time": "17:30",
          "emoji": "🕍",
          "title": "Sainte-Chapelle",
          "address": "8 Blvd du Palais, 75001 (Ile de la Cite)",
          "notes": "Tickets N° 759304453225098 + 759304453225189. Direct access — no queue. Arrive by 17:20. Allow 10-15 mins security screening. 15 metres of Gothic stained glass in every colour.",
          "status": "confirmed",
          "category": "culture",
          "transit": "🚕 10 min taxi",
          "tickets": [
            "759304453225098",
            "759304453225189"
          ]
        },
        {
          "time": "19:00",
          "emoji": "🛥️",
          "title": "Seine Champagne Cruise — Vedettes du Pont Neuf",
          "address": "Square du Vert Galant, 75001 (tip of Ile de la Cite)",
          "notes": "Dossier N° 1727506. 2 adults. Champagne + wine or beer included. Arrive by 19:00 — 15 mins before departure. Present ticket to the sailor. ~1 hr cruise.",
          "status": "confirmed",
          "category": "culture",
          "transit": "🚶 10 min walk from Sainte-Chapelle",
          "phone": "+33 1 46 33 98 38",
          "ref": "1727506"
        },
        {
          "time": "20:30",
          "emoji": "🍜",
          "title": "Dinner — Moom Mam Bistronomie Thaï",
          "address": "19 Rue de Mogador, 75009 Paris",
          "notes": "Confirmed for 2 at 7:30pm. Thai bistronomie — creative, refined, beautiful.",
          "status": "confirmed",
          "category": "dining",
          "transit": "🚕 15 min taxi",
          "phone": "+33 1 53 33 85 873"
        },
        {
          "time": "~22:00",
          "emoji": "🥃",
          "title": "Bar Hemingway — Ritz Paris (optional)",
          "address": "15 Place Vendome, 75001 Paris",
          "notes": "One perfect drink. Deep chairs, soft conversation, old Paris amber. Walk in — no reservation. Smart dress.",
          "status": "optional",
          "category": "dining",
          "transit": "🚕 10 min taxi"
        }
      ]
    },
    {
      "id": "d3",
      "date": "Thu 2 Jul",
      "label": "DAY 3",
      "title": "Giverny Full Day",
      "summary": "An early train out of Saint-Lazare, then two hours inside Monet's actual world — the flower garden, the Japanese bridge, the water lily pond. Back to Paris for a celebratory dinner at Hestia on the Left Bank.",
      "items": [
        {
          "time": "08:14",
          "emoji": "🚆",
          "title": "Train to Vernon — Paris Saint-Lazare → Vernon-Giverny",
          "address": "Paris Saint-Lazare → Vernon-Giverny (arrive 09:00)",
          "notes": "Train TER 13113. Anjali Ref 9X9QDI | Abhijeet Ref QXR9UT. Taxi from Vernon to Giverny ~15 mins. Arrive Giverny by 09:30.",
          "status": "confirmed",
          "category": "transport",
          "transit": "🚆 46 min + 🚕 15 min",
          "tickets": {
            "anjali": "9X9QDI",
            "abhijeet": "QXR9UT"
          }
        },
        {
          "time": "10:30",
          "emoji": "🌸",
          "title": "Fondation Claude Monet — Giverny",
          "address": "Sente Leroy, door n°1 bis, 27620 Giverny",
          "notes": "2 adult e-tickets. Entry within 30 minutes of reserved time. Non-refundable. Monet's home, flower garden, Japanese bridge, water lily pond. Pause frequently. Do not rush. Allow 2 hours minimum.",
          "status": "confirmed",
          "category": "culture",
          "transit": "🚶 at Giverny",
          "tickets": [
            "9990015102518",
            "9990015102589"
          ]
        },
        {
          "time": "~12:00",
          "emoji": "🥗",
          "title": "Lunch — Normandy countryside",
          "address": "Near Fondation Monet, Giverny",
          "notes": "The countryside surrounding Giverny quickly becomes quiet and deeply beautiful. Normandy butter and cheese, fish or chicken, cider if desired.",
          "status": null,
          "category": "dining",
          "transit": "🚶 nearby"
        },
        {
          "time": "~14:00",
          "emoji": "🚶",
          "title": "Slow afternoon wander",
          "address": "Giverny village and surrounds",
          "notes": "Small gallery. Village shop. No agenda. July light here is extraordinary.",
          "status": null,
          "category": "culture",
          "transit": "🚶 in Giverny"
        },
        {
          "time": "15:57",
          "emoji": "🚆",
          "title": "Return train — Vernon-Giverny → Paris Saint-Lazare",
          "address": "Vernon-Giverny → Paris Saint-Lazare (arrive 16:48)",
          "notes": "Train TER 13142. Anjali Ref CZ2JZ3 | Abhijeet Ref CM13WY. Allow 20 mins taxi from Giverny to Vernon station before departure.",
          "status": "confirmed",
          "category": "transport",
          "transit": "🚆 51 min",
          "tickets": {
            "anjali": "CZ2JZ3",
            "abhijeet": "CM13WY"
          }
        },
        {
          "time": "~17:30",
          "emoji": "🥂",
          "title": "Terrace wine — back in Paris",
          "address": "Saint-Germain or Champs-Elysees",
          "notes": "You have just spent a day inside Monet's vision of the world. Sit outside. Let it settle.",
          "status": null,
          "category": "culture",
          "transit": "🚕 to hotel area"
        },
        {
          "time": "19:30",
          "emoji": "🎂",
          "title": "Dinner — Hestia",
          "address": "8 Rue de la Huchette, 75005 Paris",
          "notes": "Confirmed for 2 at 7:30pm. Birthday celebrations — Abhijeet's birthday! Beautiful setting on the Ile de la Cite.",
          "status": "confirmed",
          "category": "dining",
          "transit": "🚕 15 min taxi"
        }
      ]
    },
    {
      "id": "d4",
      "date": "Fri 3 Jul",
      "label": "DAY 4",
      "title": "Orangerie + La Grande Epicerie + Marais + Buly — Abhijeet's Birthday 🎂",
      "summary": "Monet's Water Lilies wrap around you at the Orangerie — after Giverny, you'll feel them differently. Then the finest food hall in Paris, followed by a golden-light afternoon in the Marais.",
      "items": [
        {
          "time": "10:00",
          "emoji": "🎨",
          "title": "Musée de l'Orangerie — Monet Water Lilies",
          "address": "Jardin des Tuileries, Place de la Concorde (Seine side), 75001",
          "notes": "Tickets N° 73301702959464 + 73306432632744. Entry within 30 minutes of reserved time. Non-exchangeable, non-refundable. Giverny yesterday, Orangerie today — you will feel this completely differently.",
          "status": "confirmed",
          "category": "culture",
          "transit": "🚕 15 min taxi",
          "tickets": [
            "73301702959464",
            "73306432632744"
          ]
        },
        {
          "time": "~12:00",
          "emoji": "🛍️",
          "title": "La Grande Epicerie de Paris",
          "address": "38 Rue de Sevres, 75007",
          "notes": "Finest food hall in Paris. Lavender syrup, summer preserves, artisan chocolate. Allow 45 mins. VAT refund over EUR 100.",
          "status": "walkin",
          "category": "shopping",
          "transit": "🚕 10 min taxi"
        },
        {
          "time": "~13:30",
          "emoji": "🥗",
          "title": "Lunch — Saint-Germain",
          "address": "Saint-Germain, 75006",
          "notes": "Protein-anchored. Order Pouilly-Fumé by the glass.",
          "status": null,
          "category": "dining",
          "transit": "🚶 5 min walk"
        },
        {
          "time": "~15:30",
          "emoji": "🚶",
          "title": "Marais wander",
          "address": "Le Marais, 75003-75004",
          "notes": "Place des Vosges arcades. Galleries. Hidden courtyards. Golden afternoon light.",
          "status": null,
          "category": "culture",
          "transit": "🚶 15 min walk"
        },
        {
          "time": "~16:30",
          "emoji": "🌸",
          "title": "Officine Universelle Buly (optional)",
          "address": "45 Rue de Bretagne, 75003 (Marais)",
          "notes": "Old-world French beauty culture. Extraordinary packaging. Feels like a discovery rather than a shop. 20-30 mins.",
          "status": "optional",
          "category": "shopping",
          "transit": "🚶 in Marais"
        },
        {
          "time": "19:30",
          "emoji": "🍽️",
          "title": "Birthday Dinner — Miss Kô",
          "address": "49-51 Av. George V, 75008 Paris",
          "notes": "Table for 2. Confirmation #10500. Abhijeet's birthday dinner.",
          "status": "confirmed",
          "category": "dining",
          "transit": "🚕 15 min taxi",
          "ref": "10500",
          "phone": "01 53 67 84 60"
        }
      ]
    },
    {
      "id": "d5",
      "date": "Sat 4 Jul",
      "label": "DAY 5",
      "title": "Secret Food Tours Montmartre + Sacred Drift",
      "summary": "A food tour through Montmartre's cobblestones and bakeries — 3.5 hours of chocolate, macarons, cheese, charcuterie, wine. The afternoon is deliberately empty. France rewards permeability.",
      "items": [
        {
          "time": "11:15",
          "emoji": "🥐",
          "title": "Secret Food Tours — Montmartre",
          "address": "Abbesses Metro Station, line 12 — orange umbrella (Saturday meeting point)",
          "notes": "Booking BK-150EV. Tickets TK-9HW3 + TK-9HW4. Arrive 11:15 — tour departs promptly at 11:30, waits max 5 mins. ~3.5 hrs. Flat shoes — cobblestones. Hat and sunscreen — July heat. Email dietary restrictions to contact@secrettours.com with ref BK-150EV. Tip for guide not included — bring cash.",
          "status": "confirmed",
          "category": "culture",
          "transit": "🚕 25 min taxi from hotel",
          "ref": "BK-150EV",
          "tickets": [
            "TK-9HW3",
            "TK-9HW4"
          ],
          "phone": "+1-332-230-4892"
        },
        {
          "time": "~15:00",
          "emoji": "🧀",
          "title": "Afternoon snack after tour",
          "address": "Any cafe after the tour ends",
          "notes": "Aged cheese + walnuts or smoked salmon + avocado. Even after a food tour.",
          "status": null,
          "category": "dining",
          "transit": "🚕 back toward hotel"
        },
        {
          "time": "~16:00",
          "emoji": "✦",
          "title": "SACRED UNSTRUCTURED TIME",
          "address": "Wherever Paris takes you",
          "notes": "This window is intentionally empty. Do not fill it. Your favourite cafe, an accidental gallery, a hidden perfumery, a street you remember forever. France rewards permeability.",
          "status": null,
          "category": "culture",
          "transit": "🚶 anywhere"
        },
        {
          "time": "19:30",
          "emoji": "🍽️",
          "title": "Dinner — Jenny",
          "address": "Paris Marriott Champs-Elysees (restaurant on site)",
          "notes": "Confirmed for 2 at 7:30pm. Bar — Dinner. Ref #PARDT-5GWZRR3ENRCE. In-hotel — no taxi needed.",
          "status": "confirmed",
          "category": "dining",
          "transit": "🏨 downstairs",
          "ref": "PARDT-5GWZRR3ENRCE"
        }
      ]
    },
    {
      "id": "d6",
      "date": "Sun 5 Jul",
      "label": "DAY 6",
      "title": "Last Paris Morning + TGV to Bordeaux",
      "summary": "A gentle last Paris morning — VAT paperwork, last chocolates three minutes from the hotel. The TGV south in the afternoon, first class, arriving Bordeaux at 17:42. Rooftop aperitif as the limestone city turns gold.",
      "items": [
        {
          "time": "~11:00",
          "emoji": "🛍️",
          "title": "Last Paris errands",
          "address": "8th arrondissement",
          "notes": "Guerlain VAT refund paperwork. Last chocolates from La Maison du Chocolat (52 Ave des Champs-Elysees — 3 min walk from hotel).",
          "status": null,
          "category": "shopping",
          "transit": "🚶 nearby"
        },
        {
          "time": "~12:00",
          "emoji": "🥗",
          "title": "Light lunch near Montparnasse",
          "address": "Saint-Germain or Montparnasse area",
          "notes": "Light — you'll eat well in Bordeaux tonight.",
          "status": null,
          "category": "dining",
          "transit": "🚕 toward Montparnasse"
        },
        {
          "time": "14:10",
          "emoji": "🚆",
          "title": "TGV Paris → Bordeaux — TGV INOUI 8485",
          "address": "Gare Montparnasse → Gare Saint-Jean, Bordeaux (arrive 17:42)",
          "notes": "Booking XT4QC8. 1st Class. Coach 2 — Anjali Seat 208 (E-ticket 489703191), Abhijeet Seat 207 (E-ticket 358908461). Allow 30 mins travel to station + 30 mins before departure. Depart hotel by 13:00.",
          "status": "confirmed",
          "category": "transport",
          "transit": "🚕 15 min taxi to Montparnasse",
          "ref": "XT4QC8"
        },
        {
          "time": "~17:42",
          "emoji": "🏨",
          "title": "Arrive Bordeaux — check in",
          "address": "InterContinental Bordeaux Le Grand Hotel, 2-5 Place de la Comedie, 33000",
          "notes": "Booking Ref #34984579397. Prepaid and fully guaranteed. 2 nights. Ask about rooftop terrace access at check-in.",
          "status": "confirmed",
          "category": "hotel",
          "transit": "🚕 10 min taxi from Gare Saint-Jean",
          "phone": "+33 5 57 30 44 44"
        },
        {
          "time": "~19:00",
          "emoji": "🌆",
          "title": "Rooftop aperitif",
          "address": "InterContinental Bordeaux rooftop terrace",
          "notes": "Limestone city spread below, golden dusk light. Order Crémant de Bordeaux. Ask concierge to arrange rooftop access.",
          "status": null,
          "category": "culture",
          "transit": "🏨 in hotel"
        },
        {
          "time": "~20:30",
          "emoji": "🍷",
          "title": "First dinner in Bordeaux",
          "address": "Saint-Pierre district, Bordeaux",
          "notes": "Ask IC Bordeaux concierge for current favourite wine bar. Order Entre-Deux-Mers white and a village Pomerol.",
          "status": null,
          "category": "dining",
          "transit": "🚶 walkable from hotel"
        }
      ]
    },
    {
      "id": "d8",
      "date": "Mon 6 Jul",
      "label": "DAY 7",
      "title": "Château Pape Clément + Brasserie Le Bordeaux",
      "summary": "A free morning at Bordeaux's pace — oysters at the covered market, the Miroir d'Eau. Then Château Pape Clément in the afternoon: one of France's oldest estates, founded 1299. Two-Michelin-star dinner at the hotel.",
      "items": [
        {
          "time": "~11:00",
          "emoji": "🚶",
          "title": "Free morning — Bordeaux at your pace",
          "address": "Bordeaux old town",
          "notes": "Marché des Capucins for oysters and cheese. Golden Triangle wander. Miroir d'Eau at Place de la Bourse. No agenda.",
          "status": null,
          "category": "culture",
          "transit": "🚶 from hotel"
        },
        {
          "time": "~12:30",
          "emoji": "🦪",
          "title": "Lunch — Marché des Capucins",
          "address": "Marché des Capucins, Bordeaux",
          "notes": "Bordeaux's main covered market. Arcachon oysters at the counter, local cheese, charcuterie. Very local, very good.",
          "status": null,
          "category": "dining",
          "transit": "🚕 10 min taxi"
        },
        {
          "time": "14:00",
          "emoji": "🍷",
          "title": "Château Pape Clément — Domain Visit & Wine Tasting",
          "address": "216 Ave du Dr Nancel-Penard, 33600 Pessac",
          "notes": "Booking 352767593. In English. 1.5 hrs. Tour: vineyards, the chai (vaulted barrel room — cool, cathedral-like), winemaking. Tasting of 3 wines including Blanc de Pape Clément (perfumed, almost never exported) and the red Grand Cru. Pronounced: Pahp Klay-MOHN. Most of the tour is indoors — cool despite July heat.",
          "status": "confirmed",
          "category": "culture",
          "transit": "🚕 20 min taxi",
          "ref": "352767593"
        },
        {
          "time": "~16:00",
          "emoji": "🌆",
          "title": "Golden Triangle wander + aperitif",
          "address": "Triangle d'Or — Cours de l'Intendance, Bordeaux",
          "notes": "18th century UNESCO limestone glowing in the afternoon light. Order Crémant de Bordeaux at a terrace. Let the city be beautiful at you.",
          "status": null,
          "category": "culture",
          "transit": "🚕 20 min back"
        },
        {
          "time": "19:00",
          "emoji": "🍽️",
          "title": "Dinner — Brasserie Le Bordeaux",
          "address": "InterContinental Bordeaux Le Grand Hotel, 2-5 Place de la Comedie",
          "notes": "Confirmed for 2 at 7pm. Hotel guest. Classic Bordeaux brasserie cuisine. Walk downstairs — no taxi needed.",
          "status": "confirmed",
          "category": "dining",
          "transit": "🏨 downstairs"
        }
      ]
    },
    {
      "id": "d9",
      "date": "Tue 7 Jul",
      "label": "DAY 8",
      "title": "TGV to Paris + Soho House + Saint-Germain",
      "summary": "A free Bordeaux morning — oysters, the Miroir d'Eau, limestone streets. TGV back to Paris at 14:46, arriving Montparnasse 17:16. Check into Soho House, then an evening in Saint-Germain: La Grande Épicerie for last provisions, a terrace glass, dinner in the 6th.",
      "items": [
        {
          "time": "~09:00",
          "emoji": "✦",
          "title": "Free morning — follow your instinct",
          "address": "Bordeaux",
          "notes": "No franticness required. Marché des Capucins for oysters, Crémant de Bordeaux at a café, a slow walk along the Garonne. Or Abhijeet can investigate Smith Haut Lafitte. Either way — no rushing.",
          "status": null,
          "category": "culture",
          "transit": "🚶 anywhere"
        },
        {
          "time": "~12:00",
          "emoji": "🥘",
          "title": "Last Bordeaux lunch",
          "address": "Bordeaux centre",
          "notes": "Light. TGV at 14:46 — be at station by 14:15.",
          "status": null,
          "category": "dining",
          "transit": "🚶 centre"
        },
        {
          "time": "14:46",
          "emoji": "🚆",
          "title": "TGV Bordeaux → Paris — TGV INOUI 12260",
          "address": "Gare Saint-Jean → Gare Montparnasse (arrive 17:16)",
          "notes": "Booking XT4QC8. 1st Class. Coach 2 Lower deck — Anjali Seat 225 (E-ticket 223116724), Abhijeet Seat 226 (E-ticket 157232551). Be at station by 14:15.",
          "status": "confirmed",
          "category": "transport",
          "transit": "🚆 2h 30m",
          "ref": "XT4QC8"
        },
        {
          "time": "~19:00",
          "emoji": "🏨",
          "title": "Check in — Soho House Paris",
          "address": "21 Rue Jean Goujon, 75008 Paris",
          "notes": "Reservation N° 34759SG135930. Room type: Big. Check-in after 15:00. Check-out before 12:00. EUR 720. Final Paris night.",
          "status": "confirmed",
          "category": "hotel",
          "transit": "🚕 15 min taxi from Montparnasse",
          "ref": "34759SG135930"
        },
        {
          "time": "~19:30",
          "emoji": "🛍️",
          "title": "La Grande Épicerie de Paris",
          "address": "38 Rue de Sèvres, 75007 Paris",
          "notes": "Last provisions run. Lavender syrup, summer preserves, artisan chocolate, anything you didn't get the first time. Allow 45 mins. VAT refund over EUR 100.",
          "status": "walkin",
          "transit": "🚕 15 min taxi from Soho House"
        },
        {
          "time": "~20:30",
          "emoji": "🚶",
          "title": "Saint-Germain evening wander",
          "address": "Boulevard Saint-Germain, 75006",
          "notes": "Last Paris evening. Walk the boulevard, find a terrace, order a final glass of something white and Burgundian.",
          "transit": "🚶 from Épicerie"
        },
        {
          "time": "~21:30",
          "emoji": "🍽️",
          "title": "Dinner — Soho House Paris",
          "address": "21 Rue Jean Goujon, 75008 Paris",
          "notes": "Back at the house for a last dinner. Classic French menu — Entrecôte, Côte de Boeuf to share, South West French cooking by chef William Pradeleix. Kitchen open late. No taxi, no reservation needed.",
          "status": "walkin",
          "transit": "🏨 at hotel"
        }
      ]
    },
    {
      "id": "d10",
      "date": "Wed 8 Jul",
      "label": "DAY 9",
      "title": "Fly Home",
      "summary": "Early taxi to CDG. UA56 departs 09:45, home by noon Newark time.",
      "items": [
        {
          "time": "06:30",
          "emoji": "🚕",
          "title": "Taxi to CDG Terminal 2",
          "address": "CDG Terminal 2E — 45-60 min from Soho House Paris",
          "notes": "UA56 departs 09:45am. Must be at CDG by 07:30am. Book taxi the night before — non-negotiable.",
          "status": null,
          "category": "transport",
          "transit": "🚕 45-60 min to CDG"
        },
        {
          "time": "09:45",
          "emoji": "✈️",
          "title": "Depart Paris — UA56 to EWR",
          "address": "CDG Terminal 2E",
          "notes": "8h 10m flight. Arrives Newark 11:55am. Seats 9A (Abhijeet) + 10A (Anjali).",
          "status": "confirmed",
          "category": "transport",
          "transit": "✈️ 8h 10m to Newark"
        }
      ]
    }
  ],
  "contacts": [
    {
      "name": "Paris Marriott Champs-Elysees",
      "address": "70 Ave des Champs-Elysees, 75008 Paris",
      "phone": "+33 1 53 93 55 00",
      "category": "hotel",
      "note": "5 nights Jun 30–Jul 5"
    },
    {
      "name": "Cira Restaurant — Paris Marriott",
      "address": "70 Ave des Champs-Elysees, 75008 (in hotel)",
      "phone": null,
      "category": "dining",
      "note": "Ref PARDT-5GWU7LXAC8D6 — Jun 30 19:00"
    },
    {
      "name": "Jenny Restaurant — Paris Marriott",
      "address": "70 Ave des Champs-Elysees, 75008 (in hotel)",
      "phone": null,
      "category": "dining",
      "note": "Ref PARDT-5GWZRR3ENRCE — Jul 4 19:30"
    },
    {
      "name": "Gauri Rao — Seeds of Scent",
      "address": "21 Rue le Regrattier, 75004 (Ile Saint-Louis)",
      "phone": "+33 7 65 51 93 23",
      "category": "culture",
      "note": "Jul 1 at 11:30am — confirmed"
    },
    {
      "name": "Guerlain Paris",
      "address": "68 Ave des Champs-Elysees, 75008",
      "phone": "+33 1 45 62 52 57",
      "category": "shopping",
      "note": "Mon-Sat 11am-8pm / Sun 11am-7pm"
    },
    {
      "name": "Pharmacie des Champs-Elysees",
      "address": "84 Ave des Champs-Elysees, 75008",
      "phone": null,
      "category": "shopping",
      "note": "Steps from Guerlain — Day 2 stop"
    },
    {
      "name": "Sainte-Chapelle",
      "address": "8 Blvd du Palais, 75001",
      "phone": null,
      "category": "culture",
      "note": "Jul 1 at 17:30 — tickets 759304453225098 + 759304453225189"
    },
    {
      "name": "Vedettes du Pont Neuf — Seine Cruise",
      "address": "Square du Vert Galant, 75001",
      "phone": "+33 1 46 33 98 38",
      "category": "culture",
      "note": "Jul 1 at 19:15 — Dossier 1727506. Arrive by 19:00."
    },
    {
      "name": "Moom Mam Bistronomie Thaï",
      "address": "19 Rue de Mogador, 75009",
      "phone": "+33 1 53 33 85 873",
      "category": "dining",
      "note": "Jul 1 at 20:30 — confirmed"
    },
    {
      "name": "Hestia Restaurant",
      "address": "8 Rue de la Huchette, 75005",
      "phone": null,
      "category": "dining",
      "note": "Jul 2 at 19:30 — Abhijeet birthday 🎂"
    },
    {
      "name": "Fondation Claude Monet — Giverny",
      "address": "Sente Leroy door n°1 bis, 27620 Giverny",
      "phone": null,
      "category": "culture",
      "note": "Jul 2 at 10:30 — tickets 9990015102518 + 9990015102589"
    },
    {
      "name": "Musée de l'Orangerie",
      "address": "Jardin des Tuileries, Place de la Concorde, 75001",
      "phone": null,
      "category": "culture",
      "note": "Jul 3 at 10:00 — tickets 73301702959464 + 73306432632744"
    },
    {
      "name": "Bar Hemingway — Ritz Paris",
      "address": "15 Place Vendome, 75001",
      "phone": null,
      "category": "dining",
      "note": "Walk-in only. Smart dress. Evening only."
    },
    {
      "name": "Secret Food Tours — Montmartre",
      "address": "Abbesses Metro Station, line 12 (Saturday meeting point)",
      "phone": "+1-332-230-4892",
      "category": "culture",
      "note": "Jul 4 at 11:30 — Ref BK-150EV. Arrive 11:15."
    },
    {
      "name": "La Grande Epicerie de Paris",
      "address": "38 Rue de Sevres, 75007",
      "phone": "+33 1 44 39 81 00",
      "category": "shopping",
      "note": "Mon-Sat 8:30am-9pm / Sun 10am-7pm"
    },
    {
      "name": "Officine Universelle Buly",
      "address": "45 Rue de Bretagne, 75003 (Marais)",
      "phone": null,
      "category": "shopping",
      "note": "Walk in and wander"
    },
    {
      "name": "InterContinental Bordeaux Le Grand Hotel",
      "address": "2-5 Place de la Comedie, 33000 Bordeaux",
      "phone": "+33 5 57 30 44 44",
      "category": "hotel",
      "note": "Ref 34984579397 — prepaid. Jul 5–7. Ask about rooftop terrace."
    },
    {
      "name": "Brasserie Le Bordeaux — InterContinental",
      "address": "2-5 Place de la Comedie, 33000 Bordeaux (in hotel)",
      "phone": "+33 5 57 30 44 44",
      "category": "dining",
      "note": "Jul 6 at 19:00 — hotel guest, confirmed"
    },
    {
      "name": "Château Pape Clément",
      "address": "216 Ave du Dr Nancel-Penard, 33600 Pessac",
      "phone": null,
      "category": "culture",
      "note": "Jul 6 at 14:00 — Booking 352767593. In English."
    },
    {
      "name": "Soho House Paris",
      "address": "21 Rue Jean Goujon, 75008 Paris",
      "phone": null,
      "category": "hotel",
      "note": "Ref 34759SG135930 — Jul 7–8. Check-in after 15:00."
    }
  ],
  "restaurants": [
    {
      "location": "Paris — Saint-Germain / 6th",
      "emoji": "🗼",
      "places": [
        {
          "name": "Didon",
          "address": "8 Rue du Dragon, 75006",
          "phone": "+33 1 45 48 00 00",
          "cuisine": "Charcoal-fired bistronomie",
          "notes": "Lebanese-born owners, menu by two-Michelin-star chef Michel Portos. Creative sharing plates, exceptional wine list by Stéphane Derenoncourt. Intimate, romantic, serious food.",
          "status": "walkin",
          "closedOn": ""
        },
        {
          "name": "Little Breizh",
          "address": "11 Rue Grégoire de Tours, 75006",
          "phone": "+33 1 43 54 60 74",
          "cuisine": "Crêperie bretonne",
          "notes": "20-year institution, consistently named best crêperie in Paris. Buckwheat galettes, sweet crêpes, Breton cider. Dessert crêpe with dark chocolate, salted caramel, ice cream and Chantilly is unmissable. Crepe Suzette flambéed tableside.",
          "status": "walkin",
          "closedOn": "Closed Sunday & Monday"
        },
        {
          "name": "Chapon Chocolaterie",
          "address": "34 Rue Saint-Sulpice, 75006",
          "phone": "+33 1 42 39 57 92",
          "cuisine": "Chocolaterie — mousse bar",
          "notes": "Bar à Mousse aux Chocolats — single-origin mousses in a paper cone, 5 intensities. Founded by Patrice Chapon, former ice cream maker for Buckingham Palace. Go before 4pm — mousse sells out. Sit in the square in front of Saint-Sulpice. €7-13.",
          "status": "walkin",
          "closedOn": ""
        },
        {
          "name": "Semilla",
          "address": "54 Rue de Seine, 75006",
          "phone": "+33 1 43 54 34 50",
          "cuisine": "Modern French, vegetable-forward",
          "notes": "One of the best wine lists in Saint-Germain. Vegetable plates are where the kitchen shines. Open Wed–Sun for dinner, lunch on weekends.",
          "status": "walkin",
          "closedOn": "Closed Monday & Tuesday"
        },
        {
          "name": "Baillotte",
          "address": "18 Rue Grégoire de Tours, 75006",
          "phone": "+33 1 43 26 03 65",
          "cuisine": "Modern French",
          "notes": "Chef Satoshi Amitsu's pâté en croûte is genuinely one of the best around. Not a tasting menu — à la carte, which is rare at this level. Good for vegetarians. Open Tuesday–Sunday.",
          "status": "walkin",
          "closedOn": "Closed Monday"
        },
        {
          "name": "Colvert",
          "address": "10 Rue Clément, 75006",
          "phone": "",
          "cuisine": "Modern bistro",
          "notes": "Michelin-pedigree chef. Creative French bistro — scallops with Jerusalem artichoke two ways, pork with jalapeño. Serious cooking without formality.",
          "status": "walkin",
          "closedOn": ""
        }
      ]
    },
    {
      "location": "Paris — 7th (near Soho House & Épicerie)",
      "emoji": "🗼",
      "places": [
        {
          "name": "RoseMarie",
          "address": "149 Rue de l'Université, 75007",
          "phone": "+33 1 45 51 83 45",
          "cuisine": "Classic French bistro",
          "notes": "Michelin Bib Gourmand 2026. Daily blackboard menu — chocolate mousse a regular fixture. Duck, salmon tartare, scallops. ~€30 lunch, €40 dinner. Call ahead to reserve — popular enough to fill, no online booking.",
          "status": "book",
          "closedOn": "Closed Saturday & Sunday"
        }
      ]
    },
    {
      "location": "Paris — Latin Quarter / 5th",
      "emoji": "🗼",
      "places": [
        {
          "name": "Hébé",
          "address": "15 Rue Frédéric Sauton, 75005",
          "phone": "+33 1 46 34 08 91",
          "cuisine": "Modern French / Mediterranean",
          "notes": "Sister restaurant to Didon, same owners. Creative tasting menu, May 2026 reviews outstanding. Chocolate ice cream praised. Small and cozy, friendly English-speaking staff. Michelin-listed.",
          "status": "walkin",
          "closedOn": "Closed Monday"
        }
      ]
    },
    {
      "location": "Paris — 2nd (near Opéra / Palais Royal)",
      "emoji": "🗼",
      "places": [
        {
          "name": "Vaudeville",
          "address": "29 Rue Vivienne, 75002",
          "phone": "+33 1 40 20 04 62",
          "cuisine": "Classic Parisian brasserie",
          "notes": "Art deco interior opposite the Palais Brongniart. Seafood platters, all the brasserie codes. Open daily including Sunday, continuous service. Lunch from €22. More of a setting experience — beautiful room, reliable food.",
          "status": "walkin",
          "closedOn": "Open daily"
        }
      ]
    },
    {
      "location": "Giverny",
      "emoji": "🌸",
      "places": [
        {
          "name": "Le Jardin des Plumes",
          "address": "1 Rue du Milieu, 27620 Giverny",
          "phone": "+33 2 32 54 26 35",
          "cuisine": "One Michelin star",
          "notes": "Chef David Gallienne in a 1912 Norman manor house surrounded by gardens. Seasonal, refined, elegant but unpretentious. Best restaurant in Giverny by a distance. Book ahead — fills quickly.",
          "status": "book",
          "closedOn": ""
        },
        {
          "name": "Les Nymphéas",
          "address": "Rue Claude Monet, 27620 Giverny",
          "phone": "+33 2 32 21 20 31",
          "cuisine": "Norman terrace restaurant",
          "notes": "Flower-filled setting overlooking the Fondation Monet. Local Norman produce. Perfect for lunch after the gardens — convenient and charming.",
          "status": "walkin",
          "closedOn": ""
        },
        {
          "name": "La Guingette",
          "address": "Giverny village",
          "phone": "",
          "cuisine": "Casual terrace bistro",
          "notes": "Hidden from the touristy strip, serene setting, seasonal vegetables and fish. Closes between lunch and dinner — arrive before 2:30pm. Praised by locals and visitors alike.",
          "status": "walkin",
          "closedOn": "Closed between 2:30–7pm"
        }
      ]
    },
    {
      "location": "Bordeaux — Centre / Saint-Pierre",
      "emoji": "🍷",
      "places": [
        {
          "name": "Le Petit Commerce",
          "address": "22 Rue Parlement Saint-Pierre, 33000 Bordeaux",
          "phone": "+33 5 56 79 76 58",
          "cuisine": "Seafood",
          "notes": "Bordeaux institution. Unbeatable freshness — oysters, shellfish, grilled fish. Market dishes paired with Bordeaux wines. One of the best seafood restaurants in France.",
          "status": "walkin",
          "closedOn": ""
        },
        {
          "name": "Soif",
          "address": "Saint-Pierre district, Bordeaux",
          "phone": "",
          "cuisine": "Wine bar with food",
          "notes": "350-strong wine list, artisanal vintners. A gem in the Saint-Pierre district. Open Monday & Friday evenings, Saturday–Sunday lunch and dinner.",
          "status": "walkin",
          "closedOn": "Closed Tuesday–Thursday"
        },
        {
          "name": "Amicis",
          "address": "Bordeaux centre",
          "phone": "",
          "cuisine": "Modern French / seafood",
          "notes": "Rated 16/20 by Gault&Millau, 3 toques. Chef Alexandre Baumard — charcuterie-style red tuna, seaweed Saint-Pierre. Refined yet accessible.",
          "status": "walkin",
          "closedOn": ""
        },
        {
          "name": "Le Charabia",
          "address": "Hôtel de Ville area, Bordeaux",
          "phone": "",
          "cuisine": "Natural wine bar / small plates",
          "notes": "Buzzing local bistro. Smart small plates — pork pithivier with artichoke, mushroom arancini with beetroot ketchup. All organic wines from local makers. Eighties soundtrack, large terrace in summer.",
          "status": "walkin",
          "closedOn": ""
        }
      ]
    }
  ],
  "shopping": [
    {
      "location": "La Grande Épicerie de Paris",
      "address": "38 Rue de Sèvres, 75007 Paris",
      "emoji": "🛍️",
      "note": "Visit twice — Day 4 after Orangerie, and Day 8 evening before Saint-Germain. VAT refund over €100.",
      "items": [
        {
          "name": "Sablés Basques au Piment d'Espelette",
          "notes": "Savoury shortbread with Espelette chili and fleur de sel. Look for Maison Arostéguy from Biarritz — the definitive version.",
          "category": "🌶️ Basque"
        },
        {
          "name": "Purée de Piment d'Espelette",
          "notes": "Espelette pepper paste. Goes into everything, keeps well. Warm fruity heat, nothing like regular chili.",
          "category": "🌶️ Basque"
        },
        {
          "name": "Fleur de Sel de Guérande",
          "notes": "The real thing, from Brittany. Ceramic pot. Nothing else compares.",
          "category": "🧂 Pantry"
        },
        {
          "name": "Confit de Canard",
          "notes": "Duck confit in a jar. The southwest in a tin. Bring at least two.",
          "category": "🦆 Southwest"
        },
        {
          "name": "Crème de Marrons de l'Ardèche",
          "notes": "Chestnut cream. Clément Faugier brand. Extraordinary on everything — yogurt, toast, crêpes.",
          "category": "🌰 Pantry"
        },
        {
          "name": "Lavender Syrup",
          "notes": "Provence in a bottle. For sparkling water, cocktails, desserts.",
          "category": "💜 Provence"
        },
        {
          "name": "Artisan Chocolate",
          "notes": "Pick up a selection of single-origin bars. Compare with Chapon.",
          "category": "🍫 Sweet"
        },
        {
          "name": "Summer Preserves",
          "notes": "Whatever is seasonal — fig, apricot, cherry. French confiture at this level is incomparable.",
          "category": "🍑 Sweet"
        }
      ]
    },
    {
      "location": "Chapon Chocolaterie",
      "address": "34 Rue Saint-Sulpice, 75006 Paris",
      "emoji": "🍫",
      "note": "Also buy bars to take home. Single-origin, no additives.",
      "items": [
        {
          "name": "Uganda 75% bar",
          "notes": "Rich, deep flavour with fruit notes. Beautiful packaging.",
          "category": "🍫 Chocolate"
        },
        {
          "name": "Philippines 75% bar",
          "notes": "Earthy, complex. One of Chapon's most distinctive origins.",
          "category": "🍫 Chocolate"
        },
        {
          "name": "Homemade Marshmallows",
          "notes": "Nothing like commercial versions. Pick up a small box.",
          "category": "🍬 Sweet"
        }
      ]
    },
    {
      "location": "Guerlain Flagship",
      "address": "68 Ave des Champs-Élysées, 75008 Paris",
      "emoji": "🌹",
      "note": "VAT refund form. Paris-exclusive fragrances only available here. Allow 1 hour.",
      "items": [
        {
          "name": "Paris-exclusive fragrance",
          "notes": "Ask the consultant what is only available at this location — not in duty free, not online.",
          "category": "🌸 Fragrance"
        },
        {
          "name": "Engraved bottle",
          "notes": "Bottle engraving service available in-store. A meaningful keepsake.",
          "category": "🌸 Fragrance"
        }
      ]
    },
    {
      "location": "La Maison du Chocolat",
      "address": "52 Ave des Champs-Élysées, 75008 Paris",
      "emoji": "🍫",
      "note": "3 min walk from Marriott. Last stop on Day 6 morning before TGV.",
      "items": [
        {
          "name": "Ganache selection box",
          "notes": "Their signature. Dark chocolate ganaches with fresh cream — shelf life is short, eat within 2 weeks.",
          "category": "🍫 Chocolate"
        },
        {
          "name": "Macarons au chocolat",
          "notes": "If in season. Different from Ladurée — more serious, less sweet.",
          "category": "🍬 Sweet"
        }
      ]
    },
    {
      "location": "Château Pape Clément",
      "address": "216 Ave du Dr Nancel-Penard, 33600 Pessac, Bordeaux",
      "emoji": "🍷",
      "note": "Buy at the château — wines at this level are rarely exported at these prices.",
      "items": [
        {
          "name": "Blanc de Pape Clément",
          "notes": "Perfumed, almost never exported. The white is the discovery — buy at least two bottles.",
          "category": "🍷 Wine"
        },
        {
          "name": "Pape Clément Rouge",
          "notes": "Classic Pessac-Léognan. Take the vintage they recommend from the current release.",
          "category": "🍷 Wine"
        }
      ]
    }
  ]
};

const STATUS_CONFIG = {
  confirmed: { label: "Confirmed", color: "#2d6a4f", bg: "#d8f3dc", dot: "#52b788" },
  walkin:    { label: "Walk-in",   color: "#7b4f12", bg: "#fef3c7", dot: "#d97706" },
  optional:  { label: "Optional",  color: "#4a5568", bg: "#edf2f7", dot: "#a0aec0" },
  book:      { label: "Book now",  color: "#9b2335", bg: "#fde8e8", dot: "#e53e3e" },
};

function StatusBadge({ status }) {
  if (!status) return null;
  const cfg = STATUS_CONFIG[status];
  if (!cfg) return null;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      fontSize: 10, fontWeight: 700, letterSpacing: "0.07em",
      textTransform: "uppercase", padding: "2px 8px",
      borderRadius: 20, background: cfg.bg, color: cfg.color,
      fontFamily: "Georgia, serif", flexShrink: 0,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: cfg.dot, display: "inline-block", flexShrink: 0 }} />
      {cfg.label}
    </span>
  );
}

function EntryCard({ item }) {
  const [open, setOpen] = useState(false);
  const isSpecial = item.title.includes("🎂") || item.title.includes("⭐");

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        display: "flex", gap: 0, cursor: "pointer",
        marginBottom: 2,
      }}
    >
      {/* Timeline spine */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 36, flexShrink: 0 }}>
        <div style={{
          width: 28, height: 28, borderRadius: "50%",
          background: isSpecial ? "#1B2A4A" : "#fff",
          border: `2px solid ${isSpecial ? "#B8860B" : "#e0d8c8"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 13, flexShrink: 0, zIndex: 1,
        }}>
          {item.emoji}
        </div>
        <div style={{ width: 1, flex: 1, background: "#e8e0d0", minHeight: 8 }} />
      </div>

      {/* Card */}
      <div style={{
        flex: 1, marginLeft: 10, marginBottom: 10,
        background: open ? "#fffdf7" : "#fff",
        border: `1px solid ${open ? "#B8860B" : "#ede6d8"}`,
        borderRadius: 10, padding: "10px 12px",
        transition: "all 0.15s ease",
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
              {item.time && (
                <span style={{
                  fontSize: 10, color: "#B8860B", fontWeight: 700,
                  letterSpacing: "0.1em", fontFamily: "Georgia, serif",
                  whiteSpace: "nowrap",
                }}>
                  {item.time}
                </span>
              )}
              <StatusBadge status={item.status} />
            </div>
            <div style={{
              fontSize: 13, fontWeight: 700, color: "#1B2A4A",
              fontFamily: "'Playfair Display', Georgia, serif",
              marginTop: 2, lineHeight: 1.3,
            }}>
              {item.title}
            </div>
            {!open && item.transit && (
              <div style={{ fontSize: 11, color: "#999", marginTop: 3, fontFamily: "Georgia, serif" }}>
                {item.transit}
              </div>
            )}
          </div>
          <span style={{ color: "#ccc", fontSize: 10, marginTop: 2, flexShrink: 0 }}>{open ? "▲" : "▼"}</span>
        </div>

        {open && (
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid #f0e8d0" }}>
            {item.address && (
              <div style={{ fontSize: 12, color: "#666", marginBottom: 6, fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.4 }}>
                📍 {item.address}
              </div>
            )}
            {item.transit && (
              <div style={{ fontSize: 11, color: "#888", marginBottom: 8, fontFamily: "Georgia, serif" }}>{item.transit}</div>
            )}
            {item.notes && (
              <div style={{ fontSize: 13, color: "#333", lineHeight: 1.65, fontFamily: "Georgia, serif" }}>
                {item.notes}
              </div>
            )}
            {item.ref && (
              <div style={{ marginTop: 8, fontSize: 11, color: "#666", fontFamily: "monospace", background: "#f5f0e8", padding: "4px 8px", borderRadius: 4, display: "inline-block" }}>
                Ref: {item.ref}
              </div>
            )}
            {item.phone && (
              <div style={{ marginTop: 6, fontSize: 12, color: "#B8860B", fontFamily: "Georgia, serif" }}>
                📞 {item.phone}
              </div>
            )}
            {item.tickets && Array.isArray(item.tickets) && (
              <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 4 }}>
                {item.tickets.map((t, i) => (
                  <div key={i} style={{
                    fontSize: 11, color: "#555", fontFamily: "monospace",
                    background: "#f0f8f0", padding: "3px 7px",
                    borderRadius: 4, border: "1px solid #c8e6c9"
                  }}>
                    🎟 {t}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function DayView({ day }) {
  return (
    <div style={{ paddingTop: 8 }}>
      {/* Day summary */}
      <div style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #243860 100%)",
        borderRadius: 12, padding: "16px 18px", marginBottom: 20,
      }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
          <span style={{
            fontSize: 9, fontWeight: 800, letterSpacing: "0.2em",
            color: "#B8860B", textTransform: "uppercase", fontFamily: "Georgia, serif"
          }}>
            {day.label}
          </span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontFamily: "Georgia, serif" }}>
            {day.date}
          </span>
        </div>
        <div style={{
          fontSize: 16, fontWeight: 700, color: "#fff",
          fontFamily: "'Playfair Display', Georgia, serif",
          lineHeight: 1.3, marginBottom: 8,
        }}>
          {day.title}
        </div>
        {day.summary && (
          <div style={{
            fontSize: 13, color: "rgba(255,255,255,0.65)",
            fontFamily: "Georgia, serif", lineHeight: 1.6, fontStyle: "italic",
          }}>
            {day.summary}
          </div>
        )}
      </div>

      {/* Timeline items sorted by time */}
      <div style={{ paddingLeft: 4 }}>
        {day.items.map((item, i) => (
          <EntryCard key={i} item={item} />
        ))}
        {/* End dot */}
        <div style={{ display: "flex", gap: 0 }}>
          <div style={{ width: 36, display: "flex", justifyContent: "center" }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#e0d8c8", marginTop: 2 }} />
          </div>
        </div>
      </div>
    </div>
  );
}



// All trips — add new JSONs here as they come in
const ALL_TRIPS = [TRIP_DATA];

const NAV_TABS = [
  { id: "itinerary",   label: "Itinerary" },
  { id: "hotels",      label: "Hotels" },
  { id: "flights",     label: "Flights" },
  { id: "restaurants", label: "Restaurants" },
  { id: "shopping",    label: "Shopping" },
  { id: "contacts",    label: "Contacts" },
];

const CONTACT_CATEGORY_ICONS = {
  hotel: "🏨", dining: "🍽️", culture: "🎨", shopping: "🛍️", transport: "🚆"
};

function RestaurantsPanel({ trip }) {
  const [openIdx, setOpenIdx] = useState(null);
  const STATUS_COLORS = {
    confirmed: { bg: "#d8f3dc", color: "#2d6a4f", dot: "#52b788", label: "Confirmed" },
    walkin:    { bg: "#fef3c7", color: "#7b4f12", dot: "#d97706", label: "Walk-in" },
    book:      { bg: "#fde8e8", color: "#9b2335", dot: "#e53e3e", label: "Book" },
  };
  return (
    <div style={{ padding: "16px 0" }}>
      {(trip.restaurants || []).map((group, gi) => (
        <div key={gi} style={{ marginBottom: 28 }}>
          <div style={{
            fontSize: 11, fontWeight: 800, letterSpacing: "0.14em",
            textTransform: "uppercase", color: "#B8860B",
            fontFamily: "Georgia, serif", marginBottom: 12,
            display: "flex", alignItems: "center", gap: 8
          }}>
            <span>{group.emoji}</span> {group.location}
          </div>
          {group.places.map((place, pi) => {
            const key = `${gi}-${pi}`;
            const isOpen = openIdx === key;
            const sc = STATUS_COLORS[place.status] || STATUS_COLORS.walkin;
            return (
              <div
                key={pi}
                onClick={() => setOpenIdx(isOpen ? null : key)}
                style={{
                  background: isOpen ? "#fffdf7" : "#fff",
                  border: `1px solid ${isOpen ? "#B8860B" : "#e8e0d0"}`,
                  borderRadius: 10, padding: "12px 14px",
                  marginBottom: 8, cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {place.name}
                      </span>
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: "0.07em",
                        textTransform: "uppercase", padding: "2px 8px", borderRadius: 20,
                        background: sc.bg, color: sc.color, fontFamily: "Georgia, serif",
                        display: "inline-flex", alignItems: "center", gap: 4, flexShrink: 0
                      }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: sc.dot, display: "inline-block" }} />
                        {sc.label}
                      </span>
                    </div>
                    <div style={{ fontSize: 11, color: "#888", marginTop: 3, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                      {place.cuisine}
                    </div>
                  </div>
                  <span style={{ color: "#ccc", fontSize: 10, marginTop: 2 }}>{isOpen ? "▲" : "▼"}</span>
                </div>
                {isOpen && (
                  <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid #f0e8d0" }}>
                    <div style={{ fontSize: 12, color: "#666", marginBottom: 6, fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                      📍 {place.address}
                    </div>
                    {place.phone && (
                      <div style={{ fontSize: 12, color: "#B8860B", marginBottom: 6, fontFamily: "Georgia, serif" }}>
                        📞 {place.phone}
                      </div>
                    )}
                    {place.closedOn && (
                      <div style={{ fontSize: 11, color: "#e53e3e", marginBottom: 6, fontFamily: "Georgia, serif" }}>
                        ⏰ {place.closedOn}
                      </div>
                    )}
                    <div style={{ fontSize: 13, color: "#333", lineHeight: 1.65, fontFamily: "Georgia, serif" }}>
                      {place.notes}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function ShoppingPanel({ trip }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div style={{ padding: "16px 0" }}>
      {(trip.shopping || []).map((store, si) => (
        <div key={si} style={{ marginBottom: 24 }}>
          <div style={{
            background: "linear-gradient(135deg, #1B2A4A 0%, #243860 100%)",
            borderRadius: 10, padding: "14px 16px", marginBottom: 10,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>{store.emoji}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {store.name || store.location}
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "Georgia, serif", fontStyle: "italic", marginTop: 2 }}>
                  {store.address}
                </div>
              </div>
            </div>
            {store.note && (
              <div style={{ fontSize: 12, color: "rgba(184,134,11,0.9)", fontFamily: "Georgia, serif", marginTop: 8, lineHeight: 1.5 }}>
                {store.note}
              </div>
            )}
          </div>
          {store.items.map((item, ii) => {
            const key = `${si}-${ii}`;
            const isOpen = openIdx === key;
            return (
              <div
                key={ii}
                onClick={() => setOpenIdx(isOpen ? null : key)}
                style={{
                  background: isOpen ? "#fffdf7" : "#fff",
                  border: `1px solid ${isOpen ? "#B8860B" : "#e8e0d0"}`,
                  borderRadius: 8, padding: "10px 14px",
                  marginBottom: 6, cursor: "pointer",
                  transition: "all 0.15s ease",
                  display: "flex", alignItems: "flex-start", gap: 10,
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 10, color: "#B8860B", fontWeight: 700, fontFamily: "Georgia, serif" }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {item.name}
                    </span>
                  </div>
                  {isOpen && item.notes && (
                    <div style={{ fontSize: 13, color: "#333", lineHeight: 1.65, fontFamily: "Georgia, serif", marginTop: 8 }}>
                      {item.notes}
                    </div>
                  )}
                </div>
                <span style={{ color: "#ccc", fontSize: 10, marginTop: 2, flexShrink: 0 }}>{isOpen ? "▲" : "▼"}</span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function ContactsPanel({ trip }) {
  const cats = ["hotel","dining","culture","shopping"];
  return (
    <div style={{ padding: "16px 0" }}>
      {cats.map(cat => {
        const items = (trip.contacts || []).filter(c => c.category === cat);
        if (!items.length) return null;
        return (
          <div key={cat} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8860B", fontWeight: 800, marginBottom: 10, fontFamily: "Georgia, serif" }}>
              {CONTACT_CATEGORY_ICONS[cat]} {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </div>
            {items.map((c, i) => (
              <div key={i} style={{
                background: "#fffdf7", border: "1px solid #e8e0d0",
                borderRadius: 10, padding: "12px 14px", marginBottom: 8
              }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Playfair Display', Georgia, serif" }}>{c.name}</div>
                {c.address && <div style={{ fontSize: 11, color: "#777", marginTop: 3, fontFamily: "Georgia, serif", fontStyle: "italic" }}>📍 {c.address}</div>}
                {c.phone && <div style={{ fontSize: 11, color: "#B8860B", marginTop: 3, fontFamily: "Georgia, serif" }}>📞 {c.phone}</div>}
                {c.note && <div style={{ fontSize: 12, color: "#555", marginTop: 5, fontFamily: "Georgia, serif", lineHeight: 1.5 }}>{c.note}</div>}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

function HotelsPanel({ trip }) {
  return (
    <div style={{ padding: "16px 0" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8860B", fontWeight: 800, marginBottom: 16, fontFamily: "Georgia, serif" }}>
        Where You're Staying
      </div>
      {trip.hotels.map((h, i) => (
        <div key={i} style={{
          background: "#fffdf7", border: "1px solid #e8e0d0",
          borderRadius: 10, padding: "14px 16px", marginBottom: 10
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Playfair Display', Georgia, serif" }}>{h.name}</div>
          <div style={{ fontSize: 12, color: "#666", marginTop: 4, fontFamily: "Georgia, serif", fontStyle: "italic" }}>{h.address}</div>
          <div style={{ display: "flex", gap: 16, marginTop: 8, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, color: "#555", fontFamily: "Georgia, serif" }}>
              📅 {h.checkin} → {h.checkout} · {h.nights} nights
            </span>
            {h.phone && <span style={{ fontSize: 11, color: "#B8860B", fontFamily: "Georgia, serif" }}>📞 {h.phone}</span>}
          </div>
          {h.ref && (
            <div style={{ marginTop: 6, fontSize: 11, fontFamily: "monospace", color: "#555", background: "#f5f0e8", padding: "3px 8px", borderRadius: 4, display: "inline-block" }}>
              Ref: {h.ref}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function FlightsPanel({ trip }) {
  return (
    <div style={{ padding: "16px 0" }}>
      <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#B8860B", fontWeight: 800, marginBottom: 16, fontFamily: "Georgia, serif" }}>
        Flights
      </div>
      {[
        { label: "Outbound", icon: "✈️", text: trip.flights.inbound },
        { label: "Return",   icon: "🏠", text: trip.flights.outbound }
      ].map((f, i) => (
        <div key={i} style={{
          background: "#fffdf7", border: "1px solid #e8e0d0",
          borderRadius: 10, padding: "14px 16px", marginBottom: 10
        }}>
          <div style={{ fontSize: 10, color: "#B8860B", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6, fontFamily: "Georgia, serif" }}>
            {f.icon} {f.label}
          </div>
          <div style={{ fontSize: 13, color: "#1B2A4A", fontFamily: "Georgia, serif", lineHeight: 1.6 }}>{f.text}</div>
        </div>
      ))}
    </div>
  );
}

function HomeScreen({ onSelect }) {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f0e8", maxWidth: 480, margin: "0 auto" }}>
      <div style={{ background: "#1B2A4A", padding: "48px 24px 32px" }}>
        <div style={{ fontSize: 10, color: "#B8860B", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 800, fontFamily: "Georgia, serif", marginBottom: 10 }}>
          My Trips
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.2 }}>
          Where are we going?
        </div>
      </div>

      <div style={{ padding: "24px 16px" }}>
        {ALL_TRIPS.map(trip => (
          <div
            key={trip.id}
            onClick={() => onSelect(trip)}
            style={{
              background: "#fff", border: "1px solid #e8e0d0",
              borderRadius: 14, padding: "18px 20px", marginBottom: 12,
              cursor: "pointer", display: "flex", alignItems: "center", gap: 16,
              transition: "box-shadow 0.15s ease",
            }}
          >
            <div style={{
              width: 52, height: 52, borderRadius: 12,
              background: trip.color || "#1B2A4A",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 26, flexShrink: 0,
            }}>
              {trip.emoji}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#1B2A4A", fontFamily: "'Playfair Display', Georgia, serif" }}>
                {trip.name}
              </div>
              <div style={{ fontSize: 11, color: trip.accent || "#B8860B", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Georgia, serif", marginTop: 2 }}>
                {trip.dates}
              </div>
              <div style={{ fontSize: 12, color: "#999", fontFamily: "Georgia, serif", fontStyle: "italic", marginTop: 3 }}>
                {trip.subtitle}
              </div>
            </div>
            <span style={{ color: "#ccc", fontSize: 20, lineHeight: 1 }}>›</span>
          </div>
        ))}

        <div style={{
          border: "1.5px dashed #d8d0c0", borderRadius: 14, padding: "18px 20px",
          display: "flex", alignItems: "center", gap: 16, opacity: 0.45,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 12, background: "#e8e0d0",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
          }}>
            ＋
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#888", fontFamily: "'Playfair Display', Georgia, serif" }}>Next trip</div>
            <div style={{ fontSize: 12, color: "#aaa", fontFamily: "Georgia, serif", fontStyle: "italic", marginTop: 2 }}>Upload a JSON to add</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TripDetail({ trip, onBack }) {
  const [activeTab, setActiveTab] = useState("itinerary");
  const [activeDay, setActiveDay] = useState(0);
  const accent = trip.accent || "#B8860B";
  const base   = trip.color  || "#1B2A4A";

  return (
    <div style={{ minHeight: "100vh", background: "#f5f0e8", maxWidth: 480, margin: "0 auto" }}>
      <div style={{ background: base, padding: "20px 20px 16px", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <button
            onClick={onBack}
            style={{
              background: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer",
              color: "#fff", fontSize: 13, padding: "4px 12px", borderRadius: 20,
              fontFamily: "Georgia, serif",
            }}
          >
            ‹ Trips
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>{trip.emoji}</span>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', Georgia, serif" }}>
                {trip.name}
              </div>
            </div>
            <div style={{ fontSize: 10, color: accent, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, fontFamily: "Georgia, serif", marginTop: 1 }}>
              {trip.dates}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: 4 }}>
          {NAV_TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: "5px 14px", borderRadius: 20, border: "none", cursor: "pointer",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                fontFamily: "Georgia, serif",
                background: activeTab === tab.id ? accent : "rgba(255,255,255,0.1)",
                color: activeTab === tab.id ? "#fff" : "rgba(255,255,255,0.55)",
                transition: "all 0.15s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "itinerary" && (
        <div style={{
          background: "#fff", borderBottom: "1px solid #e8e0d0",
          display: "flex", overflowX: "auto", padding: "10px 16px",
          gap: 6, scrollbarWidth: "none",
        }}>
          {trip.days.map((day, i) => {
            const parts = day.date.split(" ");
            const mon = parts[1]; const num = parts[2] || "";
            return (
              <button
                key={day.id}
                onClick={() => setActiveDay(i)}
                style={{
                  flexShrink: 0, padding: "6px 12px", borderRadius: 20,
                  border: `1.5px solid ${activeDay === i ? accent : "#ddd"}`,
                  background: activeDay === i ? base : "#fafafa",
                  color: activeDay === i ? "#fff" : "#666",
                  cursor: "pointer", textAlign: "center",
                  transition: "all 0.15s ease",
                }}
              >
                <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Georgia, serif", opacity: 0.7, marginBottom: 1 }}>
                  {day.label.replace("DAY ", "D")}
                </div>
                <div style={{ fontSize: 12, fontWeight: 700, fontFamily: "Georgia, serif" }}>{mon} {num}</div>
              </button>
            );
          })}
        </div>
      )}

      <div style={{ padding: "16px 16px 80px" }}>
        {activeTab === "hotels"      && <HotelsPanel trip={trip} />}
        {activeTab === "flights"     && <FlightsPanel trip={trip} />}
        {activeTab === "restaurants" && <RestaurantsPanel trip={trip} />}
        {activeTab === "shopping"    && <ShoppingPanel trip={trip} />}
        {activeTab === "contacts"    && <ContactsPanel trip={trip} />}
        {activeTab === "itinerary"   && <DayView day={trip.days[activeDay]} />}
      </div>
    </div>
  );
}

export default function TripsApp() {
  const [activeTrip, setActiveTrip] = useState(null);
  if (!activeTrip) return <HomeScreen onSelect={setActiveTrip} />;
  return <TripDetail trip={activeTrip} onBack={() => { setActiveTrip(null); }} />;
}
