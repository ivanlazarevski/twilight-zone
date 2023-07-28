export type Unit = {
  unitName: string;
  unitMovement: number;
  unitPower: number;
  diceNumber: number;
  unitCapacity: number;
  cost: number;
  canSustain: boolean;
  hasBombardment: boolean; // TODO: Might be unnecessary
  bombardmentValue?: number;
  hasAntiFighter: boolean; // TODO: Might be unnecessary
  antiFighterValue?: number;
  hasPlanetaryShield: boolean;
  spaceCannonValue?: number;
  isFlagship: boolean; // TODO: Might be unnecessary
  flagshipAbility?: string;
};
