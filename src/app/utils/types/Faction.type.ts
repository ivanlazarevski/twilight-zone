import { Fleet } from './Fleet.type';
import { Technology } from './Technology.type';

export type Faction = {
  name: string;
  startingTechnologies: Technology[];
  startingFleet: Fleet[];
};
