interface ILocalizedTexts {
  [index: string]: {
    [index: string]: string
  }
}

export const localizedTexts: ILocalizedTexts = {
  de: {
    news: `Das erste Album von Chroma wurde im August aufgenommen und wird gerade fertiggestellt, seit also bereit für mehr Infos und Release Datum!`,
    first: `Schon bei ihrem ersten Zusammentreffen spürten Sebastian Voltz und Gilles Grethen eine starke musikalische Anziehungskraft. Klavier und Gitarre schienen sich komplementär zu ergänzen, mühelos konnten ihre Klangfarben gemischt werden.`,
    second: `Klavier und Gitarre sind seltene Duopartner - Gilles Grethen und Sebastian Voltz ziehen daraus ihren Vorteil. Im Zusammenspiel malen sie farbenfroh, verknüpfen ihre Rhythmen zu einem dichten doch immer auch durchsichtigen Gewebe und spielen gekonnt mit der Tatsache, dass beide Instrumente eben die gleichen Fähigkeiten besitzen.`,
    third: `Die Kompositionen der beiden Künstler bewegen sich zwischen ruhigeren, ausgedehnten Passagen und intensiveren, dichten Momenten. In ihrem modernem Jazz steht jedoch immer wieder die Improvisation im Vordergrund, durch welche die Virtuosität der beiden Musiker zu Tage tritt. Hier zeigt sich dann die lange Erfahrung der beiden Musiker im Bereich der klassischen Musik.`,
    fourth: `Kammermusikalisches Zusammenspiel, lebendig, frei und intuitiv.`
  },
  en: {
    news: `The first Chroma album has been recorded in August and is being mixed right now, so stay tuned for release date and more info!`,
    first: `From their first meeting, Sebastian Voltz and Gilles Grethen felt a strong musical attraction. Piano and guitar seemed to complement each other, effortlessly blending their timbres.`,
    second: `Piano and guitar are rare duo partners - Gilles Grethen and Sebastian Voltz take advantage of this. In their interplay they paint colorfully, weave their rhythms into a dense yet always transparent fabric and skillfully play with the fact that both instruments have the same abilities.`,
    third: `The compositions of the two artists move between quieter, extended passages and more intense, dense moments. In their modern jazz, however, improvisation is always in the foreground, through which the virtuosity of the two musicians comes to light. This is where the long experience of the two musicians in the field of classical music becomes apparent.`,
    fourth: `Chamber music interplay, lively, free and intuitive.`
  }
}
