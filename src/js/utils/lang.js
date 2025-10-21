const messages = {
  en: {
    CONTRAST_REPORT: 'Contrast Report',
    REVERSE: 'Reverse',
    SAVE: 'Save',
    UNSAVE: 'Unsave',
    SHARE: 'Share',
    COLOURS: 'Colours',
    FOREGROUND: 'Foreground',
    BACKGROUND: 'Background',
    CONTRAST: 'Contrast',
    RESULTS: 'Results',
    OPEN_FG_PICKER: 'Open foreground colour picker',
    OPEN_BG_PICKER: 'Open background colour picker',
    FOREGROUND_PICKER: 'Foreground colour picker',
    BACKGROUND_PICKER: 'Background colour picker',
    FOREGROUND_EYEDROPPER: 'Foreground eyedropper',
    BACKGROUND_EYEDROPPER: 'Background eyedropper',
    CONTRAST_RATIO: 'Contrast Ratio',
    PREVIEW: 'Preview',
    NORMAL_TEXT: 'Normal text',
    LANGUAGE: 'Language',
    LARGE_TEXT: 'Large text',
    GRAPHICS_AND_UI: 'Graphics & UI',
    GOOD: 'Good',
    LOW: 'Low',
    FIX: 'Fix',
    SETTINGS: 'Settings',
    THEME: 'Theme',
    POP_OUT: 'Pop out',
    SWATCH: 'Swatch: %(foreground) on %(background).',
    SWATCH_SAVED_WINDOW: 'Swatch saved to main window.',
    LINK_COPIED: 'Link copied to clipboard!',
    SAVED_COLOURS: 'Saved colours',
    EXPLANATION: 'Explanation',
    ABOUT_THIS_WEBSITE: 'About this website',
    SKIP_TO_SETTINGS: 'Skip to settings',
    PASSES: 'Passes',
    FAILS: 'Fails',
    NO_COMBO_FOUND:
      'No accessible combination can be found by changing the text colour. Try changing the background colour.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) has a good contrast ratio of %(ratio):1 with the background %(bg) for normal text.',
    CONTRAST_NORMAL_LOW:
      '%(fg) has a low contrast ratio of %(ratio):1 with the background %(bg) for normal text.',
    CONTRAST_LARGE_GOOD:
      '%(fg) has a good contrast ratio of %(ratio):1 with the background %(bg) for large text.',
    CONTRAST_LARGE_LOW:
      '%(fg) has a low contrast ratio of %(ratio):1 with the background %(bg) for large text.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) has a good contrast ratio of %(ratio):1 with the background %(bg) for graphics and UI elements.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) has a low contrast ratio of %(ratio):1 with the background %(bg) for graphics and UI elements.',
    UNSUPPORTED_COLOUR_SPACE: 'Sorry, this colour space is not supported!',
    CLOSE_ALERT: 'Close alert',
    EXPLANATION_BODY: `
      <ul>
        <li>WCAG is an abbreviation for Web Content Accessibility Guidelines.</li>
        <li>WCAG has three levels: A, AA, and AAA. There are different required contrast ratios for AA and AAA.</li>
        <li>Normal size text (or body text) requires a contrast ratio of at least 4.5:1.</li>
        <li>Large size text (or heading text) requires a contrast ratio of at least 3:1.</li>
        <li>Large text is defined as 14 point (18.67 px) and bold or larger, or 18 point (24 px) or larger.</li>
        <li>All graphics, icons, or interface items should have at least a 3:1 contrast ratio for both AA and AAA.</li>
      </ul>
    `,
    ABOUT_BODY: `
      <p>Crafted by <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Privacy</h3>
      <p>No personal data is ever collected using this website. This website uses your browser’s web storage to remember recently used colour combination. This website uses privacy-oriented analytics. The analytics do not track IP addresses, fingerprints, or cookies.</p>
      <h3>Open source</h3>
      <p>View the <a href="https://github.com/adamchaboryk/contrast.report">source code on GitHub.</a></p>
    `,
    SPONSOR: 'Sponsor',
  },
  enUS: {
    CONTRAST_REPORT: 'Contrast Report',
    REVERSE: 'Reverse',
    SAVE: 'Save',
    UNSAVE: 'Unsave',
    SHARE: 'Share',
    COLOURS: 'Colors',
    FOREGROUND: 'Foreground',
    BACKGROUND: 'Background',
    CONTRAST: 'Contrast',
    RESULTS: 'Results',
    OPEN_FG_PICKER: 'Open foreground color picker',
    OPEN_BG_PICKER: 'Open background color picker',
    FOREGROUND_PICKER: 'Foreground color picker',
    BACKGROUND_PICKER: 'Background color picker',
    FOREGROUND_EYEDROPPER: 'Foreground eyedropper',
    BACKGROUND_EYEDROPPER: 'Background eyedropper',
    CONTRAST_RATIO: 'Contrast Ratio',
    PREVIEW: 'Preview',
    NORMAL_TEXT: 'Normal text',
    LANGUAGE: 'Language',
    LARGE_TEXT: 'Large text',
    GRAPHICS_AND_UI: 'Graphics & UI',
    GOOD: 'Good',
    LOW: 'Low',
    FIX: 'Fix',
    SETTINGS: 'Settings',
    THEME: 'Theme',
    POP_OUT: 'Pop out',
    SWATCH: 'Swatch: %(foreground) on %(background).',
    SWATCH_SAVED_WINDOW: 'Swatch saved to main window.',
    LINK_COPIED: 'Link copied to clipboard!',
    SAVED_COLOURS: 'Saved colors',
    EXPLANATION: 'Explanation',
    ABOUT_THIS_WEBSITE: 'About this website',
    SKIP_TO_SETTINGS: 'Skip to settings',
    PASSES: 'Passes',
    FAILS: 'Fails',
    NO_COMBO_FOUND:
      'No accessible combination can be found by changing the text color. Try changing the background color.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) has a good contrast ratio of %(ratio):1 with the background %(bg) for normal text.',
    CONTRAST_NORMAL_LOW:
      '%(fg) has a low contrast ratio of %(ratio):1 with the background %(bg) for normal text.',
    CONTRAST_LARGE_GOOD:
      '%(fg) has a good contrast ratio of %(ratio):1 with the background %(bg) for large text.',
    CONTRAST_LARGE_LOW:
      '%(fg) has a low contrast ratio of %(ratio):1 with the background %(bg) for large text.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) has a good contrast ratio of %(ratio):1 with the background %(bg) for graphics and UI elements.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) has a low contrast ratio of %(ratio):1 with the background %(bg) for graphics and UI elements.',
    UNSUPPORTED_COLOUR_SPACE: 'Sorry, this color space is not supported!',
    CLOSE_ALERT: 'Close alert',
    EXPLANATION_BODY: `
      <ul>
        <li>WCAG is an abbreviation for Web Content Accessibility Guidelines.</li>
        <li>WCAG has three levels: A, AA, and AAA. There are different required contrast ratios for AA and AAA.</li>
        <li>Normal size text (or body text) requires a contrast ratio of at least 4.5:1.</li>
        <li>Large size text (or heading text) requires a contrast ratio of at least 3:1.</li>
        <li>Large text is defined as 14 point (18.67 px) and bold or larger, or 18 point (24 px) or larger.</li>
        <li>All graphics, icons, or interface items should have at least a 3:1 contrast ratio for both AA and AAA.</li>
      </ul>
    `,
    ABOUT_BODY: `
      <p>Crafted by <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Privacy</h3>
      <p>No personal data is ever collected using this website. This website uses your browser’s web storage to remember recently used colour combination. This website uses privacy-oriented analytics. The analytics do not track IP addresses, fingerprints, or cookies.</p>
      <h3>Open source</h3>
      <p>View the <a href="https://github.com/adamchaboryk/contrast.report">source code on GitHub.</a></p>
    `,
    SPONSOR: 'Sponsor',
  },
  fr: {
    CONTRAST_REPORT: 'Rapport de contraste',
    REVERSE: 'Inverser',
    SAVE: 'Enregistrer',
    UNSAVE: "Annuler l'enregistrement",
    SHARE: 'Partager',
    COLOURS: 'Couleurs',
    FOREGROUND: 'Premier plan',
    BACKGROUND: 'Arrière-plan',
    CONTRAST: 'Contraste',
    RESULTS: 'Résultats',
    OPEN_FG_PICKER: 'Ouvrir le sélecteur de couleur du premier plan',
    OPEN_BG_PICKER: "Ouvrir le sélecteur de couleur de l'arrière-plan",
    FOREGROUND_PICKER: 'Sélecteur de couleur du premier plan',
    BACKGROUND_PICKER: "Sélecteur de couleur de l'arrière-plan",
    FOREGROUND_EYEDROPPER: 'Pipette du premier plan',
    BACKGROUND_EYEDROPPER: "Pipette de l'arrière-plan",
    CONTRAST_RATIO: 'Ratio de contraste',
    PREVIEW: 'Aperçu',
    NORMAL_TEXT: 'Texte normal',
    LANGUAGE: 'Langue',
    LARGE_TEXT: 'Texte grand',
    GRAPHICS_AND_UI: 'Graphiques',
    GOOD: 'Bon',
    LOW: 'Faible',
    FIX: 'Corriger',
    SETTINGS: 'Paramètres',
    THEME: 'Thème',
    POP_OUT: 'Ouvrir séparément',
    SWATCH: 'Échantillon : %(foreground) sur %(background).',
    SWATCH_SAVED_WINDOW: 'Échantillon enregistré dans la fenêtre principale.',
    LINK_COPIED: 'Lien copié dans le presse-papiers !',
    SAVED_COLOURS: 'Couleurs enregistrées',
    EXPLANATION: 'Explication',
    ABOUT_THIS_WEBSITE: 'À propos de ce site',
    SKIP_TO_SETTINGS: 'Aller aux paramètres',
    PASSES: 'Réussi',
    FAILS: 'Échoué',
    NO_COMBO_FOUND:
      "Aucune combinaison accessible n'a été trouvée en changeant la couleur du texte. Essayez de changer la couleur de l'arrière-plan.",
    CONTRAST_NORMAL_GOOD:
      "%(fg) a un bon ratio de contraste de %(ratio):1 avec l'arrière-plan %(bg) pour le texte normal.",
    CONTRAST_NORMAL_LOW:
      "%(fg) a un faible ratio de contraste de %(ratio):1 avec l'arrière-plan %(bg) pour le texte normal.",
    CONTRAST_LARGE_GOOD:
      "%(fg) a un bon ratio de contraste de %(ratio):1 avec l'arrière-plan %(bg) pour le texte grand.",
    CONTRAST_LARGE_LOW:
      "%(fg) a un faible ratio de contraste de %(ratio):1 avec l'arrière-plan %(bg) pour le texte grand.",
    CONTRAST_GRAPHICS_GOOD:
      "%(fg) a un bon ratio de contraste de %(ratio):1 avec l'arrière-plan %(bg) pour les graphiques et éléments de l'interface.",
    CONTRAST_GRAPHICS_LOW:
      "%(fg) a un faible ratio de contraste de %(ratio):1 avec l'arrière-plan %(bg) pour les graphiques et éléments de l'interface.",
    UNSUPPORTED_COLOUR_SPACE:
      "Désolé, cet espace colorimétrique n'est pas pris en charge !",
    CLOSE_ALERT: "Fermer l'alerte",
    EXPLANATION_BODY: `
      <ul>
        <li>WCAG signifie Web Content Accessibility Guidelines (Directives pour l'accessibilité du contenu Web).</li>
        <li>WCAG comporte trois niveaux : A, AA et AAA. Les ratios de contraste requis diffèrent pour AA et AAA.</li>
        <li>Le texte de taille normale nécessite un ratio de contraste d'au moins 4,5:1.</li>
        <li>Le texte de grande taille nécessite un ratio de contraste d'au moins 3:1.</li>
        <li>Le texte grand est défini comme 14 points (18,67 px) et en gras ou plus, ou 18 points (24 px) ou plus.</li>
        <li>Tous les graphiques, icônes ou éléments de l'interface doivent avoir un ratio de contraste d'au moins 3:1 pour AA et AAA.</li>
      </ul>
    `,
    ABOUT_BODY: `
      <p>Créé par <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Confidentialité</h3>
      <p>Aucune donnée personnelle n'est collectée via ce site. Ce site utilise le stockage web de votre navigateur pour se souvenir des combinaisons de couleurs récemment utilisées. Ce site utilise des analyses respectueuses de la vie privée, sans suivi des adresses IP, empreintes digitales ou cookies.</p>
      <h3>Open source</h3>
      <p>Consultez le <a href="https://github.com/adamchaboryk/contrast.report">code source sur GitHub.</a></p>
    `,
    SPONSOR: 'Sponsor',
  },
  es: {
    CONTRAST_REPORT: 'Informe de contraste',
    REVERSE: 'Invertir',
    SAVE: 'Guardar',
    UNSAVE: 'Quitar guardado',
    SHARE: 'Compartir',
    COLOURS: 'Colores',
    FOREGROUND: 'Primer plano',
    BACKGROUND: 'Fondo',
    CONTRAST: 'Contraste',
    RESULTS: 'Resultados',
    OPEN_FG_PICKER: 'Abrir selector de color de primer plano',
    OPEN_BG_PICKER: 'Abrir selector de color de fondo',
    FOREGROUND_PICKER: 'Selector de color de primer plano',
    BACKGROUND_PICKER: 'Selector de color de fondo',
    FOREGROUND_EYEDROPPER: 'Cuentagotas de primer plano',
    BACKGROUND_EYEDROPPER: 'Cuentagotas de fondo',
    CONTRAST_RATIO: 'Ratio de contraste',
    PREVIEW: 'Previa',
    NORMAL_TEXT: 'Texto normal',
    LARGE_TEXT: 'Texto grande',
    GRAPHICS_AND_UI: 'Gráficos',
    GOOD: 'Bueno',
    LOW: 'Bajo',
    FIX: 'Corregir',
    SETTINGS: 'Configuración',
    THEME: 'Tema',
    POP_OUT: 'Desplegar',
    SWATCH: 'Muestra: %(foreground) sobre %(background).',
    SWATCH_SAVED_WINDOW: 'Muestra guardada en la ventana principal.',
    LINK_COPIED: 'Enlace copiado al portapapeles.',
    SAVED_COLOURS: 'Colores guardados',
    EXPLANATION: 'Explicación',
    ABOUT_THIS_WEBSITE: 'Sobre este sitio web',
    SKIP_TO_SETTINGS: 'Saltar a configuración',
    PASSES: 'Cumple',
    FAILS: 'No cumple',
    NO_COMBO_FOUND:
      'No se puede encontrar una combinación accesible cambiando el color del texto. Intenta cambiar el color de fondo.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) tiene un buen ratio de contraste de %(ratio):1 con el fondo %(bg) para texto normal.',
    CONTRAST_NORMAL_LOW:
      '%(fg) tiene un bajo ratio de contraste de %(ratio):1 con el fondo %(bg) para texto normal.',
    CONTRAST_LARGE_GOOD:
      '%(fg) tiene un buen ratio de contraste de %(ratio):1 con el fondo %(bg) para texto grande.',
    CONTRAST_LARGE_LOW:
      '%(fg) tiene un bajo ratio de contraste de %(ratio):1 con el fondo %(bg) para texto grande.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) tiene un buen ratio de contraste de %(ratio):1 con el fondo %(bg) para gráficos y elementos de UI.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) tiene un bajo ratio de contraste de %(ratio):1 con el fondo %(bg) para gráficos y elementos de UI.',
    UNSUPPORTED_COLOUR_SPACE:
      'Lo siento, este espacio de color no es compatible.',
    CLOSE_ALERT: 'Cerrar alerta',
    EXPLANATION_BODY: `
      <ul>
        <li>WCAG es la abreviatura de Web Content Accessibility Guidelines (Pautas de accesibilidad para contenidos web).</li>
        <li>WCAG tiene tres niveles: A, AA y AAA. Cada nivel requiere diferentes ratios de contraste.</li>
        <li>El texto normal requiere un ratio de contraste de al menos 4.5:1.</li>
        <li>El texto grande requiere un ratio de contraste de al menos 3:1.</li>
        <li>El texto grande se define como 14 puntos (18.67 px) en negrita o más, o 18 puntos (24 px) o más.</li>
        <li>Todos los gráficos, iconos o elementos de interfaz deben tener al menos un ratio de contraste de 3:1 para AA y AAA.</li>
      </ul>
    `,
    ABOUT_BODY: `
      <p>Creado por <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Privacidad</h3>
      <p>Nunca se recopilan datos personales mediante este sitio web. Se utiliza el almacenamiento web del navegador para recordar combinaciones de colores recientes y análisis orientados a la privacidad que no rastrean direcciones IP, huellas digitales ni cookies.</p>
      <h3>Código abierto</h3>
      <p>Ver el <a href="https://github.com/adamchaboryk/contrast.report">código fuente en GitHub.</a></p>
    `,
    SPONSOR: 'Patrocinador',
  },
  de: {
    CONTRAST_REPORT: 'Kontrastbericht',
    REVERSE: 'Umkehren',
    SAVE: 'Speichern',
    UNSAVE: 'Speicherung aufheben',
    SHARE: 'Teilen',
    COLOURS: 'Farben',
    FOREGROUND: 'Vordergrund',
    BACKGROUND: 'Hintergrund',
    CONTRAST: 'Kontrast',
    RESULTS: 'Ergebnisse',
    OPEN_FG_PICKER: 'Vordergrundfarbauswahl öffnen',
    OPEN_BG_PICKER: 'Hintergrundfarbauswahl öffnen',
    FOREGROUND_PICKER: 'Vordergrundfarbauswahl',
    BACKGROUND_PICKER: 'Hintergrundfarbauswahl',
    FOREGROUND_EYEDROPPER: 'Vordergrund-Augenpipette',
    BACKGROUND_EYEDROPPER: 'Hintergrund-Augenpipette',
    CONTRAST_RATIO: 'Kontrastverhältnis',
    PREVIEW: 'Vorschau',
    NORMAL_TEXT: 'Normaler Text',
    LARGE_TEXT: 'Großer Text',
    GRAPHICS_AND_UI: 'Grafiken & UI',
    GOOD: 'Gut',
    LOW: 'Niedrig',
    FIX: 'Beheben',
    SETTINGS: 'Einstellungen',
    THEME: 'Thema',
    POP_OUT: 'Abtrennen',
    SWATCH: 'Farbmuster: %(foreground) auf %(background).',
    SWATCH_SAVED_WINDOW: 'Farbmuster im Hauptfenster gespeichert.',
    LINK_COPIED: 'Link in die Zwischenablage kopiert!',
    SAVED_COLOURS: 'Gespeicherte Farben',
    EXPLANATION: 'Erklärung',
    ABOUT_THIS_WEBSITE: 'Über diese Website',
    SKIP_TO_SETTINGS: 'Zu den Einstellungen springen',
    PASSES: 'Bestanden',
    FAILS: 'Nicht bestanden',
    NO_COMBO_FOUND:
      'Keine zugängliche Kombination durch Änderung der Textfarbe gefunden. Versuche, die Hintergrundfarbe zu ändern.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) hat ein gutes Kontrastverhältnis von %(ratio):1 mit dem Hintergrund %(bg) für normalen Text.',
    CONTRAST_NORMAL_LOW:
      '%(fg) hat ein niedriges Kontrastverhältnis von %(ratio):1 mit dem Hintergrund %(bg) für normalen Text.',
    CONTRAST_LARGE_GOOD:
      '%(fg) hat ein gutes Kontrastverhältnis von %(ratio):1 mit dem Hintergrund %(bg) für großen Text.',
    CONTRAST_LARGE_LOW:
      '%(fg) hat ein niedriges Kontrastverhältnis von %(ratio):1 mit dem Hintergrund %(bg) für großen Text.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) hat ein gutes Kontrastverhältnis von %(ratio):1 mit dem Hintergrund %(bg) für Grafiken und UI-Elemente.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) hat ein niedriges Kontrastverhältnis von %(ratio):1 mit dem Hintergrund %(bg) für Grafiken und UI-Elemente.',
    UNSUPPORTED_COLOUR_SPACE: 'Dieser Farbraum wird leider nicht unterstützt.',
    CLOSE_ALERT: 'Alarm schließen',
    EXPLANATION_BODY: `
      <ul>
        <li>WCAG steht für Web Content Accessibility Guidelines (Richtlinien für barrierefreie Webinhalte).</li>
        <li>WCAG hat drei Stufen: A, AA und AAA. Verschiedene Stufen erfordern unterschiedliche Kontrastverhältnisse.</li>
        <li>Normaler Text benötigt ein Kontrastverhältnis von mindestens 4,5:1.</li>
        <li>Großer Text benötigt ein Kontrastverhältnis von mindestens 3:1.</li>
        <li>Großer Text ist definiert als 14 Punkt (18,67 px) fett oder größer oder 18 Punkt (24 px) oder größer.</li>
        <li>Alle Grafiken, Symbole oder Interface-Elemente sollten für AA und AAA mindestens ein Kontrastverhältnis von 3:1 haben.</li>
      </ul>
    `,
    ABOUT_BODY: `
      <p>Erstellt von <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Datenschutz</h3>
      <p>Es werden niemals personenbezogene Daten auf dieser Website erfasst. Diese Website verwendet den Webspeicher des Browsers, um kürzlich verwendete Farbkombinationen zu speichern. Analysen sind datenschutzorientiert und verfolgen weder IP-Adressen noch Fingerabdrücke oder Cookies.</p>
      <h3>Open Source</h3>
      <p>Siehe den <a href="https://github.com/adamchaboryk/contrast.report">Quellcode auf GitHub.</a></p>
    `,
    SPONSOR: 'Sponsor',
  },
  lt: {
    CONTRAST_REPORT: 'Kontrasto ataskaita',
    REVERSE: 'Apversti',
    SAVE: 'Išsaugoti',
    UNSAVE: 'Pašalinti iš išsaugotų',
    SHARE: 'Bendrinti',
    COLOURS: 'Spalvos',
    FOREGROUND: 'Priekinis planas',
    BACKGROUND: 'Fonas',
    CONTRAST: 'Kontrastas',
    RESULTS: 'Rezultatai',
    OPEN_FG_PICKER: 'Atidaryti priekinės spalvos parinkiklį',
    OPEN_BG_PICKER: 'Atidaryti fono spalvos parinkiklį',
    FOREGROUND_PICKER: 'Priekinės spalvos parinkiklis',
    BACKGROUND_PICKER: 'Fono spalvos parinkiklis',
    FOREGROUND_EYEDROPPER: 'Priekinės spalvos pipetė',
    BACKGROUND_EYEDROPPER: 'Fono pipetė',
    CONTRAST_RATIO: 'Kontrasto santykis',
    PREVIEW: 'Peržiūra',
    NORMAL_TEXT: 'Įprastas tekstas',
    LARGE_TEXT: 'Didelis tekstas',
    GRAPHICS_AND_UI: 'Grafika',
    LANGUAGE: 'Kalba',
    GOOD: 'Geras',
    LOW: 'Žemas',
    FIX: 'Taisyti',
    SETTINGS: 'Nustatymai',
    THEME: 'Tema',
    POP_OUT: 'Atidaryti naujame lange',
    SWATCH: 'Pavyzdys: %(foreground) ant %(background).',
    SWATCH_SAVED_WINDOW: 'Pavyzdys išsaugotas pagrindiniame lange.',
    LINK_COPIED: 'Nuoroda nukopijuota!',
    SAVED_COLOURS: 'Išsaugotos spalvos',
    EXPLANATION: 'Paaiškinimas',
    ABOUT_THIS_WEBSITE: 'Apie šią svetainę',
    SKIP_TO_SETTINGS: 'Pereiti prie nustatymų',
    PASSES: 'Atitinka',
    FAILS: 'Neatitinka',
    NO_COMBO_FOUND:
      'Nerasta prieinamos kombinacijos pakeitus teksto spalvą. Pabandykite pakeisti fono spalvą.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) turi gerą kontrasto santykį %(ratio):1 su fonu %(bg) įprastam tekstui.',
    CONTRAST_NORMAL_LOW:
      '%(fg) turi žemą kontrasto santykį %(ratio):1 su fonu %(bg) įprastam tekstui.',
    CONTRAST_LARGE_GOOD:
      '%(fg) turi gerą kontrasto santykį %(ratio):1 su fonu %(bg) dideliam tekstui.',
    CONTRAST_LARGE_LOW:
      '%(fg) turi žemą kontrasto santykį %(ratio):1 su fonu %(bg) dideliam tekstui.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) turi gerą kontrasto santykį %(ratio):1 su fonu %(bg) grafikai ir sąsajai.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) turi žemą kontrasto santykį %(ratio):1 su fonu %(bg) grafikai ir sąsajai.',
    UNSUPPORTED_COLOUR_SPACE: 'Atsiprašome, ši spalvų erdvė nepalaikoma!',
    CLOSE_ALERT: 'Uždaryti įspėjimą',
    EXPLANATION_BODY: `<ul>
    <li>WCAG – tai interneto turinio prieinamumo gairės.</li>
    <li>WCAG turi tris lygius: A, AA ir AAA. Skirtingiems lygiams taikomi skirtingi kontrasto reikalavimai.</li>
    <li>Įprastas tekstas reikalauja mažiausiai 4,5:1 kontrasto santykio.</li>
    <li>Didelis tekstas reikalauja mažiausiai 3:1 kontrasto santykio.</li>
    <li>Didelis tekstas apibrėžiamas kaip 14 punktų (18,67 px) paryškintas ar didesnis, arba 18 punktų (24 px) ar didesnis.</li>
    <li>Visi grafikos, piktogramų ir sąsajos elementai turėtų turėti bent 3:1 kontrasto santykį tiek AA, tiek AAA lygiams.</li>
  </ul>`,
    ABOUT_BODY: `<p>Sukurta <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
    <h3>Privatumas</h3>
    <p>Ši svetainė nerenka jokių asmens duomenų. Ji naudoja naršyklės vietinę atmintį neseniai naudotoms spalvų kombinacijoms išsaugoti ir privatumu grįstą analizę, kuri neseka IP adresų, naršyklės atspaudų ar slapukų.</p>
    <h3>Atviro kodo</h3>
    <p>Peržiūrėkite <a href="https://github.com/adamchaboryk/contrast.report">šaltinio kodą „GitHub“.</a></p>`,
    SPONSOR: 'Rėmėjas',
  },
  ja: {
    CONTRAST_REPORT: 'コントラストレポート',
    REVERSE: '反転',
    SAVE: '保存',
    UNSAVE: '保存解除',
    SHARE: '共有',
    COLOURS: '色',
    FOREGROUND: '前景',
    BACKGROUND: '背景',
    CONTRAST: 'コントラスト',
    RESULTS: '結果',
    OPEN_FG_PICKER: '前景色ピッカーを開く',
    OPEN_BG_PICKER: '背景色ピッカーを開く',
    FOREGROUND_PICKER: '前景色ピッカー',
    BACKGROUND_PICKER: '背景色ピッカー',
    FOREGROUND_EYEDROPPER: '前景スポイト',
    BACKGROUND_EYEDROPPER: '背景スポイト',
    CONTRAST_RATIO: 'コントラスト比',
    PREVIEW: 'プラ',
    NORMAL_TEXT: '標準テキスト',
    LARGE_TEXT: '大きなテキスト',
    GRAPHICS_AND_UI: 'グラフィック',
    LANGUAGE: '言語',
    GOOD: '良好',
    LOW: '低',
    FIX: '修正',
    SETTINGS: '設定',
    THEME: 'テーマ',
    POP_OUT: '新しいウィンドウで開く',
    SWATCH: 'サンプル: %(foreground) 上に %(background)。',
    SWATCH_SAVED_WINDOW: 'サンプルがメインウィンドウに保存されました。',
    LINK_COPIED: 'リンクをクリップボードにコピーしました！',
    SAVED_COLOURS: '保存された色',
    EXPLANATION: '説明',
    ABOUT_THIS_WEBSITE: 'このウェブサイトについて',
    SKIP_TO_SETTINGS: '設定へスキップ',
    PASSES: '合格',
    FAILS: '不合格',
    NO_COMBO_FOUND:
      'テキスト色を変更してもアクセス可能な組み合わせは見つかりません。背景色を変更してみてください。',
    CONTRAST_NORMAL_GOOD:
      '%(fg) は背景 %(bg) と標準テキストで %(ratio):1 の良好なコントラスト比があります。',
    CONTRAST_NORMAL_LOW:
      '%(fg) は背景 %(bg) と標準テキストで %(ratio):1 の低いコントラスト比です。',
    CONTRAST_LARGE_GOOD:
      '%(fg) は背景 %(bg) と大きなテキストで %(ratio):1 の良好なコントラスト比があります。',
    CONTRAST_LARGE_LOW:
      '%(fg) は背景 %(bg) と大きなテキストで %(ratio):1 の低いコントラスト比です。',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) は背景 %(bg) とグラフィックおよびUI要素で %(ratio):1 の良好なコントラスト比があります。',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) は背景 %(bg) とグラフィックおよびUI要素で %(ratio):1 の低いコントラスト比です。',
    UNSUPPORTED_COLOUR_SPACE:
      '申し訳ありません、このカラースペースはサポートされていません！',
    CLOSE_ALERT: 'アラートを閉じる',
    EXPLANATION_BODY: `<ul>
    <li>WCAGはWebコンテンツアクセシビリティガイドラインの略です。</li>
    <li>WCAGにはA、AA、AAAの3つのレベルがあります。AAおよびAAAには異なるコントラスト比の要件があります。</li>
    <li>標準サイズのテキストは少なくとも4.5:1のコントラスト比が必要です。</li>
    <li>大きなテキストは少なくとも3:1のコントラスト比が必要です。</li>
    <li>大きなテキストは14ポイント（18.67 px）以上の太字、または18ポイント（24 px）以上として定義されます。</li>
    <li>すべてのグラフィック、アイコン、UI要素はAAおよびAAAで少なくとも3:1のコントラスト比を持つ必要があります。</li>
  </ul>`,
    ABOUT_BODY: `<p><a href="https://chaboryk.xyz">Adam Chaboryk</a>によって作成されました。</p>
    <h3>プライバシー</h3>
    <p>このウェブサイトでは個人情報は一切収集されません。最近使用した色の組み合わせを記憶するためにブラウザのローカルストレージを使用し、IPアドレス、指紋、クッキーを追跡しないプライバシー重視の分析を使用します。</p>
    <h3>オープンソース</h3>
    <p><a href="https://github.com/adamchaboryk/contrast.report">GitHubでソースコードを確認できます。</a></p>`,
    SPONSOR: 'スポンサー',
  },
  ko: {
    CONTRAST_REPORT: '명암 대비 보고서',
    REVERSE: '반전',
    SAVE: '저장',
    UNSAVE: '저장 취소',
    SHARE: '공유',
    COLOURS: '색상',
    FOREGROUND: '전경',
    BACKGROUND: '배경',
    CONTRAST: '대비',
    RESULTS: '결과',
    OPEN_FG_PICKER: '전경 색상 선택기 열기',
    OPEN_BG_PICKER: '배경 색상 선택기 열기',
    FOREGROUND_PICKER: '전경 색상 선택기',
    BACKGROUND_PICKER: '배경 색상 선택기',
    FOREGROUND_EYEDROPPER: '전경 스포이드',
    BACKGROUND_EYEDROPPER: '배경 스포이드',
    CONTRAST_RATIO: '대비 비율',
    PREVIEW: '미리보기',
    NORMAL_TEXT: '일반 텍스트',
    LARGE_TEXT: '큰 텍스트',
    GRAPHICS_AND_UI: '그래픽',
    GOOD: '좋음',
    LOW: '낮음',
    FIX: '수정',
    SETTINGS: '설정',
    THEME: '테마',
    LANGUAGE: '언어',
    POP_OUT: '새 창에서 열기',
    SWATCH: '샘플: %(foreground) 위에 %(background).',
    SWATCH_SAVED_WINDOW: '샘플이 메인 창에 저장되었습니다.',
    LINK_COPIED: '링크가 클립보드에 복사되었습니다!',
    SAVED_COLOURS: '저장된 색상',
    EXPLANATION: '설명',
    ABOUT_THIS_WEBSITE: '이 웹사이트에 대해',
    SKIP_TO_SETTINGS: '설정으로 건너뛰기',
    PASSES: '통과',
    FAILS: '실패',
    NO_COMBO_FOUND:
      '텍스트 색상을 변경해도 접근 가능한 조합을 찾을 수 없습니다. 배경색을 변경해 보세요.',
    CONTRAST_NORMAL_GOOD:
      '%(fg)는 배경 %(bg)과(와) 일반 텍스트에서 %(ratio):1의 좋은 대비 비율을 가집니다.',
    CONTRAST_NORMAL_LOW:
      '%(fg)는 배경 %(bg)과(와) 일반 텍스트에서 %(ratio):1의 낮은 대비 비율을 가집니다.',
    CONTRAST_LARGE_GOOD:
      '%(fg)는 배경 %(bg)과(와) 큰 텍스트에서 %(ratio):1의 좋은 대비 비율을 가집니다.',
    CONTRAST_LARGE_LOW:
      '%(fg)는 배경 %(bg)과(와) 큰 텍스트에서 %(ratio):1의 낮은 대비 비율을 가집니다.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg)는 배경 %(bg)과(와) 그래픽 및 UI 요소에서 %(ratio):1의 좋은 대비 비율을 가집니다.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg)는 배경 %(bg)과(와) 그래픽 및 UI 요소에서 %(ratio):1의 낮은 대비 비율을 가집니다.',
    UNSUPPORTED_COLOUR_SPACE: '죄송합니다. 이 색상 공간은 지원되지 않습니다!',
    CLOSE_ALERT: '알림 닫기',
    EXPLANATION_BODY: `<ul>
    <li>WCAG는 웹 콘텐츠 접근성 지침을 의미합니다.</li>
    <li>WCAG에는 A, AA, AAA 세 가지 레벨이 있으며, AA와 AAA에 대해 다른 대비 비율 요구사항이 있습니다.</li>
    <li>일반 텍스트는 최소 4.5:1의 대비 비율이 필요합니다.</li>
    <li>큰 텍스트는 최소 3:1의 대비 비율이 필요합니다.</li>
    <li>큰 텍스트는 14포인트(18.67 px) 이상 굵게 또는 18포인트(24 px) 이상으로 정의됩니다.</li>
    <li>모든 그래픽, 아이콘, UI 요소는 AA 및 AAA에 대해 최소 3:1 대비 비율을 가져야 합니다.</li>
  </ul>`,
    ABOUT_BODY: `<p><a href="https://chaboryk.xyz">Adam Chaboryk</a> 제작</p>
    <h3>개인정보 보호</h3>
    <p>이 웹사이트는 개인 데이터를 전혀 수집하지 않습니다. 최근에 사용한 색상 조합을 기억하기 위해 브라우저 로컬 스토리지를 사용하며, IP 주소, 지문, 쿠키를 추적하지 않는 프라이버시 중심 분석을 사용합니다.</p>
    <h3>오픈 소스</h3>
    <p><a href="https://github.com/adamchaboryk/contrast.report">GitHub에서 소스 코드를 확인</a>할 수 있습니다.</p>`,
    SPONSOR: '후원자',
  },
  hu: {
    CONTRAST_REPORT: 'Kontrasztjelentés',
    REVERSE: 'Megfordít',
    SAVE: 'Mentés',
    UNSAVE: 'Mentés törlése',
    SHARE: 'Megosztás',
    COLOURS: 'Színek',
    FOREGROUND: 'Előtér',
    BACKGROUND: 'Háttér',
    CONTRAST: 'Kontraszt',
    RESULTS: 'Eredmények',
    OPEN_FG_PICKER: 'Előtér színválasztó megnyitása',
    OPEN_BG_PICKER: 'Háttér színválasztó megnyitása',
    FOREGROUND_PICKER: 'Előtér színválasztó',
    BACKGROUND_PICKER: 'Háttér színválasztó',
    FOREGROUND_EYEDROPPER: 'Előtér színpipetta',
    BACKGROUND_EYEDROPPER: 'Háttér színpipetta',
    CONTRAST_RATIO: 'Kontrasztarány',
    PREVIEW: 'Előnézet',
    NORMAL_TEXT: 'Normál szöveg',
    LARGE_TEXT: 'Nagy szöveg',
    GRAPHICS_AND_UI: 'Grafika',
    LANGUAGE: 'Nyelv',
    GOOD: 'Jó',
    LOW: 'Alacsony',
    FIX: 'Javítás',
    SETTINGS: 'Beállítások',
    THEME: 'Téma',
    POP_OUT: 'Új ablakban megnyitás',
    SWATCH: 'Mintaszín: %(foreground) %(background) fölött.',
    SWATCH_SAVED_WINDOW: 'A mintaszín elmentve a főablakba.',
    LINK_COPIED: 'Link a vágólapra másolva!',
    SAVED_COLOURS: 'Mentett színek',
    EXPLANATION: 'Magyarázat',
    ABOUT_THIS_WEBSITE: 'A webhelyről',
    SKIP_TO_SETTINGS: 'Ugrás a beállításokhoz',
    PASSES: 'Megfelel',
    FAILS: 'Nem felel meg',
    NO_COMBO_FOUND:
      'Nem található hozzáférhető kombináció a szövegszín módosításával. Próbálja meg a háttérszínt változtatni.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) jó kontrasztarányt biztosít a háttérrel %(bg) normál szöveg esetén: %(ratio):1.',
    CONTRAST_NORMAL_LOW:
      '%(fg) alacsony kontrasztarányt biztosít a háttérrel %(bg) normál szöveg esetén: %(ratio):1.',
    CONTRAST_LARGE_GOOD:
      '%(fg) jó kontrasztarányt biztosít a háttérrel %(bg) nagy szöveg esetén: %(ratio):1.',
    CONTRAST_LARGE_LOW:
      '%(fg) alacsony kontrasztarányt biztosít a háttérrel %(bg) nagy szöveg esetén: %(ratio):1.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) jó kontrasztarányt biztosít a háttérrel %(bg) grafika és UI elemek esetén: %(ratio):1.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) alacsony kontrasztarányt biztosít a háttérrel %(bg) grafika és UI elemek esetén: %(ratio):1.',
    UNSUPPORTED_COLOUR_SPACE: 'Sajnáljuk, ez a színtér nem támogatott!',
    CLOSE_ALERT: 'Figyelmeztetés bezárása',
    EXPLANATION_BODY: `<ul>
    <li>A WCAG a Web Content Accessibility Guidelines rövidítése.</li>
    <li>A WCAG három szintet határoz meg: A, AA és AAA. Az AA és AAA szintekhez különböző kontrasztarány követelmények tartoznak.</li>
    <li>A normál szöveghez legalább 4,5:1 kontrasztarány szükséges.</li>
    <li>A nagy szöveghez legalább 3:1 kontrasztarány szükséges.</li>
    <li>A nagy szöveg 14 pt (18,67 px) vagy nagyobb félkövér, vagy 18 pt (24 px) vagy nagyobb.</li>
    <li>Az összes grafika, ikon és felületi elem legalább 3:1 kontrasztarányú kell, hogy legyen AA és AAA szinten is.</li>
  </ul>`,
    ABOUT_BODY: `<p>Készítette <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
    <h3>Adatvédelem</h3>
    <p>Ez a webhely nem gyűjt személyes adatokat. A böngésző helyi tárolóját használja a legutóbb használt színkombinációk megjegyzésére, és adatvédelmi elemzést alkalmaz, amely nem követi az IP-címeket, ujjlenyomatokat vagy sütiket.</p>
    <h3>Nyílt forráskód</h3>
    <p>Tekintse meg a <a href="https://github.com/adamchaboryk/contrast.report">forráskódot a GitHubon.</a></p>`,
    SPONSOR: 'Támogató',
  },
  id: {
    CONTRAST_REPORT: 'Laporan Kontras',
    REVERSE: 'Balik',
    SAVE: 'Simpan',
    UNSAVE: 'Hapus dari simpanan',
    SHARE: 'Bagikan',
    COLOURS: 'Warna',
    FOREGROUND: 'Latar depan',
    BACKGROUND: 'Latar belakang',
    CONTRAST: 'Kontras',
    RESULTS: 'Hasil',
    OPEN_FG_PICKER: 'Buka pemilih warna latar depan',
    OPEN_BG_PICKER: 'Buka pemilih warna latar belakang',
    FOREGROUND_PICKER: 'Pemilih warna latar depan',
    BACKGROUND_PICKER: 'Pemilih warna latar belakang',
    FOREGROUND_EYEDROPPER: 'Pipet latar depan',
    BACKGROUND_EYEDROPPER: 'Pipet latar belakang',
    CONTRAST_RATIO: 'Rasio Kontras',
    PREVIEW: 'Pratinjau',
    NORMAL_TEXT: 'Teks normal',
    LARGE_TEXT: 'Teks besar',
    GRAPHICS_AND_UI: 'Grafik',
    GOOD: 'Baik',
    LOW: 'Rendah',
    FIX: 'Perbaiki',
    SETTINGS: 'Pengaturan',
    THEME: 'Tema',
    POP_OUT: 'Buka di jendela baru',
    SWATCH: 'Contoh: %(foreground) pada %(background).',
    SWATCH_SAVED_WINDOW: 'Contoh disimpan di jendela utama.',
    LINK_COPIED: 'Tautan disalin ke papan klip!',
    SAVED_COLOURS: 'Warna tersimpan',
    EXPLANATION: 'Penjelasan',
    ABOUT_THIS_WEBSITE: 'Tentang situs ini',
    SKIP_TO_SETTINGS: 'Lompat ke pengaturan',
    PASSES: 'Lulus',
    FAILS: 'Gagal',
    NO_COMBO_FOUND:
      'Tidak ada kombinasi yang dapat diakses ditemukan dengan mengubah warna teks. Coba ubah warna latar belakang.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) memiliki rasio kontras baik %(ratio):1 dengan latar belakang %(bg) untuk teks normal.',
    CONTRAST_NORMAL_LOW:
      '%(fg) memiliki rasio kontras rendah %(ratio):1 dengan latar belakang %(bg) untuk teks normal.',
    CONTRAST_LARGE_GOOD:
      '%(fg) memiliki rasio kontras baik %(ratio):1 dengan latar belakang %(bg) untuk teks besar.',
    CONTRAST_LARGE_LOW:
      '%(fg) memiliki rasio kontras rendah %(ratio):1 dengan latar belakang %(bg) untuk teks besar.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) memiliki rasio kontras baik %(ratio):1 dengan latar belakang %(bg) untuk grafik dan elemen UI.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) memiliki rasio kontras rendah %(ratio):1 dengan latar belakang %(bg) untuk grafik dan elemen UI.',
    UNSUPPORTED_COLOUR_SPACE: 'Maaf, ruang warna ini tidak didukung!',
    CLOSE_ALERT: 'Tutup peringatan',
    EXPLANATION_BODY: `<ul>
    <li>WCAG adalah singkatan dari Pedoman Aksesibilitas Konten Web.</li>
    <li>WCAG memiliki tiga level: A, AA, dan AAA. Rasio kontras yang dibutuhkan berbeda untuk AA dan AAA.</li>
    <li>Teks ukuran normal membutuhkan rasio kontras minimal 4,5:1.</li>
    <li>Teks besar membutuhkan rasio kontras minimal 3:1.</li>
    <li>Teks besar didefinisikan sebagai 14 poin (18,67 px) tebal atau lebih besar, atau 18 poin (24 px) atau lebih besar.</li>
    <li>Semua grafik, ikon, atau elemen antarmuka harus memiliki rasio kontras minimal 3:1 untuk AA dan AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Dibuat oleh <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
    <h3>Privasi</h3>
    <p>Tidak ada data pribadi yang dikumpulkan melalui situs ini. Situs ini menggunakan penyimpanan lokal browser untuk mengingat kombinasi warna yang baru digunakan dan analitik yang berfokus pada privasi yang tidak melacak alamat IP, sidik jari, atau cookie.</p>
    <h3>Sumber terbuka</h3>
    <p>Lihat <a href="https://github.com/adamchaboryk/contrast.report">kode sumber di GitHub.</a></p>`,
    SPONSOR: 'Sponsor',
  },
  lv: {
    CONTRAST_REPORT: 'Kontrasta pārskats',
    REVERSE: 'Apgriezt',
    SAVE: 'Saglabāt',
    UNSAVE: 'Noņemt no saglabātajiem',
    SHARE: 'Kopīgot',
    COLOURS: 'Krāsas',
    FOREGROUND: 'Priekšplāns',
    BACKGROUND: 'Fons',
    CONTRAST: 'Kontrasts',
    RESULTS: 'Rezultāti',
    OPEN_FG_PICKER: 'Atvērt priekšplāna krāsu izvēlni',
    OPEN_BG_PICKER: 'Atvērt fona krāsu izvēlni',
    FOREGROUND_PICKER: 'Priekšplāna krāsu izvēlne',
    BACKGROUND_PICKER: 'Fona krāsu izvēlne',
    FOREGROUND_EYEDROPPER: 'Priekšplāna pipete',
    BACKGROUND_EYEDROPPER: 'Fona pipete',
    CONTRAST_RATIO: 'Kontrasta attiecība',
    PREVIEW: 'Priekšskats',
    NORMAL_TEXT: 'Parasts teksts',
    LARGE_TEXT: 'Liels teksts',
    GRAPHICS_AND_UI: 'Grafika',
    LANGUAGE: 'Valoda',
    GOOD: 'Labs',
    LOW: 'Zems',
    FIX: 'Labot',
    SETTINGS: 'Iestatījumi',
    THEME: 'Tēma',
    POP_OUT: 'Atvērt jaunā logā',
    SWATCH: 'Paraugs: %(foreground) uz %(background).',
    SWATCH_SAVED_WINDOW: 'Paraugs saglabāts galvenajā logā.',
    LINK_COPIED: 'Saite nokopēta starpliktuvē!',
    SAVED_COLOURS: 'Saglabātās krāsas',
    EXPLANATION: 'Paskaidrojums',
    ABOUT_THIS_WEBSITE: 'Par šo vietni',
    SKIP_TO_SETTINGS: 'Pāriet uz iestatījumiem',
    PASSES: 'Atbilst',
    FAILS: 'Neatbilst',
    NO_COMBO_FOUND:
      'Nav atrasta pieejama kombinācija, mainot teksta krāsu. Mēģiniet mainīt fona krāsu.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) ir laba kontrasta attiecība %(ratio):1 ar fonu %(bg) parastam tekstam.',
    CONTRAST_NORMAL_LOW:
      '%(fg) ir zema kontrasta attiecība %(ratio):1 ar fonu %(bg) parastam tekstam.',
    CONTRAST_LARGE_GOOD:
      '%(fg) ir laba kontrasta attiecība %(ratio):1 ar fonu %(bg) lielam tekstam.',
    CONTRAST_LARGE_LOW:
      '%(fg) ir zema kontrasta attiecība %(ratio):1 ar fonu %(bg) lielam tekstam.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) ir laba kontrasta attiecība %(ratio):1 ar fonu %(bg) grafikām un saskarnei.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) ir zema kontrasta attiecība %(ratio):1 ar fonu %(bg) grafikām un saskarnei.',
    UNSUPPORTED_COLOUR_SPACE: 'Atvainojiet, šī krāsu telpa netiek atbalstīta!',
    CLOSE_ALERT: 'Aizvērt paziņojumu',
    EXPLANATION_BODY: `<ul>
    <li>WCAG nozīmē Web satura pieejamības vadlīnijas.</li>
    <li>WCAG ir trīs līmeņi: A, AA un AAA, katram ar atšķirīgām kontrasta prasībām.</li>
    <li>Parastam tekstam nepieciešama vismaz 4,5:1 kontrasta attiecība.</li>
    <li>Lielam tekstam nepieciešama vismaz 3:1 kontrasta attiecība.</li>
    <li>Liels teksts ir definēts kā 14 punkti (18,67 px) treknrakstā vai lielāks, vai 18 punkti (24 px) vai lielāks.</li>
    <li>Grafikai, ikonām un saskarnes elementiem jābūt vismaz 3:1 kontrasta attiecībai gan AA, gan AAA līmenim.</li>
  </ul>`,
    ABOUT_BODY: `<p>Izveidoja <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
    <h3>Privātums</h3>
    <p>Šī vietne neievāc nekādus personas datus. Tā izmanto pārlūkprogrammas lokālo krātuvi, lai atcerētos nesen izmantotās krāsu kombinācijas, un privātumu ievērojošu analītiku, kas neizseko IP adreses, pirkstu nospiedumus vai sīkfailus.</p>
    <h3>Atvērtā pirmkoda</h3>
    <p>Skatiet <a href="https://github.com/adamchaboryk/contrast.report">pirmkodu GitHub.</a></p>`,
    SPONSOR: 'Atbalstītājs',
  },
  pl: {
    CONTRAST_REPORT: 'Raport kontrastu',
    REVERSE: 'Odwróć',
    SAVE: 'Zapisz',
    UNSAVE: 'Usuń zapis',
    SHARE: 'Udostępnij',
    COLOURS: 'Kolory',
    FOREGROUND: 'Kolor tekstu',
    BACKGROUND: 'Tło',
    CONTRAST: 'Kontrast',
    RESULTS: 'Wyniki',
    OPEN_FG_PICKER: 'Otwórz selektor koloru tekstu',
    OPEN_BG_PICKER: 'Otwórz selektor koloru tła',
    FOREGROUND_PICKER: 'Selektor koloru tekstu',
    BACKGROUND_PICKER: 'Selektor koloru tła',
    FOREGROUND_EYEDROPPER: 'Pipeta koloru tekstu',
    BACKGROUND_EYEDROPPER: 'Pipeta koloru tła',
    CONTRAST_RATIO: 'Wskaźnik kontrastu',
    PREVIEW: 'Podgląd',
    NORMAL_TEXT: 'Zwykły tekst',
    LARGE_TEXT: 'Duży tekst',
    GRAPHICS_AND_UI: 'Grafika',
    LANGUAGE: 'Język',
    GOOD: 'Dobry',
    LOW: 'Niski',
    FIX: 'Napraw',
    SETTINGS: 'Ustawienia',
    THEME: 'Motyw',
    POP_OUT: 'Otwórz w osobnym oknie',
    SWATCH: 'Próbka: %(foreground) na %(background).',
    SWATCH_SAVED_WINDOW: 'Próbka zapisana w głównym oknie.',
    LINK_COPIED: 'Link skopiowany do schowka!',
    SAVED_COLOURS: 'Zapisane kolory',
    EXPLANATION: 'Wyjaśnienie',
    ABOUT_THIS_WEBSITE: 'O tej stronie',
    SKIP_TO_SETTINGS: 'Przejdź do ustawień',
    PASSES: 'Zaliczono',
    FAILS: 'Nie zaliczono',
    NO_COMBO_FOUND:
      'Nie znaleziono dostępnej kombinacji poprzez zmianę koloru tekstu. Spróbuj zmienić kolor tła.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) ma dobry współczynnik kontrastu %(ratio):1 z tłem %(bg) dla zwykłego tekstu.',
    CONTRAST_NORMAL_LOW:
      '%(fg) ma niski współczynnik kontrastu %(ratio):1 z tłem %(bg) dla zwykłego tekstu.',
    CONTRAST_LARGE_GOOD:
      '%(fg) ma dobry współczynnik kontrastu %(ratio):1 z tłem %(bg) dla dużego tekstu.',
    CONTRAST_LARGE_LOW:
      '%(fg) ma niski współczynnik kontrastu %(ratio):1 z tłem %(bg) dla dużego tekstu.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) ma dobry współczynnik kontrastu %(ratio):1 z tłem %(bg) dla grafiki i elementów UI.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) ma niski współczynnik kontrastu %(ratio):1 z tłem %(bg) dla grafiki i elementów UI.',
    UNSUPPORTED_COLOUR_SPACE:
      'Przykro nam, ta przestrzeń kolorów nie jest obsługiwana!',
    CLOSE_ALERT: 'Zamknij alert',
    EXPLANATION_BODY: `<ul>
      <li>WCAG to skrót od Wytycznych Dostępności Treści Internetowych.</li>
      <li>WCAG ma trzy poziomy: A, AA i AAA. Różne poziomy wymagają różnych współczynników kontrastu.</li>
      <li>Zwykły tekst wymaga współczynnika kontrastu co najmniej 4,5:1.</li>
      <li>Duży tekst wymaga współczynnika kontrastu co najmniej 3:1.</li>
      <li>Duży tekst to 14 pkt (18,67 px) i pogrubienie lub większy, albo 18 pkt (24 px) lub większy.</li>
      <li>Wszystkie grafiki, ikony i elementy interfejsu powinny mieć współczynnik kontrastu co najmniej 3:1 dla AA i AAA.</li>
    </ul>`,
    ABOUT_BODY: `<p>Stworzone przez <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Prywatność</h3>
      <p>Strona nie zbiera danych osobowych. Przechowuje ostatnio używane kombinacje kolorów w pamięci przeglądarki. Wykorzystuje analitykę skoncentrowaną na prywatności, bez śledzenia adresów IP, odcisków palców ani ciasteczek.</p>
      <h3>Open source</h3>
      <p>Zobacz <a href="https://github.com/adamchaboryk/contrast.report">kod źródłowy na GitHub.</a></p>`,
    SPONSOR: 'Sponsor',
  },
  it: {
    CONTRAST_REPORT: 'Rapporto sul contrasto',
    REVERSE: 'Inverti',
    SAVE: 'Salva',
    UNSAVE: 'Rimuovi salvataggio',
    SHARE: 'Condividi',
    COLOURS: 'Colori',
    FOREGROUND: 'Colore del testo',
    BACKGROUND: 'Sfondo',
    CONTRAST: 'Contrasto',
    RESULTS: 'Risultati',
    OPEN_FG_PICKER: 'Apri selettore colore del testo',
    OPEN_BG_PICKER: 'Apri selettore colore sfondo',
    FOREGROUND_PICKER: 'Selettore colore del testo',
    BACKGROUND_PICKER: 'Selettore colore sfondo',
    FOREGROUND_EYEDROPPER: 'Contagocce colore del testo',
    BACKGROUND_EYEDROPPER: 'Contagocce colore sfondo',
    CONTRAST_RATIO: 'Rapporto di contrasto',
    PREVIEW: 'Anteprima',
    NORMAL_TEXT: 'Testo normale',
    LARGE_TEXT: 'Testo grande',
    GRAPHICS_AND_UI: 'Grafica',
    GOOD: 'Buono',
    LOW: 'Basso',
    FIX: 'Correggi',
    SETTINGS: 'Impostazioni',
    THEME: 'Tema',
    LANGUAGE: 'Lingua',
    POP_OUT: 'Apri in finestra separata',
    SWATCH: 'Campione: %(foreground) su %(background).',
    SWATCH_SAVED_WINDOW: 'Campione salvato nella finestra principale.',
    LINK_COPIED: 'Link copiato negli appunti!',
    SAVED_COLOURS: 'Colori salvati',
    EXPLANATION: 'Spiegazione',
    ABOUT_THIS_WEBSITE: 'Informazioni su questo sito',
    SKIP_TO_SETTINGS: 'Vai alle impostazioni',
    PASSES: 'Superato',
    FAILS: 'Non superato',
    NO_COMBO_FOUND:
      'Nessuna combinazione accessibile trovata cambiando il colore del testo. Prova a cambiare il colore dello sfondo.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) ha un buon rapporto di contrasto di %(ratio):1 con lo sfondo %(bg) per il testo normale.',
    CONTRAST_NORMAL_LOW:
      '%(fg) ha un basso rapporto di contrasto di %(ratio):1 con lo sfondo %(bg) per il testo normale.',
    CONTRAST_LARGE_GOOD:
      '%(fg) ha un buon rapporto di contrasto di %(ratio):1 con lo sfondo %(bg) per il testo grande.',
    CONTRAST_LARGE_LOW:
      '%(fg) ha un basso rapporto di contrasto di %(ratio):1 con lo sfondo %(bg) per il testo grande.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) ha un buon rapporto di contrasto di %(ratio):1 con lo sfondo %(bg) per grafica e elementi UI.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) ha un basso rapporto di contrasto di %(ratio):1 con lo sfondo %(bg) per grafica e elementi UI.',
    UNSUPPORTED_COLOUR_SPACE:
      'Spiacente, questo spazio colore non è supportato!',
    CLOSE_ALERT: 'Chiudi avviso',
    EXPLANATION_BODY: `<ul>
      <li>WCAG è l'abbreviazione di Web Content Accessibility Guidelines.</li>
      <li>WCAG ha tre livelli: A, AA e AAA. Ogni livello richiede rapporti di contrasto differenti.</li>
      <li>Il testo normale richiede un rapporto di contrasto minimo di 4,5:1.</li>
      <li>Il testo grande richiede un rapporto di contrasto minimo di 3:1.</li>
      <li>Il testo grande è definito come 14 pt (18,67 px) in grassetto o più grande, oppure 18 pt (24 px) o più grande.</li>
      <li>Tutte le grafiche, icone o elementi dell'interfaccia devono avere un rapporto di contrasto minimo di 3:1 per AA e AAA.</li>
    </ul>`,
    ABOUT_BODY: `<p>Creato da <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Privacy</h3>
      <p>Non vengono raccolti dati personali. Il sito utilizza la memoria del browser per salvare le combinazioni di colore recentemente usate. Viene utilizzata analisi orientata alla privacy, senza tracciamento di indirizzi IP, impronte digitali o cookie.</p>
      <h3>Open source</h3>
      <p>Visualizza il <a href="https://github.com/adamchaboryk/contrast.report">codice sorgente su GitHub.</a></p>`,
    SPONSOR: 'Sponsor',
  },
  cs: {
    CONTRAST_REPORT: 'Zpráva o kontrastu',
    REVERSE: 'Invertovat',
    SAVE: 'Uložit',
    UNSAVE: 'Odstranit uložení',
    SHARE: 'Sdílet',
    COLOURS: 'Barvy',
    FOREGROUND: 'Barva textu',
    BACKGROUND: 'Pozadí',
    CONTRAST: 'Kontrast',
    RESULTS: 'Výsledky',
    OPEN_FG_PICKER: 'Otevřít výběr barvy textu',
    OPEN_BG_PICKER: 'Otevřít výběr barvy pozadí',
    FOREGROUND_PICKER: 'Výběr barvy textu',
    BACKGROUND_PICKER: 'Výběr barvy pozadí',
    FOREGROUND_EYEDROPPER: 'Kapátko barvy textu',
    BACKGROUND_EYEDROPPER: 'Kapátko barvy pozadí',
    CONTRAST_RATIO: 'Poměr kontrastu',
    PREVIEW: 'Náhled',
    NORMAL_TEXT: 'Normální text',
    LARGE_TEXT: 'Velký text',
    GRAPHICS_AND_UI: 'Grafika',
    GOOD: 'Dobré',
    LOW: 'Nízké',
    FIX: 'Opravit',
    SETTINGS: 'Nastavení',
    THEME: 'Téma',
    POP_OUT: 'Otevřít v novém okně',
    SWATCH: 'Vzor: %(foreground) na %(background).',
    SWATCH_SAVED_WINDOW: 'Vzor uložen do hlavního okna.',
    LINK_COPIED: 'Odkaz zkopírován do schránky!',
    SAVED_COLOURS: 'Uložené barvy',
    EXPLANATION: 'Vysvětlení',
    ABOUT_THIS_WEBSITE: 'O této stránce',
    SKIP_TO_SETTINGS: 'Přejít na nastavení',
    PASSES: 'Splněno',
    FAILS: 'Nesplněno',
    NO_COMBO_FOUND:
      'Nenalezena žádná přístupná kombinace změnou barvy textu. Zkuste změnit barvu pozadí.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) má dobrý poměr kontrastu %(ratio):1 s pozadím %(bg) pro normální text.',
    CONTRAST_NORMAL_LOW:
      '%(fg) má nízký poměr kontrastu %(ratio):1 s pozadím %(bg) pro normální text.',
    CONTRAST_LARGE_GOOD:
      '%(fg) má dobrý poměr kontrastu %(ratio):1 s pozadím %(bg) pro velký text.',
    CONTRAST_LARGE_LOW:
      '%(fg) má nízký poměr kontrastu %(ratio):1 s pozadím %(bg) pro velký text.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) má dobrý poměr kontrastu %(ratio):1 s pozadím %(bg) pro grafiku a UI prvky.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) má nízký poměr kontrastu %(ratio):1 s pozadím %(bg) pro grafiku a UI prvky.',
    UNSUPPORTED_COLOUR_SPACE: 'Tato barevná prostor není podporován!',
    CLOSE_ALERT: 'Zavřít upozornění',
    EXPLANATION_BODY: `<ul>
      <li>WCAG je zkratka pro Web Content Accessibility Guidelines.</li>
      <li>WCAG má tři úrovně: A, AA a AAA. Každá úroveň vyžaduje různé poměry kontrastu.</li>
      <li>Normální text vyžaduje poměr kontrastu alespoň 4,5:1.</li>
      <li>Velký text vyžaduje poměr kontrastu alespoň 3:1.</li>
      <li>Velký text je definován jako 14 pt (18,67 px) tučný nebo větší, nebo 18 pt (24 px) nebo větší.</li>
      <li>Veškerá grafika, ikony a prvky rozhraní musí mít poměr kontrastu alespoň 3:1 pro AA a AAA.</li>
    </ul>`,
    ABOUT_BODY: `<p>Vytvořil <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Soukromí</h3>
      <p>Nebyla nikdy shromažďována osobní data. Web používá úložiště prohlížeče k zapamatování nedávno použitých kombinací barev. Analytika je zaměřena na ochranu soukromí, bez sledování IP adres, otisků prstů nebo cookies.</p>
      <h3>Open source</h3>
      <p>Zobrazit <a href="https://github.com/adamchaboryk/contrast.report">zdrojový kód na GitHubu.</a></p>`,
    SPONSOR: 'Sponzor',
  },
  da: {
    CONTRAST_REPORT: 'Kontrastrapport',
    REVERSE: 'Omvend',
    SAVE: 'Gem',
    UNSAVE: 'Fjern gem',
    SHARE: 'Del',
    COLOURS: 'Farver',
    FOREGROUND: 'Forgrundsfarve',
    BACKGROUND: 'Baggrund',
    CONTRAST: 'Kontrast',
    RESULTS: 'Resultater',
    OPEN_FG_PICKER: 'Åbn farvevælger for forgrund',
    OPEN_BG_PICKER: 'Åbn farvevælger for baggrund',
    FOREGROUND_PICKER: 'Forgrundsfarvevælger',
    BACKGROUND_PICKER: 'Baggrundsfarvevælger',
    FOREGROUND_EYEDROPPER: 'Forgrundpipette',
    BACKGROUND_EYEDROPPER: 'Baggrundpipette',
    CONTRAST_RATIO: 'Kontrastratio',
    PREVIEW: 'Forhånd',
    NORMAL_TEXT: 'Normal tekst',
    LARGE_TEXT: 'Stor tekst',
    GRAPHICS_AND_UI: 'Grafik',
    GOOD: 'God',
    LOW: 'Lav',
    FIX: 'Ret',
    SETTINGS: 'Indstillinger',
    THEME: 'Tema',
    POP_OUT: 'Åbn i separat vindue',
    SWATCH: 'Prøve: %(foreground) på %(background).',
    SWATCH_SAVED_WINDOW: 'Prøve gemt i hovedvinduet.',
    LINK_COPIED: 'Link kopieret til udklipsholder!',
    SAVED_COLOURS: 'Gemte farver',
    EXPLANATION: 'Forklaring',
    LANGUAGE: 'Taal',
    ABOUT_THIS_WEBSITE: 'Om dette websted',
    SKIP_TO_SETTINGS: 'Spring til indstillinger',
    PASSES: 'Bestået',
    FAILS: 'Ikke bestået',
    NO_COMBO_FOUND:
      'Ingen tilgængelig kombination fundet ved at ændre tekstfarven. Prøv at ændre baggrundsfarven.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) har en god kontrastratio på %(ratio):1 med baggrunden %(bg) for normal tekst.',
    CONTRAST_NORMAL_LOW:
      '%(fg) har en lav kontrastratio på %(ratio):1 med baggrunden %(bg) for normal tekst.',
    CONTRAST_LARGE_GOOD:
      '%(fg) har en god kontrastratio på %(ratio):1 med baggrunden %(bg) for stor tekst.',
    CONTRAST_LARGE_LOW:
      '%(fg) har en lav kontrastratio på %(ratio):1 med baggrunden %(bg) for stor tekst.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) har en god kontrastratio på %(ratio):1 med baggrunden %(bg) for grafik og UI-elementer.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) har en lav kontrastratio på %(ratio):1 med baggrunden %(bg) for grafik og UI-elementer.',
    UNSUPPORTED_COLOUR_SPACE: 'Beklager, denne farverum understøttes ikke!',
    CLOSE_ALERT: 'Luk advarsel',
    EXPLANATION_BODY: `<ul>
      <li>WCAG står for Web Content Accessibility Guidelines.</li>
      <li>WCAG har tre niveauer: A, AA og AAA. Hvert niveau kræver forskellige kontrastratioer.</li>
      <li>Normal tekst kræver en kontrastratio på mindst 4,5:1.</li>
      <li>Stor tekst kræver en kontrastratio på mindst 3:1.</li>
      <li>Stor tekst er defineret som 14 pt (18,67 px) og fed eller større, eller 18 pt (24 px) eller større.</li>
      <li>Alle grafik, ikoner og brugerfladeelementer skal have mindst en kontrastratio på 3:1 for både AA og AAA.</li>
    </ul>`,
    ABOUT_BODY: `<p>Udviklet af <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Privatliv</h3>
      <p>Ingen personlige data indsamles nogensinde. Webstedet bruger browserens weblager til at huske nyligt anvendte farvekombinationer. Privatlivsfokuseret analyse bruges uden sporing af IP-adresser, fingeraftryk eller cookies.</p>
      <h3>Open source</h3>
      <p>Se <a href="https://github.com/adamchaboryk/contrast.report">kildekoden på GitHub.</a></p>`,
    SPONSOR: 'Sponsor',
  },
  et: {
    CONTRAST_REPORT: 'Kontrastiaruanne',
    REVERSE: 'Pööra ümber',
    SAVE: 'Salvesta',
    UNSAVE: 'Eemalda salvestus',
    SHARE: 'Jaga',
    COLOURS: 'Värvid',
    FOREGROUND: 'Esiplaani värv',
    BACKGROUND: 'Taust',
    CONTRAST: 'Kontrast',
    RESULTS: 'Tulemused',
    OPEN_FG_PICKER: 'Ava esiplaani värvivalija',
    OPEN_BG_PICKER: 'Ava taustavärvi valija',
    FOREGROUND_PICKER: 'Esiplaani värvivalija',
    BACKGROUND_PICKER: 'Taustavärvi valija',
    FOREGROUND_EYEDROPPER: 'Esiplaani pipett',
    BACKGROUND_EYEDROPPER: 'Tausta pipett',
    CONTRAST_RATIO: 'Kontrasti suhe',
    PREVIEW: 'Eelvaade',
    NORMAL_TEXT: 'Tavaline tekst',
    LARGE_TEXT: 'Suur tekst',
    GRAPHICS_AND_UI: 'Graafika',
    GOOD: 'Hea',
    LOW: 'Madal',
    FIX: 'Paranda',
    SETTINGS: 'Seaded',
    THEME: 'Teema',
    POP_OUT: 'Ava eraldi aknas',
    SWATCH: 'Proov: %(foreground) taustal %(background).',
    SWATCH_SAVED_WINDOW: 'Proov salvestatud põhjaknasse.',
    LINK_COPIED: 'Link kopeeritud lõikelauale!',
    SAVED_COLOURS: 'Salvestatud värvid',
    EXPLANATION: 'Selgitus',
    ABOUT_THIS_WEBSITE: 'Teave selle veebisaidi kohta',
    SKIP_TO_SETTINGS: 'Liigu seadistustesse',
    PASSES: 'Läbib',
    FAILS: 'Ei läbi',
    NO_COMBO_FOUND:
      'Ühtegi juurdepääsetavat kombinatsiooni ei leitud teksti värvi muutmisega. Proovi muuta taustavärvi.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) on hea kontrastisuhe %(ratio):1 taustaga %(bg) tavalise teksti jaoks.',
    CONTRAST_NORMAL_LOW:
      '%(fg) on madal kontrastisuhe %(ratio):1 taustaga %(bg) tavalise teksti jaoks.',
    CONTRAST_LARGE_GOOD:
      '%(fg) on hea kontrastisuhe %(ratio):1 taustaga %(bg) suure teksti jaoks.',
    CONTRAST_LARGE_LOW:
      '%(fg) on madal kontrastisuhe %(ratio):1 taustaga %(bg) suure teksti jaoks.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) on hea kontrastisuhe %(ratio):1 taustaga %(bg) graafika ja UI elementide jaoks.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) on madal kontrastisuhe %(ratio):1 taustaga %(bg) graafika ja UI elementide jaoks.',
    UNSUPPORTED_COLOUR_SPACE: 'Kahjuks see värviruum ei ole toetatud!',
    CLOSE_ALERT: 'Sulge teade',
    EXPLANATION_BODY: `<ul>
      <li>WCAG on lühend veebisisu juurdepääsetavuse juhistest (Web Content Accessibility Guidelines).</li>
      <li>WCAG-il on kolm taset: A, AA ja AAA. Iga tase nõuab erinevaid kontrastisuhteid.</li>
      <li>Tavaline tekst vajab vähemalt 4,5:1 kontrastisuhet.</li>
      <li>Suur tekst vajab vähemalt 3:1 kontrastisuhet.</li>
      <li>Suur tekst on määratletud kui 14 pt (18,67 px) ja rasvane või suurem, või 18 pt (24 px) või suurem.</li>
      <li>Kõik graafika, ikoonid ja liidese elemendid peavad omama vähemalt 3:1 kontrastisuhet nii AA kui AAA tasemel.</li>
    </ul>`,
    ABOUT_BODY: `<p>Loodud <a href="https://chaboryk.xyz">Adam Chaboryk</a> poolt.</p>
      <h3>Privaatsus</h3>
      <p>Isikuandmeid ei koguta kunagi. Veebisait kasutab brauseri salvestust hiljuti kasutatud värvikombinatsioonide meeldejätmiseks. Kasutatakse privaatsusele keskendunud analüütikat, mis ei jälgi IP-aadresse, sõrmejälgi ega küpsiseid.</p>
      <h3>Avatud lähtekood</h3>
      <p>Vaata <a href="https://github.com/adamchaboryk/contrast.report">lähtekoodi GitHubis.</a></p>`,
    SPONSOR: 'Sponsor',
  },
  fi: {
    CONTRAST_REPORT: 'Kontrastiraportti',
    REVERSE: 'Käännä',
    SAVE: 'Tallenna',
    UNSAVE: 'Poista tallennus',
    SHARE: 'Jaa',
    COLOURS: 'Värit',
    FOREGROUND: 'Etualan väri',
    BACKGROUND: 'Tausta',
    CONTRAST: 'Kontrasti',
    RESULTS: 'Tulokset',
    OPEN_FG_PICKER: 'Avaa etualan värin valitsin',
    OPEN_BG_PICKER: 'Avaa taustavärin valitsin',
    FOREGROUND_PICKER: 'Etualan värin valitsin',
    BACKGROUND_PICKER: 'Taustavärin valitsin',
    FOREGROUND_EYEDROPPER: 'Etualan pipetti',
    BACKGROUND_EYEDROPPER: 'Taustan pipetti',
    CONTRAST_RATIO: 'Kontrastisuhde',
    PREVIEW: 'Esikatselu',
    NORMAL_TEXT: 'Normaali teksti',
    LARGE_TEXT: 'Suuri teksti',
    GRAPHICS_AND_UI: 'Grafiikka',
    GOOD: 'Hyvä',
    LOW: 'Heikko',
    FIX: 'Korjaa',
    SETTINGS: 'Asetukset',
    THEME: 'Teema',
    POP_OUT: 'Kuva kuvassa',
    SWATCH: 'Näyte: %(foreground) taustalla %(background).',
    SWATCH_SAVED_WINDOW: 'Näyte tallennettu pääikkunaan.',
    LINK_COPIED: 'Linkki kopioitu leikepöydälle!',
    SAVED_COLOURS: 'Tallennetut värit',
    EXPLANATION: 'Selitys',
    ABOUT_THIS_WEBSITE: 'Tietoja tästä sivustosta',
    SKIP_TO_SETTINGS: 'Siirry asetuksiin',
    PASSES: 'Hyväksytty',
    FAILS: 'Hylätty',
    NO_COMBO_FOUND:
      'Yhtään saavutettavaa yhdistelmää ei löytynyt muuttamalla tekstin väriä. Kokeile muuttaa taustaväriä.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) omaa hyvän kontrastisuhteen %(ratio):1 taustan %(bg) kanssa normaalille tekstille.',
    CONTRAST_NORMAL_LOW:
      '%(fg) omaa heikon kontrastisuhteen %(ratio):1 taustan %(bg) kanssa normaalille tekstille.',
    CONTRAST_LARGE_GOOD:
      '%(fg) omaa hyvän kontrastisuhteen %(ratio):1 taustan %(bg) kanssa suurelle tekstille.',
    CONTRAST_LARGE_LOW:
      '%(fg) omaa heikon kontrastisuhteen %(ratio):1 taustan %(bg) kanssa suurelle tekstille.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) omaa hyvän kontrastisuhteen %(ratio):1 taustan %(bg) kanssa grafiikalle ja käyttöliittymäelementeille.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) omaa heikon kontrastisuhteen %(ratio):1 taustan %(bg) kanssa grafiikalle ja käyttöliittymäelementeille.',
    UNSUPPORTED_COLOUR_SPACE: 'Tätä värimaailmaa ei tueta!',
    CLOSE_ALERT: 'Sulje ilmoitus',
    EXPLANATION_BODY: `<ul>
      <li>WCAG tarkoittaa Web Content Accessibility Guidelines -ohjeita.</li>
      <li>WCAG:lla on kolme tasoa: A, AA ja AAA. Jokainen taso edellyttää eri kontrastisuhteita.</li>
      <li>Normaalikokoinen teksti vaatii vähintään 4,5:1 kontrastisuhteen.</li>
      <li>Suuri teksti vaatii vähintään 3:1 kontrastisuhteen.</li>
      <li>Suureksi tekstiksi määritellään 14 pt (18,67 px) lihavoitu tai suurempi, tai 18 pt (24 px) tai suurempi.</li>
      <li>Kaikki grafiikka, kuvakkeet ja käyttöliittymäelementit tarvitsevat vähintään 3:1 kontrastisuhteen sekä AA- että AAA-tasolla.</li>
    </ul>`,
    ABOUT_BODY: `<p>Luonut <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
      <h3>Tietosuoja</h3>
      <p>Henkilötietoja ei koskaan kerätä. Sivusto käyttää selaimen tallennustilaa viimeksi käytettyjen värikombinaatioiden muistamiseen. Käytössä on yksityisyyteen keskittynyt analytiikka ilman IP-osoitteiden, sormenjälkien tai evästeiden seurantaa.</p>
      <h3>Avoin lähdekoodi</h3>
      <p>Tarkastele <a href="https://github.com/adamchaboryk/contrast.report">lähdekoodia GitHubissa.</a></p>`,
    SPONSOR: 'Sponsori',
  },
  tr: {
    CONTRAST_REPORT: 'Kontrast Raporu',
    REVERSE: 'Tersine çevir',
    SAVE: 'Kaydet',
    UNSAVE: 'Kaydı sil',
    SHARE: 'Paylaş',
    COLOURS: 'Renkler',
    FOREGROUND: 'Ön plan',
    BACKGROUND: 'Arka plan',
    CONTRAST: 'Kontrast',
    RESULTS: 'Sonuçlar',
    OPEN_FG_PICKER: 'Ön plan renk seçicisini aç',
    OPEN_BG_PICKER: 'Arka plan renk seçicisini aç',
    FOREGROUND_PICKER: 'Ön plan renk seçici',
    BACKGROUND_PICKER: 'Arka plan renk seçici',
    FOREGROUND_EYEDROPPER: 'Ön plan damlalığı',
    BACKGROUND_EYEDROPPER: 'Arka plan damlalığı',
    CONTRAST_RATIO: 'Kontrast Oranı',
    PREVIEW: 'Önizleme',
    NORMAL_TEXT: 'Normal metin',
    LARGE_TEXT: 'Büyük metin',
    GRAPHICS_AND_UI: 'Grafikler',
    LANGUAGE: 'Dil',
    GOOD: 'İyi',
    LOW: 'Düşük',
    FIX: 'Düzelt',
    SETTINGS: 'Ayarlar',
    THEME: 'Tema',
    POP_OUT: 'Ayrı aç',
    SWATCH: 'Numune: %(foreground), %(background) üzerinde.',
    SWATCH_SAVED_WINDOW: 'Numune ana pencereye kaydedildi.',
    LINK_COPIED: 'Bağlantı panoya kopyalandı!',
    SAVED_COLOURS: 'Kaydedilen renkler',
    EXPLANATION: 'Açıklama',
    ABOUT_THIS_WEBSITE: 'Bu web sitesi hakkında',
    SKIP_TO_SETTINGS: 'Ayarlar bölümüne geç',
    PASSES: 'Geçti',
    FAILS: 'Başarısız',
    NO_COMBO_FOUND:
      'Metin rengini değiştirerek erişilebilir bir kombinasyon bulunamadı. Arka plan rengini değiştirmeyi deneyin.',
    CONTRAST_NORMAL_GOOD:
      '%(fg), %(bg) arka planı ile %(ratio):1 kontrast oranına sahip ve normal metin için uygundur.',
    CONTRAST_NORMAL_LOW:
      '%(fg), %(bg) arka planı ile %(ratio):1 düşük kontrast oranına sahip ve normal metin için yetersizdir.',
    CONTRAST_LARGE_GOOD:
      '%(fg), %(bg) arka planı ile %(ratio):1 kontrast oranına sahip ve büyük metin için uygundur.',
    CONTRAST_LARGE_LOW:
      '%(fg), %(bg) arka planı ile %(ratio):1 düşük kontrast oranına sahip ve büyük metin için yetersizdir.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg), %(bg) arka planı ile %(ratio):1 kontrast oranına sahip ve grafik ile arayüz öğeleri için uygundur.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg), %(bg) arka planı ile %(ratio):1 düşük kontrast oranına sahip ve grafik ile arayüz öğeleri için yetersizdir.',
    UNSUPPORTED_COLOUR_SPACE: 'Üzgünüz, bu renk alanı desteklenmiyor!',
    CLOSE_ALERT: 'Uyarıyı kapat',
    EXPLANATION_BODY: `<ul>
    <li>WCAG, Web İçeriği Erişilebilirlik Yönergeleri'nin kısaltmasıdır.</li>
    <li>WCAG'nin üç seviyesi vardır: A, AA ve AAA. AA ve AAA için farklı kontrast oranı gereksinimleri vardır.</li>
    <li>Normal metin en az 4.5:1 kontrast oranına sahip olmalıdır.</li>
    <li>Büyük metin en az 3:1 kontrast oranına sahip olmalıdır.</li>
    <li>Büyük metin 14 punto (18.67 px) kalın veya daha büyük, ya da 18 punto (24 px) veya daha büyük olarak tanımlanır.</li>
    <li>Tüm grafikler, simgeler ve arayüz öğeleri AA ve AAA için en az 3:1 kontrast oranına sahip olmalıdır.</li>
  </ul>`,
    ABOUT_BODY: `<p><a href="https://chaboryk.xyz">Adam Chaboryk</a> tarafından hazırlanmıştır.</p>
  <h3>Gizlilik</h3>
  <p>Bu web sitesi hiçbir kişisel veri toplamaz. Tarayıcınızın yerel depolamasını kullanarak son kullanılan renk kombinasyonlarını hatırlar. IP adreslerini, parmak izlerini veya çerezleri izlemeyen gizlilik odaklı analizler kullanır.</p>
  <h3>Açık kaynak</h3>
  <p><a href="https://github.com/adamchaboryk/contrast.report">GitHub</a> üzerinde kaynak kodu görüntüleyin.</p>`,
    SPONSOR: 'Sponsor',
  },
  sk: {
    CONTRAST_REPORT: 'Správa o kontraste',
    REVERSE: 'Obrátiť',
    SAVE: 'Uložiť',
    UNSAVE: 'Zmazať',
    SHARE: 'Zdieľať',
    COLOURS: 'Farby',
    FOREGROUND: 'Popredie',
    BACKGROUND: 'Pozadie',
    CONTRAST: 'Kontrast',
    RESULTS: 'Výsledky',
    OPEN_FG_PICKER: 'Otvoriť výber farby popredia',
    OPEN_BG_PICKER: 'Otvoriť výber farby pozadia',
    FOREGROUND_PICKER: 'Výber farby popredia',
    BACKGROUND_PICKER: 'Výber farby pozadia',
    FOREGROUND_EYEDROPPER: 'Kvapkadlo popredia',
    BACKGROUND_EYEDROPPER: 'Kvapkadlo pozadia',
    CONTRAST_RATIO: 'Pomer kontrastu',
    PREVIEW: 'Náhľad',
    NORMAL_TEXT: 'Bežný text',
    LARGE_TEXT: 'Veľký text',
    GRAPHICS_AND_UI: 'Grafika',
    GOOD: 'Dobrý',
    LOW: 'Nízky',
    FIX: 'Opraviť',
    SETTINGS: 'Nastavenia',
    THEME: 'Téma',
    LANGUAGE: 'Jazyk',
    POP_OUT: 'Otvoriť samostatne',
    SWATCH: 'Vzorka: %(foreground) na %(background).',
    SWATCH_SAVED_WINDOW: 'Vzorka uložená do hlavného okna.',
    LINK_COPIED: 'Odkaz skopírovaný do schránky!',
    SAVED_COLOURS: 'Uložené farby',
    EXPLANATION: 'Vysvetlenie',
    ABOUT_THIS_WEBSITE: 'O tejto webovej stránke',
    SKIP_TO_SETTINGS: 'Prejsť na nastavenia',
    PASSES: 'Vyhovuje',
    FAILS: 'Nevyhovuje',
    NO_COMBO_FOUND:
      'Nenašla sa prístupná kombinácia zmenou farby textu. Skúste zmeniť farbu pozadia.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) má dobrý kontrastný pomer %(ratio):1 s pozadím %(bg) pre bežný text.',
    CONTRAST_NORMAL_LOW:
      '%(fg) má nízky kontrastný pomer %(ratio):1 s pozadím %(bg) pre bežný text.',
    CONTRAST_LARGE_GOOD:
      '%(fg) má dobrý kontrastný pomer %(ratio):1 s pozadím %(bg) pre veľký text.',
    CONTRAST_LARGE_LOW:
      '%(fg) má nízky kontrastný pomer %(ratio):1 s pozadím %(bg) pre veľký text.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) má dobrý kontrastný pomer %(ratio):1 s pozadím %(bg) pre grafiku a prvky rozhrania.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) má nízky kontrastný pomer %(ratio):1 s pozadím %(bg) pre grafiku a prvky rozhrania.',
    UNSUPPORTED_COLOUR_SPACE:
      'Ľutujeme, tento farebný priestor nie je podporovaný!',
    CLOSE_ALERT: 'Zavrieť upozornenie',
    EXPLANATION_BODY: `<ul>
    <li>WCAG je skratka pre Web Content Accessibility Guidelines (Smernice pre prístupnosť webového obsahu).</li>
    <li>WCAG má tri úrovne: A, AA a AAA. Požiadavky na kontrast sa líšia medzi úrovňami AA a AAA.</li>
    <li>Bežný text musí mať kontrastný pomer aspoň 4.5:1.</li>
    <li>Veľký text musí mať kontrastný pomer aspoň 3:1.</li>
    <li>Veľký text je definovaný ako 14 bodov (18.67 px) tučný alebo väčší, alebo 18 bodov (24 px) alebo väčší.</li>
    <li>Všetka grafika, ikony a prvky rozhrania by mali mať aspoň 3:1 kontrast pre úrovne AA a AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Vytvoril <a href="https://chaboryk.xyz">Adam Chaboryk</a>.</p>
  <h3>Súkromie</h3>
  <p>Táto stránka nikdy nezhromažďuje osobné údaje. Používa úložisko prehliadača na zapamätanie nedávno použitých farebných kombinácií. Používa analytiku zameranú na súkromie bez sledovania IP adries, odtlačkov alebo cookies.</p>
  <h3>Open source</h3>
  <p>Pozrite si <a href="https://github.com/adamchaboryk/contrast.report">zdrojový kód na GitHube</a>.</p>`,
    SPONSOR: 'Sponzor',
  },
  nb: {
    CONTRAST_REPORT: 'Kontrastrapport',
    REVERSE: 'Reverser',
    SAVE: 'Lagre',
    UNSAVE: 'Fjern lagring',
    SHARE: 'Del',
    COLOURS: 'Farger',
    FOREGROUND: 'Forgrunn',
    BACKGROUND: 'Bakgrunn',
    CONTRAST: 'Kontrast',
    RESULTS: 'Resultater',
    OPEN_FG_PICKER: 'Åpne forgrunnsfargevelger',
    OPEN_BG_PICKER: 'Åpne bakgrunnsfargevelger',
    FOREGROUND_PICKER: 'Forgrunnsfargevelger',
    BACKGROUND_PICKER: 'Bakgrunnsfargevelger',
    FOREGROUND_EYEDROPPER: 'Forgrunnspipette',
    BACKGROUND_EYEDROPPER: 'Bakgrunnspipette',
    CONTRAST_RATIO: 'Kontrastratio',
    PREVIEW: 'Forhånd',
    NORMAL_TEXT: 'Vanlig tekst',
    LARGE_TEXT: 'Stor tekst',
    GRAPHICS_AND_UI: 'Grafikk',
    LANGUAGE: 'Språk',
    GOOD: 'God',
    LOW: 'Lav',
    FIX: 'Fiks',
    SETTINGS: 'Innstillinger',
    THEME: 'Tema',
    POP_OUT: 'Åpne i nytt vindu',
    SWATCH: 'Prøve: %(foreground) på %(background).',
    SWATCH_SAVED_WINDOW: 'Prøven ble lagret i hovedvinduet.',
    LINK_COPIED: 'Lenke kopiert til utklippstavle!',
    SAVED_COLOURS: 'Lagrede farger',
    EXPLANATION: 'Forklaring',
    ABOUT_THIS_WEBSITE: 'Om dette nettstedet',
    SKIP_TO_SETTINGS: 'Hopp til innstillinger',
    PASSES: 'Består',
    FAILS: 'Feiler',
    NO_COMBO_FOUND:
      'Ingen tilgjengelig kombinasjon funnet ved å endre tekstfargen. Prøv å endre bakgrunnsfargen.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) har en god kontrastratio på %(ratio):1 med bakgrunnen %(bg) for vanlig tekst.',
    CONTRAST_NORMAL_LOW:
      '%(fg) har en lav kontrastratio på %(ratio):1 med bakgrunnen %(bg) for vanlig tekst.',
    CONTRAST_LARGE_GOOD:
      '%(fg) har en god kontrastratio på %(ratio):1 med bakgrunnen %(bg) for stor tekst.',
    CONTRAST_LARGE_LOW:
      '%(fg) har en lav kontrastratio på %(ratio):1 med bakgrunnen %(bg) for stor tekst.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) har en god kontrastratio på %(ratio):1 med bakgrunnen %(bg) for grafikk og grensesnitt.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) har en lav kontrastratio på %(ratio):1 med bakgrunnen %(bg) for grafikk og grensesnitt.',
    UNSUPPORTED_COLOUR_SPACE: 'Beklager, dette fargerommet støttes ikke!',
    CLOSE_ALERT: 'Lukk varsel',
    EXPLANATION_BODY: `<ul>
    <li>WCAG står for Web Content Accessibility Guidelines.</li>
    <li>WCAG har tre nivåer: A, AA og AAA, med ulike krav til kontrastforhold.</li>
    <li>Vanlig tekst krever minst 4,5:1 i kontrastforhold.</li>
    <li>Stor tekst krever minst 3:1 i kontrastforhold.</li>
    <li>Stor tekst defineres som 14 punkt (18,67 px) fet eller større, eller 18 punkt (24 px) eller større.</li>
    <li>Grafikk, ikoner og brukergrensesnitt bør ha minst 3:1 i kontrastforhold for både AA og AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Laget av <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
    <h3>Personvern</h3>
    <p>Ingen personopplysninger samles inn via dette nettstedet. Nettstedet bruker nettleserens lagring for å huske nylige fargekombinasjoner. Det brukes personvernvennlige analyser som ikke sporer IP-adresser, fingeravtrykk eller informasjonskapsler.</p>
    <h3>Åpen kildekode</h3>
    <p>Se <a href="https://github.com/adamchaboryk/contrast.report">kildekoden på GitHub.</a></p>`,
    SPONSOR: 'Sponsor',
  },
  nl: {
    CONTRAST_REPORT: 'Contrastrapport',
    REVERSE: 'Omkeren',
    SAVE: 'Opslaan',
    UNSAVE: 'Verwijderen uit opgeslagen',
    SHARE: 'Delen',
    COLOURS: 'Kleuren',
    FOREGROUND: 'Voorgrond',
    BACKGROUND: 'Achtergrond',
    CONTRAST: 'Contrast',
    RESULTS: 'Resultaten',
    OPEN_FG_PICKER: 'Voorgrondkleurkiezer openen',
    OPEN_BG_PICKER: 'Achtergrondkleurkiezer openen',
    FOREGROUND_PICKER: 'Voorgrondkleurkiezer',
    BACKGROUND_PICKER: 'Achtergrondkleurkiezer',
    FOREGROUND_EYEDROPPER: 'Voorgrond pipet',
    BACKGROUND_EYEDROPPER: 'Achtergrond pipet',
    CONTRAST_RATIO: 'Contrastverhouding',
    PREVIEW: 'Voorbeeld',
    NORMAL_TEXT: 'Normale tekst',
    LARGE_TEXT: 'Grote tekst',
    GRAPHICS_AND_UI: 'Grafische',
    GOOD: 'Goed',
    LOW: 'Laag',
    FIX: 'Repareren',
    SETTINGS: 'Instellingen',
    THEME: 'Thema',
    POP_OUT: 'Open in nieuw venster',
    SWATCH: 'Staal: %(foreground) op %(background).',
    SWATCH_SAVED_WINDOW: 'Staal opgeslagen in hoofdvenster.',
    LINK_COPIED: 'Link gekopieerd naar klembord!',
    SAVED_COLOURS: 'Opgeslagen kleuren',
    EXPLANATION: 'Uitleg',
    ABOUT_THIS_WEBSITE: 'Over deze website',
    SKIP_TO_SETTINGS: 'Ga naar instellingen',
    PASSES: 'Voldoet',
    FAILS: 'Faalt',
    NO_COMBO_FOUND:
      'Geen toegankelijke combinatie gevonden door de tekstkleur te wijzigen. Probeer de achtergrondkleur te veranderen.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) heeft een goede contrastverhouding van %(ratio):1 met achtergrond %(bg) voor normale tekst.',
    CONTRAST_NORMAL_LOW:
      '%(fg) heeft een lage contrastverhouding van %(ratio):1 met achtergrond %(bg) voor normale tekst.',
    CONTRAST_LARGE_GOOD:
      '%(fg) heeft een goede contrastverhouding van %(ratio):1 met achtergrond %(bg) voor grote tekst.',
    CONTRAST_LARGE_LOW:
      '%(fg) heeft een lage contrastverhouding van %(ratio):1 met achtergrond %(bg) voor grote tekst.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) heeft een goede contrastverhouding van %(ratio):1 met achtergrond %(bg) voor grafische elementen en interface.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) heeft een lage contrastverhouding van %(ratio):1 met achtergrond %(bg) voor grafische elementen en interface.',
    UNSUPPORTED_COLOUR_SPACE: 'Sorry, deze kleurruimte wordt niet ondersteund!',
    CLOSE_ALERT: 'Sluit melding',
    EXPLANATION_BODY: `<ul>
    <li>WCAG staat voor Web Content Accessibility Guidelines.</li>
    <li>WCAG heeft drie niveaus: A, AA en AAA. Er gelden verschillende contrastverhoudingen voor AA en AAA.</li>
    <li>Normale tekst vereist minimaal 4,5:1 contrastverhouding.</li>
    <li>Grote tekst vereist minimaal 3:1 contrastverhouding.</li>
    <li>Grote tekst is gedefinieerd als 14 pt (18,67 px) vet of groter, of 18 pt (24 px) of groter.</li>
    <li>Grafische elementen, pictogrammen en interfaceonderdelen moeten minimaal 3:1 contrastverhouding hebben voor AA en AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Gemaakt door <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
    <h3>Privacy</h3>
    <p>Er worden geen persoonlijke gegevens verzameld via deze website. De website gebruikt lokale opslag in de browser om recent gebruikte kleurcombinaties te onthouden. Privacygerichte analyses worden gebruikt die geen IP-adressen, vingerafdrukken of cookies volgen.</p>
    <h3>Open source</h3>
    <p>Bekijk de <a href="https://github.com/adamchaboryk/contrast.report">broncode op GitHub.</a></p>`,
    SPONSOR: 'Sponsor',
  },
  ptBR: {
    CONTRAST_REPORT: 'Relatório de Contraste',
    REVERSE: 'Inverter',
    SAVE: 'Salvar',
    UNSAVE: 'Remover dos salvos',
    SHARE: 'Compartilhar',
    COLOURS: 'Cores',
    FOREGROUND: 'Primeiro plano',
    BACKGROUND: 'Fundo',
    CONTRAST: 'Contraste',
    RESULTS: 'Resultados',
    OPEN_FG_PICKER: 'Abrir seletor de cor do primeiro plano',
    OPEN_BG_PICKER: 'Abrir seletor de cor do fundo',
    FOREGROUND_PICKER: 'Seletor de cor do primeiro plano',
    BACKGROUND_PICKER: 'Seletor de cor do fundo',
    FOREGROUND_EYEDROPPER: 'Conta-gotas do primeiro plano',
    BACKGROUND_EYEDROPPER: 'Conta-gotas do fundo',
    CONTRAST_RATIO: 'Taxa de contraste',
    PREVIEW: 'Prévia',
    NORMAL_TEXT: 'Texto normal',
    LARGE_TEXT: 'Texto grande',
    GRAPHICS_AND_UI: 'Gráficos',
    LANGUAGE: 'Idioma',
    GOOD: 'Bom',
    LOW: 'Baixo',
    FIX: 'Corrigir',
    SETTINGS: 'Configurações',
    THEME: 'Tema',
    POP_OUT: 'Abrir em janela separada',
    SWATCH: 'Amostra: %(foreground) sobre %(background).',
    SWATCH_SAVED_WINDOW: 'Amostra salva na janela principal.',
    LINK_COPIED: 'Link copiado para a área de transferência!',
    SAVED_COLOURS: 'Cores salvas',
    EXPLANATION: 'Explicação',
    ABOUT_THIS_WEBSITE: 'Sobre este site',
    SKIP_TO_SETTINGS: 'Ir para configurações',
    PASSES: 'Aprovado',
    FAILS: 'Reprovado',
    NO_COMBO_FOUND:
      'Nenhuma combinação acessível foi encontrada alterando a cor do texto. Tente mudar a cor do fundo.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) tem uma boa taxa de contraste de %(ratio):1 com o fundo %(bg) para texto normal.',
    CONTRAST_NORMAL_LOW:
      '%(fg) tem uma baixa taxa de contraste de %(ratio):1 com o fundo %(bg) para texto normal.',
    CONTRAST_LARGE_GOOD:
      '%(fg) tem uma boa taxa de contraste de %(ratio):1 com o fundo %(bg) para texto grande.',
    CONTRAST_LARGE_LOW:
      '%(fg) tem uma baixa taxa de contraste de %(ratio):1 com o fundo %(bg) para texto grande.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) tem uma boa taxa de contraste de %(ratio):1 com o fundo %(bg) para gráficos e interface.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) tem uma baixa taxa de contraste de %(ratio):1 com o fundo %(bg) para gráficos e interface.',
    UNSUPPORTED_COLOUR_SPACE: 'Desculpe, este espaço de cor não é suportado!',
    CLOSE_ALERT: 'Fechar alerta',
    EXPLANATION_BODY: `<ul>
    <li>WCAG é a sigla para Diretrizes de Acessibilidade para Conteúdo da Web.</li>
    <li>O WCAG tem três níveis: A, AA e AAA. Existem diferentes taxas de contraste exigidas para AA e AAA.</li>
    <li>Texto normal requer uma taxa de contraste de pelo menos 4.5:1.</li>
    <li>Texto grande requer uma taxa de contraste de pelo menos 3:1.</li>
    <li>Texto grande é definido como 14 pontos (18,67 px) em negrito ou maior, ou 18 pontos (24 px) ou maior.</li>
    <li>Todos os gráficos, ícones e elementos de interface devem ter pelo menos 3:1 de contraste para AA e AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Criado por <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
    <h3>Privacidade</h3>
    <p>Nenhum dado pessoal é coletado usando este site. Ele usa o armazenamento local do navegador para lembrar combinações recentes de cores e emprega análises focadas em privacidade que não rastreiam IPs, impressões digitais ou cookies.</p>
    <h3>Código aberto</h3>
    <p>Veja o <a href="https://github.com/adamchaboryk/contrast.report">código-fonte no GitHub.</a></p>`,
    SPONSOR: 'Patrocinador',
  },
  ptPT: {
    CONTRAST_REPORT: 'Relatório de Contraste',
    REVERSE: 'Inverter',
    SAVE: 'Guardar',
    UNSAVE: 'Remover dos guardados',
    SHARE: 'Partilhar',
    COLOURS: 'Cores',
    FOREGROUND: 'Primeiro plano',
    BACKGROUND: 'Fundo',
    CONTRAST: 'Contraste',
    RESULTS: 'Resultados',
    OPEN_FG_PICKER: 'Abrir seletor de cor do primeiro plano',
    OPEN_BG_PICKER: 'Abrir seletor de cor do fundo',
    FOREGROUND_PICKER: 'Seletor de cor do primeiro plano',
    BACKGROUND_PICKER: 'Seletor de cor do fundo',
    FOREGROUND_EYEDROPPER: 'Conta-gotas do primeiro plano',
    BACKGROUND_EYEDROPPER: 'Conta-gotas do fundo',
    CONTRAST_RATIO: 'Rácio de contraste',
    PREVIEW: 'Prévia',
    NORMAL_TEXT: 'Texto normal',
    LARGE_TEXT: 'Texto grande',
    GRAPHICS_AND_UI: 'Gráficos',
    LANGUAGE: 'Idioma',
    GOOD: 'Bom',
    LOW: 'Baixo',
    FIX: 'Corrigir',
    SETTINGS: 'Definições',
    THEME: 'Tema',
    POP_OUT: 'Abrir em janela separada',
    SWATCH: 'Amostra: %(foreground) sobre %(background).',
    SWATCH_SAVED_WINDOW: 'Amostra guardada na janela principal.',
    LINK_COPIED: 'Ligação copiada para a área de transferência!',
    SAVED_COLOURS: 'Cores guardadas',
    EXPLANATION: 'Explicação',
    ABOUT_THIS_WEBSITE: 'Sobre este site',
    SKIP_TO_SETTINGS: 'Saltar para definições',
    PASSES: 'Aprovado',
    FAILS: 'Reprovado',
    NO_COMBO_FOUND:
      'Nenhuma combinação acessível foi encontrada alterando a cor do texto. Tente mudar a cor do fundo.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) tem um bom rácio de contraste de %(ratio):1 com o fundo %(bg) para texto normal.',
    CONTRAST_NORMAL_LOW:
      '%(fg) tem um rácio de contraste baixo de %(ratio):1 com o fundo %(bg) para texto normal.',
    CONTRAST_LARGE_GOOD:
      '%(fg) tem um bom rácio de contraste de %(ratio):1 com o fundo %(bg) para texto grande.',
    CONTRAST_LARGE_LOW:
      '%(fg) tem um rácio de contraste baixo de %(ratio):1 com o fundo %(bg) para texto grande.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) tem um bom rácio de contraste de %(ratio):1 com o fundo %(bg) para gráficos e interface.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) tem um rácio de contraste baixo de %(ratio):1 com o fundo %(bg) para gráficos e interface.',
    UNSUPPORTED_COLOUR_SPACE: 'Desculpe, este espaço de cor não é suportado!',
    CLOSE_ALERT: 'Fechar alerta',
    EXPLANATION_BODY: `<ul>
    <li>WCAG é a sigla para Diretrizes de Acessibilidade para Conteúdo da Web.</li>
    <li>O WCAG tem três níveis: A, AA e AAA. Existem rácios de contraste diferentes exigidos para AA e AAA.</li>
    <li>O texto normal requer um rácio de contraste de pelo menos 4.5:1.</li>
    <li>O texto grande requer um rácio de contraste de pelo menos 3:1.</li>
    <li>Texto grande é definido como 14 pontos (18,67 px) em negrito ou maior, ou 18 pontos (24 px) ou maior.</li>
    <li>Todos os gráficos, ícones e elementos de interface devem ter pelo menos 3:1 de contraste para AA e AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Criado por <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
    <h3>Privacidade</h3>
    <p>Nenhum dado pessoal é recolhido através deste site. Este site usa o armazenamento local do navegador para memorizar combinações recentes de cores e utiliza análises focadas na privacidade que não rastreiam endereços IP, impressões digitais ou cookies.</p>
    <h3>Código aberto</h3>
    <p>Veja o <a href="https://github.com/adamchaboryk/contrast.report">código-fonte no GitHub.</a></p>`,
    SPONSOR: 'Patrocinador',
  },
  ro: {
    CONTRAST_REPORT: 'Raport de contrast',
    REVERSE: 'Inversează',
    SAVE: 'Salvează',
    UNSAVE: 'Anulează salvarea',
    SHARE: 'Distribuie',
    COLOURS: 'Culori',
    FOREGROUND: 'Prim-plan',
    BACKGROUND: 'Fundal',
    CONTRAST: 'Contrast',
    RESULTS: 'Rezultate',
    OPEN_FG_PICKER: 'Deschide selectorul de culoare de prim-plan',
    OPEN_BG_PICKER: 'Deschide selectorul de culoare de fundal',
    FOREGROUND_PICKER: 'Selector culoare prim-plan',
    BACKGROUND_PICKER: 'Selector culoare fundal',
    FOREGROUND_EYEDROPPER: 'Pipetă prim-plan',
    BACKGROUND_EYEDROPPER: 'Pipetă fundal',
    CONTRAST_RATIO: 'Raport de contrast',
    PREVIEW: 'Previz',
    NORMAL_TEXT: 'Text normal',
    LARGE_TEXT: 'Text mare',
    GRAPHICS_AND_UI: 'Grafică',
    GOOD: 'Bun',
    LOW: 'Scăzut',
    FIX: 'Corectează',
    SETTINGS: 'Setări',
    THEME: 'Temă',
    POP_OUT: 'Deschide într-o fereastră nouă',
    SWATCH: 'Mostră: %(foreground) pe %(background).',
    SWATCH_SAVED_WINDOW: 'Mostra a fost salvată în fereastra principală.',
    LINK_COPIED: 'Link copiat în clipboard!',
    SAVED_COLOURS: 'Culori salvate',
    LANGUAGE: 'Limbă',
    EXPLANATION: 'Explicație',
    ABOUT_THIS_WEBSITE: 'Despre acest site web',
    SKIP_TO_SETTINGS: 'Sari la setări',
    PASSES: 'Trebuie',
    FAILS: 'Eșuează',
    NO_COMBO_FOUND:
      'Nu s-a găsit nicio combinație accesibilă modificând culoarea textului. Încearcă să schimbi culoarea fundalului.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) are un raport de contrast bun de %(ratio):1 cu fundalul %(bg) pentru text normal.',
    CONTRAST_NORMAL_LOW:
      '%(fg) are un raport de contrast scăzut de %(ratio):1 cu fundalul %(bg) pentru text normal.',
    CONTRAST_LARGE_GOOD:
      '%(fg) are un raport de contrast bun de %(ratio):1 cu fundalul %(bg) pentru text mare.',
    CONTRAST_LARGE_LOW:
      '%(fg) are un raport de contrast scăzut de %(ratio):1 cu fundalul %(bg) pentru text mare.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) are un raport de contrast bun de %(ratio):1 cu fundalul %(bg) pentru elemente grafice și interfață.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) are un raport de contrast scăzut de %(ratio):1 cu fundalul %(bg) pentru elemente grafice și interfață.',
    UNSUPPORTED_COLOUR_SPACE:
      'Ne pare rău, acest spațiu de culoare nu este acceptat!',
    CLOSE_ALERT: 'Închide alerta',
    EXPLANATION_BODY: `<ul>
    <li>WCAG este o prescurtare pentru Ghidurile de Accesibilitate a Conținutului Web.</li>
    <li>WCAG are trei niveluri: A, AA și AAA. Există rapoarte de contrast diferite cerute pentru AA și AAA.</li>
    <li>Textul normal (sau textul de corp) necesită un raport de contrast de cel puțin 4.5:1.</li>
    <li>Textul mare (sau textul de titlu) necesită un raport de contrast de cel puțin 3:1.</li>
    <li>Textul mare este definit ca având 14 puncte (18.67 px) îngroșat sau mai mult, sau 18 puncte (24 px) sau mai mult.</li>
    <li>Toate graficele, pictogramele sau elementele de interfață ar trebui să aibă un raport de contrast de cel puțin 3:1 atât pentru AA, cât și pentru AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Creat de <a href="https://chaboryk.xyz">Adam Chaboryk.</a></p>
    <h3>Confidențialitate</h3>
    <p>Nu sunt colectate niciodată date personale folosind acest site web. Site-ul folosește stocarea locală a browserului pentru a reține combinațiile recente de culori. Site-ul folosește analitice orientate spre confidențialitate, care nu urmăresc adrese IP, amprente digitale sau cookie-uri.</p>
    <h3>Open source</h3>
    <p>Vezi <a href="https://github.com/adamchaboryk/contrast.report">codul sursă pe GitHub.</a></p>`,
    SPONSOR: 'Sponsor',
  },
  sl: {
    CONTRAST_REPORT: 'Poročilo o kontrastu',
    REVERSE: 'Obrni',
    SAVE: 'Shrani',
    UNSAVE: 'Izbriši',
    SHARE: 'Deli',
    COLOURS: 'Barve',
    FOREGROUND: 'Ospredje',
    BACKGROUND: 'Ozadje',
    CONTRAST: 'Kontrast',
    RESULTS: 'Rezultati',
    OPEN_FG_PICKER: 'Odpri izbirnik barve ospredja',
    OPEN_BG_PICKER: 'Odpri izbirnik barve ozadja',
    FOREGROUND_PICKER: 'Izbirnik barve ospredja',
    BACKGROUND_PICKER: 'Izbirnik barve ozadja',
    FOREGROUND_EYEDROPPER: 'Kapalka ospredja',
    BACKGROUND_EYEDROPPER: 'Kapalka ozadja',
    CONTRAST_RATIO: 'Razmerje kontrasta',
    PREVIEW: 'Predogled',
    NORMAL_TEXT: 'Običajno',
    LARGE_TEXT: 'Veliko',
    GRAPHICS_AND_UI: 'Grafika',
    LANGUAGE: 'Jezik',
    GOOD: 'Dobro',
    LOW: 'Nizko',
    FIX: 'Popravi',
    SETTINGS: 'Nastavitve',
    THEME: 'Tema',
    POP_OUT: 'Odpri ločeno',
    SWATCH: 'Vzorec: %(foreground) na %(background).',
    SWATCH_SAVED_WINDOW: 'Vzorec je bil shranjen v glavno okno.',
    LINK_COPIED: 'Povezava kopirana v odložišče!',
    SAVED_COLOURS: 'Shranjene barve',
    EXPLANATION: 'Pojasnilo',
    ABOUT_THIS_WEBSITE: 'O tej spletni strani',
    SKIP_TO_SETTINGS: 'Preskoči na nastavitve',
    PASSES: 'Ustreza',
    FAILS: 'Ne ustreza',
    NO_COMBO_FOUND:
      'Z zamenjavo barve besedila ni mogoče najti dostopne kombinacije. Poskusite spremeniti barvo ozadja.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) ima dobro razmerje kontrasta %(ratio):1 z ozadjem %(bg) za običajno besedilo.',
    CONTRAST_NORMAL_LOW:
      '%(fg) ima nizko razmerje kontrasta %(ratio):1 z ozadjem %(bg) za običajno besedilo.',
    CONTRAST_LARGE_GOOD:
      '%(fg) ima dobro razmerje kontrasta %(ratio):1 z ozadjem %(bg) za veliko besedilo.',
    CONTRAST_LARGE_LOW:
      '%(fg) ima nizko razmerje kontrasta %(ratio):1 z ozadjem %(bg) za veliko besedilo.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) ima dobro razmerje kontrasta %(ratio):1 z ozadjem %(bg) za grafiko in elemente vmesnika.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) ima nizko razmerje kontrasta %(ratio):1 z ozadjem %(bg) za grafiko in elemente vmesnika.',
    UNSUPPORTED_COLOUR_SPACE: 'Žal ta barvni prostor ni podprt!',
    CLOSE_ALERT: 'Zapri opozorilo',
    EXPLANATION_BODY: `<ul>
    <li>WCAG je kratica za Web Content Accessibility Guidelines (Smernice za dostopnost spletnih vsebin).</li>
    <li>WCAG ima tri ravni: A, AA in AAA. Zahteve za kontrast se razlikujejo med ravnema AA in AAA.</li>
    <li>Običajno besedilo mora imeti kontrastno razmerje vsaj 4.5:1.</li>
    <li>Veliko besedilo mora imeti kontrastno razmerje vsaj 3:1.</li>
    <li>Veliko besedilo je definirano kot 14 točk (18,67 px) krepko ali večje, ali 18 točk (24 px) ali večje.</li>
    <li>Vsa grafika, ikone in elementi vmesnika morajo imeti najmanj 3:1 kontrastno razmerje za ravni AA in AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Ustvaril <a href="https://chaboryk.xyz">Adam Chaboryk</a>.</p>
  <h3>Zasebnost</h3>
  <p>Ta spletna stran nikoli ne zbira osebnih podatkov. Uporablja lokalno shrambo brskalnika za shranjevanje nedavno uporabljenih barvnih kombinacij. Uporablja analitiko, usmerjeno v zasebnost, brez sledenja IP-naslovov, prstnih odtisov ali piškotkov.</p>
  <h3>Odprta koda</h3>
  <p>Oglejte si <a href="https://github.com/adamchaboryk/contrast.report">izvorno kodo na GitHubu</a>.</p>`,
    SPONSOR: 'Sponzor',
  },
  sv: {
    CONTRAST_REPORT: 'Kontrastrapport',
    REVERSE: 'Vänd',
    SAVE: 'Spara',
    UNSAVE: 'Ta bort',
    SHARE: 'Dela',
    COLOURS: 'Färger',
    FOREGROUND: 'Förgrund',
    BACKGROUND: 'Bakgrund',
    CONTRAST: 'Kontrast',
    RESULTS: 'Resultat',
    OPEN_FG_PICKER: 'Öppna färgväljare för förgrund',
    OPEN_BG_PICKER: 'Öppna färgväljare för bakgrund',
    FOREGROUND_PICKER: 'Förgrundsfärgväljare',
    BACKGROUND_PICKER: 'Bakgrundsfärgväljare',
    FOREGROUND_EYEDROPPER: 'Förgrundspipett',
    BACKGROUND_EYEDROPPER: 'Bakgrundspipett',
    CONTRAST_RATIO: 'Kontrastförhållande',
    PREVIEW: 'Förhands',
    NORMAL_TEXT: 'Normal text',
    LARGE_TEXT: 'Stor text',
    GRAPHICS_AND_UI: 'Grafik',
    LANGUAGE: 'Språk',
    GOOD: 'Bra',
    LOW: 'Låg',
    FIX: 'Åtgärda',
    SETTINGS: 'Inställningar',
    THEME: 'Tema',
    POP_OUT: 'Öppna separat',
    SWATCH: 'Prov: %(foreground) på %(background).',
    SWATCH_SAVED_WINDOW: 'Provet sparades i huvudfönstret.',
    LINK_COPIED: 'Länk kopierad till urklipp!',
    SAVED_COLOURS: 'Sparade färger',
    EXPLANATION: 'Förklaring',
    ABOUT_THIS_WEBSITE: 'Om denna webbplats',
    SKIP_TO_SETTINGS: 'Hoppa till inställningar',
    PASSES: 'Godkänd',
    FAILS: 'Underkänd',
    NO_COMBO_FOUND:
      'Ingen tillgänglig kombination hittades genom att ändra textfärgen. Prova att ändra bakgrundsfärgen.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) har ett bra kontrastförhållande på %(ratio):1 mot bakgrunden %(bg) för normal text.',
    CONTRAST_NORMAL_LOW:
      '%(fg) har ett lågt kontrastförhållande på %(ratio):1 mot bakgrunden %(bg) för normal text.',
    CONTRAST_LARGE_GOOD:
      '%(fg) har ett bra kontrastförhållande på %(ratio):1 mot bakgrunden %(bg) för stor text.',
    CONTRAST_LARGE_LOW:
      '%(fg) har ett lågt kontrastförhållande på %(ratio):1 mot bakgrunden %(bg) för stor text.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) har ett bra kontrastförhållande på %(ratio):1 mot bakgrunden %(bg) för grafik och UI-element.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) har ett lågt kontrastförhållande på %(ratio):1 mot bakgrunden %(bg) för grafik och UI-element.',
    UNSUPPORTED_COLOUR_SPACE: 'Tyvärr, detta färgutrymme stöds inte!',
    CLOSE_ALERT: 'Stäng varning',
    EXPLANATION_BODY: `<ul>
    <li>WCAG är en förkortning för Web Content Accessibility Guidelines.</li>
    <li>WCAG har tre nivåer: A, AA och AAA. Kraven för kontrastförhållande skiljer sig mellan AA och AAA.</li>
    <li>Normal text kräver minst 4,5:1 i kontrastförhållande.</li>
    <li>Stor text kräver minst 3:1 i kontrastförhållande.</li>
    <li>Stor text definieras som 14 punkter (18,67 px) fetstil eller större, eller 18 punkter (24 px) eller större.</li>
    <li>Alla grafiska element, ikoner och gränssnittskomponenter bör ha minst 3:1 i kontrastförhållande för både AA och AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Skapad av <a href="https://chaboryk.xyz">Adam Chaboryk</a>.</p>
  <h3>Integritet</h3>
  <p>Denna webbplats samlar aldrig in personlig data. Den använder webbläsarens lokala lagring för att komma ihåg nyligen använda färgkombinationer. Den använder integritetsvänlig analys som inte spårar IP-adresser, fingeravtryck eller cookies.</p>
  <h3>Öppen källkod</h3>
  <p>Se källkoden på <a href="https://github.com/adamchaboryk/contrast.report">GitHub</a>.</p>`,
    SPONSOR: 'Sponsra',
  },
  uk: {
    CONTRAST_REPORT: 'Звіт про контрастність',
    REVERSE: 'Змінити місцями',
    SAVE: 'Зберегти',
    UNSAVE: 'Видалити',
    SHARE: 'Поділитися',
    COLOURS: 'Кольори',
    FOREGROUND: 'Передній план',
    BACKGROUND: 'Фон',
    CONTRAST: 'Контраст',
    RESULTS: 'Результати',
    OPEN_FG_PICKER: 'Відкрити вибір кольору переднього плану',
    OPEN_BG_PICKER: 'Відкрити вибір кольору фону',
    FOREGROUND_PICKER: 'Вибір кольору переднього плану',
    BACKGROUND_PICKER: 'Вибір кольору фону',
    FOREGROUND_EYEDROPPER: 'Піпетка переднього плану',
    BACKGROUND_EYEDROPPER: 'Піпетка фону',
    CONTRAST_RATIO: 'Коефіцієнт контрастності',
    PREVIEW: 'Попередній',
    NORMAL_TEXT: 'Звичайний',
    LARGE_TEXT: 'Великий',
    GRAPHICS_AND_UI: 'Графіка',
    GOOD: 'Добре',
    LOW: 'Низький',
    FIX: 'Виправити',
    SETTINGS: 'Налаштування',
    THEME: 'Тема',
    POP_OUT: 'Відкрити окремо',
    SWATCH: 'Зразок: %(foreground) на %(background).',
    SWATCH_SAVED_WINDOW: 'Зразок збережено в головному вікні.',
    LINK_COPIED: 'Посилання скопійовано до буфера обміну!',
    SAVED_COLOURS: 'Збережені кольори',
    EXPLANATION: 'Пояснення',
    ABOUT_THIS_WEBSITE: 'Про цей вебсайт',
    SKIP_TO_SETTINGS: 'Перейти до налаштувань',
    PASSES: 'Пройдено',
    FAILS: 'Не пройдено',
    LANGUAGE: 'Мова',
    NO_COMBO_FOUND:
      'Не вдалося знайти доступну комбінацію, змінюючи колір тексту. Спробуйте змінити колір фону.',
    CONTRAST_NORMAL_GOOD:
      '%(fg) має гарний коефіцієнт контрастності %(ratio):1 із фоном %(bg) для звичайного тексту.',
    CONTRAST_NORMAL_LOW:
      '%(fg) має низький коефіцієнт контрастності %(ratio):1 із фоном %(bg) для звичайного тексту.',
    CONTRAST_LARGE_GOOD:
      '%(fg) має гарний коефіцієнт контрастності %(ratio):1 із фоном %(bg) для великого тексту.',
    CONTRAST_LARGE_LOW:
      '%(fg) має низький коефіцієнт контрастності %(ratio):1 із фоном %(bg) для великого тексту.',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) має гарний коефіцієнт контрастності %(ratio):1 із фоном %(bg) для графіки та елементів інтерфейсу.',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) має низький коефіцієнт контрастності %(ratio):1 із фоном %(bg) для графіки та елементів інтерфейсу.',
    UNSUPPORTED_COLOUR_SPACE: 'На жаль, цей колірний простір не підтримується!',
    CLOSE_ALERT: 'Закрити сповіщення',
    EXPLANATION_BODY: `<ul>
    <li>WCAG — це абревіатура від Web Content Accessibility Guidelines (Веб-інструкції з доступності контенту).</li>
    <li>WCAG має три рівні: A, AA і AAA. Рівні AA та AAA мають різні вимоги до контрастності.</li>
    <li>Звичайний текст (основний) повинен мати контрастність не менше 4.5:1.</li>
    <li>Великий текст (заголовки) повинен мати контрастність не менше 3:1.</li>
    <li>Великим текстом вважається шрифт 14 пунктів (18.67 пікселів) напівжирний або більше, або 18 пунктів (24 пікселі) чи більше.</li>
    <li>Уся графіка, іконки та елементи інтерфейсу повинні мати контрастність щонайменше 3:1 для рівнів AA і AAA.</li>
  </ul>`,
    ABOUT_BODY: `<p>Створено <a href="https://chaboryk.xyz">Adam Chaboryk</a>.</p>
  <h3>Конфіденційність</h3>
  <p>Цей вебсайт ніколи не збирає особисті дані. Він використовує локальне сховище браузера для запам’ятовування нещодавно використаних комбінацій кольорів. Використовується аналітика, орієнтована на приватність — без відстеження IP-адрес, відбитків чи cookies.</p>
  <h3>Відкритий код</h3>
  <p>Перегляньте <a href="https://github.com/adamchaboryk/contrast.report">вихідний код на GitHub</a>.</p>`,
    SPONSOR: 'Спонсор',
  },
  zh: {
    CONTRAST_REPORT: '对比度报告',
    REVERSE: '反转',
    SAVE: '保存',
    UNSAVE: '取消保存',
    SHARE: '分享',
    COLOURS: '颜色',
    FOREGROUND: '前景',
    BACKGROUND: '背景',
    CONTRAST: '对比度',
    RESULTS: '结果',
    OPEN_FG_PICKER: '打开前景颜色选择器',
    OPEN_BG_PICKER: '打开背景颜色选择器',
    FOREGROUND_PICKER: '前景颜色选择器',
    BACKGROUND_PICKER: '背景颜色选择器',
    FOREGROUND_EYEDROPPER: '前景吸管工具',
    BACKGROUND_EYEDROPPER: '背景吸管工具',
    CONTRAST_RATIO: '对比度比率',
    PREVIEW: '预览',
    NORMAL_TEXT: '正常文本',
    LARGE_TEXT: '大文本',
    GRAPHICS_AND_UI: '图形和界面',
    LANGUAGE: '语言',
    GOOD: '良好',
    LOW: '较低',
    FIX: '修复',
    SETTINGS: '设置',
    THEME: '主题',
    POP_OUT: '弹出',
    SWATCH: '样本：%(foreground) 在 %(background) 上。',
    SWATCH_SAVED_WINDOW: '样本已保存到主窗口。',
    LINK_COPIED: '链接已复制到剪贴板！',
    SAVED_COLOURS: '已保存的颜色',
    EXPLANATION: '说明',
    ABOUT_THIS_WEBSITE: '关于本网站',
    SKIP_TO_SETTINGS: '跳到设置',
    PASSES: '通过',
    FAILS: '未通过',
    NO_COMBO_FOUND:
      '无法通过更改文字颜色找到可访问的组合。请尝试更改背景颜色。',
    CONTRAST_NORMAL_GOOD:
      '%(fg) 与背景 %(bg) 的对比度比率为 %(ratio):1，适用于正常文本。',
    CONTRAST_NORMAL_LOW:
      '%(fg) 与背景 %(bg) 的对比度比率为 %(ratio):1，低于正常文本要求。',
    CONTRAST_LARGE_GOOD:
      '%(fg) 与背景 %(bg) 的对比度比率为 %(ratio):1，适用于大文本。',
    CONTRAST_LARGE_LOW:
      '%(fg) 与背景 %(bg) 的对比度比率为 %(ratio):1，低于大文本要求。',
    CONTRAST_GRAPHICS_GOOD:
      '%(fg) 与背景 %(bg) 的对比度比率为 %(ratio):1，适用于图形和界面元素。',
    CONTRAST_GRAPHICS_LOW:
      '%(fg) 与背景 %(bg) 的对比度比率为 %(ratio):1，低于图形和界面元素要求。',
    UNSUPPORTED_COLOUR_SPACE: '抱歉，不支持此颜色空间！',
    CLOSE_ALERT: '关闭警告',
    EXPLANATION_BODY: `<ul>
    <li>WCAG 是“网页内容无障碍指南”的缩写。</li>
    <li>WCAG 有三个级别：A、AA 和 AAA。AA 和 AAA 有不同的对比度要求。</li>
    <li>普通文本（正文）要求的最低对比度比率为 4.5:1。</li>
    <li>大文本（标题）要求的最低对比度比率为 3:1。</li>
    <li>大文本定义为 14 磅（18.67 像素）加粗或更大，或 18 磅（24 像素）或更大。</li>
    <li>所有图形、图标或界面元素的对比度比率应至少为 3:1，以满足 AA 和 AAA 要求。</li>
  </ul>`,
    ABOUT_BODY: `<p>由 <a href="https://chaboryk.xyz">Adam Chaboryk</a> 制作。</p>
  <h3>隐私</h3>
  <p>本网站从不收集任何个人数据。网站使用浏览器的本地存储来保存最近使用的颜色组合。使用注重隐私的分析工具，不跟踪 IP 地址、指纹或 cookies。</p>
  <h3>开源</h3>
  <p>在 <a href="https://github.com/adamchaboryk/contrast.report">GitHub</a> 上查看源代码。</p>`,
    SPONSOR: '赞助',
  },
};

/* Language object */
const Lang = {
  locale: 'en',
  langStrings: messages.en,

  addI18n(locale = 'en') {
    this.setLocale(locale);
  },

  translate(key) {
    return this.langStrings[key] || key;
  },

  _(key) {
    return this.translate(key);
  },

  sprintf(key, ...args) {
    let text = this.translate(key);
    args.forEach((arg) => {
      text = text.replace(/%\([a-zA-z]+\)/, arg);
    });
    return text;
  },

  setLocale(locale = 'en') {
    this.locale = locale;
    this.langStrings = messages[locale] || messages.en;
  },
};
export default Lang;
