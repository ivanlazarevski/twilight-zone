import { Faction } from './Faction.type';

export type Player = {
  playerName: string;
  turnNumber: number;
  activePlayer: boolean;
  isSpeaker: boolean;
  faction: Faction;
};
