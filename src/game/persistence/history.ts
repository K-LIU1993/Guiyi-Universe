import type { FormingCard, SaveDocument } from "../rules/contract";

export function readHistoricalFormingCards(saves: readonly SaveDocument[]): FormingCard[] {
  return saves.flatMap((save) => save.formingCard ? [JSON.parse(JSON.stringify(save.formingCard)) as FormingCard] : []);
}
