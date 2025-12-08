
export enum SubjectId {
  SCRATCH = 'scratch',
  ROVER = 'rover',
  RIO = 'rio',
  MAKER_EMPIRE = 'maker_empire',
  TINKERCAD = 'tinkercad',
  TINK_CREATIVE = 'tink_creative'
}

export interface UsageGuideStep {
  title: string;
  description: string;
}

export interface ReferenceProblem {
  title: string;
  problemStatement: string;
  referenceLecture: string; // Theory or quick guide
}

export interface Subject {
  id: SubjectId;
  title: string;
  description: string;
  // Detailed Course Info
  introduction: string;
  software: string;
  softwareUrl?: string; // Optional URL for the software
  videoTutorials?: string[]; // New field for Video Tutorials (YouTube Embed URLs)
  usageGuide: UsageGuideStep[]; // Steps without images
  objectives: string[];
  outcomes: string[];
  referenceProblems: ReferenceProblem[]; // New field for sample problems
  
  icon: string; // Emoji or SVG path
  imageUrl: string;
  gradient: string;
}
