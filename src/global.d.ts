export {}

import * as DeckTypings from "@danmarshall/deckgl-typings";
declare module "deck.gl" {
  export namespace DeckTypings {}
}

declare global {
  const __global: {
    env: {
      MAPBOXKEY: string;
      URL: string;
    }
  };
  const deck: DeckTypings;
}
