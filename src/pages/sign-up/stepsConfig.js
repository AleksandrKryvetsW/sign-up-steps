import {StepNames} from './consts';
import {GeneralInfo, PersonalData, Final} from './steps';

export const stepsConfig = [
  {
    name: StepNames.generalInfo,
    content: GeneralInfo,
  },
  {
    name: StepNames.personalData,
    content: PersonalData,
  },
  {
    name: StepNames.final,
    content: Final,
  },
];
